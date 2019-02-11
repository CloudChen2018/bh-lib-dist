(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('bh-lib', ['exports', '@angular/common/http', '@angular/common', '@angular/core'], factory) :
    (factory((global['bh-lib'] = {}),global.ng.common.http,global.ng.common,global.ng.core));
}(this, (function (exports,http,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhLogger = /** @class */ (function () {
        function BhLogger() {
        }
        /**
         * @param {?} logType
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.toLogText = /**
         * @param {?} logType
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logType, logMsg, logContext, logModule, logFunc) {
                /** @type {?} */
                var LogText = [];
                LogText.push("[" + logType + "]");
                if (logModule) {
                    if (logFunc) {
                        LogText.push("[" + logModule + "::" + logFunc + "]");
                    }
                    else {
                        LogText.push("[" + logModule + "]");
                    }
                }
                LogText.push(" " + logMsg);
                if (logContext) {
                    for (var k in logContext) {
                        if (logContext[k] && logContext[k] instanceof Error) {
                            logContext[k] = logContext[k].message;
                        }
                    }
                    LogText.push(" [context: " + JSON.stringify(logContext) + "]");
                }
                return LogText.join('');
            };
        /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.log = /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logMsg, logContext, logModule, logFunc) {
                console.log(this.toLogText('LOG', logMsg, logContext, logModule, logFunc));
            };
        /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.debug = /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logMsg, logContext, logModule, logFunc) {
                console.trace(this.toLogText('DEBUG', logMsg, logContext, logModule, logFunc));
            };
        /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.info = /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logMsg, logContext, logModule, logFunc) {
                console.info(this.toLogText('INFO', logMsg, logContext, logModule, logFunc));
            };
        /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.warn = /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logMsg, logContext, logModule, logFunc) {
                console.warn(this.toLogText('WARN', logMsg, logContext, logModule, logFunc));
            };
        /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
        BhLogger.prototype.error = /**
         * @param {?} logMsg
         * @param {?=} logContext
         * @param {?=} logModule
         * @param {?=} logFunc
         * @return {?}
         */
            function (logMsg, logContext, logModule, logFunc) {
                console.error(this.toLogText('ERROR', logMsg, logContext, logModule, logFunc));
            };
        BhLogger.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhLogger.ctorParameters = function () { return []; };
        /** @nocollapse */ BhLogger.ngInjectableDef = i0.defineInjectable({ factory: function BhLogger_Factory() { return new BhLogger(); }, token: BhLogger, providedIn: "root" });
        return BhLogger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhCanvasRectService = /** @class */ (function () {
        function BhCanvasRectService(bhLogger) {
            this.bhLogger = bhLogger;
        }
        /**
         * @param {?} input
         * @return {?}
         */
        BhCanvasRectService.prototype.rectToRectPoint = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (!input) {
                    this.bhLogger.warn("Rect is empty.", null, 'BhCanvasRectService', 'rectToRectPoint');
                    return null;
                }
                /** @type {?} */
                var rectPoint = {
                    leftBottom: {
                        x: input.x,
                        y: input.y + input.height
                    },
                    rightTop: {
                        x: input.x + input.width,
                        y: input.y
                    }
                };
                return rectPoint;
            };
        /**
         * @param {?} input
         * @return {?}
         */
        BhCanvasRectService.prototype.rectPointToRect = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (!input) {
                    this.bhLogger.warn("Rect Point is empty.", null, 'BhCanvasRectService', 'rectPointToRect');
                    return null;
                }
                /** @type {?} */
                var BhCanvasRect = {
                    x: input.leftBottom.x,
                    y: input.rightTop.y,
                    width: input.rightTop.x - input.leftBottom.x,
                    height: input.leftBottom.y - input.rightTop.y
                };
                return BhCanvasRect;
            };
        /**
         * @param {?} mainRect
         * @param {?} subRect
         * @return {?}
         */
        BhCanvasRectService.prototype.getCoverageRect = /**
         * @param {?} mainRect
         * @param {?} subRect
         * @return {?}
         */
            function (mainRect, subRect) {
                /** @type {?} */
                var mainRectPoint = this.rectToRectPoint(mainRect);
                /** @type {?} */
                var subRectPoint = this.rectToRectPoint(subRect);
                /** @type {?} */
                var coverageRectPoint = {
                    leftBottom: {
                        x: Math.max(mainRectPoint.leftBottom.x, subRectPoint.leftBottom.x),
                        y: Math.min(mainRectPoint.leftBottom.y, subRectPoint.leftBottom.y)
                    },
                    rightTop: {
                        x: Math.min(mainRectPoint.rightTop.x, subRectPoint.rightTop.x),
                        y: Math.max(mainRectPoint.rightTop.y, subRectPoint.rightTop.y)
                    }
                };
                if (coverageRectPoint.leftBottom.x > coverageRectPoint.rightTop.x) {
                    return null;
                }
                else if (coverageRectPoint.rightTop.y > coverageRectPoint.leftBottom.y) {
                    return null;
                }
                else {
                    return this.rectPointToRect(coverageRectPoint);
                }
            };
        /**
         * @param {?} mainRect
         * @param {?} coverageRect
         * @return {?}
         */
        BhCanvasRectService.prototype.getPercentageOfCoverageByCoverageRect = /**
         * @param {?} mainRect
         * @param {?} coverageRect
         * @return {?}
         */
            function (mainRect, coverageRect) {
                if (!coverageRect) {
                    return 0;
                }
                return Math.ceil((coverageRect.width * coverageRect.height) / (mainRect.width * mainRect.height) * 100);
            };
        /**
         * @param {?} mainRect
         * @param {?} subRect
         * @return {?}
         */
        BhCanvasRectService.prototype.getPercentageOfCoverage = /**
         * @param {?} mainRect
         * @param {?} subRect
         * @return {?}
         */
            function (mainRect, subRect) {
                /** @type {?} */
                var coverageRect = this.getCoverageRect(mainRect, subRect);
                if (!coverageRect) {
                    return 0;
                }
                return this.getPercentageOfCoverageByCoverageRect(mainRect, coverageRect);
            };
        BhCanvasRectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhCanvasRectService.ctorParameters = function () {
            return [
                { type: BhLogger }
            ];
        };
        /** @nocollapse */ BhCanvasRectService.ngInjectableDef = i0.defineInjectable({ factory: function BhCanvasRectService_Factory() { return new BhCanvasRectService(i0.inject(BhLogger)); }, token: BhCanvasRectService, providedIn: "root" });
        return BhCanvasRectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhFormatService = /** @class */ (function () {
        function BhFormatService() {
        }
        /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
        BhFormatService.prototype.toString = /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
            function (input, defaultValue) {
                if (typeof input === 'boolean') {
                    return input.toString();
                }
                return input ? input.toString() : (defaultValue ? defaultValue : '');
            };
        /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
        BhFormatService.prototype.toNumber = /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
            function (input, defaultValue) {
                if (typeof input === 'string' && !/^[0-9\-\.]*$/g.test(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                if (Array.isArray(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                input = parseInt(input, 10);
                if (isNaN(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                return input;
            };
        /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
        BhFormatService.prototype.toFloat = /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
            function (input, defaultValue) {
                if (typeof input === 'string' && !/^[0-9\-\.]*$/g.test(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                if (Array.isArray(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                input = parseFloat(input);
                if (isNaN(input)) {
                    return (defaultValue ? defaultValue : 0);
                }
                return input;
            };
        /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
        BhFormatService.prototype.toBoolean = /**
         * @param {?} input
         * @param {?=} defaultValue
         * @return {?}
         */
            function (input, defaultValue) {
                if (typeof input === 'string') {
                    if (input === 'true') {
                        return true;
                    }
                    else if (input === 'false') {
                        return false;
                    }
                }
                if (typeof input !== 'boolean') {
                    return (defaultValue ? defaultValue : false);
                }
                return input ? true : false;
            };
        /**
         * @param {?} input
         * @param {?} chunkSize
         * @return {?}
         */
        BhFormatService.prototype.toArrayChunk = /**
         * @param {?} input
         * @param {?} chunkSize
         * @return {?}
         */
            function (input, chunkSize) {
                if (!input || input.length <= 0) {
                    return [[]];
                }
                chunkSize = this.toNumber(chunkSize);
                if (chunkSize <= 0) {
                    return [input];
                }
                /** @type {?} */
                var results = [];
                /** @type {?} */
                var inputClone = input.slice(0);
                while (inputClone.length) {
                    results.push(inputClone.splice(0, chunkSize));
                }
                return results;
            };
        /**
         * @param {?} input
         * @return {?}
         */
        BhFormatService.prototype.tsToDate = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                input = this.toNumber(input);
                return new Date(input * 1000);
            };
        /**
         * @param {?} input
         * @return {?}
         */
        BhFormatService.prototype.dateToTs = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (!input) {
                    input = new Date();
                }
                return Math.floor(input.getTime() / 1000);
            };
        BhFormatService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhFormatService.ctorParameters = function () { return []; };
        /** @nocollapse */ BhFormatService.ngInjectableDef = i0.defineInjectable({ factory: function BhFormatService_Factory() { return new BhFormatService(); }, token: BhFormatService, providedIn: "root" });
        return BhFormatService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ BhModel = /** @class */ (function () {
        function BhModel() {
        }
        /**
         * @return {?}
         */
        BhModel.prototype.get = /**
         * @return {?}
         */
            function () {
                if (this.model) {
                    return this.model;
                }
                else {
                    return this.getDefault();
                }
            };
        /**
         * @param {?} input
         * @return {?}
         */
        BhModel.prototype.set = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                this.model = input;
            };
        /**
         * @return {?}
         */
        BhModel.prototype.hasModel = /**
         * @return {?}
         */
            function () {
                return this.model ? true : false;
            };
        return BhModel;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhFormService = /** @class */ (function () {
        function BhFormService() {
        }
        /**
         * @param {?} options
         * @param {?} value
         * @return {?}
         */
        BhFormService.prototype.getOptionFromValue = /**
         * @param {?} options
         * @param {?} value
         * @return {?}
         */
            function (options, value) {
                var e_1, _a;
                try {
                    for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                        var option = options_1_1.value;
                        if (option.value === value) {
                            return option;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (options_1_1 && !options_1_1.done && (_a = options_1.return))
                            _a.call(options_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return null;
            };
        BhFormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhFormService.ctorParameters = function () { return []; };
        /** @nocollapse */ BhFormService.ngInjectableDef = i0.defineInjectable({ factory: function BhFormService_Factory() { return new BhFormService(); }, token: BhFormService, providedIn: "root" });
        return BhFormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhHttpService = /** @class */ (function () {
        function BhHttpService(bhFormatService) {
            this.bhFormatService = bhFormatService;
        }
        /**
         * @param {?} params
         * @return {?}
         */
        BhHttpService.prototype.paramsToQueryString = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var queryStringArray = [];
                for (var k in params) {
                    /** @type {?} */
                    var value = this.bhFormatService.toString(params[k]);
                    if (value) {
                        value = encodeURIComponent(value.toString());
                    }
                    else {
                        value = '';
                    }
                    queryStringArray.push(k + "=" + value);
                }
                return queryStringArray.join('&');
            };
        /**
         * @param {?} params
         * @return {?}
         */
        BhHttpService.prototype.paramsToHttpParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var httpParams = new http.HttpParams();
                for (var k in params) {
                    httpParams = httpParams.set(k, this.bhFormatService.toString(params[k]));
                }
                return httpParams;
            };
        BhHttpService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhHttpService.ctorParameters = function () {
            return [
                { type: BhFormatService }
            ];
        };
        /** @nocollapse */ BhHttpService.ngInjectableDef = i0.defineInjectable({ factory: function BhHttpService_Factory() { return new BhHttpService(i0.inject(BhFormatService)); }, token: BhHttpService, providedIn: "root" });
        return BhHttpService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserCameraComponent = /** @class */ (function () {
        function UserCameraComponent(bhLogger) {
            this.bhLogger = bhLogger;
            this.width = 640;
            this.height = 480;
            this.onReady = new i0.EventEmitter();
            this.onError = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        UserCameraComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.video = this.videoElement.nativeElement;
                if (!this.facingMode || this.facingMode !== 'environment') {
                    this.facingMode = 'user';
                }
                window.navigator.mediaDevices.getUserMedia({
                    video: {
                        width: {
                            exact: this.width
                        },
                        height: {
                            exact: this.height
                        },
                        deviceId: this.deviceId,
                        facingMode: this.facingMode
                    },
                    audio: false
                }).then(function (stream) {
                    _this.bhLogger.log("User camera is ready.", null, 'UserCameraComponent', 'ngAfterViewInit');
                    _this.video.srcObject = stream;
                    _this.onReady.emit(_this.video);
                }).catch(function (error) {
                    _this.bhLogger.warn("Unable to get camera stream.", error, 'UserCameraComponent', 'ngAfterViewInit');
                    _this.onError.emit(error);
                });
            };
        UserCameraComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bh-user-camera',
                        template: "<video [width]=\"width\" [height]=\"height\" #userCamera></video>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        UserCameraComponent.ctorParameters = function () {
            return [
                { type: BhLogger }
            ];
        };
        UserCameraComponent.propDecorators = {
            videoElement: [{ type: i0.ViewChild, args: ['userCamera',] }],
            width: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            deviceId: [{ type: i0.Input }],
            facingMode: [{ type: i0.Input }],
            onReady: [{ type: i0.Output }],
            onError: [{ type: i0.Output }]
        };
        return UserCameraComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhNativeModule = /** @class */ (function () {
        function BhNativeModule() {
        }
        BhNativeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            UserCameraComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            UserCameraComponent
                        ]
                    },] }
        ];
        return BhNativeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BhLocalstorageService = /** @class */ (function () {
        function BhLocalstorageService(bhLogger) {
            this.bhLogger = bhLogger;
            if (!window.localStorage) {
                throw new Error("Unsupported localStorage.");
            }
        }
        /**
         * @template T
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        BhLocalstorageService.prototype.set = /**
         * @template T
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                window.localStorage.setItem(key, JSON.stringify(value));
            };
        /**
         * @template T
         * @param {?} key
         * @return {?}
         */
        BhLocalstorageService.prototype.get = /**
         * @template T
         * @param {?} key
         * @return {?}
         */
            function (key) {
                /** @type {?} */
                var value = window.localStorage.getItem(key);
                if (value && value != "undefined" && value != "null") {
                    return JSON.parse(value);
                }
                this.bhLogger.log("\"" + key + "\" value not found in storage.", { key: key }, 'BhLocalstorageService', 'get');
                return null;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        BhLocalstorageService.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                window.localStorage.removeItem(key);
            };
        BhLocalstorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BhLocalstorageService.ctorParameters = function () {
            return [
                { type: BhLogger }
            ];
        };
        /** @nocollapse */ BhLocalstorageService.ngInjectableDef = i0.defineInjectable({ factory: function BhLocalstorageService_Factory() { return new BhLocalstorageService(i0.inject(BhLogger)); }, token: BhLocalstorageService, providedIn: "root" });
        return BhLocalstorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BhCanvasRectService = BhCanvasRectService;
    exports.BhFormatService = BhFormatService;
    exports.BhLogger = BhLogger;
    exports.BhModel = BhModel;
    exports.BhFormService = BhFormService;
    exports.BhHttpService = BhHttpService;
    exports.BhNativeModule = BhNativeModule;
    exports.UserCameraComponent = UserCameraComponent;
    exports.BhLocalstorageService = BhLocalstorageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=bh-lib.umd.js.map