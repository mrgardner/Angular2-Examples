System.register(['../shared/recipe', "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Wiener Schnitizel', 'A tasty Schnitzel', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/WienerSchnitzel.jpg', [
                    new ingredient_1.Ingredient('Pork Meat', 1),
                    new ingredient_1.Ingredient('French Fries', 1),
                    new ingredient_1.Ingredient('Salad', 2)
                ]),
                new recipe_1.Recipe('Super Mega Burger', 'Tastes so delicious', 'http://www.fraeleinburger.de/tl_files/images/content/burger/Fraelein-Burger.jpg', [
                    new ingredient_1.Ingredient('Buns', 4),
                    new ingredient_1.Ingredient('Salad', 1),
                    new ingredient_1.Ingredient('Paddies', 4),
                    new ingredient_1.Ingredient('Vegetables', 2)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR1csT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDM0IsSUFBSSxlQUFNLENBQUMsbUJBQW1CLEVBQzFCLG1CQUFtQixFQUNuQiwwRkFBMEYsRUFDMUY7b0JBQ0ksSUFBSSx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzlCLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDN0IsQ0FDSjtnQkFDRCxJQUFJLGVBQU0sQ0FBQyxtQkFBbUIsRUFDMUIscUJBQXFCLEVBQ3JCLGlGQUFpRixFQUNqRjtvQkFDSSxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDekIsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzFCLElBQUksdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLHVCQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDbEMsQ0FDSjthQUNKLENBQUEsQ0FBQyIsImZpbGUiOiJtb2NrL3JlY2lwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuXG5leHBvcnQgbGV0IFJFQ0lQRVM6IFJlY2lwZVtdID0gW1xuICAgIG5ldyBSZWNpcGUoJ1dpZW5lciBTY2huaXRpemVsJyxcbiAgICAgICAgJ0EgdGFzdHkgU2Nobml0emVsJyxcbiAgICAgICAgJ2h0dHA6Ly9pbWFnZXMuZGVyYmVyYXRlci5kZS9maWxlcy9pbWFnZWNhY2hlLzQ1NnhYWFhfYmVyYXRlci9iZXJhdGVyL1dpZW5lclNjaG5pdHplbC5qcGcnLFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnUG9yayBNZWF0JywgMSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnRnJlbmNoIEZyaWVzJywgMSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnU2FsYWQnLCAyKVxuICAgICAgICBdXG4gICAgKSxcbiAgICBuZXcgUmVjaXBlKCdTdXBlciBNZWdhIEJ1cmdlcicsXG4gICAgICAgICdUYXN0ZXMgc28gZGVsaWNpb3VzJyxcbiAgICAgICAgJ2h0dHA6Ly93d3cuZnJhZWxlaW5idXJnZXIuZGUvdGxfZmlsZXMvaW1hZ2VzL2NvbnRlbnQvYnVyZ2VyL0ZyYWVsZWluLUJ1cmdlci5qcGcnLFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnQnVucycsIDQpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1NhbGFkJywgMSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnUGFkZGllcycsIDQpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1ZlZ2V0YWJsZXMnLCAyKVxuICAgICAgICBdXG4gICAgKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
