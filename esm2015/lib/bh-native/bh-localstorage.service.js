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
export class BhLocalstorageService {
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
/** @nocollapse */ BhLocalstorageService.ngInjectableDef = i0.defineInjectable({ factory: function BhLocalstorageService_Factory() { return new BhLocalstorageService(i0.inject(i1.BhLogger)); }, token: BhLocalstorageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BhLocalstorageService.prototype.bhLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtbmF0aXZlL2JoLWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBSzFELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFaEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sR0FBRyxDQUFJLEdBQVcsRUFBRSxLQUFRO1FBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU0sR0FBRyxDQUFJLEdBQVc7O1lBQ25CLEtBQUssR0FBVyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFcEQsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRywrQkFBK0IsRUFBRSxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBNUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFFBQVE7Ozs7Ozs7O0lBT0gseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCaExvZ2dlciB9IGZyb20gJy4uL2JoLWNvbW1vbi9iaC1sb2dnZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaExvY2Fsc3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJoTG9nZ2VyOiBCaExvZ2dlcikge1xyXG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbG9jYWxTdG9yYWdlLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldDxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0PFQ+KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICBsZXQgdmFsdWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9IFwibnVsbFwiKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJoTG9nZ2VyLmxvZyhgXCIke2tleX1cIiB2YWx1ZSBub3QgZm91bmQgaW4gc3RvcmFnZS5gLCB7a2V5OiBrZXl9LCAnQmhMb2NhbHN0b3JhZ2VTZXJ2aWNlJywgJ2dldCcpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcbn1cclxuIl19