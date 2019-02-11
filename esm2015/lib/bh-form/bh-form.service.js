/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BhFormService {
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
/** @nocollapse */ BhFormService.ngInjectableDef = i0.defineInjectable({ factory: function BhFormService_Factory() { return new BhFormService(); }, token: BhFormService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmgtbGliLyIsInNvdXJjZXMiOlsibGliL2JoLWZvcm0vYmgtZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zQyxNQUFNLE9BQU8sYUFBYTtJQUV4QixnQkFBZ0IsQ0FBQzs7Ozs7O0lBRWpCLGtCQUFrQixDQUFDLE9BQWtDLEVBQUUsS0FBZ0M7UUFDckYsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDMUIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDMUIsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiDCqSBDbG91ZENoZW4gPGNsb3VkY2hlbjIwMTVAZ21haWwuY29tPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJoRnJvbVNlbGVjdE9wdGlvbiB9IGZyb20gJy4vYmgtZm9ybS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmhGb3JtU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdldE9wdGlvbkZyb21WYWx1ZShvcHRpb25zOiBBcnJheTxCaEZyb21TZWxlY3RPcHRpb24+LCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbik6IEJoRnJvbVNlbGVjdE9wdGlvbiB7XHJcbiAgICBmb3IgKGxldCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19