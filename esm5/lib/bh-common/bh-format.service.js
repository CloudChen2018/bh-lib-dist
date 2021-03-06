/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BhFormatService.ctorParameters = function () { return []; };
    /** @nocollapse */ BhFormatService.ngInjectableDef = i0.defineInjectable({ factory: function BhFormatService_Factory() { return new BhFormatService(); }, token: BhFormatService, providedIn: "root" });
    return BhFormatService;
}());
export { BhFormatService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtY29tbW9uL2JoLWZvcm1hdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUtFO0lBQWdCLENBQUM7Ozs7OztJQUVWLGtDQUFROzs7OztJQUFmLFVBQWdCLEtBQVUsRUFBRSxZQUFxQjtRQUMvQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtRQUVELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVNLGtDQUFROzs7OztJQUFmLFVBQWdCLEtBQVUsRUFBRSxZQUFxQjtRQUMvQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFlB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QUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBUEQ7Q0EwR0MsQUFyR0QsSUFxR0M7U0FsR1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIMKpIENsb3VkQ2hlbiA8Y2xvdWRjaGVuMjAxNUBnbWFpbC5jb20+LiBBbGwgUmlnaHRzIFJlc2VydmVkIFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmhGb3JtYXRTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHRvU3RyaW5nKGlucHV0OiBhbnksIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIGlucHV0LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlucHV0ID8gaW5wdXQudG9TdHJpbmcoKSA6IChkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9OdW1iZXIoaW5wdXQ6IGFueSwgZGVmYXVsdFZhbHVlPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnICYmICEvXlswLTlcXC1cXC5dKiQvZy50ZXN0KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0ID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcclxuXHJcbiAgICBpZiAoaXNOYU4oaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiAoZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQoaW5wdXQ6IGFueSwgZGVmYXVsdFZhbHVlPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnICYmICEvXlswLTlcXC1cXC5dKiQvZy50ZXN0KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0ID0gcGFyc2VGbG9hdChpbnB1dCk7XHJcblxyXG4gICAgaWYgKGlzTmFOKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Jvb2xlYW4oaW5wdXQ6IGFueSwgZGVmYXVsdFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKGlucHV0ID09PSAndHJ1ZScpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gKGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheUNodW5rKGlucHV0OiBBcnJheTxhbnk+LCBjaHVua1NpemU6IG51bWJlcik6IEFycmF5PEFycmF5PGFueT4+IHtcclxuICAgIGlmICghaW5wdXQgfHwgaW5wdXQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuIFtbXV07XHJcbiAgICB9XHJcblxyXG4gICAgY2h1bmtTaXplID0gdGhpcy50b051bWJlcihjaHVua1NpemUpO1xyXG5cclxuICAgIGlmIChjaHVua1NpemUgPD0gMCkge1xyXG4gICAgICByZXR1cm4gW2lucHV0XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gICAgbGV0IGlucHV0Q2xvbmU6IEFycmF5PGFueT4gPSBpbnB1dC5zbGljZSgwKTtcclxuICAgIFxyXG4gICAgd2hpbGUgKGlucHV0Q2xvbmUubGVuZ3RoKSB7XHJcbiAgICAgIHJlc3VsdHMucHVzaChpbnB1dENsb25lLnNwbGljZSgwLCBjaHVua1NpemUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHNUb0RhdGUoaW5wdXQ6IGFueSk6IERhdGUge1xyXG4gICAgaW5wdXQgPSB0aGlzLnRvTnVtYmVyKGlucHV0KTtcclxuICAgIHJldHVybiBuZXcgRGF0ZShpbnB1dCAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVUb1RzKGlucHV0OiBEYXRlKTogbnVtYmVyIHtcclxuICAgIGlmICghaW5wdXQpIHtcclxuICAgICAgaW5wdXQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLmZsb29yKGlucHV0LmdldFRpbWUoKSAvIDEwMDApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19