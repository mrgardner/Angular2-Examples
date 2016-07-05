System.register(["@angular/core", "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
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
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component1Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n        <div>\n            <h1>Logging Service</h1>\n            <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n        <div>\n            <h1>Data Service</h1>\n            <button (click)=\"onGetData()\">Get some Data</button>\n            <p>Data: {{data}}</p>\n            <input type=\"text\" #newData>\n            <button (click)=\"onInsert(newData.value)\">Insert new data</button>\n        </div>\n        \n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG5lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQ0E7Z0JBSUksNkJBQW9CLGVBQStCLEVBQVUsa0JBQXFDLEVBQVUsWUFBeUI7b0JBQWpILG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXpJLG1DQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLElBQVk7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbkUsQ0FBQztnQkFFRCxtQ0FBSyxHQUFMLFVBQU0sSUFBWSxFQUFFLElBQVk7b0JBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDOUQsQ0FBQztnQkFFRCx1Q0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBYTtvQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBckRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSwwNUJBd0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLEVBQUUsMEJBQVcsQ0FBQztxQkFDOUQsQ0FBQzs7dUNBQUE7Z0JBMEJGLDBCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCxxREF5QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBuZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TG9nZ2luZyBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XG4gICAgICAgICAgICA8cD5BZGQgb3IgbXVsdGlwbHkgdGhlc2UgdHdvIG51bWJlcnM6PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+RGF0YSBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IHNvbWUgRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+RGF0YToge3tkYXRhfX08L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3RGF0YT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSW5zZXJ0KG5ld0RhdGEudmFsdWUpXCI+SW5zZXJ0IG5ldyBkYXRhPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLCBDYWxjdWxhdG9yU2VydmljZSwgRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGRhdGE6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSwgcHJpdmF0ZSBfY2FsY3VsYXRvclNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlLCBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgICBvbkxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uTXVsdGlwbHkobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpXG4gICAgfVxuXG4gICAgb25BZGQobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5hZGQoK251bTEsICtudW0yKVxuICAgIH1cblxuICAgIG9uR2V0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgb25JbnNlcnQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnQodmFsdWUpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
