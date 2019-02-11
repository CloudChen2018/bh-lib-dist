/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BhLogger {
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
/** @nocollapse */ BhLogger.ngInjectableDef = i0.defineInjectable({ factory: function BhLogger_Factory() { return new BhLogger(); }, token: BhLogger, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtY29tbW9uL2JoLWxvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sUUFBUTtJQUVuQixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lBRVYsU0FBUyxDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsVUFBaUMsRUFBRSxTQUFrQixFQUFFLE9BQWdCOztZQUNuSCxPQUFPLEdBQWtCLEVBQUU7UUFFL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxLQUFLLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FDRjtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQ25ELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUN2QzthQUNGO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7O0lBRU0sR0FBRyxDQUFDLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7O0lBRU0sS0FBSyxDQUFDLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDcEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7Ozs7O0lBRU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7O0lBRU0sS0FBSyxDQUFDLE1BQWMsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDcEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OztZQXJERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiDCqSBDbG91ZENoZW4gPGNsb3VkY2hlbjIwMTVAZ21haWwuY29tPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJoTG9nZ2VyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHRvTG9nVGV4dChsb2dUeXBlOiBzdHJpbmcsIGxvZ01zZzogc3RyaW5nLCBsb2dDb250ZXh0Pzoge1trZXk6IHN0cmluZ106IGFueX0sIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZykge1xyXG4gICAgdmFyIExvZ1RleHQ6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgXHJcbiAgICBMb2dUZXh0LnB1c2goYFske2xvZ1R5cGV9XWApO1xyXG5cclxuICAgIGlmIChsb2dNb2R1bGUpIHtcclxuICAgICAgaWYgKGxvZ0Z1bmMpIHtcclxuICAgICAgICBMb2dUZXh0LnB1c2goYFske2xvZ01vZHVsZX06OiR7bG9nRnVuY31dYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTG9nVGV4dC5wdXNoKGBbJHtsb2dNb2R1bGV9XWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTG9nVGV4dC5wdXNoKGAgJHtsb2dNc2d9YCk7XHJcblxyXG4gICAgaWYgKGxvZ0NvbnRleHQpIHtcclxuICAgICAgZm9yIChsZXQgayBpbiBsb2dDb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKGxvZ0NvbnRleHRba10gJiYgbG9nQ29udGV4dFtrXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICBsb2dDb250ZXh0W2tdID0gbG9nQ29udGV4dFtrXS5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgTG9nVGV4dC5wdXNoKGAgW2NvbnRleHQ6ICR7SlNPTi5zdHJpbmdpZnkobG9nQ29udGV4dCl9XWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBMb2dUZXh0LmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZyhsb2dNc2c6IHN0cmluZywgbG9nQ29udGV4dD86IG9iamVjdCwgbG9nTW9kdWxlPzogc3RyaW5nLCBsb2dGdW5jPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvTG9nVGV4dCgnTE9HJywgbG9nTXNnLCBsb2dDb250ZXh0LCBsb2dNb2R1bGUsIGxvZ0Z1bmMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWJ1Zyhsb2dNc2c6IHN0cmluZywgbG9nQ29udGV4dD86IG9iamVjdCwgbG9nTW9kdWxlPzogc3RyaW5nLCBsb2dGdW5jPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLnRyYWNlKHRoaXMudG9Mb2dUZXh0KCdERUJVRycsIGxvZ01zZywgbG9nQ29udGV4dCwgbG9nTW9kdWxlLCBsb2dGdW5jKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5mbyhsb2dNc2c6IHN0cmluZywgbG9nQ29udGV4dD86IG9iamVjdCwgbG9nTW9kdWxlPzogc3RyaW5nLCBsb2dGdW5jPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmluZm8odGhpcy50b0xvZ1RleHQoJ0lORk8nLCBsb2dNc2csIGxvZ0NvbnRleHQsIGxvZ01vZHVsZSwgbG9nRnVuYykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdhcm4obG9nTXNnOiBzdHJpbmcsIGxvZ0NvbnRleHQ/OiBvYmplY3QsIGxvZ01vZHVsZT86IHN0cmluZywgbG9nRnVuYz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKHRoaXMudG9Mb2dUZXh0KCdXQVJOJywgbG9nTXNnLCBsb2dDb250ZXh0LCBsb2dNb2R1bGUsIGxvZ0Z1bmMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcnJvcihsb2dNc2c6IHN0cmluZywgbG9nQ29udGV4dD86IG9iamVjdCwgbG9nTW9kdWxlPzogc3RyaW5nLCBsb2dGdW5jPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmVycm9yKHRoaXMudG9Mb2dUZXh0KCdFUlJPUicsIGxvZ01zZywgbG9nQ29udGV4dCwgbG9nTW9kdWxlLCBsb2dGdW5jKSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==