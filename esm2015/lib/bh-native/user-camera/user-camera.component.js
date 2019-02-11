/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © CloudChen <cloudchen2015@gmail.com>. All Rights Reserved
 */
import { Component, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { BhLogger } from '../../bh-common/bh-logger.service';
export class UserCameraComponent {
    /**
     * @param {?} bhLogger
     */
    constructor(bhLogger) {
        this.bhLogger = bhLogger;
        this.width = 640;
        this.height = 480;
        this.onReady = new EventEmitter();
        this.onError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        }).then((stream) => {
            this.bhLogger.log(`User camera is ready.`, null, 'UserCameraComponent', 'ngAfterViewInit');
            this.video.srcObject = stream;
            this.onReady.emit(this.video);
        }).catch((error) => {
            this.bhLogger.warn(`Unable to get camera stream.`, error, 'UserCameraComponent', 'ngAfterViewInit');
            this.onError.emit(error);
        });
    }
}
UserCameraComponent.decorators = [
    { type: Component, args: [{
                selector: 'bh-user-camera',
                template: "<video [width]=\"width\" [height]=\"height\" #userCamera></video>",
                styles: [""]
            }] }
];
/** @nocollapse */
UserCameraComponent.ctorParameters = () => [
    { type: BhLogger }
];
UserCameraComponent.propDecorators = {
    videoElement: [{ type: ViewChild, args: ['userCamera',] }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    deviceId: [{ type: Input }],
    facingMode: [{ type: Input }],
    onReady: [{ type: Output }],
    onError: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jYW1lcmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmgtbGliLyIsInNvdXJjZXMiOlsibGliL2JoLW5hdGl2ZS91c2VyLWNhbWVyYS91c2VyLWNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTzdELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFrQjlCLFlBQ1MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWZsQixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBRXBCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFNcEIsWUFBTyxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU12RCxDQUFDOzs7O0lBRUosZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDekMsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ25CO2dCQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzVCO1lBQ0QsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZFQUEyQzs7YUFFNUM7Ozs7WUFOUSxRQUFROzs7MkJBU2QsU0FBUyxTQUFDLFlBQVk7b0JBRXRCLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3lCQUVMLEtBQUs7c0JBRUwsTUFBTTtzQkFFTixNQUFNOzs7O0lBWlAsMkNBQWtEOztJQUVsRCxvQ0FBNkI7O0lBRTdCLHFDQUE4Qjs7SUFFOUIsdUNBQTBCOztJQUUxQix5Q0FBNEI7O0lBRTVCLHNDQUF1RTs7SUFFdkUsc0NBQTBEOzs7OztJQUUxRCxvQ0FBZ0M7O0lBRzlCLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIMKpIENsb3VkQ2hlbiA8Y2xvdWRjaGVuMjAxNUBnbWFpbC5jb20+LiBBbGwgUmlnaHRzIFJlc2VydmVkIFxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmhMb2dnZXIgfSBmcm9tICcuLi8uLi9iaC1jb21tb24vYmgtbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdiaC11c2VyLWNhbWVyYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItY2FtZXJhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91c2VyLWNhbWVyYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJDYW1lcmFDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgndXNlckNhbWVyYScpIHZpZGVvRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDY0MDtcclxuXHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSA0ODA7XHJcblxyXG4gIEBJbnB1dCgpIGRldmljZUlkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGZhY2luZ01vZGU6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9uUmVhZHk6IEV2ZW50RW1pdHRlcjxIVE1MTWVkaWFFbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIHZpZGVvOiBIVE1MTWVkaWFFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBiaExvZ2dlcjogQmhMb2dnZXJcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5mYWNpbmdNb2RlIHx8IHRoaXMuZmFjaW5nTW9kZSAhPT0gJ2Vudmlyb25tZW50Jykge1xyXG4gICAgICB0aGlzLmZhY2luZ01vZGUgPSAndXNlcic7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgdmlkZW86IHtcclxuICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgZXhhY3Q6IHRoaXMud2lkdGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcclxuICAgICAgICBmYWNpbmdNb2RlOiB0aGlzLmZhY2luZ01vZGVcclxuICAgICAgfSxcclxuICAgICAgYXVkaW86IGZhbHNlXHJcbiAgICB9KS50aGVuKChzdHJlYW06IE1lZGlhU3RyZWFtKSA9PiB7XHJcbiAgICAgIHRoaXMuYmhMb2dnZXIubG9nKGBVc2VyIGNhbWVyYSBpcyByZWFkeS5gLCBudWxsLCAnVXNlckNhbWVyYUNvbXBvbmVudCcsICduZ0FmdGVyVmlld0luaXQnKTtcclxuICAgICAgdGhpcy52aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgIHRoaXMub25SZWFkeS5lbWl0KHRoaXMudmlkZW8pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5iaExvZ2dlci53YXJuKGBVbmFibGUgdG8gZ2V0IGNhbWVyYSBzdHJlYW0uYCwgZXJyb3IsICdVc2VyQ2FtZXJhQ29tcG9uZW50JywgJ25nQWZ0ZXJWaWV3SW5pdCcpO1xyXG4gICAgICB0aGlzLm9uRXJyb3IuZW1pdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==