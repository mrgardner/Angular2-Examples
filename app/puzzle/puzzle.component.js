System.register(['@angular/core'], function(exports_1, context_1) {
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n        <h2>Game Setup</h2>\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass]=\"{\n            puzzle: true,\n            solved: switch1.value == switch1Number &&\n                switch2.value == switch2Number &&\n                switch3.value == switch3Number &&\n                switch4.value == switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n            <h2>The Puzzle | \n                {{switch1.value == switch1Number &&\n                switch2.value == switch2Number &&\n                switch3.value == switch3Number &&\n                switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number ||\n                switch2.value != switch2Number ||\n                switch3.value != switch3Number ||\n                switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMENBO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQXJETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsNC9DQW9DVDtxQkFDSixDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgIHB1enpsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICAgIH1cIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgPGgyPlRoZSBQdXp6bGUgfCBcbiAgICAgICAgICAgICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJlxuICAgICAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJlxuICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxuICAgICAgICAgICAgICAgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/ICdTT0xWRUQnIDogJ05PVCBTT0xWRUQnfX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5Paywgd2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBTd2l0Y2gxOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2gyOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2gzOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2g0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8XG4gICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8XG4gICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzTnVtYmVyIHx8XG4gICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+Q29uZ3JhdHVsYXRpb25zIHt7bmFtZS52YWx1ZX19LCB5b3UgZGlkIGl0ITwvaDI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
