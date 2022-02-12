import { CombatReport } from '@/shared/models/v1/combat-reports/CombatReport';
import { MessageType } from '@/shared/messages/MessageType';
import { AllCombatReportsMessage, NewCombatReportMessage, RequestCombatReportsMessage } from '@/shared/messages/tracking/combat-reports';
import { Message } from '@/shared/messages/Message';
import { GlobalOgameMetaData } from './GlobalOgameMetaData';
import { Component, Vue } from 'vue-property-decorator';
import { startOfDay } from 'date-fns';
import { broadcastMessage } from '@/shared/communication/broadcastMessage';

@Component
class CombatReportDataModuleClass extends Vue {
    public reports: CombatReport[] = [];
    public reportsPerDay: Record<number, CombatReport[]> = {};
    public firstDate: number | null = null;

    private async created() {
        this.initCommunication();

        await this.requestData();
    }

    private initCommunication() {
        console.log('connecting to background service');

        chrome.runtime.onMessage.addListener(message => this.onMessage(message));
    }

    private async requestData() {
        const message: RequestCombatReportsMessage = {
            type: MessageType.RequestCombatReports,
            ogameMeta: GlobalOgameMetaData,
        };
        await broadcastMessage(message);
    }

    private onMessage(msg: Message) {
        const { type } = msg;

        switch (type) {
            case MessageType.NewCombatReport: {
                const { data } = msg as NewCombatReportMessage;
                this.reports = this.reports.concat(data);

                const day = startOfDay(data.date).getTime();
                const inDay = this.reportsPerDay[day] ?? [];
                inDay.push(data);
                this.reportsPerDay[day] = inDay;
                break;
            }

            case MessageType.AllCombatReports: {
                const { data } = msg as AllCombatReportsMessage;
                this.reports = data;
                this.reportsPerDay = data.reduce(
                    (perDay, report) => {
                        const day = startOfDay(report.date).getTime();
                        perDay[day] ??= [];
                        perDay[day].push(report);
                        return perDay;
                    },
                    {} as Record<number, CombatReport[]>
                );

                this.firstDate = data.reduce(
                    (date, report) => Math.min(date ?? report.date, report.date),
                    null as null | number
                );
                break;
            }
        }
    }

    public get firstDay(): number {
        return startOfDay(this.firstDate ?? Date.now()).getTime();
    }
}

export const CombatReportDataModule = new CombatReportDataModuleClass();