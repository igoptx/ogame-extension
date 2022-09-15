import { LifeformBuildingType } from "../../LifeformBuildingType";
import { LifeformBuilding } from "../LifeformBuilding";

class RuneForgeClass extends LifeformBuilding {
    public constructor() {
        super({
            metal: {
                baseCost: 5_000,
                increaseFactor: 1.7,
            },
            crystal: {
                baseCost: 3_800,
                increaseFactor: 1.7,
            },
            deuterium: {
                baseCost: 1_000,
                increaseFactor: 1.7,
            },
            energy: {
                baseCost: 20,
                increaseFactor: 1.35,
            },
        });
    }

    public get type(): LifeformBuildingType {
        return LifeformBuildingType.runeForge;
    }
}

export const RuneForge = new RuneForgeClass();
