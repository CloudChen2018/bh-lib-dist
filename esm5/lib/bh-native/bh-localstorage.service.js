/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import { BhLogger } from '../bh-common/bh-logger.service';
import * as i0 from "@angular/core";
import * as i1 from "../bh-common/bh-logger.service";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BhLocalstorageService.ctorParameters = function () { return [
        { type: BhLogger }
    ]; };
    /** @nocollapse */ BhLocalstorageService.ngInjectableDef = i0.defineInjectable({ factory: function BhLocalstorageService_Factory() { return new BhLocalstorageService(i0.inject(i1.BhLogger)); }, token: BhLocalstorageService, providedIn: "root" });
    return BhLocalstorageService;
}());
export { BhLocalstorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BhLocalstorageService.prototype.bhLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtbmF0aXZlL2JoLWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRTFEO0lBS0UsK0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVNLG1DQUFHOzs7Ozs7SUFBVixVQUFjLEdBQVcsRUFBRSxLQUFRO1FBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU0sbUNBQUc7Ozs7O0lBQVYsVUFBYyxHQUFXOztZQUNuQixLQUFLLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXBELElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFJLEdBQUcsbUNBQStCLEVBQUUsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEcsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLHNDQUFNOzs7O0lBQWIsVUFBYyxHQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFFBQVE7OztnQ0FMakI7Q0FvQ0MsQUE3QkQsSUE2QkM7U0ExQlkscUJBQXFCOzs7Ozs7SUFFcEIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCaExvZ2dlciB9IGZyb20gJy4uL2JoLWNvbW1vbi9iaC1sb2dnZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaExvY2Fsc3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJoTG9nZ2VyOiBCaExvZ2dlcikge1xyXG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbG9jYWxTdG9yYWdlLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldDxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0PFQ+KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICBsZXQgdmFsdWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9IFwibnVsbFwiKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJoTG9nZ2VyLmxvZyhgXCIke2tleX1cIiB2YWx1ZSBub3QgZm91bmQgaW4gc3RvcmFnZS5gLCB7a2V5OiBrZXl9LCAnQmhMb2NhbHN0b3JhZ2VTZXJ2aWNlJywgJ2dldCcpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcbn1cclxuIl19