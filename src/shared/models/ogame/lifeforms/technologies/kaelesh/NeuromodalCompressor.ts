import { ShipType } from "../../../ships/ShipType";
import { LifeformTechnologyType } from "../../LifeformTechnologyType";
import { StatsBonus, StatsBonusLifeformTechnology } from "../interfaces";
import { LifeformTechnology } from "../LifeformTechnology";

class NeuromodalCompressorClass extends LifeformTechnology implements StatsBonusLifeformTechnology {
    public constructor() {
        super({
            metal: {
                baseCost: 50000,
                increaseFactor: 1.3,
            },
            crystal: {
                baseCost: 50000,
                increaseFactor: 1.3,
            },
            deuterium: {
                baseCost: 20000,
                increaseFactor: 1.3,
            },
            energy: {
                baseCost: 0,
                increaseFactor: 1,
            },
        });
    }

    public appliesTo(ship: ShipType): boolean {
        return [
            ShipType.smallCargo,
            ShipType.largeCargo,
            ShipType.colonyShip,
            ShipType.recycler,
            ShipType.espionageProbe,
        ].includes(ship);
    }

    public getStatsBonus(ship: ShipType, level: number): StatsBonus {
        if (!this.appliesTo(ship)) {
            return { armor: 0, shield: 0, damage: 0, cargo: 0, speed: 0 };
        }

        const cargoBonusPerLevel = 0.00_4; //0.4%
        return {
            armor: 0,
            shield: 0,
            damage: 0,
            cargo: cargoBonusPerLevel * level,
            speed: 0,
        };
    }

    public get type(): LifeformTechnologyType {
        return LifeformTechnologyType.neuromodalCompressor;
    }
}

export const NeuromodalCompressor = new NeuromodalCompressorClass();
