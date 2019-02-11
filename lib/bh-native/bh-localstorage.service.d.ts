import { BhLogger } from '../bh-common/bh-logger.service';
export declare class BhLocalstorageService {
    private bhLogger;
    constructor(bhLogger: BhLogger);
    set<T>(key: string, value: T): void;
    get<T>(key: string): T;
    remove(key: string): void;
}
