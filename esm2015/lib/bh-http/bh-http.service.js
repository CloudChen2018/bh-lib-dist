/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BhFormatService } from '../bh-common/bh-format.service';
import * as i0 from "@angular/core";
import * as i1 from "../bh-common/bh-format.service";
export class BhHttpService {
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
/** @nocollapse */ BhHttpService.ngInjectableDef = i0.defineInjectable({ factory: function BhHttpService_Factory() { return new BhHttpService(i0.inject(i1.BhFormatService)); }, token: BhHttpService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BhHttpService.prototype.bhFormatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmgtbGliLyIsInNvdXJjZXMiOlsibGliL2JoLWh0dHAvYmgtaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQU1qRSxNQUFNLE9BQU8sYUFBYTs7OztJQUV4QixZQUNVLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN0QyxDQUFDOzs7OztJQUVFLG1CQUFtQixDQUFDLE1BQW9COztZQUN6QyxnQkFBZ0IsR0FBa0IsRUFBRTtRQUV4QyxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTs7Z0JBQ2hCLEtBQUssR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDWjtZQUVELGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxNQUFvQjs7WUFDeEMsVUFBVSxHQUFlLElBQUksVUFBVSxFQUFFO1FBRTdDLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ3BCLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBbkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGVBQWU7Ozs7Ozs7O0lBU3BCLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIMKpIENsb3VkQ2hlbiA8Y2xvdWRjaGVuMjAxNUBnbWFpbC5jb20+LiBBbGwgUmlnaHRzIFJlc2VydmVkIFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQmhGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vYmgtY29tbW9uL2JoLWZvcm1hdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmhIdHRwUGFyYW1zIH0gZnJvbSAnLi9iaC1odHRwLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGJoRm9ybWF0U2VydmljZTogQmhGb3JtYXRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIHBhcmFtc1RvUXVlcnlTdHJpbmcocGFyYW1zOiBCaEh0dHBQYXJhbXMpOiBzdHJpbmcge1xyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBrIGluIHBhcmFtcykge1xyXG4gICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IHRoaXMuYmhGb3JtYXRTZXJ2aWNlLnRvU3RyaW5nKHBhcmFtc1trXSk7XHJcblxyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBxdWVyeVN0cmluZ0FycmF5LnB1c2goYCR7a309JHt2YWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcXVlcnlTdHJpbmdBcnJheS5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFyYW1zVG9IdHRwUGFyYW1zKHBhcmFtczogQmhIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcbiAgICBsZXQgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgayBpbiBwYXJhbXMpIHtcclxuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGssIHRoaXMuYmhGb3JtYXRTZXJ2aWNlLnRvU3RyaW5nKHBhcmFtc1trXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBodHRwUGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=