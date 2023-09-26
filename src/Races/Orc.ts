import Race from './Race';

class Orc extends Race {
    private static maxLifePoints: number;
    private static instanceCount = 0;
    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        Orc.maxLifePoints = 74;
        Orc.instanceCount++;
    }

    static createdRacesInstances(): number {
        return Orc.instanceCount;
    }

    get maxLifePoints(): number {
        return Orc.maxLifePoints;
    }
}

export default Orc;