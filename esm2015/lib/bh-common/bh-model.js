/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class BhModel {
    /**
     * @return {?}
     */
    get() {
        if (this.model) {
            return this.model;
        }
        else {
            return this.getDefault();
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set(input) {
        this.model = input;
    }
    /**
     * @return {?}
     */
    hasModel() {
        return this.model ? true : false;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BhModel.prototype.model;
    /**
     * @abstract
     * @return {?}
     */
    BhModel.prototype.getDefault = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BhModel.prototype.save = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BhModel.prototype.sync = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BhModel.prototype.clear = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtY29tbW9uL2JoLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsTUFBTSxPQUFnQixPQUFPOzs7O0lBR3BCLEdBQUc7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFJTSxHQUFHLENBQUMsS0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBUU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztDQUVGOzs7Ozs7SUExQkMsd0JBQW1COzs7OztJQVVuQiwrQ0FBeUI7Ozs7O0lBTXpCLHlDQUFrQzs7Ozs7SUFFbEMseUNBQWtDOzs7OztJQUVsQywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiDCqSBDbG91ZENoZW4gPGNsb3VkY2hlbjIwMTVAZ21haWwuY29tPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCBcclxuICovXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJoTW9kZWw8VD4ge1xyXG4gIHByb3RlY3RlZCBtb2RlbDogVDtcclxuXHJcbiAgcHVibGljIGdldCgpOiBUIHtcclxuICAgIGlmICh0aGlzLm1vZGVsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0RGVmYXVsdCgpOiBUO1xyXG5cclxuICBwdWJsaWMgc2V0KGlucHV0OiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGVsID0gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBzYXZlKCk6IE9ic2VydmFibGU8dm9pZD47XHJcblxyXG4gIGFic3RyYWN0IHN5bmMoKTogT2JzZXJ2YWJsZTx2b2lkPjtcclxuXHJcbiAgYWJzdHJhY3QgY2xlYXIoKTogT2JzZXJ2YWJsZTx2b2lkPjtcclxuXHJcbiAgcHVibGljIGhhc01vZGVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=