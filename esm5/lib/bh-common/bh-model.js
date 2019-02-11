/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
BhModel = /** @class */ (function () {
    function BhModel() {
    }
    /**
     * @return {?}
     */
    BhModel.prototype.get = /**
     * @return {?}
     */
    function () {
        if (this.model) {
            return this.model;
        }
        else {
            return this.getDefault();
        }
    };
    /**
     * @param {?} input
     * @return {?}
     */
    BhModel.prototype.set = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        this.model = input;
    };
    /**
     * @return {?}
     */
    BhModel.prototype.hasModel = /**
     * @return {?}
     */
    function () {
        return this.model ? true : false;
    };
    return BhModel;
}());
/**
 * @abstract
 * @template T
 */
export { BhModel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmgtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iaC1saWIvIiwic291cmNlcyI6WyJsaWIvYmgtY29tbW9uL2JoLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0E7Ozs7O0lBQUE7SUEyQkEsQ0FBQzs7OztJQXhCUSxxQkFBRzs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFJTSxxQkFBRzs7OztJQUFWLFVBQVcsS0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBUU0sMEJBQVE7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUgsY0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7Ozs7Ozs7O0lBMUJDLHdCQUFtQjs7Ozs7SUFVbkIsK0NBQXlCOzs7OztJQU16Qix5Q0FBa0M7Ozs7O0lBRWxDLHlDQUFrQzs7Ozs7SUFFbEMsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCaE1vZGVsPFQ+IHtcclxuICBwcm90ZWN0ZWQgbW9kZWw6IFQ7XHJcblxyXG4gIHB1YmxpYyBnZXQoKTogVCB7XHJcbiAgICBpZiAodGhpcy5tb2RlbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RlbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldERlZmF1bHQoKTogVDtcclxuXHJcbiAgcHVibGljIHNldChpbnB1dDogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlbCA9IGlucHV0O1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3Qgc2F2ZSgpOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG5cclxuICBhYnN0cmFjdCBzeW5jKCk6IE9ic2VydmFibGU8dm9pZD47XHJcblxyXG4gIGFic3RyYWN0IGNsZWFyKCk6IE9ic2VydmFibGU8dm9pZD47XHJcblxyXG4gIHB1YmxpYyBoYXNNb2RlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19