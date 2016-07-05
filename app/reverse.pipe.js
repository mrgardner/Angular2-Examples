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
    var ReversePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReversePipe = (function () {
                function ReversePipe() {
                }
                ReversePipe.prototype.transform = function (value, args) {
                    var length = value.length;
                    var resultString = '';
                    for (var i = 0; i < length; i++) {
                        resultString = value[i] + resultString;
                    }
                    return resultString;
                };
                ReversePipe = __decorate([
                    core_1.Pipe({
                        name: 'myReverse'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReversePipe);
                return ReversePipe;
            }());
            exports_1("ReversePipe", ReversePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmVyc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQVlBLENBQUM7Z0JBVkcsK0JBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFVO29CQUMvQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUM1QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBRXRCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzlCLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO29CQUMzQyxDQUFDO29CQUVELE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3hCLENBQUM7Z0JBZEw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxXQUFXO3FCQUNwQixDQUFDOzsrQkFBQTtnQkFhRixrQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscUNBWUMsQ0FBQSIsImZpbGUiOiJyZXZlcnNlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbXlSZXZlcnNlJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczphbnlbXSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgPSB2YWx1ZVtpXSArIHJlc3VsdFN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmc7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
