/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BhLogger.ctorParameters = function () { return []; };
    /** @nocollapse */ BhLogger.ngInjectableDef = i0.defineInjectable({ factory: function BhLogger_Factory() { return new BhLogger(); }, token: BhLogger, providedIn: "root" });
    return BhLogger;
}());
export { BhLogger };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtY29tbW9uL2JoLWxvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUtFO0lBQWdCLENBQUM7Ozs7Ozs7OztJQUVWLDRCQUFTOzs7Ozs7OztJQUFoQixVQUFpQixPQUFlLEVBQUUsTUFBYyxFQUFFLFVBQWlDLEVBQUUsU0FBa0IsRUFBRSxPQUFnQjs7WUFDbkgsT0FBTyxHQUFrQixFQUFFO1FBRS9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBSSxPQUFPLE1BQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFJLFNBQVMsVUFBSyxPQUFPLE1BQUcsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBSSxTQUFTLE1BQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQUksTUFBUSxDQUFDLENBQUM7UUFFM0IsSUFBSSxVQUFVLEVBQUU7WUFDZCxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDeEIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssRUFBRTtvQkFDbkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZDO2FBQ0Y7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQUcsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7O0lBRU0sc0JBQUc7Ozs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7O0lBRU0sd0JBQUs7Ozs7Ozs7SUFBWixVQUFhLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDcEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7Ozs7O0lBRU0sdUJBQUk7Ozs7Ozs7SUFBWCxVQUFZLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU0sdUJBQUk7Ozs7Ozs7SUFBWCxVQUFZLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU0sd0JBQUs7Ozs7Ozs7SUFBWixVQUFhLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDcEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7O2dCQXJERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzttQkFQRDtDQTREQyxBQXZERCxJQXVEQztTQXBEWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaExvZ2dlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyB0b0xvZ1RleHQobG9nVHlwZTogc3RyaW5nLCBsb2dNc2c6IHN0cmluZywgbG9nQ29udGV4dD86IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsb2dNb2R1bGU/OiBzdHJpbmcsIGxvZ0Z1bmM/OiBzdHJpbmcpIHtcclxuICAgIHZhciBMb2dUZXh0OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgIFxyXG4gICAgTG9nVGV4dC5wdXNoKGBbJHtsb2dUeXBlfV1gKTtcclxuXHJcbiAgICBpZiAobG9nTW9kdWxlKSB7XHJcbiAgICAgIGlmIChsb2dGdW5jKSB7XHJcbiAgICAgICAgTG9nVGV4dC5wdXNoKGBbJHtsb2dNb2R1bGV9Ojoke2xvZ0Z1bmN9XWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIExvZ1RleHQucHVzaChgWyR7bG9nTW9kdWxlfV1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIExvZ1RleHQucHVzaChgICR7bG9nTXNnfWApO1xyXG5cclxuICAgIGlmIChsb2dDb250ZXh0KSB7XHJcbiAgICAgIGZvciAobGV0IGsgaW4gbG9nQ29udGV4dCkge1xyXG4gICAgICAgIGlmIChsb2dDb250ZXh0W2tdICYmIGxvZ0NvbnRleHRba10gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgbG9nQ29udGV4dFtrXSA9IGxvZ0NvbnRleHRba10ubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIExvZ1RleHQucHVzaChgIFtjb250ZXh0OiAke0pTT04uc3RyaW5naWZ5KGxvZ0NvbnRleHQpfV1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTG9nVGV4dC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2cobG9nTXNnOiBzdHJpbmcsIGxvZ0NvbnRleHQ/OiBvYmplY3QsIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy50b0xvZ1RleHQoJ0xPRycsIGxvZ01zZywgbG9nQ29udGV4dCwgbG9nTW9kdWxlLCBsb2dGdW5jKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVidWcobG9nTXNnOiBzdHJpbmcsIGxvZ0NvbnRleHQ/OiBvYmplY3QsIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS50cmFjZSh0aGlzLnRvTG9nVGV4dCgnREVCVUcnLCBsb2dNc2csIGxvZ0NvbnRleHQsIGxvZ01vZHVsZSwgbG9nRnVuYykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluZm8obG9nTXNnOiBzdHJpbmcsIGxvZ0NvbnRleHQ/OiBvYmplY3QsIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5pbmZvKHRoaXMudG9Mb2dUZXh0KCdJTkZPJywgbG9nTXNnLCBsb2dDb250ZXh0LCBsb2dNb2R1bGUsIGxvZ0Z1bmMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB3YXJuKGxvZ01zZzogc3RyaW5nLCBsb2dDb250ZXh0Pzogb2JqZWN0LCBsb2dNb2R1bGU/OiBzdHJpbmcsIGxvZ0Z1bmM/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2Fybih0aGlzLnRvTG9nVGV4dCgnV0FSTicsIGxvZ01zZywgbG9nQ29udGV4dCwgbG9nTW9kdWxlLCBsb2dGdW5jKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXJyb3IobG9nTXNnOiBzdHJpbmcsIGxvZ0NvbnRleHQ/OiBvYmplY3QsIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5lcnJvcih0aGlzLnRvTG9nVGV4dCgnRVJST1InLCBsb2dNc2csIGxvZ0NvbnRleHQsIGxvZ01vZHVsZSwgbG9nRnVuYykpO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=