import { Cost } from '../common/Cost';

export abstract class Defense {
    public abstract get cost(): Cost;
    public abstract get baseHull(): number;
    public abstract get baseShield(): number;
    public abstract get baseDamage(): number;

    //TODO: Rapidfire
    //TODO: type of drive depending on drive research levels
}