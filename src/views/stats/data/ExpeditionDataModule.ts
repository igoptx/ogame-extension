import { ExpeditionEvent } from '@/shared/models/v1/expeditions/ExpeditionEvents';
import { MessageType } from '@/shared/messages/MessageType';
import { AllExpeditionsMessage, NewExpeditionMessage, RequestExpeditionEventsMessage } from '@/shared/messages/tracking/expeditions';
import { SubscriptionMessage } from '@/shared/messages/subscriptions/types';
import { Message } from '@/shared/messages/Message';
import { GlobalOgameMetaData } from './GlobalOgameMetaData';
import { Component, Vue } from 'vue-property-decorator';
import { startOfDay } from 'date-fns';

@Component
class ExpeditionDataModuleClass extends Vue {
    private _port: chrome.runtime.Port = null!;
    public expeditions: ExpeditionEvent[] = [];
    public expeditionsPerDay: Record<number, ExpeditionEvent[]> = {};
    public firstDate: number | null = null;

    private created() {
        this._port = chrome.runtime.connect();
        this._port.onDisconnect.addListener(() => this._port = chrome.runtime.connect());

        this._port.onMessage.addListener(message => this.onMessage(message));

        const subscribeMessage: SubscriptionMessage = {
            type: MessageType.Subscribe,
            ogameMeta: GlobalOgameMetaData,
            data: MessageType.NewExpedition,
        };
        this._port.postMessage(subscribeMessage);

        this.requestData();
    }

    private requestData() {
        const message: RequestExpeditionEventsMessage = {
            type: MessageType.RequestExpeditionEvents,
            ogameMeta: GlobalOgameMetaData,
            data: undefined,
        };
        this._port.postMessage(message);
    }

    private onMessage(msg: Message) {
        const { type } = msg;

        switch (type) {
            case MessageType.NewExpedition: {
                const { data } = msg as NewExpeditionMessage;
                this.expeditions = this.expeditions.concat(data);

                const day = startOfDay(data.date).getTime();
                const inDay = this.expeditionsPerDay[day] ?? [];
                inDay.push(data);
                this.expeditionsPerDay[day] = inDay;
                break;
            }

            case MessageType.AllExpeditions: {
                const { data } = msg as AllExpeditionsMessage;
                this.expeditions = data;
                this.expeditionsPerDay = data.reduce(
                    (perDay, expo) => {
                        const day = startOfDay(expo.date).getTime();
                        perDay[day] ??= [];
                        perDay[day].push(expo);
                        return perDay;
                    },
                    {} as Record<number, ExpeditionEvent[]>
                );

                this.firstDate = data.reduce(
                    (date, expo) => Math.min(date ?? expo.date, expo.date),
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

export const ExpeditionDataModule = new ExpeditionDataModuleClass();