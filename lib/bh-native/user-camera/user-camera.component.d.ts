import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { BhLogger } from '../../bh-common/bh-logger.service';
export declare class UserCameraComponent implements AfterViewInit {
    bhLogger: BhLogger;
    videoElement: ElementRef;
    width: number;
    height: number;
    deviceId: string;
    facingMode: string;
    onReady: EventEmitter<HTMLMediaElement>;
    onError: EventEmitter<any>;
    private video;
    constructor(bhLogger: BhLogger);
    ngAfterViewInit(): void;
}
