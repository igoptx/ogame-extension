import { BasicPlanetData, BasicPlanetDataMoon, BasicPlanetDataPlanet } from "../../shared/messages/tracking/empire";
import { PlanetType } from "../../shared/models/v1/ogame/common/PlanetType";
import { observerCallbacks } from "./main";
import { _throw } from "../../shared/utils/_throw";
import { parseIntSafe } from "../../shared/utils/parseNumbers";
import { parseCoordinates } from '../../shared/utils/parseCoordinates';
import { Coordinates } from "../../shared/models/v1/ogame/common/Coordinates";

export function trackOwnedPlanets() {
    observerCallbacks.push({
        selector: '#planetList',
        callback: element => {
            const planets: BasicPlanetData[] = [];

            const planetElems = element.querySelectorAll('.smallplanet');
            planetElems.forEach(planetElem => {
                const planet = getPlanetData(planetElem);
                planets.push(planet);

                const moon = getMoonData(planetElem, planet.coordinates);
                if (moon != null) {
                    planets.push(moon);
                }
            });

            //TODO: send message with updated planet/moon data
            _throw('TODO: send message with updated (basic) planet/moon data', planets);
        },
    });
}

const planetIdRegex = /&cp=(?<id>\d+)($|[^\d])/;
const maxTempRegex = / (?<temp>-?\d+)\s*°C<br\/?>/;

function getPlanetData(planetElem: Element): BasicPlanetDataPlanet {
    const planetLink = (planetElem.querySelector(':scope > a.planetlink') as HTMLAnchorElement | null)?.href ?? _throw('no planetlink found');
    const idText = planetLink.match(planetIdRegex)?.groups?.id ?? _throw('no planet id found in url');
    const id = parseIntSafe(idText, 10);

    const coordsText = planetElem.querySelector(':scope > a.planetlink > .planet-koords')?.textContent ?? _throw('no planet coordinates found');
    const coordinates = parseCoordinates(coordsText);

    const name = planetElem.querySelector(':scope > a.planetlink > .planet-name')?.textContent ?? _throw('no planet name found');

    const titleText = planetElem.querySelector(':scope > a.planetlink')?.getAttribute('title') ?? _throw('no planet title found');
    const maxTempText = titleText.match(maxTempRegex)?.groups?.temp ?? _throw('no max temp found');
    const maxTemperature = parseIntSafe(maxTempText, 10);

    return {
        isMoon: false,
        id,
        name,
        coordinates,
        maxTemperature,
    };
}

function getMoonData(planetElem: Element, coordinates: Coordinates): BasicPlanetDataMoon | null {
    const moonLinkElem = planetElem.querySelector(':scope > a.moonlink') as HTMLAnchorElement | null;
    if (moonLinkElem == null) {
        return null;
    }

    const idText = moonLinkElem.href.match(planetIdRegex)?.groups?.id ?? _throw('no moon id found in url');
    const id = parseIntSafe(idText, 10);

    const name = (moonLinkElem.querySelector(':scope > img') as HTMLImageElement | null)?.alt ?? _throw('no moon name found');

    return {
        isMoon: true,
        id,
        name,
        coordinates: {
            ...coordinates,
            type: PlanetType.moon,
        },
    };
}
