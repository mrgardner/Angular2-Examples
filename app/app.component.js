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
                        template: "\n       {{onTest()}}\n       <br>\n       <input type=\"text\" [value]=\"name\" [ngClass]=\"{\n            red: true\n       }\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n       \n       <p>{{values}}</p>\n       <br>\n       <input type=\"text\" [(ngModel)]=\"name\">\n       <p>Your Name: {{name}}</p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLE1BQU0sQ0FBQztvQkFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO2dCQVVoQixDQUFDO2dCQVJHLDZCQUFNLEdBQU47b0JBQ0ksTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsOEJBQU8sR0FBUCxVQUFRLEtBQWE7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQztnQkF6Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHNVQVdUO3FCQUNKLENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICB7e29uVGVzdCgpfX1cclxuICAgICAgIDxicj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICByZWQ6IHRydWVcclxuICAgICAgIH1cIiAoa2V5dXApPVwib25LZXl1cChpbnB1dEVsZW1lbnQudmFsdWUpXCIgI2lucHV0RWxlbWVudD5cclxuICAgICAgIFxyXG4gICAgICAgPHA+e3t2YWx1ZXN9fTwvcD5cclxuICAgICAgIDxicj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxyXG4gICAgICAgPHA+WW91ciBOYW1lOiB7e25hbWV9fTwvcD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgbmFtZSA9ICdNYXR0JztcclxuICAgIHZhbHVlcyA9ICcnO1xyXG5cclxuICAgIG9uVGVzdCgpe1xyXG4gICAgICAgIHJldHVybiAxID09PSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5dXAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudmFsdWVzICs9IHZhbHVlICsgJyB8ICc7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
