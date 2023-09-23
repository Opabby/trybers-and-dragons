import Energy, { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Ranger extends Archetype{
    private static count = 0;
    private damageType: EnergyType;
    constructor(name: string) {
        super(name);
        this.damageType = 'stamina';
        Ranger.count++;
    }

    get energyType(): EnergyType {
        return this.damageType;
    }

    static createdArchetypeInstances(): number {
        return Ranger.count;    
    }
}

export default Ranger;