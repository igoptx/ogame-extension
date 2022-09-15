import { BuildingType, MoonBuildingType, MoonFacilityBuildingType, MoonSupplyBuildingType, PlanetBuildingType, PlanetFacilityBuildingType, PlanetSupplyBuildingType } from "./BuildingType";
import { Building } from "./Building";
import { AllianceDepot } from "./AllianceDepot";
import { CrystalMine } from "./CrystalMine";
import { CrystalStorage } from "./CrystalStorage";
import { DeuteriumSynthesizer } from "./DeuteriumSynthesizer";
import { DeuteriumTank } from "./DeuteriumTank";
import { FusionReactor } from "./FusionReactor";
import { JumpGate } from "./JumpGate";
import { LunarBase } from "./LunarBase";
import { MetalMine } from "./MetalMine";
import { MetalStorage } from "./MetalStorage";
import { MissileSilo } from "./MissileSilo";
import { NaniteFactory } from "./NaniteFactory";
import { ResearchLab } from "./ResearchLab";
import { RoboticsFactory } from "./RoboticsFactory";
import { SensorPhalanx } from "./SensorPhalanx";
import { Shipyard } from "./Shipyard";
import { SolarPlant } from "./SolarPlant";
import { SpaceDock } from "./SpaceDock";
import { Terraformer } from "./Terraformer";

export const BuildingTypes: BuildingType[] = [
    BuildingType.metalMine,
    BuildingType.crystalMine,
    BuildingType.deuteriumSynthesizer,

    BuildingType.metalStorage,
    BuildingType.crystalStorage,
    BuildingType.deuteriumTank,

    BuildingType.solarPlant,
    BuildingType.fusionReactor,

    BuildingType.roboticsFactory,
    BuildingType.shipyard,
    BuildingType.researchLab,
    BuildingType.allianceDepot,
    BuildingType.missileSilo,
    BuildingType.naniteFactory,
    BuildingType.terraformer,
    BuildingType.spaceDock,

    BuildingType.lunarBase,
    BuildingType.sensorPhalanx,
    BuildingType.jumpGate,
];

export const PlanetBuildingTypes: PlanetBuildingType[] = [
    BuildingType.metalMine,
    BuildingType.crystalMine,
    BuildingType.deuteriumSynthesizer,
    BuildingType.metalStorage,
    BuildingType.crystalStorage,
    BuildingType.deuteriumTank,
    BuildingType.solarPlant,
    BuildingType.fusionReactor,

    BuildingType.roboticsFactory,
    BuildingType.shipyard,
    BuildingType.researchLab,
    BuildingType.allianceDepot,
    BuildingType.missileSilo,
    BuildingType.naniteFactory,
    BuildingType.terraformer,
    BuildingType.spaceDock,
];
export const PlanetSupplyBuildingTypes: PlanetSupplyBuildingType[] = [
    BuildingType.metalMine,
    BuildingType.crystalMine,
    BuildingType.deuteriumSynthesizer,
    BuildingType.metalStorage,
    BuildingType.crystalStorage,
    BuildingType.deuteriumTank,
    BuildingType.solarPlant,
    BuildingType.fusionReactor,
];
export const PlanetFacilityBuildingTypes: PlanetFacilityBuildingType[] = [
    BuildingType.roboticsFactory,
    BuildingType.shipyard,
    BuildingType.researchLab,
    BuildingType.allianceDepot,
    BuildingType.missileSilo,
    BuildingType.naniteFactory,
    BuildingType.terraformer,
    BuildingType.spaceDock,
];
export const MoonSupplyBuildingTypes: MoonSupplyBuildingType[] = [
    BuildingType.metalStorage,
    BuildingType.crystalStorage,
    BuildingType.deuteriumTank,
];
export const MoonFacilityBuildingTypes: MoonFacilityBuildingType[] = [
    BuildingType.roboticsFactory,
    BuildingType.shipyard,
    BuildingType.lunarBase,
    BuildingType.sensorPhalanx,
    BuildingType.jumpGate,
];
export const MoonBuildingTypes: MoonBuildingType[] = [
    BuildingType.metalStorage,
    BuildingType.crystalStorage,
    BuildingType.deuteriumTank,

    BuildingType.roboticsFactory,
    BuildingType.shipyard,
    BuildingType.lunarBase,
    BuildingType.sensorPhalanx,
    BuildingType.jumpGate,
];


export const BuildingsByType: Record<BuildingType, Building> = {
    [BuildingType.metalMine]: MetalMine,
    [BuildingType.crystalMine]: CrystalMine,
    [BuildingType.deuteriumSynthesizer]: DeuteriumSynthesizer,

    [BuildingType.metalStorage]: MetalStorage,
    [BuildingType.crystalStorage]: CrystalStorage,
    [BuildingType.deuteriumTank]: DeuteriumTank,

    [BuildingType.solarPlant]: SolarPlant,
    [BuildingType.fusionReactor]: FusionReactor,

    [BuildingType.roboticsFactory]: RoboticsFactory,
    [BuildingType.shipyard]: Shipyard,
    [BuildingType.researchLab]: ResearchLab,
    [BuildingType.allianceDepot]: AllianceDepot,
    [BuildingType.missileSilo]: MissileSilo,
    [BuildingType.naniteFactory]: NaniteFactory,
    [BuildingType.terraformer]: Terraformer,
    [BuildingType.spaceDock]: SpaceDock,

    [BuildingType.lunarBase]: LunarBase,
    [BuildingType.sensorPhalanx]: SensorPhalanx,
    [BuildingType.jumpGate]: JumpGate,
};