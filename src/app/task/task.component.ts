import { Component } from "@angular/core";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{
    paraColor = 'red';
    clickLog = [];
    onDisplay(){
        this.paraColor = Math.random()>0.5 ? 'green' : 'blue';
        this.clickLog.push(new Date().getTime());
        console.log(this.clickLog);
    }
}