import {Component} from '@angular/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";
import {DataDrivenFormComponent} from "./data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-data-driven></my-data-driven>
       
    `,
    directives: [DataDrivenFormComponent]
})
export class AppComponent {

}