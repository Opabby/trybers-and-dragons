import Race from './Race';

class Halfling extends Race {
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Halfling.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Halfling.instanceCount;
    }

    get maxLifePoints(): number {
        return 60;
    }
}

export default Halfling;