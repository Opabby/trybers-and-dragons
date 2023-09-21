import Race from './Race';

class Elf extends Race {
    private static instanceCount = 0;
    constructor(name: string, dexterity: number){
        super (name, dexterity);
        Elf.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Elf.instanceCount;
    }

    get maxLifePoints(): number {
        return 99;
    }
}

export default Elf;