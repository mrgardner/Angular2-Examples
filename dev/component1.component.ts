import {Component} from "@angular/core";
import {DataService} from "./data.service";

@Component({
    selector: 'my-component-1',
    template: `
        <h1>Component 1</h1>
        <div>
            <button (click)="onGetData()">Get random Data</button>
            <p>Random Data: {{data}}</p>
            <input type="text" #input>
            <button (click)="onAddItem(input.value)"></button>
        </div>
    `,
    providers: [DataService]
})
export class Component1Component {
    data: string;

    constructor(private _dataService: DataService) {}

    onGetData() {
        this.data = this._dataService.getRandomData();
    }

    onAddItem(data: string) {
        this._dataService.insertData(data);
    }
}