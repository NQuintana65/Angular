System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeService;
    return {
        setters:[],
        execute: function() {
            TimeService = (function () {
                function TimeService() {
                }
                TimeService.prototype.subscribe = function (callback, delay) {
                    callback(new Date());
                    setInterval(function () { return callback(new Date(), delay); });
                };
                return TimeService;
            }());
            exports_1("TimeService", TimeService);
        }
    }
});
