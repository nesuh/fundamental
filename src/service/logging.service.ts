import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggingService{
    private readonly id:number;


    constructor(){
        this.id=Math.floor(Math.random() * 1000)
    }

    log(message:string)
    {
        console.log(`LoggingSerivce (Singleton)  -ID : ${this.id}  - Message: ${message}`);
    }

    getId(){
        return this.id
    }
}