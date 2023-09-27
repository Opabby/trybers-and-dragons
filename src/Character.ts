import Archetype, { Necromancer } from "./Archetypes";
import Fighter from "./Fighter";
import Race, { Elf } from "./Races";
import Energy from "./Energy";
import getRandomInt from "./utils";
import { stringify } from "querystring";

class Character implements Fighter{
    private _race: Race;
    private _archetype: Archetype;
    private _maxLifePoints: number;
    private _lifePoints: number;
    private _strength: number;
    private _defense: number;
    private _dexterity: number;
    private _energy: Energy;
    private _name: string;

    constructor (name: string){
        this._name = name;
        this._dexterity = getRandomInt(1, 10);
        this._race = new Elf(name, this._dexterity);
        this._archetype = new Necromancer(name);
        this._maxLifePoints = this._race.maxLifePoints/2;
        this._lifePoints = this._maxLifePoints;
        this._strength = getRandomInt(1, 10);
        this._defense = getRandomInt(1, 10);
        this._energy = {type_: this._archetype.energyType, amount: getRandomInt(1, 10)};
    }
    
    get name(): string{
        return this.name;
    }

    get race(): Race{
        return this._race;
    }

    get archetype(): Archetype{
        return this._archetype;
    }

    get lifePoints(): number {
        return this._lifePoints;
    }

    get strength(): number {
        return this._strength;
    }

    get defense(): number {
        return this._defense;
    }

    get dexterity(): number {
        return this._dexterity;
    }

    get energy(): Energy {
        return this.cloneEnergy(this._energy);
    }

    private cloneEnergy(energy: Energy): Energy {
        return { type_: energy.type_, amount: energy.amount };
    }

    receiveDamage(attackPoints: number): number {
        let damageType = attackPoints - this._defense;
        if (damageType > 0) {
            this._lifePoints -= damageType;
            if (this._lifePoints <= 0) {
                this._lifePoints = -1;
            }
        } else {
            this._lifePoints -= 1;
        }
        return this._lifePoints;
    }

    attack(enemy: Fighter): void {
        enemy.receiveDamage(this._strength);
    }

    levelUp(): void {
        this._energy.amount = 10;
        const randomIncrement = getRandomInt(1, 10);

        this._maxLifePoints += randomIncrement;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }

        this._strength += randomIncrement;
        this._dexterity += randomIncrement;
        this._defense += randomIncrement;
        this._lifePoints = this._maxLifePoints;
    }

    special(): void {
        
    }
}

export default Character;