import { privateDecrypt } from 'crypto';
import Race from './Race';

class Dwarf extends Race {
    private static maxLifePoints: number;
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Dwarf.maxLifePoints = 80;
        Dwarf.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Dwarf.instanceCount;
    }
    
    get maxLifePoints(): number {
        return Dwarf.maxLifePoints;
    }
}

export default Dwarf;