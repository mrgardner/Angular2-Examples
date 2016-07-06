System.register(["@angular/core", "@angular/router-deprecated"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_router) {
                    this._router = _router;
                }
                Component2Component.prototype.onNavigate = function () {
                    this._router.navigate(['Component1', { source: 'Component 2' }]);
                };
                Component2Component.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    return alert("Sure?");
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n        <h2>This is Component 2</h2>\n        <button (click)=\"onNavigate()\">Take me to component 2</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0ksNkJBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV2Qyx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCxpREFBbUIsR0FBbkIsVUFBb0IsZUFBcUMsRUFBRSxlQUFxQztvQkFDNUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFoQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdIQUdUO3FCQUNKLENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxREFVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+VGhpcyBpcyBDb21wb25lbnQgMjwvaDI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTmF2aWdhdGUoKVwiPlRha2UgbWUgdG8gY29tcG9uZW50IDI8L2J1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnQgaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgb25OYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29tcG9uZW50MScsIHtzb3VyY2U6ICdDb21wb25lbnQgMid9XSk7XG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKTphbnkge1xuICAgICAgICByZXR1cm4gYWxlcnQoXCJTdXJlP1wiKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
