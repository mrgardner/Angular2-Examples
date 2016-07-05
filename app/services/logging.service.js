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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                    this._lastMessage = '';
                }
                LoggingService.prototype.log = function (message) {
                    console.log('Current Message: ' + message + ', Last Message: ' + this._lastMessage);
                    this._lastMessage = message;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNZLGlCQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUs5QixDQUFDO2dCQUpHLDRCQUFHLEdBQUgsVUFBSSxPQUFlO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ2hDLENBQUM7Z0JBTkw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBT2IscUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDJDQU1DLENBQUEiLCJmaWxlIjoic2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xhc3RNZXNzYWdlID0gJyc7XG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBNZXNzYWdlOiAnICsgbWVzc2FnZSArICcsIExhc3QgTWVzc2FnZTogJyArIHRoaXMuX2xhc3RNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
