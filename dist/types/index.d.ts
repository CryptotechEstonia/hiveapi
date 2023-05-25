export type HiveOSAPIErrorMessage = 'Unauthorized';
export interface HiveOSAPIErrorData {
    code: null;
    message: HiveOSAPIErrorMessage;
    redirect: string;
}
export interface FarmsGet {
    data: Farm[];
    tags: Tag[];
}
export interface Farm {
    id: number;
    name: string;
    timezone: string;
    nonfree: boolean;
    twofa_required: boolean;
    trusted: boolean;
    gpu_red_temp: number;
    asic_red_temp: number;
    gpu_red_fan: number;
    asic_red_fan: number;
    gpu_red_asr: number;
    asic_red_asr: number;
    gpu_red_la: number;
    asic_red_la: number;
    gpu_red_cpu_temp: number;
    gpu_red_mem_temp: number;
    asic_red_board_temp: number;
    autocreate_hash: string;
    locked: boolean;
    tag_ids: number[];
    auto_tags: boolean;
    workers_count: number;
    rigs_count: number;
    asics_count: number;
    disabled_rigs_count: number;
    disabled_asics_count: number;
    owner: Owner;
    money: Money;
    stats: Stats;
    hashrates?: Hashrate[];
    hashrates_by_coin?: HashratesByCoin[];
    personal_settings?: PersonalSettings;
    charge_on_pool: boolean;
    role?: string;
    power_price?: number;
    power_price_currency?: string;
    psu_efficiency?: number;
    default_fs?: DefaultFs;
    payer?: Payer;
    hardware_power_draw?: number;
}
export interface Owner {
    id: number;
    login: string;
    name?: string;
    me?: boolean;
}
export interface Money {
    is_paid: boolean;
    is_free: boolean;
    paid_cause?: string;
    balance: number;
    discount: number;
    daily_cost: number;
    monthly_cost: number;
    overdraft: boolean;
    cost_details?: CostDetail[];
    daily_price: number;
    monthly_price: number;
    daily_use_rigs: number;
    daily_use_asics: number;
    price_per_rig: number;
    price_per_asic: number;
    overdraft_days_left?: number;
    days_left?: number;
}
export interface CostDetail {
    type: number;
    type_name: string;
    amount: number;
    monthly_price: number;
    monthly_cost: number;
    daily_cost: number;
}
export interface Stats {
    workers_total: number;
    workers_online: number;
    workers_offline: number;
    workers_overheated: number;
    workers_no_temp: number;
    workers_no_fan: number;
    workers_overloaded: number;
    workers_invalid: number;
    workers_low_asr: number;
    workers_no_hashrate: number;
    workers_with_problem: number;
    rigs_total: number;
    rigs_online: number;
    rigs_offline: number;
    rigs_power: number;
    gpus_total: number;
    gpus_online: number;
    gpus_offline: number;
    gpus_overheated: number;
    gpus_no_temp: number;
    asics_total: number;
    asics_online: number;
    asics_offline: number;
    asics_power: number;
    boards_total: number;
    boards_online: number;
    boards_offline: number;
    boards_overheated: number;
    boards_no_temp: number;
    cpus_online: number;
    devices_total: number;
    devices_online: number;
    devices_offline: number;
    power_draw: number;
    asr?: number;
    power_cost?: number;
}
export interface Hashrate {
    algo: string;
    hashrate: number;
}
export interface HashratesByCoin {
    coin: string;
    algo: string;
    hashrate: number;
}
export interface PersonalSettings {
    is_favorite: boolean;
}
export interface DefaultFs {
    "1"?: number;
    "2"?: number;
}
export interface Payer {
    id: number;
    login: string;
    name: string;
}
export interface Tag {
    id: number;
    type_id: number;
    user_id: number;
    name: string;
    color: number;
    is_auto: boolean;
    farms_count: number;
}
export declare class HiveOSAPIError extends Error {
    constructor({ code, message }: HiveOSAPIErrorData);
}
export declare class HiveOSAPI {
    private token;
    private apiClient;
    constructor(token: string);
    request<T>(method?: string, url?: string): Promise<T>;
    farms(): Promise<Farm[]>;
}