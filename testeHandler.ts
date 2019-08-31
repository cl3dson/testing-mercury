import {handler, JSONMessage, BrokerType, Message} from "mercury-messenger";

class testeHandler {

    @handler('user-created',10)
     handler1() {
        console.log('A user has been created');
        throw new Error('Erro teste');
    }

    @handler('order-created',15)
     handler2(message:Message) {
        console.log('Something has been ordered');
        console.log(message.getContent())
        //your business rule ...

        //return a new message, or array of message if needed
        return new JSONMessage('order-registered',{id:'123'})
    }
}