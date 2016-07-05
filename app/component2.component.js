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
    var Component2Component;
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
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n        <div>\n            <h1>Logging Service</h1>\n            <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n        \n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUVJLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQztvQkFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Z0JBQUcsQ0FBQztnQkFFdEcsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBWTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuRSxDQUFDO2dCQUVELG1DQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsSUFBWTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5RCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsbW5CQWlCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixDQUFDO3FCQUNqRCxDQUFDOzt1Q0FBQTtnQkFnQkYsMEJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHFEQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TG9nZ2luZyBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XG4gICAgICAgICAgICA8cD5BZGQgb3IgbXVsdGlwbHkgdGhlc2UgdHdvIG51bWJlcnM6PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcbiAgICByZXN1bHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSkge31cblxuICAgIG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25NdWx0aXBseShudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMilcbiAgICB9XG5cbiAgICBvbkFkZChudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
