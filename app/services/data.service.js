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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['Summer', 'Winter', 'Warm', 'Cold'];
                }
                DataService.prototype.getRandomString = function () {
                    var rndNum = Math.floor(Math.random() * this._data.length);
                    return this._data[rndNum];
                };
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNZLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQVV6RCxDQUFDO2dCQVJHLHFDQUFlLEdBQWY7b0JBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEtBQWE7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQVhMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQVliLGtCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxxQ0FXQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9kYXRhID0gWydTdW1tZXInLCAnV2ludGVyJywgJ1dhcm0nLCAnQ29sZCddO1xuXG4gICAgZ2V0UmFuZG9tU3RyaW5nKCkge1xuICAgICAgICBsZXQgcm5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiB0aGlzLl9kYXRhLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3JuZE51bV07XG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
