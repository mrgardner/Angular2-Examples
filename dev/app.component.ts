import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        {{'Hey'}} <br>
        {{1 === 1}}<br>
        {{name}}<br>
        {{onTest()}}<br>
        <input type="text" value="{{name}}" class="{{'red'}}">
    `,
})
export class AppComponent {
    name = 'Matt';

    onTest() {
        return 1 === 1;
    }
}