/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
            for (var options_1 = tslib_1.__values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                var option = options_1_1.value;
                if (option.value === value) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    BhFormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BhFormService.ctorParameters = function () { return []; };
    /** @nocollapse */ BhFormService.ngInjectableDef = i0.defineInjectable({ factory: function BhFormService_Factory() { return new BhFormService(); }, token: BhFormService, providedIn: "root" });
    return BhFormService;
}());
export { BhFormService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmgtbGliLyIsInNvdXJjZXMiOlsibGliL2JoLWZvcm0vYmgtZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0M7SUFLRTtJQUFnQixDQUFDOzs7Ozs7SUFFakIsMENBQWtCOzs7OztJQUFsQixVQUFtQixPQUFrQyxFQUFFLEtBQWdDOzs7WUFDckYsS0FBbUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtnQkFBdkIsSUFBSSxNQUFNLG9CQUFBO2dCQUNiLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQzFCLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBVEQ7Q0F1QkMsQUFoQkQsSUFnQkM7U0FiWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCaEZyb21TZWxlY3RPcHRpb24gfSBmcm9tICcuL2JoLWZvcm0uaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJoRm9ybVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZXRPcHRpb25Gcm9tVmFsdWUob3B0aW9uczogQXJyYXk8QmhGcm9tU2VsZWN0T3B0aW9uPiwgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pOiBCaEZyb21TZWxlY3RPcHRpb24ge1xyXG4gICAgZm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==