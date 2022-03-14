import { LanguageKey } from "../../../i18n/LanguageKey";
import { ExpeditionEventType } from "../expeditions/ExpeditionEventType";
import { ExpeditionEventSize } from "../expeditions/ExpeditionEventSize";
import { ResourceType } from "../ogame/resources/ResourceType";
import { ShipType } from "../ogame/ships/ShipType";
import { DateRange } from "./DateRange";
import { CombatResultType } from "../combat-reports/CombatResultType";

export interface ColorSettings {
    expeditions: {
        events: Record<ExpeditionEventType, string>;
        sizes: Record<ExpeditionEventSize, string>;
    };
    resources: Record<ResourceType | 'totalMsu', string>;
    ships: Record<ShipType, string>;
    combatResults: Record<CombatResultType, string>;
}

export interface MsuConversionRates {
    crystal: number;
    deuterium: number;
}

export interface Settings {
    extensionLanguage: LanguageKey;

    dateRanges: DateRange[];
    colors: ColorSettings;
    msuConversionRates: MsuConversionRates;

    showDetailedResourceBalance: boolean;
    expeditionFoundShipsResourceUnits: {
        factor: number;
        deuteriumFactor: number;
    };

    defaultRoutes: Record<string, string | undefined>;
}