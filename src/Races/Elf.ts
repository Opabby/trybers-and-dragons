import Race from './Race';

class Elf extends Race {
    private static maxLifePoints: number;
    private static instanceCount = 0;
    constructor(name: string, dexterity: number){
        super (name, dexterity);
        Elf.maxLifePoints = 99;
        Elf.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Elf.instanceCount;
    }

    get maxLifePoints(): number {
        return Elf.maxLifePoints;
    }
}

export default Elf;