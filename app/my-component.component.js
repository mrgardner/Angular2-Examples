System.register(['@angular/core', './test.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Matt";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span> and this is my very Angular \n        2 component! <span [class.is-awesome]=\"inputElement.value === 'yes'\">It's so awesome!</span>\n            <br>\n            <br>\n            It is awesome?\n            <input type=\"text\" #inputElement (keyup)=\"0\">\n            <br><br>\n            <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was entered</button>\n            <test></test>\n            \n   ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUseWhCQVdWO3dCQUNBLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdURBT0MsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICBIaSwgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJ1wiPnt7bmFtZX19PC9zcGFuPiBhbmQgdGhpcyBpcyBteSB2ZXJ5IEFuZ3VsYXIgXG4gICAgICAgIDIgY29tcG9uZW50ISA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+SXQncyBzbyBhd2Vzb21lITwvc3Bhbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIEl0IGlzIGF3ZXNvbWU/XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPk9ubHkgZW5hYmxlZCBpZiAneWVzJyB3YXMgZW50ZXJlZDwvYnV0dG9uPlxuICAgICAgICAgICAgPHRlc3Q+PC90ZXN0PlxuICAgICAgICAgICAgXG4gICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtUZXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk1hdHRcIjtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
