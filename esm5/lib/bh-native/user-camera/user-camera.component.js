/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Component, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { BhLogger } from '../../bh-common/bh-logger.service';
var UserCameraComponent = /** @class */ (function () {
    function UserCameraComponent(bhLogger) {
        this.bhLogger = bhLogger;
        this.width = 640;
        this.height = 480;
        this.onReady = new EventEmitter();
        this.onError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UserCameraComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.video = this.videoElement.nativeElement;
        if (!this.facingMode || this.facingMode !== 'environment') {
            this.facingMode = 'user';
        }
        window.navigator.mediaDevices.getUserMedia({
            video: {
                width: {
                    exact: this.width
                },
                height: {
                    exact: this.height
                },
                deviceId: this.deviceId,
                facingMode: this.facingMode
            },
            audio: false
        }).then(function (stream) {
            _this.bhLogger.log("User camera is ready.", null, 'UserCameraComponent', 'ngAfterViewInit');
            _this.video.srcObject = stream;
            _this.onReady.emit(_this.video);
        }).catch(function (error) {
            _this.bhLogger.warn("Unable to get camera stream.", error, 'UserCameraComponent', 'ngAfterViewInit');
            _this.onError.emit(error);
        });
    };
    UserCameraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bh-user-camera',
                    template: "<video [width]=\"width\" [height]=\"height\" #userCamera></video>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserCameraComponent.ctorParameters = function () { return [
        { type: BhLogger }
    ]; };
    UserCameraComponent.propDecorators = {
        videoElement: [{ type: ViewChild, args: ['userCamera',] }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        deviceId: [{ type: Input }],
        facingMode: [{ type: Input }],
        onReady: [{ type: Output }],
        onError: [{ type: Output }]
    };
    return UserCameraComponent;
}());
export { UserCameraComponent };
if (false) {
    /** @type {?} */
    UserCameraComponent.prototype.videoElement;
    /** @type {?} */
    UserCameraComponent.prototype.width;
    /** @type {?} */
    UserCameraComponent.prototype.height;
    /** @type {?} */
    UserCameraComponent.prototype.deviceId;
    /** @type {?} */
    UserCameraComponent.prototype.facingMode;
    /** @type {?} */
    UserCameraComponent.prototype.onReady;
    /** @type {?} */
    UserCameraComponent.prototype.onError;
    /**
     * @type {?}
     * @private
     */
    UserCameraComponent.prototype.video;
    /** @type {?} */
    UserCameraComponent.prototype.bhLogger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jYW1lcmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmgtbGliLyIsInNvdXJjZXMiOlsibGliL2JoLW5hdGl2ZS91c2VyLWNhbWVyYS91c2VyLWNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTdEO0lBdUJFLDZCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFmbEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUVwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBTXBCLFlBQU8sR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFNdkQsQ0FBQzs7OztJQUVKLDZDQUFlOzs7SUFBZjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssYUFBYSxFQUFFO1lBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3pDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNsQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNuQjtnQkFDRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QjtZQUNELEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQW1CO1lBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNGLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBVTtZQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUNwRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNkVBQTJDOztpQkFFNUM7Ozs7Z0JBTlEsUUFBUTs7OytCQVNkLFNBQVMsU0FBQyxZQUFZO3dCQUV0QixLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzs2QkFFTCxLQUFLOzBCQUVMLE1BQU07MEJBRU4sTUFBTTs7SUFxQ1QsMEJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSxtQkFBbUI7OztJQUU5QiwyQ0FBa0Q7O0lBRWxELG9DQUE2Qjs7SUFFN0IscUNBQThCOztJQUU5Qix1Q0FBMEI7O0lBRTFCLHlDQUE0Qjs7SUFFNUIsc0NBQXVFOztJQUV2RSxzQ0FBMEQ7Ozs7O0lBRTFELG9DQUFnQzs7SUFHOUIsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogwqkgQ2xvdWRDaGVuIDxjbG91ZGNoZW4yMDE1QGdtYWlsLmNvbT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQgXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCaExvZ2dlciB9IGZyb20gJy4uLy4uL2JoLWNvbW1vbi9iaC1sb2dnZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JoLXVzZXItY2FtZXJhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1jYW1lcmEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VzZXItY2FtZXJhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNhbWVyYUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd1c2VyQ2FtZXJhJykgdmlkZW9FbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gNjQwO1xyXG5cclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDQ4MDtcclxuXHJcbiAgQElucHV0KCkgZGV2aWNlSWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZmFjaW5nTW9kZTogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25SZWFkeTogRXZlbnRFbWl0dGVyPEhUTUxNZWRpYUVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgdmlkZW86IEhUTUxNZWRpYUVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJoTG9nZ2VyOiBCaExvZ2dlclxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLmZhY2luZ01vZGUgfHwgdGhpcy5mYWNpbmdNb2RlICE9PSAnZW52aXJvbm1lbnQnKSB7XHJcbiAgICAgIHRoaXMuZmFjaW5nTW9kZSA9ICd1c2VyJztcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICB2aWRlbzoge1xyXG4gICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICBleGFjdDogdGhpcy53aWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICBleGFjdDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldmljZUlkOiB0aGlzLmRldmljZUlkLFxyXG4gICAgICAgIGZhY2luZ01vZGU6IHRoaXMuZmFjaW5nTW9kZVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzogZmFsc2VcclxuICAgIH0pLnRoZW4oKHN0cmVhbTogTWVkaWFTdHJlYW0pID0+IHtcclxuICAgICAgdGhpcy5iaExvZ2dlci5sb2coYFVzZXIgY2FtZXJhIGlzIHJlYWR5LmAsIG51bGwsICdVc2VyQ2FtZXJhQ29tcG9uZW50JywgJ25nQWZ0ZXJWaWV3SW5pdCcpO1xyXG4gICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgdGhpcy5vblJlYWR5LmVtaXQodGhpcy52aWRlbyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmJoTG9nZ2VyLndhcm4oYFVuYWJsZSB0byBnZXQgY2FtZXJhIHN0cmVhbS5gLCBlcnJvciwgJ1VzZXJDYW1lcmFDb21wb25lbnQnLCAnbmdBZnRlclZpZXdJbml0Jyk7XHJcbiAgICAgIHRoaXMub25FcnJvci5lbWl0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19