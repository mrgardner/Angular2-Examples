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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.today = new Date();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section class=\"pipe\">\n            <h2>The Date Pipe</h2>\n            <p>Today is: {{today | date:'short'}}</p>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>The lowercase and UPPERCASE Pipe</h2>\n            <input type=\"text\" #inputCasePipe (keyup)=\"0\"><br>\n            <div>Output Lowercase {{inputCasePipe.value | lowercase}}</div>\n            <div>Output Uppercase {{inputCasePipe.value | uppercase}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>The Slice Pipe</h2>\n            <input type=\"text\" #inputSlicePipe (keyup)=\"0\"> - from <input type=\"text\" #start (keyup)=\"0\"> to <input type=\"text\" #end (keyup)=\"0\">\n            <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>Number Pipes</h2>\n            <input type=\"text\" #inputNumberPipes (keyup)=\"0\"> - currency: <input type=\"text\" #currency value=\"EUR\" (change)=\"0\"><br>\n            <div>Decimal: {{1.0 * inputNumberPipes.value | number:'1.1-2'}}</div>\n            <div>Currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2' }}</div>\n            <input type=\"checkbox\" #currencyShort checked (change)=\"0\">Short currency code  \n        </section>\n        \n        <section class=\"pipe\">\n            <h2>Chaining multiple Pipes (e.g. uppercase and slice</h2>\n            <input type=\"text\" #inputChainPipes (keyup)=\"0\"><br>\n            <div>Output: {{inputChainPipes.value | slice:1:3 | uppercase}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            \n        </section>\n        \n       \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Q0E7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBNUNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw4dURBc0NUO3FCQUNKLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICAgIDxoMj5UaGUgRGF0ZSBQaXBlPC9oMj5cbiAgICAgICAgICAgIDxwPlRvZGF5IGlzOiB7e3RvZGF5IHwgZGF0ZTonc2hvcnQnfX08L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgPGgyPlRoZSBsb3dlcmNhc2UgYW5kIFVQUEVSQ0FTRSBQaXBlPC9oMj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dENhc2VQaXBlIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQgTG93ZXJjYXNlIHt7aW5wdXRDYXNlUGlwZS52YWx1ZSB8IGxvd2VyY2FzZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pk91dHB1dCBVcHBlcmNhc2Uge3tpbnB1dENhc2VQaXBlLnZhbHVlIHwgdXBwZXJjYXNlfX08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICAgICAgICA8aDI+VGhlIFNsaWNlIFBpcGU8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0U2xpY2VQaXBlIChrZXl1cCk9XCIwXCI+IC0gZnJvbSA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3RhcnQgKGtleXVwKT1cIjBcIj4gdG8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2VuZCAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQ6IHt7aW5wdXRTbGljZVBpcGUudmFsdWUgfCBzbGljZTpzdGFydC52YWx1ZTplbmQudmFsdWV9fTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICAgIDxoMj5OdW1iZXIgUGlwZXM8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0TnVtYmVyUGlwZXMgKGtleXVwKT1cIjBcIj4gLSBjdXJyZW5jeTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2N1cnJlbmN5IHZhbHVlPVwiRVVSXCIgKGNoYW5nZSk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgPGRpdj5EZWNpbWFsOiB7ezEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBudW1iZXI6JzEuMS0yJ319PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkN1cnJlbmN5OiB7ezEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBjdXJyZW5jeTpjdXJyZW5jeS52YWx1ZTpjdXJyZW5jeVNob3J0LmNoZWNrZWQ6JzEuMi0yJyB9fTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICNjdXJyZW5jeVNob3J0IGNoZWNrZWQgKGNoYW5nZSk9XCIwXCI+U2hvcnQgY3VycmVuY3kgY29kZSAgXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgPGgyPkNoYWluaW5nIG11bHRpcGxlIFBpcGVzIChlLmcuIHVwcGVyY2FzZSBhbmQgc2xpY2U8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2hhaW5QaXBlcyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIDxkaXY+T3V0cHV0OiB7e2lucHV0Q2hhaW5QaXBlcy52YWx1ZSB8IHNsaWNlOjE6MyB8IHVwcGVyY2FzZX19PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgXG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB0b2RheSA9IG5ldyBEYXRlKCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
