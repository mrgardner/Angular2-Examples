System.register(["@angular/core", "@angular/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DataDrivenFormComponent;
    function hasNumbers(control) {
        if (!control.value.match('\\d+')) {
            return { noNumbers: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataDrivenFormComponent = (function () {
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.myForm = common_1.ControlGroup;
                    this.user = { email: '', password: '' };
                }
                DataDrivenFormComponent.prototype.onSubmit = function () {
                    this.user = this.myForm.value;
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                hasNumbers
                            ])],
                        'confirmPassword': ['', common_1.Validators.required]
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n        <h2>Sign-up Form</h2>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\" #mail=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!mail.valid\">Not Valid</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\" #password=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!password.valid\">Not Valid</span>\n            </div>\n            <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\" #confirmPassword=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">Not Valid</span>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.email}}</div>\n        <div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBb0RBLG9CQUFxQixPQUFnQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7WUExQkQ7Z0JBSUksaUNBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIN0MsV0FBTSxHQUFHLHFCQUFZLENBQUM7b0JBQ3RCLFNBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUVlLENBQUM7Z0JBRWpELDBDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCwwQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNoQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLFVBQVU7NkJBQ2IsQ0FBQyxDQUFDO3dCQUNILGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUMvQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkE5Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNnVDQXVCVDtxQkFDSixDQUFDOzsyQ0FBQTtnQkFxQkYsOEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELDZEQW9CQyxDQUFBIiwiZmlsZSI6ImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWRhdGEtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+U2lnbi11cCBGb3JtPC9oMj5cbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgI21haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFtYWlsLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCIgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhcGFzc3dvcmQudmFsaWRcIj5Ob3QgVmFsaWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCIgI2NvbmZpcm1QYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIWNvbmZpcm1QYXNzd29yZC52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGgyPllvdSBzdWJtaXR0ZWQ8L2gyPlxuICAgICAgICA8ZGl2Pk1haWw6IHt7dXNlci5lbWFpbH19PC9kaXY+XG4gICAgICAgIDxkaXY+UGFzc3dvcmQ6IHt7dXNlci5wYXNzd29yZH19PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhRHJpdmVuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBteUZvcm0gPSBDb250cm9sR3JvdXA7XG4gICAgdXNlciA9IHtlbWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBoYXNOdW1iZXJzXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goJ1xcXFxkKycpKSB7XG4gICAgICAgIHJldHVybiB7bm9OdW1iZXJzOiB0cnVlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
