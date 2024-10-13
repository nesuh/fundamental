import { Injectable, Scope } from "@nestjs/common";

@Injectable({scope:Scope.REQUEST})
export class RequestScopeService{

private readonly id:number;
constructor(){
    this.id = Math.floor(Math.random() * 1000);
}
log(message:string){
    console.log(`RequestScopedService (Request)  - ID: ${this.id}  - Message:  ${message}`);
}
getId(){
    return this.id
}

}