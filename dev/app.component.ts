import {Component} from '@angular/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-template-driven></my-template-driven>
       
    `,
    directives: [TemplateDrivenFormComponent]
})
export class AppComponent {

}