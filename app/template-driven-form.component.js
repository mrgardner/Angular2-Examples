System.register(["@angular/core"], function(exports_1, context_1) {
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
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                    this.user = { mail: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user.mail = form.value['email'];
                    this.user.password = form.value['password'];
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n        <h2>Sign-up Form</h2>\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input ngControl=\"email\" type=\"text\" id=\"mail\" required #email=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!email.valid\">Not Valid</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input ngControl=\"password\" type=\"text\" id=\"password\" required #password=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!password.valid\">Not Valid</span>\n            </div>\n            <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required #passwordConfirm=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!passwordConfirm.valid\">Not Valid</span>\n            </div>\n            <button type=\"submit\" [disabled]=\"!f.valid || password.value !== passwordConfirm.value\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.mail}}</div>\n        <div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFNcEMsQ0FBQztnQkFKRyw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSx5dkNBdUJUO3FCQUNKLENBQUM7OytDQUFBO2dCQVFGLGtDQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxRUFPQyxDQUFBIiwiZmlsZSI6InRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXRlbXBsYXRlLWRyaXZlbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPlNpZ24tdXAgRm9ybTwvaDI+XG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiByZXF1aXJlZCAjZW1haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFlbWFpbC52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQgI3Bhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhcGFzc3dvcmQudmFsaWRcIj5Ob3QgVmFsaWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29uZmlybS1wYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCIgcmVxdWlyZWQgI3Bhc3N3b3JkQ29uZmlybT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkQ29uZmlybS52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkIHx8IHBhc3N3b3JkLnZhbHVlICE9PSBwYXNzd29yZENvbmZpcm0udmFsdWVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZDwvaDI+XG4gICAgICAgIDxkaXY+TWFpbDoge3t1c2VyLm1haWx9fTwvZGl2PlxuICAgICAgICA8ZGl2PlBhc3N3b3JkOiB7e3VzZXIucGFzc3dvcmR9fTwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEcml2ZW5Gb3JtQ29tcG9uZW50IHtcbiAgICB1c2VyID0ge21haWw6ICcnLCBwYXNzd29yZDogJyd9O1xuXG4gICAgb25TdWJtaXQoZm9ybSkge1xuICAgICAgICB0aGlzLnVzZXIubWFpbCA9IGZvcm0udmFsdWVbJ2VtYWlsJ107XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IGZvcm0udmFsdWVbJ3Bhc3N3b3JkJ107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
