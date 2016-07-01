System.register(['@angular/core', "./property-binding.component"], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"parent\">\n        <h2>This is the parent component</h2>\n        <h4>Please enter your name</h4>\n        <input type=\"text\" [(ngModel)]=\"name\">\n        <br><br>\n        <section class=\"child\">\n            <my-property-binding [myName]=\"name\" [myAge]=\"26\"></my-property-binding>\n        </section>\n    </section>\n       \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsZ1hBV1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMscURBQXdCLENBQUM7cUJBQ3pDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cclxuICAgICAgICA8aDI+VGhpcyBpcyB0aGUgcGFyZW50IGNvbXBvbmVudDwvaDI+XHJcbiAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxyXG4gICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICA8bXktcHJvcGVydHktYmluZGluZyBbbXlOYW1lXT1cIm5hbWVcIiBbbXlBZ2VdPVwiMjZcIj48L215LXByb3BlcnR5LWJpbmRpbmc+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgICAgXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBuYW1lID0gJyc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
