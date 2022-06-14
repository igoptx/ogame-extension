import { DBSchema } from "idb";

export interface DbServerSettings {
    _lastUpdate: number;

    name: string;
    number: string;
    language: string;
    timezone: string;
    timezoneOffset: string;
    domain: string;
    version: string;

    speed: number;
    speedFleetPeaceful: number;
    speedFleetWar: number;
    speedFleetHolding: number;
    galaxies: number;
    systems: number;
    acs: number;
    rapidFire: number;
    defToTF: number;
    debrisFactor: number;
    debrisFactorDef: number;
    repairFactor: number;
    newbieProtectionLimit: number;
    newbieProtectionHigh: number;
    topScore: number;
    bonusFields: number;
    donutGalaxy: number;
    donutSystem: number;
    wfEnabled: number;
    wfMinimumRessLost: number;
    wfMinimumLossPercentage: number;
    wfBasicPercentageRepairable: number;
    globalDeuteriumSaveFactor: number;
    bashlimit: number;
    probeCargo: number;
    researchDurationDivisor: number;
    darkMatterNewAcount: number;
    cargoHyperspaceTechMultiplier: number;
    marketplaceEnabled: number;
    marketplaceBasicTradeRatioMetal: number;
    marketplaceBasicTradeRatioCrystal: number;
    marketplaceBasicTradeRatioDeuterium: number;
    marketplacePriceRangeLower: number;
    marketplacePriceRangeUpper: number;
    marketplaceTaxNormalUser: number;
    marketplaceTaxAdmiral: number;
    marketplaceTaxCancelOffer: number;
    marketplaceTaxNotSold: number;
    marketplaceOfferTimeout: number;
    characterClassesEnabled: number;
    minerBonusResourceProduction: number;
    minerBonusFasterTradingShips: number;
    minerBonusIncreasedCargoCapacityForTradingShips: number;
    minerBonusAdditionalFleetSlots: number;
    minerBonusAdditionalMarketSlots: number;
    minerBonusAdditionalCrawler: number;
    minerBonusMaxCrawler: number;
    minerBonusEnergy: number;
    minerBonusOverloadCrawler: number;
    resourceBuggyProductionBoost: number;
    resourceBuggyMaxProductionBoost: number;
    resourceBuggyEnergyConsumptionPerUnit: number;
    warriorBonusFasterCombatShips: number;
    warriorBonusFasterRecyclers: number;
    warriorBonusFuelConsumption: number;
    warriorBonusRecyclerFuelConsumption: number;
    warriorBonusRecyclerCargoCapacity: number;
    warriorBonusAdditionalFleetSlots: number;
    warriorBonusAdditionalMoonFields: number;
    warriorBonusFleetHalfSpeed: number;
    warriorBonusAttackerWreckfield: number;
    combatDebrisFieldLimit: number;
    explorerBonusIncreasedResearchSpeed: number;
    explorerBonusIncreasedExpeditionOutcome: number;
    explorerBonusLargerPlanets: number;
    explorerUnitItemsPerDay: number;
    explorerBonusPhalanxRange: number;
    explorerBonusPlunderInactive: number;
    explorerBonusExpeditionEnemyReduction: number;
    explorerBonusAdditionalExpeditionSlots: number;
    resourceProductionIncreaseCrystalDefault: number;
    resourceProductionIncreaseCrystalPos1: number;
    resourceProductionIncreaseCrystalPos2: number;
    resourceProductionIncreaseCrystalPos3: number;
    exodusRatioMetal: number;
    exodusRatioCrystal: number;
    exodusRatioDeuterium: number;
};
type DbServerSettingsItem<T extends keyof DbServerSettings = keyof DbServerSettings> = {
    key: T;
    value: DbServerSettings[T];
};

export interface OgameTrackerServerDbSchema extends DBSchema {
    serverSettings: DbServerSettingsItem;
}