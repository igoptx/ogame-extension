import { LifeformBuildingType } from "../../LifeformBuildingType";
import { LifeformBuilding } from "../LifeformBuilding";

class BiotechLabClass extends LifeformBuilding {
    public constructor() {
        super({
            metal: {
                baseCost: 150_000,
                increaseFactor: 1.12,
            },
            crystal: {
                baseCost: 30_000,
                increaseFactor: 1.12,
            },
            deuterium: {
                baseCost: 15_000,
                increaseFactor: 1.12,
            },
            energy: {
                baseCost: 60,
                increaseFactor: 1.03,
            },
        });
    }

    public get type(): LifeformBuildingType {
        return LifeformBuildingType.biotechLab;
    }
}

export const BiotechLab = new BiotechLabClass();
