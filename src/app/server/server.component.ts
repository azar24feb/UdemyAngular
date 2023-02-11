import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId = 10;
    status = 'offline';

    constructor(){
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor(){
        return this.status == 'offline' ? 'red' : 'green';
    }
}