System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = 20;
                }
                __decorate([
                    core_1.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n        <h2>This is the child component</h2>\n        <p>Hey {{name}} and I am {{age}} years old!</p>\n    ",
                        inputs: ['name: myName']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDTSxRQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQURHO29CQUFDLFlBQUssQ0FBQyxPQUFPLENBQUM7O3FFQUFBO2dCQVZuQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSwrR0FHVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUM7cUJBQzNCLENBQUM7OzRDQUFBO2dCQUlGLCtCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCwrREFHQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDI+VGhpcyBpcyB0aGUgY2hpbGQgY29tcG9uZW50PC9oMj5cclxuICAgICAgICA8cD5IZXkge3tuYW1lfX0gYW5kIEkgYW0ge3thZ2V9fSB5ZWFycyBvbGQhPC9wPlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWyduYW1lOiBteU5hbWUnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHtcclxuICAgIG5hbWUgPSAnJztcclxuICAgIEBJbnB1dCgnbXlBZ2UnKSBhZ2UgPSAyMDtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
