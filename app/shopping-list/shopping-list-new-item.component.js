System.register(["@angular/core", "./shopping-list.service", "@angular/common"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_1.Validators.required],
                        'itemAmount': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                greaterZero
                            ])],
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"input\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n            </div>\n            <div class=\"input\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n        </form>\n        \n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUE0Q0EscUJBQXFCLE9BQWdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUE7UUFDNUIsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7WUF6QkQ7Z0JBSUksc0NBQW9CLG9CQUF5QyxFQUFVLFlBQXlCO29CQUE1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUhoRyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFHc0UsQ0FBQztnQkFFcEcsK0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBRUQsK0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDbEMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixXQUFXOzZCQUNkLENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsOHBCQWFUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7Z0RBQUE7Z0JBb0JGLG1DQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx1RUFtQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4uL2xpc3QtaXRlbSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbU5hbWUnXVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydpdGVtQW1vdW50J11cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuICAgIGAsXG4gICAgb3V0cHV0czogWydpdGVtQWRkZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbSh7bmFtZTogdGhpcy5pdGVtLm5hbWUsIGFtb3VudDogdGhpcy5pdGVtLmFtb3VudH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnaXRlbU5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2l0ZW1BbW91bnQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBncmVhdGVyWmVyb1xuICAgICAgICAgICAgXSldLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6IENvbnRyb2wpOiB7W1M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoY29udHJvbC52YWx1ZSA8PSAwKSB7XG4gICAgICAgIHJldHVybiB7bm90RW5vdWdoOiB0cnVlfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
