import {Component} from "@angular/core";
import {Router, CanDeactivate, ComponentInstruction} from "@angular/router-deprecated";

@Component({
    selector: 'component-2',
    template: `
        <h2>This is Component 2</h2>
        <button (click)="onNavigate()">Take me to component 2</button>
    `
})
export class Component2Component implements CanDeactivate{
    constructor(private _router: Router) {}

    onNavigate() {
        this._router.navigate(['Component1', {source: 'Component 2'}]);
    }

    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction):any {
        return alert("Sure?");
    }
}