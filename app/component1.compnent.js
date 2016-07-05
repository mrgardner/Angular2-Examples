System.register(["@angular/core", "./services/logging.service", "./services/calculator.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n        <div>\n            <h1>Logging Service</h1>\n            <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n        \n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG5lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBRUksNkJBQW9CLGVBQStCLEVBQVUsa0JBQXFDO29CQUE5RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtnQkFBRyxDQUFDO2dCQUV0RyxtQ0FBSyxHQUFMLFVBQU0sT0FBZTtvQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25FLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzlELENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxtbkJBaUJUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLENBQUM7cUJBQ2pELENBQUM7O3VDQUFBO2dCQWdCRiwwQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscURBZUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBuZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0xJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkxvZ2dpbmcgU2VydmljZTwvaDE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DYWxjdWxhdG9yIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgPHA+QWRkIG9yIG11bHRpcGx5IHRoZXNlIHR3byBudW1iZXJzOjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbk11bHRpcGx5KG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+TXVsdGlwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLCBDYWxjdWxhdG9yU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCB7XG4gICAgcmVzdWx0OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UpIHt9XG5cbiAgICBvbkxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uTXVsdGlwbHkobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpXG4gICAgfVxuXG4gICAgb25BZGQobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5hZGQoK251bTEsICtudW0yKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
