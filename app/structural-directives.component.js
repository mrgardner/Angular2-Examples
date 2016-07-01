System.register(["@angular/core", "./unless.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n        <section class=\"directive\">\n            <h2 >*ngIf</h2>\n            <div>\n                Enter a number higher than 10\n                <br>\n                <input type=\"text\" #number (keyup)=\"0\">\n            </div>\n            <div *ngIf=\"number.value > 10\">\n                <h5>A heading</h5>\n                Number is greater than 10\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul>\n                    <li *ngFor=\"let item of list, #i = index\">{{item}} {{i}}</li>\n                </ul>\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n            <div>\n                Enter red, blue or green\n                <input type=\"text\" #color (keyup)=\"0\">\n            </div>\n            <div [ngSwitch]=\"color.value\">\n                <template [ngSwitchWhen]=\"'red'\">\n                    <span style=\"color: red\">Color is red</span>\n                </template>\n                <template [ngSwitchWhen]=\"'blue'\">\n                    <span style=\"color: blue\">Color is blue</span>\n                </template>\n                <template [ngSwitchWhen]=\"'green'\">\n                    <span style=\"color: green\">Color is green</span>\n                </template>\n                <template ngSwitchDefault>\n                    <span>Don't know that color</span>\n                </template>\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>Custom Directive: *myUnless</h2>\n            <div>\n                Enter true of false\n                <br>\n                <input type=\"text\" #condition (keyup)=\"0\">\n            </div>\n            <div *myUnless=\"condition.value != 'false'\">\n                Only shown if 'false' was entered!\n            </div>\n        </section>\n        \n        \n    ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErREE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkE5REQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsMDdEQXVEVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUNoQyxDQUFDOzt3Q0FBQTtnQkFHRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VubGVzc0RpcmVjdGl2ZX0gZnJvbSBcIi4vdW5sZXNzLmRpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMiA+Km5nSWY8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWUgPiAxMFwiPlxuICAgICAgICAgICAgICAgIDxoNT5BIGhlYWRpbmc8L2g1PlxuICAgICAgICAgICAgICAgIE51bWJlciBpcyBncmVhdGVyIHRoYW4gMTBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgICAgICA8aDI+Km5nRm9yPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdCwgI2kgPSBpbmRleFwiPnt7aXRlbX19IHt7aX19PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRW50ZXIgcmVkLCBibHVlIG9yIGdyZWVuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbG9yIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3JlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+Q29sb3IgaXMgcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2JsdWUnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj5Db2xvciBpcyBibHVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2dyZWVuJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiBncmVlblwiPkNvbG9yIGlzIGdyZWVuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIG5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG9uJ3Qga25vdyB0aGF0IGNvbG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPkN1c3RvbSBEaXJlY3RpdmU6ICpteVVubGVzczwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEVudGVyIHRydWUgb2YgZmFsc2VcbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbmRpdGlvbiAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpteVVubGVzcz1cImNvbmRpdGlvbi52YWx1ZSAhPSAnZmFsc2UnXCI+XG4gICAgICAgICAgICAgICAgT25seSBzaG93biBpZiAnZmFsc2UnIHdhcyBlbnRlcmVkIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1VubGVzc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJhbERpcmVjdGl2ZXMge1xuICAgIGxpc3QgPSBbJ0FwcGxlJywgJ01pbGsnLCAnQnJlYWQnXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
