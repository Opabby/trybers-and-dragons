import Energy, { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Necromancer extends Archetype{
    private static count = 0;
    private damageType: EnergyType;
    constructor(name: string) {
        super(name);
        this.damageType = 'mana';
        Necromancer.count++;
    }

    get energyType(): EnergyType {
        return this.damageType;
    }

    static createdArchetypeInstances(): number {
        return Necromancer.count;    
    }
}

export default Necromancer;