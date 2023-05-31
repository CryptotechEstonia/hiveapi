import type { WorkerListItem, Farm, WorkerMetric } from './hive';
export type HiveOSAPIErrorMessage = 'Unauthorized';
export interface HiveOSAPIErrorData {
    code: null;
    message: HiveOSAPIErrorMessage;
    redirect: string;
}
export declare class HiveOSAPIError extends Error {
    constructor({ code, message }: HiveOSAPIErrorData);
}
export interface MetricsParams {
    /**
     * Format: `yyyy-mm-dd`
     * Default: today
     */
    date?: string;
    /**
     * Period (1 day, 1 week, 1 month)
     * Default: 1d
     */
    period?: '1d' | '1w' | '1m';
    /**
     * Fill gaps with empty points
     * Default: 0
     */
    fill_gaps?: 0 | 1;
}
export declare class HiveOSAPI {
    private token;
    private apiClient;
    constructor(token: string);
    request<T>(url?: string, method?: string, params?: object): Promise<T>;
    farms(): Promise<Farm[]>;
    farm(id: number): Promise<Farm>;
    workers(farm: number): Promise<WorkerListItem[]>;
    metrics(farm: number, worker: number, params?: MetricsParams): Promise<WorkerMetric[]>;
}
