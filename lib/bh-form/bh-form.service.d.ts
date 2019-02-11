import { BhFromSelectOption } from './bh-form.interface';
export declare class BhFormService {
    constructor();
    getOptionFromValue(options: Array<BhFromSelectOption>, value: string | number | boolean): BhFromSelectOption;
}
