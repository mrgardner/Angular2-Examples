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
                    this._data = ['Milk', 'Sugar', 'Bread'];
                }
                DataService.prototype.getRandomData = function () {
                    return this._data[Math.floor(Math.random() * this._data.length)];
                };
                DataService.prototype.insertData = function (data) {
                    this._data.push(data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNZLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBUy9DLENBQUM7Z0JBUEcsbUNBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVk7b0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQVdiLGtCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxQ0FVQyxDQUFBIiwiZmlsZSI6ImRhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9kYXRhID0gWydNaWxrJywgJ1N1Z2FyJywgJ0JyZWFkJ107XG5cbiAgICBnZXRSYW5kb21EYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9kYXRhLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGluc2VydERhdGEoZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaChkYXRhKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
