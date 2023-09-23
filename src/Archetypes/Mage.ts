import { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Mage extends Archetype {
    private damageType: EnergyType;
    private static count = 0;
    constructor(name: string){
        super(name);
        this.damageType = 'mana';
        Mage.count++;
    }

    get energyType(): EnergyType {
        return this.damageType;
    }

    static createdArchetypeInstances(): number {
        return Mage.count;
    }


}

export default Mage;