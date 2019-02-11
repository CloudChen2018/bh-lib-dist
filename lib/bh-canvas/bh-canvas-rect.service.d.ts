import { BhLogger } from '../bh-common/bh-logger.service';
import { BhCanvasRect, BhCanvasRectPoint } from './bh-canvas-rect.interface';
export declare class BhCanvasRectService {
    private bhLogger;
    constructor(bhLogger: BhLogger);
    rectToRectPoint(input: BhCanvasRect): BhCanvasRectPoint;
    rectPointToRect(input: BhCanvasRectPoint): BhCanvasRect;
    getCoverageRect(mainRect: BhCanvasRect, subRect: BhCanvasRect): BhCanvasRect;
    getPercentageOfCoverageByCoverageRect(mainRect: BhCanvasRect, coverageRect: BhCanvasRect): number;
    getPercentageOfCoverage(mainRect: BhCanvasRect, subRect: BhCanvasRect): number;
}
