import { LifeformTechnologyType } from "../../LifeformTechnologyType";
import { CollectorClassBonusLifeformTechnology } from "../interfaces";
import { LifeformTechnology } from "../LifeformTechnology";

class RocktalCollectorEnhancementClass extends LifeformTechnology implements CollectorClassBonusLifeformTechnology {
    public constructor() {
        super({
            metal: {
                baseCost: 300_000,
                increaseFactor: 1.7,
            },
            crystal: {
                baseCost: 180_000,
                increaseFactor: 1.7,
            },
            deuterium: {
                baseCost: 120_000,
                increaseFactor: 1.7,
            },
            energy: {
                baseCost: 0,
                increaseFactor: 1,
            },
        });
    }
    
    public get type(): LifeformTechnologyType {
        return LifeformTechnologyType.rocktalCollectorEnhancement;
    }

    public getCollectorClassBonus(level: number): number {
        const bonus = 0.00_2; // 0.2%
        return bonus * level;
    }
}

export const RocktalCollectorEnhancement = new RocktalCollectorEnhancementClass();