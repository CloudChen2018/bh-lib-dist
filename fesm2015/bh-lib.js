import { HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Component, ViewChild, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhLogger {
    constructor() { }
    /**
     * @param {?} logType
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    toLogText(logType, logMsg, logContext, logModule, logFunc) {
        /** @type {?} */
        var LogText = [];
        LogText.push(`[${logType}]`);
        if (logModule) {
            if (logFunc) {
                LogText.push(`[${logModule}::${logFunc}]`);
            }
            else {
                LogText.push(`[${logModule}]`);
            }
        }
        LogText.push(` ${logMsg}`);
        if (logContext) {
            for (let k in logContext) {
                if (logContext[k] && logContext[k] instanceof Error) {
                    logContext[k] = logContext[k].message;
                }
            }
            LogText.push(` [context: ${JSON.stringify(logContext)}]`);
        }
        return LogText.join('');
    }
    /**
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    log(logMsg, logContext, logModule, logFunc) {
        console.log(this.toLogText('LOG', logMsg, logContext, logModule, logFunc));
    }
    /**
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    debug(logMsg, logContext, logModule, logFunc) {
        console.trace(this.toLogText('DEBUG', logMsg, logContext, logModule, logFunc));
    }
    /**
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    info(logMsg, logContext, logModule, logFunc) {
        console.info(this.toLogText('INFO', logMsg, logContext, logModule, logFunc));
    }
    /**
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    warn(logMsg, logContext, logModule, logFunc) {
        console.warn(this.toLogText('WARN', logMsg, logContext, logModule, logFunc));
    }
    /**
     * @param {?} logMsg
     * @param {?=} logContext
     * @param {?=} logModule
     * @param {?=} logFunc
     * @return {?}
     */
    error(logMsg, logContext, logModule, logFunc) {
        console.error(this.toLogText('ERROR', logMsg, logContext, logModule, logFunc));
    }
}
BhLogger.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhLogger.ctorParameters = () => [];
/** @nocollapse */ BhLogger.ngInjectableDef = defineInjectable({ factory: function BhLogger_Factory() { return new BhLogger(); }, token: BhLogger, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhCanvasRectService {
    /**
     * @param {?} bhLogger
     */
    constructor(bhLogger) {
        this.bhLogger = bhLogger;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    rectToRectPoint(input) {
        if (!input) {
            this.bhLogger.warn(`Rect is empty.`, null, 'BhCanvasRectService', 'rectToRectPoint');
            return null;
        }
        /** @type {?} */
        let rectPoint = {
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
    }
    /**
     * @param {?} input
     * @return {?}
     */
    rectPointToRect(input) {
        if (!input) {
            this.bhLogger.warn(`Rect Point is empty.`, null, 'BhCanvasRectService', 'rectPointToRect');
            return null;
        }
        /** @type {?} */
        let BhCanvasRect = {
            x: input.leftBottom.x,
            y: input.rightTop.y,
            width: input.rightTop.x - input.leftBottom.x,
            height: input.leftBottom.y - input.rightTop.y
        };
        return BhCanvasRect;
    }
    /**
     * @param {?} mainRect
     * @param {?} subRect
     * @return {?}
     */
    getCoverageRect(mainRect, subRect) {
        /** @type {?} */
        let mainRectPoint = this.rectToRectPoint(mainRect);
        /** @type {?} */
        let subRectPoint = this.rectToRectPoint(subRect);
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
    }
    /**
     * @param {?} mainRect
     * @param {?} coverageRect
     * @return {?}
     */
    getPercentageOfCoverageByCoverageRect(mainRect, coverageRect) {
        if (!coverageRect) {
            return 0;
        }
        return Math.ceil((coverageRect.width * coverageRect.height) / (mainRect.width * mainRect.height) * 100);
    }
    /**
     * @param {?} mainRect
     * @param {?} subRect
     * @return {?}
     */
    getPercentageOfCoverage(mainRect, subRect) {
        /** @type {?} */
        let coverageRect = this.getCoverageRect(mainRect, subRect);
        if (!coverageRect) {
            return 0;
        }
        return this.getPercentageOfCoverageByCoverageRect(mainRect, coverageRect);
    }
}
BhCanvasRectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhCanvasRectService.ctorParameters = () => [
    { type: BhLogger }
];
/** @nocollapse */ BhCanvasRectService.ngInjectableDef = defineInjectable({ factory: function BhCanvasRectService_Factory() { return new BhCanvasRectService(inject(BhLogger)); }, token: BhCanvasRectService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhFormatService {
    constructor() { }
    /**
     * @param {?} input
     * @param {?=} defaultValue
     * @return {?}
     */
    toString(input, defaultValue) {
        if (typeof input === 'boolean') {
            return input.toString();
        }
        return input ? input.toString() : (defaultValue ? defaultValue : '');
    }
    /**
     * @param {?} input
     * @param {?=} defaultValue
     * @return {?}
     */
    toNumber(input, defaultValue) {
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
    }
    /**
     * @param {?} input
     * @param {?=} defaultValue
     * @return {?}
     */
    toFloat(input, defaultValue) {
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
    }
    /**
     * @param {?} input
     * @param {?=} defaultValue
     * @return {?}
     */
    toBoolean(input, defaultValue) {
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
    }
    /**
     * @param {?} input
     * @param {?} chunkSize
     * @return {?}
     */
    toArrayChunk(input, chunkSize) {
        if (!input || input.length <= 0) {
            return [[]];
        }
        chunkSize = this.toNumber(chunkSize);
        if (chunkSize <= 0) {
            return [input];
        }
        /** @type {?} */
        let results = [];
        /** @type {?} */
        let inputClone = input.slice(0);
        while (inputClone.length) {
            results.push(inputClone.splice(0, chunkSize));
        }
        return results;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    tsToDate(input) {
        input = this.toNumber(input);
        return new Date(input * 1000);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    dateToTs(input) {
        if (!input) {
            input = new Date();
        }
        return Math.floor(input.getTime() / 1000);
    }
}
BhFormatService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhFormatService.ctorParameters = () => [];
/** @nocollapse */ BhFormatService.ngInjectableDef = defineInjectable({ factory: function BhFormatService_Factory() { return new BhFormatService(); }, token: BhFormatService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class BhModel {
    /**
     * @return {?}
     */
    get() {
        if (this.model) {
            return this.model;
        }
        else {
            return this.getDefault();
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set(input) {
        this.model = input;
    }
    /**
     * @return {?}
     */
    hasModel() {
        return this.model ? true : false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhFormService {
    constructor() { }
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    getOptionFromValue(options, value) {
        for (let option of options) {
            if (option.value === value) {
                return option;
            }
        }
        return null;
    }
}
BhFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhFormService.ctorParameters = () => [];
/** @nocollapse */ BhFormService.ngInjectableDef = defineInjectable({ factory: function BhFormService_Factory() { return new BhFormService(); }, token: BhFormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhHttpService {
    /**
     * @param {?} bhFormatService
     */
    constructor(bhFormatService) {
        this.bhFormatService = bhFormatService;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    paramsToQueryString(params) {
        /** @type {?} */
        let queryStringArray = [];
        for (let k in params) {
            /** @type {?} */
            let value = this.bhFormatService.toString(params[k]);
            if (value) {
                value = encodeURIComponent(value.toString());
            }
            else {
                value = '';
            }
            queryStringArray.push(`${k}=${value}`);
        }
        return queryStringArray.join('&');
    }
    /**
     * @param {?} params
     * @return {?}
     */
    paramsToHttpParams(params) {
        /** @type {?} */
        let httpParams = new HttpParams();
        for (let k in params) {
            httpParams = httpParams.set(k, this.bhFormatService.toString(params[k]));
        }
        return httpParams;
    }
}
BhHttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhHttpService.ctorParameters = () => [
    { type: BhFormatService }
];
/** @nocollapse */ BhHttpService.ngInjectableDef = defineInjectable({ factory: function BhHttpService_Factory() { return new BhHttpService(inject(BhFormatService)); }, token: BhHttpService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserCameraComponent {
    /**
     * @param {?} bhLogger
     */
    constructor(bhLogger) {
        this.bhLogger = bhLogger;
        this.width = 640;
        this.height = 480;
        this.onReady = new EventEmitter();
        this.onError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        }).then((stream) => {
            this.bhLogger.log(`User camera is ready.`, null, 'UserCameraComponent', 'ngAfterViewInit');
            this.video.srcObject = stream;
            this.onReady.emit(this.video);
        }).catch((error) => {
            this.bhLogger.warn(`Unable to get camera stream.`, error, 'UserCameraComponent', 'ngAfterViewInit');
            this.onError.emit(error);
        });
    }
}
UserCameraComponent.decorators = [
    { type: Component, args: [{
                selector: 'bh-user-camera',
                template: "<video [width]=\"width\" [height]=\"height\" #userCamera></video>",
                styles: [""]
            }] }
];
/** @nocollapse */
UserCameraComponent.ctorParameters = () => [
    { type: BhLogger }
];
UserCameraComponent.propDecorators = {
    videoElement: [{ type: ViewChild, args: ['userCamera',] }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    deviceId: [{ type: Input }],
    facingMode: [{ type: Input }],
    onReady: [{ type: Output }],
    onError: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhNativeModule {
}
BhNativeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UserCameraComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    UserCameraComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BhLocalstorageService {
    /**
     * @param {?} bhLogger
     */
    constructor(bhLogger) {
        this.bhLogger = bhLogger;
        if (!window.localStorage) {
            throw new Error(`Unsupported localStorage.`);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    get(key) {
        /** @type {?} */
        let value = window.localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        this.bhLogger.log(`"${key}" value not found in storage.`, { key: key }, 'BhLocalstorageService', 'get');
        return null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        window.localStorage.removeItem(key);
    }
}
BhLocalstorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BhLocalstorageService.ctorParameters = () => [
    { type: BhLogger }
];
/** @nocollapse */ BhLocalstorageService.ngInjectableDef = defineInjectable({ factory: function BhLocalstorageService_Factory() { return new BhLocalstorageService(inject(BhLogger)); }, token: BhLocalstorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BhCanvasRectService, BhFormatService, BhLogger, BhModel, BhFormService, BhHttpService, BhNativeModule, UserCameraComponent, BhLocalstorageService };

//# sourceMappingURL=bh-lib.js.map