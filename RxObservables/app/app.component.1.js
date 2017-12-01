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
                    var _this = this;
                    var startTime = Date.now();
                    this.add(5, 2, function (result) {
                        _this.add(result, -10, function (result) {
                            _this.add(result, 1, function (result) {
                                _this.result = result;
                                _this.time = Date.now() - startTime;
                            }, function (error) { return _this.error = error; });
                        }, function (error) { return _this.error = error; });
                    }, function (error) { return _this.error = error; });
                }
                AppComponent.prototype.add = function (x, y, callback, errorCallback) {
                    setTimeout(function () {
                        var result = x + y;
                        if (result >= 0) {
                            callback(result);
                        }
                        else {
                            errorCallback('invalid value:' + result);
                        }
                    }, 100);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'promises',
                        template: "\n        <p style=\"font-size: 150%\">Result: <strong>{{result}}</strong></p>\n        <p>Time: <strong>{{time}}</strong></p>\n        <p>Error: <strong>{{error}}</strong></p>        \n\t    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
