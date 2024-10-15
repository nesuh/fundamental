import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage,WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

import { Socket,Server } from "socket.io";

@WebSocketGateway(3002,{cors:{origin:'*'}})
export class ChatGateway implements OnGatewayConnection,OnGatewayDisconnect {


    @WebSocketServer() server:Server
    handleConnection(client:Socket) {
        console.log("new user Connected.. ",client.id)
        client.broadcast.emit('user-joined',{
            message: `New  User Joined the Chat:${client.id}`
        })
    }
    handleDisconnect(client:Socket){
        console.log('user Disconnected..',client.id)
        this.server.emit('left-user',{
            message:`User left from the chat ${client.id}`
            
        })
    }

 
    @SubscribeMessage('newMessage')

    handleNewMessage(client:Socket,message:any){
        console.log(message)

        client.emit("reply", "this is a replay")
        this.server.emit('message',message)
    }

}