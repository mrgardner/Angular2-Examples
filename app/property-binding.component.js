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
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = 20;
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_1.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n        <h2>This is the child component</h2>\n        <p>Hey {{name}} and I am {{age}} years old!</p>\n        <h4>My hobbies are: </h4>\n        <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n    ",
                        inputs: ['name: myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDTSxRQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN6QixtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQUtoRCxDQUFDO2dCQUhHLG1EQUFnQixHQUFoQixVQUFpQixPQUFlO29CQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFMRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztxRUFBQTtnQkFibkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixRQUFRLEVBQUUsc09BS1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDO3dCQUN4QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7NENBQUE7Z0JBU0YsK0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELCtEQVFDLENBQUEiLCJmaWxlIjoicHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1wcm9wZXJ0eS1iaW5kaW5nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgyPlRoaXMgaXMgdGhlIGNoaWxkIGNvbXBvbmVudDwvaDI+XHJcbiAgICAgICAgPHA+SGV5IHt7bmFtZX19IGFuZCBJIGFtIHt7YWdlfX0geWVhcnMgb2xkITwvcD5cclxuICAgICAgICA8aDQ+TXkgaG9iYmllcyBhcmU6IDwvaDQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnbmFtZTogbXlOYW1lJ10sXHJcbiAgICBvdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QmluZGluZ0NvbXBvbmVudCB7XHJcbiAgICBuYW1lID0gJyc7XHJcbiAgICBASW5wdXQoJ215QWdlJykgYWdlID0gMjA7XHJcbiAgICBob2JiaWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIG9uSG9iYmllc0NoYW5nZWQoaG9iYmllczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
