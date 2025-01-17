import { ExpeditionDepletionLevel } from "@/shared/models/expeditions/ExpeditionDepletionLevel";
import { ExpeditionEventCombatSize } from "@/shared/models/expeditions/ExpeditionEvents";
import { ExpeditionEventSize } from "../../../../models/expeditions/ExpeditionEventSize";
import { ExpeditionEventType } from "../../../../models/expeditions/ExpeditionEventType";

export type RegexBuilder<T> = (value: T) => RegExp;

export interface ExpeditionMessages {
    [ExpeditionEventType.darkMatter]: {
        [ExpeditionEventSize.small]: string[];
        [ExpeditionEventSize.medium]: string[];
        [ExpeditionEventSize.large]: string[];
        regex: RegexBuilder<string>;
    };

    [ExpeditionEventType.resources]: {
        [ExpeditionEventSize.small]: string[];
        [ExpeditionEventSize.medium]: string[];
        [ExpeditionEventSize.large]: string[];
        regex: RegexBuilder<string[]>;
    };

    [ExpeditionEventType.fleet]: {
        [ExpeditionEventSize.small]: string[];
        [ExpeditionEventSize.medium]: string[];
        [ExpeditionEventSize.large]: string[];
        regex: RegexBuilder<string[]>;
    };

    [ExpeditionEventType.pirates]: Record<ExpeditionEventCombatSize, string[]>;
    [ExpeditionEventType.aliens]: Record<ExpeditionEventCombatSize, string[]>;

    [ExpeditionEventType.nothing]: string[];
    [ExpeditionEventType.lostFleet]: string[];
    [ExpeditionEventType.trader]: string[];
    [ExpeditionEventType.early]: string[];
    [ExpeditionEventType.delay]: string[];
    [ExpeditionEventType.item]: {
        regex: RegExp;
    };

    logbookRegex: RegExp;
    depletionMessages: Record<ExpeditionDepletionLevel, string[]>;
}