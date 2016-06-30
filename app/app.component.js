System.register(['@angular/core'], function(exports_1, context_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Matt';
                    this.values = '';
                }
                AppComponent.prototype.onTest = function () {
                    return 1 === 1;
                };
                AppComponent.prototype.onKeyup = function (value) {
                    this.values += value + ' | ';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       {{onTest()}}\n       <br>\n       <input type=\"text\" [value]=\"name\" [ngClass]=\"{\n            red: true\n       }\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n       \n       <p>{{values}}</p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7Z0JBVWhCLENBQUM7Z0JBUkcsNkJBQU0sR0FBTjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCw4QkFBTyxHQUFQLFVBQVEsS0FBYTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbU9BUVQ7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBYUYsbUJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAge3tvblRlc3QoKX19XG4gICAgICAgPGJyPlxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgcmVkOiB0cnVlXG4gICAgICAgfVwiIChrZXl1cCk9XCJvbktleXVwKGlucHV0RWxlbWVudC52YWx1ZSlcIiAjaW5wdXRFbGVtZW50PlxuICAgICAgIFxuICAgICAgIDxwPnt7dmFsdWVzfX08L3A+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lID0gJ01hdHQnO1xuICAgIHZhbHVlcyA9ICcnO1xuXG4gICAgb25UZXN0KCl7XG4gICAgICAgIHJldHVybiAxID09PSAxO1xuICAgIH1cblxuICAgIG9uS2V5dXAodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
