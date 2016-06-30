import {Component, OnInit} from '@angular/core';
import {TestComponent} from './test.component';


@Component({
    selector: 'my-component',
    template: `
        Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span> and this is my very Angular 
        2 component! <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
            <br>
            <br>
            It is awesome?
            <input type="text" #inputElement (keyup)="0">
            <br><br>
            <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
            <test></test>
            
   `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent implements OnInit {
    name: string;

    ngOnInit():any {
        this.name = "Matt";
    }

}