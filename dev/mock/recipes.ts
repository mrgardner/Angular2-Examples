import {Recipe} from '../shared/recipe';
import {Ingredient} from "../shared/ingredient";

export let RECIPES: Recipe[] = [
    new Recipe('Wiener Schnitizel',
        'A tasty Schnitzel',
        'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/WienerSchnitzel.jpg',
        [
            new Ingredient('Pork Meat', 1),
            new Ingredient('French Fries', 1),
            new Ingredient('Salad', 2)
        ]
    ),
    new Recipe('Super Mega Burger',
        'Tastes so delicious',
        'http://www.fraeleinburger.de/tl_files/images/content/burger/Fraelein-Burger.jpg',
        [
            new Ingredient('Buns', 4),
            new Ingredient('Salad', 1),
            new Ingredient('Paddies', 4),
            new Ingredient('Vegetables', 2)
        ]
    )
];