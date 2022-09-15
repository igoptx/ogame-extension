import { _throw } from "../../shared/utils/_throw";
import { observerCallbacks } from "./main";
import { BuildingType } from '../../shared/models/ogame/buildings/BuildingType';
import { MoonFacilityBuildingTypes, PlanetFacilityBuildingTypes } from '../../shared/models/ogame/buildings/BuildingTypes';
import { parseIntSafe } from "../../shared/utils/parseNumbers";
import { UpdatePlanetBuildingLevelsMessage } from "../../shared/messages/tracking/empire";
import { MessageType } from "../../shared/messages/MessageType";
import { getOgameMeta } from "../../shared/ogame-web/getOgameMeta";
import { sendMessage } from "@/shared/communication/sendMessage";
import { empireTrackingUuid } from "@/shared/uuid";
import { createRecord } from "@/shared/utils/createRecord";

export function trackFacilitiesPage() {
    observerCallbacks.push({
        selector: '#technologies > .icons',
        callback: element => {
            const planetIdText = (document.querySelector('meta[name="ogame-planet-id"]') as HTMLMetaElement | null)?.content
                ?? _throw('no meta element found for ogame-planet-id');
            const planetId = parseIntSafe(planetIdText, 10);
            
            const planetType = (document.querySelector('meta[name="ogame-planet-type"]') as HTMLMetaElement | null)?.content
                ?? _throw('did not find meta ogame-planet-type');
            const isMoon = planetType == 'moon';

            const buildingTypes = isMoon
                ? MoonFacilityBuildingTypes
                : PlanetFacilityBuildingTypes;
            const buildingLevels = createRecord(buildingTypes, 0) as Partial<Record<BuildingType, number>>;

            buildingTypes.forEach(building => {
                const levelText = element.querySelector(`[data-technology="${building}"] .level`)?.getAttribute('data-value')
                    ?? _throw(`did not find level of building '${BuildingType[building]}'`);
                const level = parseIntSafe(levelText, 10);

                buildingLevels[building] = level;
            });

            const message: UpdatePlanetBuildingLevelsMessage = {
                ogameMeta: getOgameMeta(),
                type: MessageType.UpdatePlanetBuildingLevels,
                data: {
                    isMoon,
                    planetId,
                    data: buildingLevels,
                },
                senderUuid: empireTrackingUuid,
            };
            sendMessage(message);
        },
    });
}