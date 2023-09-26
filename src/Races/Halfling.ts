import Race from './Race';

class Halfling extends Race {
    private static maxLifePoints: number;
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Halfling.maxLifePoints = 60;
        Halfling.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Halfling.instanceCount;
    }

    get maxLifePoints(): number {
        return Halfling.maxLifePoints;
    }
}

export default Halfling;