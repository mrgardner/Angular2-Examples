System.register(["@angular/core", "@angular/router-deprecated", "./comp1-main.component", "./comp2-sub.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, comp1_main_component_1, comp2_sub_component_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (comp1_main_component_1_1) {
                comp1_main_component_1 = comp1_main_component_1_1;
            },
            function (comp2_sub_component_1_1) {
                comp2_sub_component_1 = comp2_sub_component_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_routeParams) {
                    this._routeParams = _routeParams;
                }
                Component1Component.prototype.ngOnInit = function () {
                    this.source = this._routeParams.get('source');
                    this.optional = this._routeParams.get('optional');
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n        This is Component 1\n        <div>\n            Source was {{source}}\n        </div>\n        <div>\n            Optional: {{optional}}\n        </div>\n        <div><a [routerLink]=\"['Component1Main']\">Main</a></div>\n        <div><a [routerLink]=\"['Component1Sub']\">Sub</a></div>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Component1Main', component: comp1_main_component_1.Comp1MainComponent, useAsDefault: true },
                        { path: '/subroute', name: 'Component1Sub', component: comp2_sub_component_1.Comp2SubComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUlJLDZCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUseVZBV1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0QsK0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN0RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7cUJBQzNFLENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxREFVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XG5pbXBvcnQge0NvbXAxTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcDEtbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29tcDJTdWJDb21wb25lbnR9IGZyb20gXCIuL2NvbXAyLXN1Yi5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIFRoaXMgaXMgQ29tcG9uZW50IDFcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFNvdXJjZSB3YXMge3tzb3VyY2V9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIE9wdGlvbmFsOiB7e29wdGlvbmFsfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWydDb21wb25lbnQxTWFpbiddXCI+TWFpbjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDFTdWInXVwiPlN1YjwvYT48L2Rpdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ0NvbXBvbmVudDFNYWluJywgY29tcG9uZW50OiBDb21wMU1haW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvc3Vicm91dGUnLCBuYW1lOiAnQ29tcG9uZW50MVN1YicsIGNvbXBvbmVudDogQ29tcDJTdWJDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgb3B0aW9uYWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3NvdXJjZScpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdvcHRpb25hbCcpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
