import Race from './Race';

class Orc extends Race {
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Orc.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Orc.instanceCount;
    }

    get maxLifePoints(): number {
        return 74;
    }
}

export default Orc;