import {Payload} from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[] = [];
    astronauts:Astronaut[] = [];
    
    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass (items: Payload[] ): number {
        let sumMass:number = 0;

        for(let item of items) {
            sumMass += item.massKg;
        }
        
        return sumMass;
    }
    
    currentMassKg():number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload):boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }

    addCargo(cargo: Cargo):boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut) {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

}