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
export class BhCanvasRectService {
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
/** @nocollapse */ BhCanvasRectService.ngInjectableDef = i0.defineInjectable({ factory: function BhCanvasRectService_Factory() { return new BhCanvasRectService(i0.inject(i1.BhLogger)); }, token: BhCanvasRectService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BhCanvasRectService.prototype.bhLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtY2FudmFzLXJlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JoLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9iaC1jYW52YXMvYmgtY2FudmFzLXJlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQU0xRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRTlCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7OztJQUVwQyxlQUFlLENBQUMsS0FBbUI7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUcsU0FBUyxHQUFzQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQzFCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLO2dCQUN4QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDWDtTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsS0FBd0I7UUFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUcsWUFBWSxHQUFpQjtZQUMvQixDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUFDLFFBQXNCLEVBQUUsT0FBcUI7O1lBQzlELGFBQWEsR0FBc0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7O1lBQ2pFLFlBQVksR0FBc0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O1lBRS9ELGlCQUFpQixHQUFzQjtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0scUNBQXFDLENBQUMsUUFBc0IsRUFBRSxZQUEwQjtRQUM3RixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Ozs7OztJQUVNLHVCQUF1QixDQUFDLFFBQXNCLEVBQUUsT0FBcUI7O1lBQ3RFLFlBQVksR0FBaUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1FBRXhFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sSUFBSSxDQUFDLHFDQUFxQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFuRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsUUFBUTs7Ozs7Ozs7SUFRSCx1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiDCqSBDbG91ZENoZW4gPGNsb3VkY2hlbjIwMTVAZ21haWwuY29tPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJoTG9nZ2VyIH0gZnJvbSAnLi4vYmgtY29tbW9uL2JoLWxvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmhDYW52YXNSZWN0LCBCaENhbnZhc1JlY3RQb2ludCB9IGZyb20gJy4vYmgtY2FudmFzLXJlY3QuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJoQ2FudmFzUmVjdFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJoTG9nZ2VyOiBCaExvZ2dlcikgeyB9XHJcblxyXG4gIHB1YmxpYyByZWN0VG9SZWN0UG9pbnQoaW5wdXQ6IEJoQ2FudmFzUmVjdCk6IEJoQ2FudmFzUmVjdFBvaW50IHtcclxuICAgIGlmICghaW5wdXQpIHtcclxuICAgICAgdGhpcy5iaExvZ2dlci53YXJuKGBSZWN0IGlzIGVtcHR5LmAsIG51bGwsICdCaENhbnZhc1JlY3RTZXJ2aWNlJywgJ3JlY3RUb1JlY3RQb2ludCcpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVjdFBvaW50OiBCaENhbnZhc1JlY3RQb2ludCA9IHtcclxuICAgICAgbGVmdEJvdHRvbToge1xyXG4gICAgICAgIHg6IGlucHV0LngsXHJcbiAgICAgICAgeTogaW5wdXQueSArIGlucHV0LmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICByaWdodFRvcDoge1xyXG4gICAgICAgIHg6IGlucHV0LnggKyBpbnB1dC53aWR0aCxcclxuICAgICAgICB5OiBpbnB1dC55XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJlY3RQb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWN0UG9pbnRUb1JlY3QoaW5wdXQ6IEJoQ2FudmFzUmVjdFBvaW50KTogQmhDYW52YXNSZWN0IHtcclxuICAgIGlmICghaW5wdXQpIHtcclxuICAgICAgdGhpcy5iaExvZ2dlci53YXJuKGBSZWN0IFBvaW50IGlzIGVtcHR5LmAsIG51bGwsICdCaENhbnZhc1JlY3RTZXJ2aWNlJywgJ3JlY3RQb2ludFRvUmVjdCcpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgQmhDYW52YXNSZWN0OiBCaENhbnZhc1JlY3QgPSB7XHJcbiAgICAgIHg6IGlucHV0LmxlZnRCb3R0b20ueCxcclxuICAgICAgeTogaW5wdXQucmlnaHRUb3AueSxcclxuICAgICAgd2lkdGg6IGlucHV0LnJpZ2h0VG9wLnggLSBpbnB1dC5sZWZ0Qm90dG9tLngsXHJcbiAgICAgIGhlaWdodDogaW5wdXQubGVmdEJvdHRvbS55IC0gaW5wdXQucmlnaHRUb3AueVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQmhDYW52YXNSZWN0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvdmVyYWdlUmVjdChtYWluUmVjdDogQmhDYW52YXNSZWN0LCBzdWJSZWN0OiBCaENhbnZhc1JlY3QpOiBCaENhbnZhc1JlY3Qge1xyXG4gICAgbGV0IG1haW5SZWN0UG9pbnQ6IEJoQ2FudmFzUmVjdFBvaW50ID0gdGhpcy5yZWN0VG9SZWN0UG9pbnQobWFpblJlY3QpO1xyXG4gICAgbGV0IHN1YlJlY3RQb2ludDogQmhDYW52YXNSZWN0UG9pbnQgPSB0aGlzLnJlY3RUb1JlY3RQb2ludChzdWJSZWN0KTtcclxuICAgIFxyXG4gICAgdmFyIGNvdmVyYWdlUmVjdFBvaW50OiBCaENhbnZhc1JlY3RQb2ludCA9IHtcclxuICAgICAgbGVmdEJvdHRvbToge1xyXG4gICAgICAgIHg6IE1hdGgubWF4KG1haW5SZWN0UG9pbnQubGVmdEJvdHRvbS54LCBzdWJSZWN0UG9pbnQubGVmdEJvdHRvbS54KSxcclxuICAgICAgICB5OiBNYXRoLm1pbihtYWluUmVjdFBvaW50LmxlZnRCb3R0b20ueSwgc3ViUmVjdFBvaW50LmxlZnRCb3R0b20ueSlcclxuICAgICAgfSxcclxuICAgICAgcmlnaHRUb3A6IHtcclxuICAgICAgICB4OiBNYXRoLm1pbihtYWluUmVjdFBvaW50LnJpZ2h0VG9wLngsIHN1YlJlY3RQb2ludC5yaWdodFRvcC54KSxcclxuICAgICAgICB5OiBNYXRoLm1heChtYWluUmVjdFBvaW50LnJpZ2h0VG9wLnksIHN1YlJlY3RQb2ludC5yaWdodFRvcC55KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoY292ZXJhZ2VSZWN0UG9pbnQubGVmdEJvdHRvbS54ID4gY292ZXJhZ2VSZWN0UG9pbnQucmlnaHRUb3AueCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoY292ZXJhZ2VSZWN0UG9pbnQucmlnaHRUb3AueSA+IGNvdmVyYWdlUmVjdFBvaW50LmxlZnRCb3R0b20ueSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlY3RQb2ludFRvUmVjdChjb3ZlcmFnZVJlY3RQb2ludCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGVyY2VudGFnZU9mQ292ZXJhZ2VCeUNvdmVyYWdlUmVjdChtYWluUmVjdDogQmhDYW52YXNSZWN0LCBjb3ZlcmFnZVJlY3Q6IEJoQ2FudmFzUmVjdCk6IG51bWJlciB7XHJcbiAgICBpZiAoIWNvdmVyYWdlUmVjdCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE1hdGguY2VpbCgoY292ZXJhZ2VSZWN0LndpZHRoICogY292ZXJhZ2VSZWN0LmhlaWdodCkgLyAobWFpblJlY3Qud2lkdGggKiBtYWluUmVjdC5oZWlnaHQpICogMTAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQZXJjZW50YWdlT2ZDb3ZlcmFnZShtYWluUmVjdDogQmhDYW52YXNSZWN0LCBzdWJSZWN0OiBCaENhbnZhc1JlY3QpOiBudW1iZXIge1xyXG4gICAgbGV0IGNvdmVyYWdlUmVjdDogQmhDYW52YXNSZWN0ID0gdGhpcy5nZXRDb3ZlcmFnZVJlY3QobWFpblJlY3QsIHN1YlJlY3QpO1xyXG4gICAgXHJcbiAgICBpZiAoIWNvdmVyYWdlUmVjdCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGVyY2VudGFnZU9mQ292ZXJhZ2VCeUNvdmVyYWdlUmVjdChtYWluUmVjdCwgY292ZXJhZ2VSZWN0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==