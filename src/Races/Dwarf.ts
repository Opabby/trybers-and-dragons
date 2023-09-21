import Race from './Race';

class Dwarf extends Race {
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Dwarf.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Dwarf.instanceCount;
    }
    
    get maxLifePoints(): number {
        return 80;
    }
}

export default Dwarf;