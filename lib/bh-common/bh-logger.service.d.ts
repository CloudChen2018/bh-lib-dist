export declare class BhLogger {
    constructor();
    toLogText(logType: string, logMsg: string, logContext?: {
        [key: string]: any;
    }, logModule?: string, logFunc?: string): string;
    log(logMsg: string, logContext?: object, logModule?: string, logFunc?: string): void;
    debug(logMsg: string, logContext?: object, logModule?: string, logFunc?: string): void;
    info(logMsg: string, logContext?: object, logModule?: string, logFunc?: string): void;
    warn(logMsg: string, logContext?: object, logModule?: string, logFunc?: string): void;
    error(logMsg: string, logContext?: object, logModule?: string, logFunc?: string): void;
}
