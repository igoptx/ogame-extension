import { Coordinates } from '../../models/ogame/common/Coordinates';
import { Message, NoDataMessage } from '../../messages/Message';
import { MessageType } from '../MessageType';
import { ItemHash } from '../../models/ogame/items/ItemHash';
import { ShipType } from '../../models/ogame/ships/ShipType';
import { DefenseType } from '../../models/ogame/defenses/DefenseType';
import { PlayerOfficers } from '../../models/empire/PlayerOfficers';
import { PlayerClass } from '../../models/ogame/classes/PlayerClass';
import { AllianceClass } from '../../models/ogame/classes/AllianceClass';
import { BuildingType } from '../../models/ogame/buildings/BuildingType';
import { ResearchType } from '../../models/ogame/research/ResearchType';
import { ProductionSettings } from '@/shared/models/empire/ProductionSettings';
import { PlanetActiveItems } from '@/shared/models/empire/PlanetActiveItems';


// basic planet/moon data
export interface BasicPlanetDataBase {
    id: number;
    name: string;
    coordinates: Coordinates;
}
export interface BasicPlanetDataPlanet extends BasicPlanetDataBase {
    isMoon: false;
    maxTemperature: number;
}
export interface BasicPlanetDataMoon extends BasicPlanetDataBase {
    isMoon: true;
}
export type BasicPlanetData = BasicPlanetDataPlanet | BasicPlanetDataMoon;

export type UpdateOwnedPlanetsMessage = Message<MessageType.UpdatePlanetData, BasicPlanetData[]>;


export interface PlanetDataWrapper<T> {
    planetId: number;
    isMoon: boolean;
    data: T;
}

// active items
export type UpdatePlanetActiveItemsMessage = Message<MessageType.UpdatePlanetActiveItems, PlanetDataWrapper<PlanetActiveItems>>;

// research levels
type ResearchLevels = Partial<Record<ResearchType, number>>;
export type UpdateResearchLevelsMessage = Message<MessageType.UpdateResearchLevels, ResearchLevels>;

// building levels
type PlanetBuildingLevels = Partial<Record<BuildingType, number>>;
export type UpdatePlanetBuildingLevelsMessage = Message<MessageType.UpdatePlanetBuildingLevels, PlanetDataWrapper<PlanetBuildingLevels>>;

// ship counts
type PlanetShipCounts = Partial<Record<ShipType, number>>;
export type UpdatePlanetShipCountsMessage = Message<MessageType.UpdatePlanetShipCounts, PlanetDataWrapper<PlanetShipCounts>>;

// defense counts
export type PlanetDefenseCounts = Record<Exclude<DefenseType, DefenseType.smallShieldDome | DefenseType.largeShieldDome>, number> & { 
    [DefenseType.smallShieldDome]: boolean;
    [DefenseType.largeShieldDome]: boolean;
};
export type UpdatePlanetDefenseCountsMessage = Message<MessageType.UpdatePlanetDefenseCounts, PlanetDataWrapper<PlanetDefenseCounts>>;

// active officers, player class, alliance class
export type UpdateActiveOfficersMessage = Message<MessageType.UpdateActiveOfficers, PlayerOfficers>;
export type UpdatePlayerClassMessage = Message<MessageType.UpdatePlayerClass, PlayerClass>;
export type UpdateAllianceClassMessage = Message<MessageType.UpdateAllianceClass, AllianceClass>;


// production percentages
export type UpdatePlanetProductionSettingsMessage = Message<MessageType.UpdatePlanetProductionSettings, PlanetDataWrapper<ProductionSettings>>;

// player and universe name
export type UpdatePlayerNameMessage = Message<MessageType.UpdatePlayerName, string>;
export type UpdateUniverseNameMessage = Message<MessageType.UpdateUniverseName, string>;


// notifications
export type NotifyEmpireDataUpdateMessage = NoDataMessage<MessageType.NotifyEmpireDataUpdate>;