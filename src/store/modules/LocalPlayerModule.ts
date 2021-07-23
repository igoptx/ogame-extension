import { BuildingType } from "@/models/BuildingType";
import Coordinates from "@/models/Coordinates";
import { Defense } from "@/models/Defense";
import OgameMetaData from "@/models/ogame/OgameMetaData";
import { ResearchType } from "@/models/ResearchType";
import Ship from "@/models/Ship";
import asyncChromeStorage from "@/utils/asyncChromeStorage";
import Vue from "vue";
import Component from "vue-class-component";

export interface PlanetDataBase {
    id: number;
    name: string;
    coordinates: Coordinates;

    defense?: DefenseCount;
    activeItemHashes: string[]; 
}

export interface PlanetData extends PlanetDataBase {
    isMoon: false;
    buildings: PlanetBuildingLevels;
    ships?: PlanetShipCount;

    productionSettings?: ProductionSettings;
}

export type ProductionPercentage = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type CrawlerProductionPercentage = ProductionPercentage | 110 | 120 | 130 | 140 | 150;

export interface ProductionSettings {
    [BuildingType.metalMine]: ProductionPercentage;
    [BuildingType.crystalMine]: ProductionPercentage;
    [BuildingType.deuteriumSynthesizer]: ProductionPercentage;
    [BuildingType.solarPlant]: ProductionPercentage;
    [BuildingType.fusionReactor]: ProductionPercentage;
    [Ship.solarSatellite]: ProductionPercentage;
    [Ship.crawler]: CrawlerProductionPercentage;
}

export interface MoonData extends PlanetDataBase {
    isMoon: true;
    buildings: MoonBuildingLevels;
    ships?: MoonShipCount;
}


export interface PlanetBuildingLevels {
    production?: {
        [BuildingType.metalMine]: number;
        [BuildingType.crystalMine]: number;
        [BuildingType.deuteriumSynthesizer]: number;

        [BuildingType.metalStorage]: number;
        [BuildingType.crystalStorage]: number;
        [BuildingType.deuteriumTank]: number;

        [BuildingType.solarPlant]: number;
        [BuildingType.fusionReactor]: number;
    };

    facilities?: {
        [BuildingType.roboticsFactory]: number;
        [BuildingType.shipyard]: number;
        [BuildingType.researchLab]: number;
        [BuildingType.allianceDepot]: number;
        [BuildingType.missileSilo]: number;
        [BuildingType.naniteFactory]: number;
        [BuildingType.terraformer]: number;
        [BuildingType.spaceDock]: number;
    };
}

export interface MoonBuildingLevels {
    production?: {
        [BuildingType.metalStorage]: number;
        [BuildingType.crystalStorage]: number;
        [BuildingType.deuteriumTank]: number;
    };

    facilities?: {
        [BuildingType.roboticsFactory]: number;
        [BuildingType.shipyard]: number;

        [BuildingType.lunarBase]: number;
        [BuildingType.sensorPhalanx]: number;
        [BuildingType.jumpGate]: number;
    };
}

export interface ResearchLevels {
    [ResearchType.energyTechnology]: number;
    [ResearchType.laserTechnology]: number;
    [ResearchType.ionTechnology]: number;
    [ResearchType.hyperspaceTechnology]: number;
    [ResearchType.plasmaTechnology]: number;

    [ResearchType.combustionDrive]: number;
    [ResearchType.impulseDrive]: number;
    [ResearchType.hyperspaceDrive]: number;

    [ResearchType.espionageTechnology]: number;
    [ResearchType.computerTechnology]: number;
    [ResearchType.astrophysics]: number;
    [ResearchType.intergalacticResearchNetwork]: number;
    [ResearchType.gravitonTechnology]: number;

    [ResearchType.weaponsTechnology]: number;
    [ResearchType.shieldingTechnology]: number;
    [ResearchType.armorTechnology]: number;
}

export interface MoonShipCount {
    [Ship.lightFighter]: number;
    [Ship.heavyFighter]: number;
    [Ship.cruiser]: number;
    [Ship.battleship]: number;
    [Ship.battlecruiser]: number;
    [Ship.bomber]: number;
    [Ship.destroyer]: number;
    [Ship.deathStar]: number;
    [Ship.reaper]: number;
    [Ship.pathfinder]: number;

    [Ship.smallCargo]: number;
    [Ship.largeCargo]: number;
    [Ship.colonyShip]: number;
    [Ship.recycler]: number;
    [Ship.espionageProbe]: number;
    [Ship.solarSatellite]: number;
}

export interface PlanetShipCount extends MoonShipCount {
    [Ship.crawler]: number;
}

export interface DefenseCount {
    [Defense.rocketLauncher]: number;
    [Defense.lightLaser]: number;
    [Defense.heavyLaser]: number;
    [Defense.gaussCannon]: number;
    [Defense.ionCannon]: number;
    [Defense.plasmaTurret]: number;
    [Defense.smallShieldDome]: boolean;
    [Defense.largeShieldDome]: boolean;

    [Defense.ballisticMissile]: number;
    [Defense.interplanetaryMissile]: number;
}

export enum PlayerClass {
    collector = 'collector',
    discoverer = 'discoverer',
    general = 'general',
    none = 'none',
}

export enum AllianceClass {
    trader = 'trader',
    researcher = 'researcher',
    warrior = 'warrior',
    none = 'none',
}

export interface LocalPlayerData {
    planets: Record<number, PlanetData | MoonData>;
    research: ResearchLevels | null;
    playerClass: PlayerClass | null;
    allianceClass: PlayerClass | null;
    officers: PlayerOfficers;
}

export interface PlayerOfficers {
    commander: boolean;
    admiral: boolean;
    geologist: boolean;
    engineer: boolean;
    technocrate: boolean;
}

@Component({})
class LocalPlayerModule extends Vue {
    private _data: LocalPlayerData = {
        planets: {},
        research: null,
        playerClass: null,
        allianceClass: null,
        officers: {
            admiral: false,
            commander: false,
            engineer: false,
            geologist: false,
            technocrate: false,
        },
    };

    private async created() {
        const data = await asyncChromeStorage.get<LocalPlayerData>(this.storageKey);
        if (data != null) {
            this._data = data;
        }
    }

    private get storageKey(): string {
        return `${OgameMetaData.storageKeyPrefix}-local-player`;
    }

    public async save() {
        await asyncChromeStorage.set(this.storageKey, this._data);
    }
}

export default new LocalPlayerModule();