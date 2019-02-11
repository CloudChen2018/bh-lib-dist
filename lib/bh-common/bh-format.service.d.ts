export declare class BhFormatService {
    constructor();
    toString(input: any, defaultValue?: string): string;
    toNumber(input: any, defaultValue?: number): number;
    toFloat(input: any, defaultValue?: number): number;
    toBoolean(input: any, defaultValue?: boolean): boolean;
    toArrayChunk(input: Array<any>, chunkSize: number): Array<Array<any>>;
    tsToDate(input: any): Date;
    dateToTs(input: Date): number;
}
