System.register(["@angular/core", "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems\" (click)=onSelect(listItem)>{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZXRDLENBQUM7Z0JBWkcsMkNBQVcsR0FBWCxVQUFZLElBQWM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsb25CQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtEQUE0QixFQUFFLHdEQUF5QixDQUFDO3FCQUN4RSxDQUFDOzt5Q0FBQTtnQkFpQkYsNEJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHlEQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4uL2xpc3QtaXRlbSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGxpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9b25TZWxlY3QobGlzdEl0ZW0pPnt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHJlbW92ZWQpPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1pdGVtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCwgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcblxuICAgIG9uSXRlbUFkZGVkKGl0ZW06IExpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudH0pO1xuICAgIH1cblxuICAgIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBvblJlbW92ZShpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
