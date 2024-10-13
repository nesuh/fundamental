import { Injectable, Scope } from "@nestjs/common";

@Injectable({scope:Scope.TRANSIENT})
export class TransientService{
    private readonly id:number
    constructor(){
        this.id = Math.floor(Math.random() * 1000);
    }
    log(message:string){
        console.log(`TransientService (Transient) - ID: ${this.id} - Message: ${message}`);
    }
    getId(){
        return this.id
    }
}