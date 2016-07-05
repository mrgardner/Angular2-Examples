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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
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
                Component2Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component2Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n        <div>\n            <h1>Logging Service</h1>\n            <input type=\"text\" #message>\n            <button (click)=\"onLog(message.value)\">Send</button>\n        </div>\n        <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n        </div>\n        <div>\n            <h1>Data Service</h1>\n            <button (click)=\"onGetData()\">Get some Data</button>\n            <p>Data: {{data}}</p>\n            <input type=\"text\" #newData>\n            <button (click)=\"onInsert(newData.value)\">Insert new data</button>\n        </div>\n        \n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUlJLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQyxFQUFVLFlBQXlCO29CQUFqSCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUV6SSxtQ0FBSyxHQUFMLFVBQU0sT0FBZTtvQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25FLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzlELENBQUM7Z0JBRUQsdUNBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsc0NBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQXJETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMDVCQXdCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixFQUFFLDBCQUFXLENBQUM7cUJBQzlELENBQUM7O3VDQUFBO2dCQTBCRiwwQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQscURBeUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Mb2dnaW5nIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxwPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPHA+UmVzdWx0OiB7e3Jlc3VsdH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5EYXRhIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXREYXRhKClcIj5HZXQgc29tZSBEYXRhPC9idXR0b24+XG4gICAgICAgICAgICA8cD5EYXRhOiB7e2RhdGF9fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuZXdEYXRhPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25JbnNlcnQobmV3RGF0YS52YWx1ZSlcIj5JbnNlcnQgbmV3IGRhdGE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlLCBEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MkNvbXBvbmVudCB7XG4gICAgcmVzdWx0OiBzdHJpbmc7XG4gICAgZGF0YTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cblxuICAgIG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25NdWx0aXBseShudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMilcbiAgICB9XG5cbiAgICBvbkFkZChudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpXG4gICAgfVxuXG4gICAgb25HZXREYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydCh2YWx1ZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
