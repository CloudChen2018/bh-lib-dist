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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BhCanvasRectService.ctorParameters = function () { return [
        { type: BhLogger }
    ]; };
    /** @nocollapse */ BhCanvasRectService.ngInjectableDef = i0.defineInjectable({ factory: function BhCanvasRectService_Factory() { return new BhCanvasRectService(i0.inject(i1.BhLogger)); }, token: BhCanvasRectService, providedIn: "root" });
    return BhCanvasRectService;
}());
export { BhCanvasRectService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BhCanvasRectService.prototype.bhLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtY2FudmFzLXJlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JoLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9iaC1jYW52YXMvYmgtY2FudmFzLXJlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUcxRDtJQUtFLDZCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7Ozs7SUFFcEMsNkNBQWU7Ozs7SUFBdEIsVUFBdUIsS0FBbUI7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUcsU0FBUyxHQUFzQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQzFCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLO2dCQUN4QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDWDtTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSw2Q0FBZTs7OztJQUF0QixVQUF1QixLQUF3QjtRQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDM0YsT0FBTyxJ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Q2hlbiA8Y2xvdWRjaGVuMjAxNUBnbWFpbC5jb20+LiBBbGwgUmlnaHRzIFJlc2VydmVkIFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmhMb2dnZXIgfSBmcm9tICcuLi9iaC1jb21tb24vYmgtbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCaENhbnZhc1JlY3QsIEJoQ2FudmFzUmVjdFBvaW50IH0gZnJvbSAnLi9iaC1jYW52YXMtcmVjdC5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmhDYW52YXNSZWN0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmhMb2dnZXI6IEJoTG9nZ2VyKSB7IH1cclxuXHJcbiAgcHVibGljIHJlY3RUb1JlY3RQb2ludChpbnB1dDogQmhDYW52YXNSZWN0KTogQmhDYW52YXNSZWN0UG9pbnQge1xyXG4gICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICB0aGlzLmJoTG9nZ2VyLndhcm4oYFJlY3QgaXMgZW1wdHkuYCwgbnVsbCwgJ0JoQ2FudmFzUmVjdFNlcnZpY2UnLCAncmVjdFRvUmVjdFBvaW50Jyk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZWN0UG9pbnQ6IEJoQ2FudmFzUmVjdFBvaW50ID0ge1xyXG4gICAgICBsZWZ0Qm90dG9tOiB7XHJcbiAgICAgICAgeDogaW5wdXQueCxcclxuICAgICAgICB5OiBpbnB1dC55ICsgaW5wdXQuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIHJpZ2h0VG9wOiB7XHJcbiAgICAgICAgeDogaW5wdXQueCArIGlucHV0LndpZHRoLFxyXG4gICAgICAgIHk6IGlucHV0LnlcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gcmVjdFBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlY3RQb2ludFRvUmVjdChpbnB1dDogQmhDYW52YXNSZWN0UG9pbnQpOiBCaENhbnZhc1JlY3Qge1xyXG4gICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICB0aGlzLmJoTG9nZ2VyLndhcm4oYFJlY3QgUG9pbnQgaXMgZW1wdHkuYCwgbnVsbCwgJ0JoQ2FudmFzUmVjdFNlcnZpY2UnLCAncmVjdFBvaW50VG9SZWN0Jyk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBCaENhbnZhc1JlY3Q6IEJoQ2FudmFzUmVjdCA9IHtcclxuICAgICAgeDogaW5wdXQubGVmdEJvdHRvbS54LFxyXG4gICAgICB5OiBpbnB1dC5yaWdodFRvcC55LFxyXG4gICAgICB3aWR0aDogaW5wdXQucmlnaHRUb3AueCAtIGlucHV0LmxlZnRCb3R0b20ueCxcclxuICAgICAgaGVpZ2h0OiBpbnB1dC5sZWZ0Qm90dG9tLnkgLSBpbnB1dC5yaWdodFRvcC55XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBCaENhbnZhc1JlY3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q292ZXJhZ2VSZWN0KG1haW5SZWN0OiBCaENhbnZhc1JlY3QsIHN1YlJlY3Q6IEJoQ2FudmFzUmVjdCk6IEJoQ2FudmFzUmVjdCB7XHJcbiAgICBsZXQgbWFpblJlY3RQb2ludDogQmhDYW52YXNSZWN0UG9pbnQgPSB0aGlzLnJlY3RUb1JlY3RQb2ludChtYWluUmVjdCk7XHJcbiAgICBsZXQgc3ViUmVjdFBvaW50OiBCaENhbnZhc1JlY3RQb2ludCA9IHRoaXMucmVjdFRvUmVjdFBvaW50KHN1YlJlY3QpO1xyXG4gICAgXHJcbiAgICB2YXIgY292ZXJhZ2VSZWN0UG9pbnQ6IEJoQ2FudmFzUmVjdFBvaW50ID0ge1xyXG4gICAgICBsZWZ0Qm90dG9tOiB7XHJcbiAgICAgICAgeDogTWF0aC5tYXgobWFpblJlY3RQb2ludC5sZWZ0Qm90dG9tLngsIHN1YlJlY3RQb2ludC5sZWZ0Qm90dG9tLngpLFxyXG4gICAgICAgIHk6IE1hdGgubWluKG1haW5SZWN0UG9pbnQubGVmdEJvdHRvbS55LCBzdWJSZWN0UG9pbnQubGVmdEJvdHRvbS55KVxyXG4gICAgICB9LFxyXG4gICAgICByaWdodFRvcDoge1xyXG4gICAgICAgIHg6IE1hdGgubWluKG1haW5SZWN0UG9pbnQucmlnaHRUb3AueCwgc3ViUmVjdFBvaW50LnJpZ2h0VG9wLngpLFxyXG4gICAgICAgIHk6IE1hdGgubWF4KG1haW5SZWN0UG9pbnQucmlnaHRUb3AueSwgc3ViUmVjdFBvaW50LnJpZ2h0VG9wLnkpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChjb3ZlcmFnZVJlY3RQb2ludC5sZWZ0Qm90dG9tLnggPiBjb3ZlcmFnZVJlY3RQb2ludC5yaWdodFRvcC54KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChjb3ZlcmFnZVJlY3RQb2ludC5yaWdodFRvcC55ID4gY292ZXJhZ2VSZWN0UG9pbnQubGVmdEJvdHRvbS55KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVjdFBvaW50VG9SZWN0KGNvdmVyYWdlUmVjdFBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQZXJjZW50YWdlT2ZDb3ZlcmFnZUJ5Q292ZXJhZ2VSZWN0KG1haW5SZWN0OiBCaENhbnZhc1JlY3QsIGNvdmVyYWdlUmVjdDogQmhDYW52YXNSZWN0KTogbnVtYmVyIHtcclxuICAgIGlmICghY292ZXJhZ2VSZWN0KSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKChjb3ZlcmFnZVJlY3Qud2lkdGggKiBjb3ZlcmFnZVJlY3QuaGVpZ2h0KSAvIChtYWluUmVjdC53aWR0aCAqIG1haW5SZWN0LmhlaWdodCkgKiAxMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBlcmNlbnRhZ2VPZkNvdmVyYWdlKG1haW5SZWN0OiBCaENhbnZhc1JlY3QsIHN1YlJlY3Q6IEJoQ2FudmFzUmVjdCk6IG51bWJlciB7XHJcbiAgICBsZXQgY292ZXJhZ2VSZWN0OiBCaENhbnZhc1JlY3QgPSB0aGlzLmdldENvdmVyYWdlUmVjdChtYWluUmVjdCwgc3ViUmVjdCk7XHJcbiAgICBcclxuICAgIGlmICghY292ZXJhZ2VSZWN0KSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5nZXRQZXJjZW50YWdlT2ZDb3ZlcmFnZUJ5Q292ZXJhZ2VSZWN0KG1haW5SZWN0LCBjb3ZlcmFnZVJlY3QpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19