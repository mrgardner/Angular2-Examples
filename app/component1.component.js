System.register(["@angular/core", "./data.service"], function(exports_1, context_1) {
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
    var core_1, data_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_dataService) {
                    this._dataService = _dataService;
                }
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomData();
                };
                Component1Component.prototype.onAddItem = function (data) {
                    this._dataService.insertData(data);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'my-component-1',
                        template: "\n        <h1>Component 1</h1>\n        <div>\n            <button (click)=\"onGetData()\">Get random Data</button>\n            <p>Random Data: {{data}}</p>\n            <input type=\"text\" #input>\n            <button (click)=\"onAddItem(input.value)\"></button>\n        </div>\n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdJLDZCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsdUNBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xELENBQUM7Z0JBRUQsdUNBQVMsR0FBVCxVQUFVLElBQVk7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxpU0FRVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOzt1Q0FBQTtnQkFhRiwwQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscURBWUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5Db21wb25lbnQgMTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldERhdGEoKVwiPkdldCByYW5kb20gRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+UmFuZG9tIERhdGE6IHt7ZGF0YX19PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGRJdGVtKGlucHV0LnZhbHVlKVwiPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IHtcbiAgICBkYXRhOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgICBvbkdldERhdGEoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbURhdGEoKTtcbiAgICB9XG5cbiAgICBvbkFkZEl0ZW0oZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydERhdGEoZGF0YSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
