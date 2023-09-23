import { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Warrior extends Archetype {
    private damageType: EnergyType;
    private static count = 0;
    constructor(name: string) {
        super(name);
        this.damageType = 'stamina';
        Warrior.count++
    }

    get energyType(): EnergyType{
        return this.damageType;
    }

    static createdArchetypeInstances(): number {
        return Warrior.count;
    }
}

export default Warrior;