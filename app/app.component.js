System.register(['@angular/core', "./reverse.pipe"], function(exports_1, context_1) {
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
    var core_1, reverse_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reverse_pipe_1_1) {
                reverse_pipe_1 = reverse_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.today = new Date();
                    this.stateFulPipeOutput = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('Data is there!'); }, 2000);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section class=\"pipe\">\n            <h2>The Date Pipe</h2>\n            <p>Today is: {{today | date:'short'}}</p>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>The lowercase and UPPERCASE Pipe</h2>\n            <input type=\"text\" #inputCasePipe (keyup)=\"0\"><br>\n            <div>Output Lowercase {{inputCasePipe.value | lowercase}}</div>\n            <div>Output Uppercase {{inputCasePipe.value | uppercase}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>The Slice Pipe</h2>\n            <input type=\"text\" #inputSlicePipe (keyup)=\"0\"> - from <input type=\"text\" #start (keyup)=\"0\"> to <input type=\"text\" #end (keyup)=\"0\">\n            <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>Number Pipes</h2>\n            <input type=\"text\" #inputNumberPipes (keyup)=\"0\"> - currency: <input type=\"text\" #currency value=\"EUR\" (change)=\"0\"><br>\n            <div>Decimal: {{1.0 * inputNumberPipes.value | number:'1.1-2'}}</div>\n            <div>Currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2' }}</div>\n            <input type=\"checkbox\" #currencyShort checked (change)=\"0\">Short currency code  \n        </section>\n        \n        <section class=\"pipe\">\n            <h2>Chaining multiple Pipes (e.g. uppercase and slice</h2>\n            <input type=\"text\" #inputChainPipes (keyup)=\"0\"><br>\n            <div>Output: {{inputChainPipes.value | slice:1:3 | uppercase}}</div>\n        </section>\n        \n        <section class=\"pipe\">\n            <h2>Custom Pipe (Reverse string)</h2>\n            <input type=\"text\" #inputCustomPipe (keyup)=\"0\"><br>\n            <div>Output: {{inputCustomPipe.value | myReverse}}</div>\n        </section>\n        \n         <section class=\"pipe\">\n            <h2>Async (stateful) pipes</h2>\n            <div>Output: (received after 2s): {{stateFulPipeOutput | async}}</div>\n        </section>\n    ",
                        pipes: [reverse_pipe_1.ReversePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtREE7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBRW5CLHVCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzdDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQXpCLENBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBdEREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw4a0VBMkNUO3dCQUNELEtBQUssRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQ3ZCLENBQUM7O2dDQUFBO2dCQU9GLG1CQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1Q0FNQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JldmVyc2VQaXBlfSBmcm9tIFwiLi9yZXZlcnNlLnBpcGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgPGgyPlRoZSBEYXRlIFBpcGU8L2gyPlxuICAgICAgICAgICAgPHA+VG9kYXkgaXM6IHt7dG9kYXkgfCBkYXRlOidzaG9ydCd9fTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICAgICAgICA8aDI+VGhlIGxvd2VyY2FzZSBhbmQgVVBQRVJDQVNFIFBpcGU8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2FzZVBpcGUgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICA8ZGl2Pk91dHB1dCBMb3dlcmNhc2Uge3tpbnB1dENhc2VQaXBlLnZhbHVlIHwgbG93ZXJjYXNlfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+T3V0cHV0IFVwcGVyY2FzZSB7e2lucHV0Q2FzZVBpcGUudmFsdWUgfCB1cHBlcmNhc2V9fTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICAgIDxoMj5UaGUgU2xpY2UgUGlwZTwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRTbGljZVBpcGUgKGtleXVwKT1cIjBcIj4gLSBmcm9tIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzdGFydCAoa2V5dXApPVwiMFwiPiB0byA8aW5wdXQgdHlwZT1cInRleHRcIiAjZW5kIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8ZGl2Pk91dHB1dDoge3tpbnB1dFNsaWNlUGlwZS52YWx1ZSB8IHNsaWNlOnN0YXJ0LnZhbHVlOmVuZC52YWx1ZX19PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgPGgyPk51bWJlciBQaXBlczwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXROdW1iZXJQaXBlcyAoa2V5dXApPVwiMFwiPiAtIGN1cnJlbmN5OiA8aW5wdXQgdHlwZT1cInRleHRcIiAjY3VycmVuY3kgdmFsdWU9XCJFVVJcIiAoY2hhbmdlKT1cIjBcIj48YnI+XG4gICAgICAgICAgICA8ZGl2PkRlY2ltYWw6IHt7MS4wICogaW5wdXROdW1iZXJQaXBlcy52YWx1ZSB8IG51bWJlcjonMS4xLTInfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q3VycmVuY3k6IHt7MS4wICogaW5wdXROdW1iZXJQaXBlcy52YWx1ZSB8IGN1cnJlbmN5OmN1cnJlbmN5LnZhbHVlOmN1cnJlbmN5U2hvcnQuY2hlY2tlZDonMS4yLTInIH19PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgI2N1cnJlbmN5U2hvcnQgY2hlY2tlZCAoY2hhbmdlKT1cIjBcIj5TaG9ydCBjdXJyZW5jeSBjb2RlICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICAgICAgICA8aDI+Q2hhaW5pbmcgbXVsdGlwbGUgUGlwZXMgKGUuZy4gdXBwZXJjYXNlIGFuZCBzbGljZTwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRDaGFpblBpcGVzIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQ6IHt7aW5wdXRDaGFpblBpcGVzLnZhbHVlIHwgc2xpY2U6MTozIHwgdXBwZXJjYXNlfX08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICAgICAgICA8aDI+Q3VzdG9tIFBpcGUgKFJldmVyc2Ugc3RyaW5nKTwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRDdXN0b21QaXBlIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQ6IHt7aW5wdXRDdXN0b21QaXBlLnZhbHVlIHwgbXlSZXZlcnNlfX08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgICAgPGgyPkFzeW5jIChzdGF0ZWZ1bCkgcGlwZXM8L2gyPlxuICAgICAgICAgICAgPGRpdj5PdXRwdXQ6IChyZWNlaXZlZCBhZnRlciAycyk6IHt7c3RhdGVGdWxQaXBlT3V0cHV0IHwgYXN5bmN9fTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBwaXBlczogW1JldmVyc2VQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIHN0YXRlRnVsUGlwZU91dHB1dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCdEYXRhIGlzIHRoZXJlIScpLCAyMDAwKTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
