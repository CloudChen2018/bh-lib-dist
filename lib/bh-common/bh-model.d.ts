import { Observable } from "rxjs";
export declare abstract class BhModel<T> {
    protected model: T;
    get(): T;
    abstract getDefault(): T;
    set(input: T): void;
    abstract save(): Observable<void>;
    abstract sync(): Observable<void>;
    abstract clear(): Observable<void>;
    hasModel(): boolean;
}
