import { HttpParams } from '@angular/common/http';
import { BhFormatService } from '../bh-common/bh-format.service';
import { BhHttpParams } from './bh-http.interface';
export declare class BhHttpService {
    private bhFormatService;
    constructor(bhFormatService: BhFormatService);
    paramsToQueryString(params: BhHttpParams): string;
    paramsToHttpParams(params: BhHttpParams): HttpParams;
}
