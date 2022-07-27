import { BuildingType } from "../buildings/BuildingType";
import { getLifeformCollectorClassBonus } from "../lifeforms/buildings/getLifeformCollectorClassBonus";
import { ProductionBreakdown, ProductionDependencies } from "./types";
import { ServerSettings } from "../../server-settings/ServerSettings";
import { CrystalMine } from "../buildings/CrystalMine";
import { getProductionBuildingDependencies } from "./getProductionBuildingDependencies";
import { ResourceType } from "../resources/ResourceType";
import { ResearchType } from "../research/ResearchType";
import { hasCommandStaff } from "../premium/hasCommandStaff";
import { getItemBonus } from "./getItemBonus";
import { getCrawlerBoost } from "./getCrawlerBoost";
import { ShipType } from "../ships/ShipType";
import { getLifeformBuildingProductionBonus } from "../lifeforms/buildings/getLifeformBuildingProductionBonuses";
import { getLifeformTechnologyProductionBonus } from "../lifeforms/buildings/getLifeformTechnologyProductionBonuses";


function getCrystalProductionBoost(position: number, serverPositionBoost: {
    default: number;
    pos1: number;
    pos2: number;
    pos3: number;
}) {
    switch (position) {
        case 1:
            return serverPositionBoost.pos1;

        case 2:
            return serverPositionBoost.pos2;

        case 3:
            return serverPositionBoost.pos3;
    }

    return serverPositionBoost.default;
}

export function getCrystalBaseProduction(dependencies: {
    planetPosition: number;
    serverEconomySpeed: number;
    serverPositionBoost: {
        default: number;
        pos1: number;
        pos2: number;
        pos3: number;
    };
}) {
    const boost = getCrystalProductionBoost(dependencies.planetPosition, dependencies.serverPositionBoost);
    const baseProduction = 15 * dependencies.serverEconomySpeed * (1 + boost);

    return baseProduction;
}

export function getCrystalProduction(dependencies: ProductionDependencies): ProductionBreakdown {
    const boost = getCrystalProductionBoost(dependencies.planet.coordinates.position, dependencies.serverSettings);
    const baseProduction = 15 * dependencies.serverSettings.speed.economy * (1 + boost);
    const mineLevel = dependencies.planet.buildings[BuildingType.crystalMine];
    const mineProduction = CrystalMine.getProduction(mineLevel, getProductionBuildingDependencies(dependencies));

    const collectorClassBonus = getLifeformCollectorClassBonus(dependencies.player);

    return new ProductionBreakdown(
        baseProduction,
        mineProduction,
        ResourceType.crystal,
        dependencies.player.research[ResearchType.plasmaTechnology],
        dependencies.player.playerClass,
        dependencies.player.allianceClass,
        dependencies.player.officers.geologist,
        hasCommandStaff(dependencies.player.officers),
        getItemBonus(ResourceType.crystal, dependencies.planet.activeItems),
        getCrawlerBoost({
            availableCrawlers: dependencies.planet.ships[ShipType.crawler],
            lifeformTechnologies: {
                collectorClassBonus: collectorClassBonus,
                crawlerProductionBonus: 0,
            },
            crawlerProductionSetting: dependencies.planet.productionSettings[ShipType.crawler],
            hasGeologist: dependencies.player.officers.geologist,
            playerClass: dependencies.player.playerClass,
            levelMetalMine: dependencies.planet.buildings[BuildingType.metalMine],
            levelCrystalMine: dependencies.planet.buildings[BuildingType.crystalMine],
            levelDeuteriumSynthesizer: dependencies.planet.buildings[BuildingType.deuteriumSynthesizer],
            serverSettings: {
                collectorCrawlerProductionFactorBonus: dependencies.serverSettings.playerClasses.collector.crawlers.productionFactorBonus,
                crawlerMaxProductionFactor: dependencies.serverSettings.playerClasses.crawlers.maxProductionFactor,
                crawlerProductionFactorPerUnit: dependencies.serverSettings.playerClasses.crawlers.productionBoostFactorPerUnit,
                geologistActiveCrawlerFactorBonus: dependencies.serverSettings.playerClasses.collector.crawlers.geologistActiveCrawlerFactorBonus,
            },
        }),
        getLifeformBuildingProductionBonus(dependencies.planet).crystal,
        getLifeformTechnologyProductionBonus(dependencies.player).crystal,
        collectorClassBonus,
        { collectorProductionFactor: dependencies.serverSettings.playerClasses.collector.productionFactorBonus },
    );
}