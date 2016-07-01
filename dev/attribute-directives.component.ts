import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div myHighlight [highlightColor]="'red'">
            Highlight me
        </div>
        <br>
        <br>
        <div myHighlight [highlightColor]="'blue'">
            Another highlight
        </div>
    `,
    directives: [HighlightDirective]
})
export class AttributeDirectives {

}
