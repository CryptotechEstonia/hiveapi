/**
 * Access role
 * @export
 * @enum {string}
 */
export declare enum AccessRoleEnum {
    Monitor = "monitor",
    Tech = "tech",
    Rocket = "rocket",
    Advanced = "advanced",
    Full = "full"
}
/**
 *
 * @export
 * @interface Account
 */
export interface Account {
    /**
     *
     * @type {number}
     * @memberof Account
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    trackingId?: string;
    /**
     *
     * @type {UserProfile}
     * @memberof Account
     */
    profile?: UserProfile;
    /**
     *
     * @type {boolean}
     * @memberof Account
     */
    emailConfirmed?: boolean;
    /**
     * Balance
     * @type {number}
     * @memberof Account
     */
    balance?: number;
    /**
     * Minimum deposit amount to get 30% bonus
     * @type {number}
     * @memberof Account
     */
    minDepositAmount?: number;
    /**
     * Reward in % from referrer payments
     * @type {number}
     * @memberof Account
     */
    referralReward?: number;
    /**
     * Amount of users who were registered as current user's referral
     * @type {number}
     * @memberof Account
     */
    referrersCount?: number;
    /**
     * Amount of workers that were created as current user's referral
     * @type {number}
     * @memberof Account
     */
    referrerWorkersCount?: number;
    /**
     * Referral promocode
     * @type {string}
     * @memberof Account
     */
    promocode?: string;
    /**
     * Only accounts older than 14 days can set promocode
     * @type {boolean}
     * @memberof Account
     */
    canSetPromocode?: boolean;
    /**
     * Indicates that Two Factor Authentication (2FA) is enabled for this account
     * @type {boolean}
     * @memberof Account
     */
    _2faEnabled?: boolean;
    /**
     *
     * @type {string[]}
     * @memberof Account
     */
    whitelistIps?: string[];
    /**
     * Current IP address
     * @type {string}
     * @memberof Account
     */
    ip?: string;
    /**
     * Recently executed custom commands (via exec). Maximum 10 unique commands are stored.
     * @type {string[]}
     * @memberof Account
     */
    recentCommands?: string[];
    /**
     * Farms list
     * @type {FarmShortInfoAccount[]}
     * @memberof Account
     */
    farms?: FarmShortInfoAccount[];
    /**
     * Meta data keyed by namespace
     * @type {any}
     * @memberof Account
     */
    meta?: any;
}
/**
 *
 * @export
 * @interface AccountAccess
 */
export interface AccountAccess {
    /**
     * List of IP addresses that are allowed to login to your account Examples: * `172.217.16.46` single IP address is allowed * `172.217.16.0/24` will match any IP staring with 172.217.16. * `172.217.0.0/16` will match any IP staring with 172.217. * `0:0:0:0:0:ffff:b2a5:246` single IPV6 address * `2001:db8::/48` will match any IPV6 address staring with 2001:db8::
     * @type {string[]}
     * @memberof AccountAccess
     */
    whitelistIps?: string[];
}
/**
 *
 * @export
 * @interface AccountEvent
 */
export interface AccountEvent {
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    timestamp?: number;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    typeId?: number;
    /**
     *
     * @type {string}
     * @memberof AccountEvent
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof AccountEvent
     */
    ip?: string;
    /**
     *
     * @type {string}
     * @memberof AccountEvent
     */
    hostname?: string;
    /**
     * Action was performed by Hive administrator
     * @type {boolean}
     * @memberof AccountEvent
     */
    byAdmin?: boolean;
    /**
     * Details object is specific to event type
     * @type {any}
     * @memberof AccountEvent
     */
    details?: any;
}
/**
 *
 * @export
 * @interface AclCreateRequest
 */
export interface AclCreateRequest {
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof AclCreateRequest
     */
    role?: AccessRoleEnum;
    /**
     * Tags list for restricted access
     * @type {number[]}
     * @memberof AclCreateRequest
     */
    tagIds?: number[];
    /**
     * Trusted user must have 2FA enabled otherwise the access will be read-only
     * @type {boolean}
     * @memberof AclCreateRequest
     */
    twofaRequired?: boolean;
    /**
     * Is active
     * @type {boolean}
     * @memberof AclCreateRequest
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface AclFields
 */
export interface AclFields {
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof AclFields
     */
    role?: AccessRoleEnum;
    /**
     * Tags list for restricted access
     * @type {number[]}
     * @memberof AclFields
     */
    tagIds?: number[];
    /**
     * Trusted user must have 2FA enabled otherwise the access will be read-only
     * @type {boolean}
     * @memberof AclFields
     */
    twofaRequired?: boolean;
    /**
     * Is active
     * @type {boolean}
     * @memberof AclFields
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface AclUpdateRequest
 */
export interface AclUpdateRequest extends AclFields {
}
/**
 * Algorithm name
 * @export
 * @interface AlgoName
 */
export interface AlgoName {
}
/**
 *
 * @export
 * @interface ApiKey
 */
export interface ApiKey extends ApiKeyFields {
    /**
     *
     * @type {string}
     * @memberof ApiKey
     */
    sourceType?: ApiKey.SourceTypeEnum;
    /**
     * Pool name or exchange name. For supported pools and exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof ApiKey
     */
    sourceName?: string;
    /**
     *
     * @type {number}
     * @memberof ApiKey
     */
    createdAt?: number;
}
/**
 * @export
 * @namespace ApiKey
 */
export declare namespace ApiKey {
    /**
     * @export
     * @enum {string}
     */
    enum SourceTypeEnum {
        Pool = "pool",
        Exchange = "exchange"
    }
}
/**
 *
 * @export
 * @interface ApiKeyCreateRequest
 */
export interface ApiKeyCreateRequest extends ApiKeyFields {
    /**
     * API secret
     * @type {string}
     * @memberof ApiKeyCreateRequest
     */
    apiSecret?: string;
    /**
     *
     * @type {string}
     * @memberof ApiKeyCreateRequest
     */
    sourceType?: ApiKeyCreateRequest.SourceTypeEnum;
    /**
     * Pool name or exchange name. For supported pools and exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof ApiKeyCreateRequest
     */
    sourceName?: string;
}
/**
 * @export
 * @namespace ApiKeyCreateRequest
 */
export declare namespace ApiKeyCreateRequest {
    /**
     * @export
     * @enum {string}
     */
    enum SourceTypeEnum {
        Pool = "pool",
        Exchange = "exchange"
    }
}
/**
 *
 * @export
 * @interface ApiKeyF
 */
export interface ApiKeyF extends ApiKey {
    /**
     *
     * @type {number}
     * @memberof ApiKeyF
     */
    farmId?: number;
}
/**
 * @export
 * @namespace ApiKeyF
 */
export declare namespace ApiKeyF {
}
/**
 *
 * @export
 * @interface ApiKeyFields
 */
export interface ApiKeyFields {
    /**
     * Display name
     * @type {string}
     * @memberof ApiKeyFields
     */
    name?: string;
    /**
     * API ID
     * @type {string}
     * @memberof ApiKeyFields
     */
    apiId?: string;
    /**
     * API key
     * @type {string}
     * @memberof ApiKeyFields
     */
    apiKey?: string;
}
/**
 *
 * @export
 * @interface ApiKeySecret
 */
export interface ApiKeySecret {
    /**
     * API secret
     * @type {string}
     * @memberof ApiKeySecret
     */
    apiSecret?: string;
}
/**
 *
 * @export
 * @interface ApiKeySource
 */
export interface ApiKeySource {
    /**
     *
     * @type {string}
     * @memberof ApiKeySource
     */
    sourceType?: ApiKeySource.SourceTypeEnum;
    /**
     * Pool name or exchange name. For supported pools and exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof ApiKeySource
     */
    sourceName?: string;
}
/**
 * @export
 * @namespace ApiKeySource
 */
export declare namespace ApiKeySource {
    /**
     * @export
     * @enum {string}
     */
    enum SourceTypeEnum {
        Pool = "pool",
        Exchange = "exchange"
    }
}
/**
 *
 * @export
 * @interface ApiKeyU
 */
export interface ApiKeyU extends ApiKey {
    /**
     *
     * @type {number}
     * @memberof ApiKeyU
     */
    userId?: number;
}
/**
 * @export
 * @namespace ApiKeyU
 */
export declare namespace ApiKeyU {
}
/**
 *
 * @export
 * @interface ApiKeyUpdateRequest
 */
export interface ApiKeyUpdateRequest extends ApiKeyFields {
    /**
     * API secret
     * @type {string}
     * @memberof ApiKeyUpdateRequest
     */
    apiSecret?: string;
}
/**
 * Asic performance profile
 * @export
 * @interface AsicPerfProfile
 */
export interface AsicPerfProfile {
    /**
     * Profile name
     * @type {string}
     * @memberof AsicPerfProfile
     */
    name?: string;
    /**
     * Profile short name
     * @type {string}
     * @memberof AsicPerfProfile
     */
    shortName?: string;
    /**
     * Profile description
     * @type {string}
     * @memberof AsicPerfProfile
     */
    description?: string;
    /**
     * If TRUE than profile can be configured manually
     * @type {boolean}
     * @memberof AsicPerfProfile
     */
    manual?: boolean;
    /**
     * OC Profile index
     * @type {number}
     * @memberof AsicPerfProfile
     */
    profile?: number;
    /**
     * Profile params to prefill manual profile form
     * @type {any}
     * @memberof AsicPerfProfile
     */
    params?: any;
}
/**
 * List of asic perf profiles for one model and grouped by version
 * @export
 * @interface AsicPerfProfileModel
 */
export interface AsicPerfProfileModel {
    /**
     * Asic model short name
     * @type {string}
     * @memberof AsicPerfProfileModel
     */
    model?: string;
    /**
     *
     * @type {AsicPerfProfileVersion[]}
     * @memberof AsicPerfProfileModel
     */
    versions?: AsicPerfProfileVersion[];
}
/**
 * List of asic performance profiles for one firmware version
 * @export
 * @interface AsicPerfProfileVersion
 */
export interface AsicPerfProfileVersion {
    /**
     * Profile version
     * @type {number}
     * @memberof AsicPerfProfileVersion
     */
    version?: number;
    /**
     * Human frendly profile version
     * @type {string}
     * @memberof AsicPerfProfileVersion
     */
    versionName?: string;
    /**
     *
     * @type {AsicPerfProfile[]}
     * @memberof AsicPerfProfileVersion
     */
    profiles?: AsicPerfProfile[];
}
/**
 *
 * @export
 * @interface AuthToken
 */
export interface AuthToken {
    /**
     * Token to be used in further requests
     * @type {string}
     * @memberof AuthToken
     */
    accessToken?: string;
    /**
     * Token type. Only bearer type is supported
     * @type {string}
     * @memberof AuthToken
     */
    tokenType?: string;
    /**
     * TTL in seconds
     * @type {number}
     * @memberof AuthToken
     */
    expiresIn?: number;
}
/**
 *
 * @export
 * @interface AuthTokenItem
 */
export interface AuthTokenItem {
    /**
     * Token ID
     * @type {number}
     * @memberof AuthTokenItem
     */
    id?: number;
    /**
     * Display name
     * @type {string}
     * @memberof AuthTokenItem
     */
    name?: string;
    /**
     * Is manually created personal token
     * @type {boolean}
     * @memberof AuthTokenItem
     */
    personal?: boolean;
    /**
     * Is active (for personal tokens)
     * @type {boolean}
     * @memberof AuthTokenItem
     */
    active?: boolean;
    /**
     * Is current session token
     * @type {boolean}
     * @memberof AuthTokenItem
     */
    current?: boolean;
    /**
     * When token was created
     * @type {number}
     * @memberof AuthTokenItem
     */
    createdAt?: number;
    /**
     * When token expires
     * @type {number}
     * @memberof AuthTokenItem
     */
    expiresAt?: number;
    /**
     * When token was last used (5 minute precision)
     * @type {number}
     * @memberof AuthTokenItem
     */
    lastActivity?: number;
    /**
     * IP address of the client who created the token
     * @type {string}
     * @memberof AuthTokenItem
     */
    ip?: string;
    /**
     * Resolved hostname
     * @type {string}
     * @memberof AuthTokenItem
     */
    hostname?: string;
}
/**
 *
 * @export
 * @interface AuthTokenItemCreateUpdateRequest
 */
export interface AuthTokenItemCreateUpdateRequest {
    /**
     * Display name
     * @type {string}
     * @memberof AuthTokenItemCreateUpdateRequest
     */
    name?: string;
    /**
     * Is active
     * @type {boolean}
     * @memberof AuthTokenItemCreateUpdateRequest
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface AuthTokenItemFull
 */
export interface AuthTokenItemFull extends AuthTokenItem {
    /**
     * Token value. Used for authentication.
     * @type {string}
     * @memberof AuthTokenItemFull
     */
    token?: string;
}
/**
 *
 * @export
 * @interface Benchmark
 */
export interface Benchmark {
    /**
     *
     * @type {number}
     * @memberof Benchmark
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof Benchmark
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof Benchmark
     */
    workerId?: number;
    /**
     *
     * @type {number[]}
     * @memberof Benchmark
     */
    tagIds?: number[];
    /**
     * When the benchmark was started
     * @type {number}
     * @memberof Benchmark
     */
    startedAt?: number;
    /**
     * When the benchmark was finished. If absent - the benchmark is still running.
     * @type {number}
     * @memberof Benchmark
     */
    finishedAt?: number;
    /**
     * This flag indicates that the benchmark was aborted.
     * @type {boolean}
     * @memberof Benchmark
     */
    aborted?: boolean;
    /**
     * Algorithms that were chosen for benchmark
     * @type {AlgoName[]}
     * @memberof Benchmark
     */
    algos?: AlgoName[];
}
/**
 * Benchmark job
 * @export
 * @interface BenchmarkJob
 */
export interface BenchmarkJob {
    /**
     *
     * @type {AlgoName}
     * @memberof BenchmarkJob
     */
    algo?: AlgoName;
    /**
     * Popularity of this algo. Lower is better.
     * @type {number}
     * @memberof BenchmarkJob
     */
    rank?: number;
    /**
     * This algo is mined by another Hive users with the same GPUs.
     * @type {boolean}
     * @memberof BenchmarkJob
     */
    recommended?: boolean;
}
/**
 *
 * @export
 * @interface BenchmarkRequest
 */
export interface BenchmarkRequest {
    /**
     * Worker ID for individual run.
     * @type {number}
     * @memberof BenchmarkRequest
     */
    workerId?: number;
    /**
     * Tags for batch run. Comma-separated list of Tag IDs.
     * @type {number[]}
     * @memberof BenchmarkRequest
     */
    tagIds?: number[];
    /**
     * Algo names to include in benchmark
     * @type {AlgoName[]}
     * @memberof BenchmarkRequest
     */
    algos: AlgoName[];
}
/**
 *
 * @export
 * @interface BenchmarkResultItem
 */
export interface BenchmarkResultItem {
    /**
     *
     * @type {AlgoName}
     * @memberof BenchmarkResultItem
     */
    algo?: AlgoName;
    /**
     *
     * @type {MinerName}
     * @memberof BenchmarkResultItem
     */
    miner?: MinerName;
    /**
     * Average hashrate, kH/s
     * @type {number}
     * @memberof BenchmarkResultItem
     */
    hashrate?: number;
    /**
     * Average power draw, watts
     * @type {number}
     * @memberof BenchmarkResultItem
     */
    power?: number;
}
/**
 *
 * @export
 * @interface BenchmarkResults
 */
export interface BenchmarkResults {
    /**
     * Contains benchmark results. May contain partial results (not for all algos) if not finished yet.
     * @type {BenchmarkResultItem[]}
     * @memberof BenchmarkResults
     */
    results?: BenchmarkResultItem[];
}
/**
 *
 * @export
 * @interface BenchmarkWithResults
 */
export interface BenchmarkWithResults extends Benchmark {
    /**
     * Contains benchmark results. May contain partial results (not for all algos) if not finished yet.
     * @type {BenchmarkResultItem[]}
     * @memberof BenchmarkWithResults
     */
    results?: BenchmarkResultItem[];
}
/**
 * Billing type: * 11 - Rigs general * 12 - Rigs that mine on hiveon pool * 13 - Rigs that mine hiveon coins on other pools * 21 - ASICs general * 22 - ASICs with Hive firmware
 * @export
 * @enum {string}
 */
export declare enum BillingType {
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_21 = 21,
    NUMBER_22 = 22
}
/**
 *
 * @export
 * @interface Body
 */
export interface Body {
    /**
     * Login or email address of account.
     * @type {string}
     * @memberof Body
     */
    login: string;
}
/**
 *
 * @export
 * @interface Body1
 */
export interface Body1 {
    /**
     * Login or email address that was provided on registration
     * @type {string}
     * @memberof Body1
     */
    login?: string;
    /**
     * Activation code that was sent to specified email
     * @type {string}
     * @memberof Body1
     */
    emailCode: string;
}
/**
 *
 * @export
 * @interface Body10
 */
export interface Body10 {
    /**
     *
     * @type {boolean}
     * @memberof Body10
     */
    enabled?: boolean;
}
/**
 *
 * @export
 * @interface Body11
 */
export interface Body11 {
    /**
     * Token ID (Device ID)
     * @type {string}
     * @memberof Body11
     */
    id: string;
    /**
     * Token name (Device name)
     * @type {string}
     * @memberof Body11
     */
    name: string;
    /**
     * Token value
     * @type {string}
     * @memberof Body11
     */
    token: string;
    /**
     * Is token enabled
     * @type {boolean}
     * @memberof Body11
     */
    enabled?: boolean;
}
/**
 *
 * @export
 * @interface Body12
 */
export interface Body12 {
    /**
     *
     * @type {boolean}
     * @memberof Body12
     */
    enabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Body12
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface Body13
 */
export interface Body13 {
    /**
     *
     * @type {ReferralPayoutAddress[]}
     * @memberof Body13
     */
    data?: ReferralPayoutAddress[];
}
/**
 *
 * @export
 * @interface Body14
 */
export interface Body14 {
    /**
     *
     * @type {ReferralPayoutRequest[]}
     * @memberof Body14
     */
    data?: ReferralPayoutRequest[];
}
/**
 *
 * @export
 * @interface Body15
 */
export interface Body15 {
    /**
     *
     * @type {string}
     * @memberof Body15
     */
    promocode: string;
}
/**
 *
 * @export
 * @interface Body16
 */
export interface Body16 {
    /**
     * Login or Email of user who will receive the money
     * @type {string}
     * @memberof Body16
     */
    login?: string;
    /**
     * Amount in fiat currency
     * @type {number}
     * @memberof Body16
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface Body17
 */
export interface Body17 {
    /**
     * Login or Email of user who will receive the request
     * @type {string}
     * @memberof Body17
     */
    login: string;
    /**
     *
     * @type {FarmsfarmIdtransferType}
     * @memberof Body17
     */
    type?: FarmsfarmIdtransferType;
}
/**
 *
 * @export
 * @interface Body18
 */
export interface Body18 {
    /**
     * Farm ID
     * @type {number}
     * @memberof Body18
     */
    farmId: number;
}
/**
 *
 * @export
 * @interface Body19
 */
export interface Body19 {
    /**
     * Farm ID
     * @type {number}
     * @memberof Body19
     */
    farmId: number;
}
/**
 *
 * @export
 * @interface Body2
 */
export interface Body2 {
    /**
     * Current password
     * @type {string}
     * @memberof Body2
     */
    password: string;
    /**
     *
     * @type {Password}
     * @memberof Body2
     */
    newPassword: Password;
}
/**
 *
 * @export
 * @interface Body20
 */
export interface Body20 {
    /**
     * Login or Email of user who will receive the money
     * @type {string}
     * @memberof Body20
     */
    login?: string;
    /**
     * Amount in fiat currency
     * @type {number}
     * @memberof Body20
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface Body21
 */
export interface Body21 {
    /**
     *
     * @type {WorkerCreateRequest[]}
     * @memberof Body21
     */
    data?: WorkerCreateRequest[];
}
/**
 *
 * @export
 * @interface Body22
 */
export interface Body22 {
    /**
     *
     * @type {FarmsfarmIdworkersmultiData[]}
     * @memberof Body22
     */
    data?: FarmsfarmIdworkersmultiData[];
}
/**
 *
 * @export
 * @interface Body23
 */
export interface Body23 {
    /**
     * Grouped by ROM request data
     * @type {RomUploadRequestItem[]}
     * @memberof Body23
     */
    data?: RomUploadRequestItem[];
}
/**
 *
 * @export
 * @interface Body24
 */
export interface Body24 {
    /**
     * Grouped by ROM request data
     * @type {RomUploadRequestItem[]}
     * @memberof Body24
     */
    data?: RomUploadRequestItem[];
}
/**
 *
 * @export
 * @interface Body25
 */
export interface Body25 {
    /**
     * Overclocking request data with GPU-related params.
     * @type {FarmsfarmIdworkersoverclockGpuData[]}
     * @memberof Body25
     */
    gpuData?: FarmsfarmIdworkersoverclockGpuData[];
    /**
     * Overclocking request data with worker-global params.
     * @type {FarmsfarmIdworkersoverclockCommonData[]}
     * @memberof Body25
     */
    commonData?: FarmsfarmIdworkersoverclockCommonData[];
}
/**
 *
 * @export
 * @interface Body26
 */
export interface Body26 {
    /**
     * Workers to rename
     * @type {WorkerBatchRenameItem[]}
     * @memberof Body26
     */
    data?: WorkerBatchRenameItem[];
}
/**
 *
 * @export
 * @interface Body27
 */
export interface Body27 {
    /**
     * Delete messages only of these workers.
     * @type {number[]}
     * @memberof Body27
     */
    workerIds?: number[];
    /**
     * Delete messages only of these types.
     * @type {MessageType[]}
     * @memberof Body27
     */
    types?: MessageType[];
}
/**
 *
 * @export
 * @interface Body28
 */
export interface Body28 {
    /**
     * Delete messages only of these types.
     * @type {MessageType[]}
     * @memberof Body28
     */
    types?: MessageType[];
}
/**
 *
 * @export
 * @interface Body29
 */
export interface Body29 {
    /**
     *
     * @type {FarmsfarmIdtagsData[]}
     * @memberof Body29
     */
    data?: FarmsfarmIdtagsData[];
}
/**
 *
 * @export
 * @interface Body3
 */
export interface Body3 {
    /**
     * Account email address
     * @type {string}
     * @memberof Body3
     */
    email?: string;
    /**
     * Password reset token from email
     * @type {string}
     * @memberof Body3
     */
    token?: string;
    /**
     *
     * @type {Password}
     * @memberof Body3
     */
    newPassword?: Password;
}
/**
 *
 * @export
 * @interface Body30
 */
export interface Body30 {
    /**
     *
     * @type {TagCreateRequest[]}
     * @memberof Body30
     */
    data?: TagCreateRequest[];
}
/**
 *
 * @export
 * @interface Body31
 */
export interface Body31 {
    /**
     *
     * @type {TagsData[]}
     * @memberof Body31
     */
    data?: TagsData[];
}
/**
 *
 * @export
 * @interface Body32
 */
export interface Body32 {
    /**
     *
     * @type {TagUCreateRequest[]}
     * @memberof Body32
     */
    data?: TagUCreateRequest[];
}
/**
 *
 * @export
 * @interface Body33
 */
export interface Body33 {
    /**
     * User login or email. If dont set access will be create for all admins
     * @type {string}
     * @memberof Body33
     */
    login?: string;
}
/**
 *
 * @export
 * @interface Body4
 */
export interface Body4 {
    /**
     * Account email address
     * @type {string}
     * @memberof Body4
     */
    email?: string;
}
/**
 *
 * @export
 * @interface Body5
 */
export interface Body5 {
    /**
     * Generated secret code
     * @type {string}
     * @memberof Body5
     */
    secret?: string;
    /**
     *
     * @type {TwofaCode}
     * @memberof Body5
     */
    twofaCode?: TwofaCode;
}
/**
 *
 * @export
 * @interface Body6
 */
export interface Body6 {
    /**
     *
     * @type {TwofaCode}
     * @memberof Body6
     */
    twofaCode?: TwofaCode;
}
/**
 *
 * @export
 * @interface Body7
 */
export interface Body7 {
    /**
     * Confirmation code from sent email
     * @type {string}
     * @memberof Body7
     */
    emailCode: string;
    /**
     * This is a new email address that was requested via `PATCH /account/profile`. If no email change request was made this field is not required.
     * @type {string}
     * @memberof Body7
     */
    email?: string;
}
/**
 * This data is required only for unauthenticated request
 * @export
 * @interface Body8
 */
export interface Body8 {
    /**
     * Login or email address of non-activated account.
     * @type {string}
     * @memberof Body8
     */
    login?: string;
}
/**
 *
 * @export
 * @interface Body9
 */
export interface Body9 {
    /**
     * Code given by bot
     * @type {string}
     * @memberof Body9
     */
    authCode?: string;
}
/**
 * Coin symbol
 * @export
 * @interface CoinSymbol
 */
export interface CoinSymbol {
}
/**
 * Data for command For `miner`: ```json {   \"action\": \"restart|stop|log|config|tuning\",   \"miner_index\": integer, Zero-based miner index, default is 0 } ``` For `teleconsole` and `hssh`: ```json {   \"action\": \"start|stop|restart\" } ``` For `exec`: ```json {   \"cmd\": \"command to execute\" } ``` For `amd_download` and `nvidia_download`: ```json {   \"gpu_index\": integer, GPU index   \"to_storage\": boolean, Save the ROM to farm's storage } ``` For `amd_upload` and `nvidia_upload`: ```json {   \"gpu_index\": integer, GPU index, zero-based (-1 to flash all GPUs)   \"rom\": base64-string, ROM file contents   \"rom_id\": integer, Use stored ROM instead of passing file contents   \"force\": boolean, Force flashing regardless of security checkings   \"reboot\": boolean, Reboot worker after successful flashing } ``` For `upgrade`: ```json {   \"beta\": boolean, Upgrade to latest beta version (For asics only)   \"force\": boolean, Force upgrade (For rigs only)   \"reboot\": boolean, Reboot worker after upgrade (For rigs only)   \"version\": string, Upgrade to this version } ``` For `asic_upgrade`: ```json {   \"firmware_url\": \"firmware file url\" } ``` For `donnager_relay_switch`: ```json {   \"action\": \"on|off|restart\"   \"indexes\": integer array of channel indexes } ``` For `pool_test`: ```json {   \"pool_urls\": string array of stratum pool urls   \"pool_ssl\": boolean, Use SSL } ``` For `shutdown`: ```json {   \"wakealarm\": boolean, Shutdown and boot in 30s } ```
 * @export
 * @interface CommandData
 */
export interface CommandData {
}
/**
 *
 * @export
 * @interface CommandRequest
 */
export interface CommandRequest {
    /**
     *
     * @type {CommandsEnum}
     * @memberof CommandRequest
     */
    command: CommandsEnum;
    /**
     *
     * @type {CommandData}
     * @memberof CommandRequest
     */
    data?: CommandData;
}
/**
 * Command name
 * @export
 * @enum {string}
 */
export declare enum CommandsEnum {
    Reboot = "reboot",
    Shutdown = "shutdown",
    Upgrade = "upgrade",
    Miner = "miner",
    Teleconsole = "teleconsole",
    Hssh = "hssh",
    Exec = "exec",
    AmdDownload = "amd_download",
    AmdUpload = "amd_upload",
    NvidiaDownload = "nvidia_download",
    NvidiaUpload = "nvidia_upload",
    AsicUpgrade = "asic_upgrade",
    OctofanRecalibrate = "octofan_recalibrate",
    BenchmarkStop = "benchmark_stop",
    DonnagerRelaySwitch = "donnager_relay_switch",
    PoolTest = "pool_test"
}
/**
 *
 * @export
 * @interface Container
 */
export interface Container {
    /**
     * Container name
     * @type {string}
     * @memberof Container
     */
    name?: string;
    /**
     * used to dispaly shape
     * @type {string}
     * @memberof Container
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof Container
     */
    description?: string;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof Container
     */
    rows?: number;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof Container
     */
    cols?: number;
    /**
     * Cells configuration
     * @type {ContainerCellConfig[]}
     * @memberof Container
     */
    cellsConfig?: ContainerCellConfig[];
    /**
     *
     * @type {ContainerCell[]}
     * @memberof Container
     */
    cells?: ContainerCell[];
    /**
     *
     * @type {ContainerStats}
     * @memberof Container
     */
    stats?: ContainerStats;
}
/**
 *
 * @export
 * @interface ContainerCell
 */
export interface ContainerCell {
    /**
     *
     * @type {ContainerCellPosition}
     * @memberof ContainerCell
     */
    position?: ContainerCellPosition;
    /**
     * Attached worker ID
     * @type {number}
     * @memberof ContainerCell
     */
    workerId?: number;
    /**
     * Attached nested container ID
     * @type {number}
     * @memberof ContainerCell
     */
    containerId?: number;
}
/**
 *
 * @export
 * @interface ContainerCellConfig
 */
export interface ContainerCellConfig {
    /**
     * Nested container ID instead of worker
     * @type {number}
     * @memberof ContainerCellConfig
     */
    containerId?: number;
    /**
     *
     * @type {ContainerCellConfigFieldsRules}
     * @memberof ContainerCellConfig
     */
    rules?: ContainerCellConfigFieldsRules;
}
/**
 *
 * @export
 * @interface ContainerCellConfigFields
 */
export interface ContainerCellConfigFields {
    /**
     * Nested container ID instead of worker
     * @type {number}
     * @memberof ContainerCellConfigFields
     */
    containerId?: number;
    /**
     *
     * @type {ContainerCellConfigFieldsRules}
     * @memberof ContainerCellConfigFields
     */
    rules?: ContainerCellConfigFieldsRules;
}
/**
 * Rules for matching worker
 * @export
 * @interface ContainerCellConfigFieldsRules
 */
export interface ContainerCellConfigFieldsRules {
    /**
     * Worker ID
     * @type {number}
     * @memberof ContainerCellConfigFieldsRules
     */
    workerId?: number;
    /**
     * Worker name
     * @type {string}
     * @memberof ContainerCellConfigFieldsRules
     */
    workerName?: string;
    /**
     * IP address
     * @type {string}
     * @memberof ContainerCellConfigFieldsRules
     */
    ip?: string;
}
/**
 * [x, y]
 * @export
 * @interface ContainerCellPosition
 */
export type ContainerCellPosition = [number, number];
/**
 *
 * @export
 * @interface ContainerCellsConfigField
 */
export interface ContainerCellsConfigField {
    /**
     * Cells configuration
     * @type {ContainerCellConfig[]}
     * @memberof ContainerCellsConfigField
     */
    cellsConfig?: ContainerCellConfig[];
}
/**
 *
 * @export
 * @interface ContainerCellsField
 */
export interface ContainerCellsField {
    /**
     *
     * @type {ContainerCell[]}
     * @memberof ContainerCellsField
     */
    cells?: ContainerCell[];
}
/**
 *
 * @export
 * @interface ContainerCreateRequest
 */
export interface ContainerCreateRequest extends ContainerFields {
    /**
     * Cells configuration
     * @type {ContainerCellConfig[]}
     * @memberof ContainerCreateRequest
     */
    cellsConfig?: ContainerCellConfig[];
}
/**
 *
 * @export
 * @interface ContainerFields
 */
export interface ContainerFields {
    /**
     * Container name
     * @type {string}
     * @memberof ContainerFields
     */
    name?: string;
    /**
     * used to dispaly shape
     * @type {string}
     * @memberof ContainerFields
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerFields
     */
    description?: string;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof ContainerFields
     */
    rows?: number;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof ContainerFields
     */
    cols?: number;
}
/**
 *
 * @export
 * @interface ContainerListItem
 */
export interface ContainerListItem {
    /**
     * Container name
     * @type {string}
     * @memberof ContainerListItem
     */
    name?: string;
    /**
     * used to dispaly shape
     * @type {string}
     * @memberof ContainerListItem
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof ContainerListItem
     */
    description?: string;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof ContainerListItem
     */
    rows?: number;
    /**
     * Amount of rows in the container
     * @type {number}
     * @memberof ContainerListItem
     */
    cols?: number;
    /**
     * Cells configuration
     * @type {ContainerCellConfig[]}
     * @memberof ContainerListItem
     */
    cellsConfig?: ContainerCellConfig[];
    /**
     *
     * @type {ContainerCell[]}
     * @memberof ContainerListItem
     */
    cells?: ContainerCell[];
    /**
     *
     * @type {ContainerStats}
     * @memberof ContainerListItem
     */
    stats?: ContainerStats;
}
/**
 *
 * @export
 * @interface ContainerStats
 */
export interface ContainerStats {
}
/**
 *
 * @export
 * @interface ContainerStatsField
 */
export interface ContainerStatsField {
    /**
     *
     * @type {ContainerStats}
     * @memberof ContainerStatsField
     */
    stats?: ContainerStats;
}
/**
 *
 * @export
 * @interface ContainerUpdateRequest
 */
export interface ContainerUpdateRequest extends ContainerFields {
    /**
     * Cells configuration
     * @type {ContainerCellConfig[]}
     * @memberof ContainerUpdateRequest
     */
    cellsConfig?: ContainerCellConfig[];
}
/**
 *
 * @export
 * @interface CreatedAt
 */
export interface CreatedAt {
    /**
     * When entity was created
     * @type {number}
     * @memberof CreatedAt
     */
    createdAt?: number;
}
/**
 * Secondary algorithm name for dual miners
 * @export
 * @interface DAlgoName
 */
export interface DAlgoName {
}
/**
 * Secondary coin symbol for dual miners
 * @export
 * @interface DCoinSymbol
 */
export interface DCoinSymbol {
}
/**
 *
 * @export
 * @interface Deposit
 */
export interface Deposit {
    /**
     * Deposit amount
     * @type {number}
     * @memberof Deposit
     */
    amount?: number;
    /**
     * Deposit source
     * @type {string}
     * @memberof Deposit
     */
    source?: Deposit.SourceEnum;
    /**
     * Farm ID if selected source is \"farm\"
     * @type {number}
     * @memberof Deposit
     */
    sourceFarmId?: number;
}
/**
 * @export
 * @namespace Deposit
 */
export declare namespace Deposit {
    /**
     * @export
     * @enum {string}
     */
    enum SourceEnum {
        Account = "account",
        Farm = "farm"
    }
}
/**
 *
 * @export
 * @interface DepositAddress
 */
export interface DepositAddress {
    /**
     *
     * @type {DepositAddressProvider}
     * @memberof DepositAddress
     */
    provider?: DepositAddressProvider;
    /**
     *
     * @type {DepositAddressCurrency}
     * @memberof DepositAddress
     */
    currency?: DepositAddressCurrency;
    /**
     * Deposit address
     * @type {string}
     * @memberof DepositAddress
     */
    address?: string;
    /**
     * When the address was generated
     * @type {number}
     * @memberof DepositAddress
     */
    createdAt?: number;
}
/**
 *
 * @export
 * @interface DepositAddressCreateRequest
 */
export interface DepositAddressCreateRequest {
    /**
     *
     * @type {DepositAddressProvider}
     * @memberof DepositAddressCreateRequest
     */
    provider: DepositAddressProvider;
    /**
     *
     * @type {DepositAddressCurrency}
     * @memberof DepositAddressCreateRequest
     */
    currency: DepositAddressCurrency;
}
/**
 * Currency. Available currencies can be get from `/hive/deposit_address_providers` endpoint
 * @export
 * @interface DepositAddressCurrency
 */
export interface DepositAddressCurrency {
}
/**
 * Provider name. Available providers can be get from `/hive/deposit_address_providers` endpoint
 * @export
 * @interface DepositAddressProvider
 */
export interface DepositAddressProvider {
}
/**
 *
 * @export
 * @interface FSCreateRequest
 */
export interface FSCreateRequest extends FSFields {
    /**
     *
     * @type {FSItemFields[]}
     * @memberof FSCreateRequest
     */
    items?: FSItemFields[];
}
/**
 *
 * @export
 * @interface FSFields
 */
export interface FSFields {
    /**
     * Display name
     * @type {string}
     * @memberof FSFields
     */
    name?: string;
    /**
     * Is favorite flag
     * @type {boolean}
     * @memberof FSFields
     */
    isFavorite?: boolean;
}
/**
 *
 * @export
 * @interface FSItemFields
 */
export interface FSItemFields {
    /**
     * Coin name
     * @type {string}
     * @memberof FSItemFields
     */
    coin: string;
    /**
     * Pool name
     * @type {string}
     * @memberof FSItemFields
     */
    pool?: string;
    /**
     * Pool geo
     * @type {string[]}
     * @memberof FSItemFields
     */
    poolGeo?: string[];
    /**
     * Use SSL when connecting to pool
     * @type {boolean}
     * @memberof FSItemFields
     */
    poolSsl?: boolean;
    /**
     * Pool urls
     * @type {string[]}
     * @memberof FSItemFields
     */
    poolUrls?: string[];
    /**
     * Wallet ID
     * @type {number}
     * @memberof FSItemFields
     */
    walId: number;
    /**
     * Email for pool
     * @type {string}
     * @memberof FSItemFields
     */
    email?: string;
    /**
     * Second coin name for dual miner
     * @type {string}
     * @memberof FSItemFields
     */
    dcoin?: string;
    /**
     * Second pool name for dual miner
     * @type {string}
     * @memberof FSItemFields
     */
    dpool?: string;
    /**
     * Second pool geo
     * @type {string[]}
     * @memberof FSItemFields
     */
    dpoolGeo?: string[];
    /**
     * Use SSL when connecting to second pool
     * @type {boolean}
     * @memberof FSItemFields
     */
    dpoolSsl?: boolean;
    /**
     * Second pool urls
     * @type {string[]}
     * @memberof FSItemFields
     */
    dpoolUrls?: string[];
    /**
     * Second wallet ID for dual miner
     * @type {number}
     * @memberof FSItemFields
     */
    dwalId?: number;
    /**
     * Second email for pool for dual miner
     * @type {string}
     * @memberof FSItemFields
     */
    demail?: string;
    /**
     *
     * @type {MinerName}
     * @memberof FSItemFields
     */
    miner: MinerName;
    /**
     *
     * @type {MinerConfig}
     * @memberof FSItemFields
     */
    minerConfig: MinerConfig;
}
/**
 *
 * @export
 * @interface FSItemFullInfo
 */
export interface FSItemFullInfo extends FSItemFields {
    /**
     * Additional text for miner name. For example fork name or veersion.
     * @type {string}
     * @memberof FSItemFullInfo
     */
    minerAlt?: string;
}
/**
 *
 * @export
 * @interface FSItemMidInfo
 */
export interface FSItemMidInfo {
    /**
     * Coin name
     * @type {string}
     * @memberof FSItemMidInfo
     */
    coin?: string;
    /**
     * Pool name
     * @type {string}
     * @memberof FSItemMidInfo
     */
    pool?: string;
    /**
     * Wallet ID
     * @type {number}
     * @memberof FSItemMidInfo
     */
    walId?: number;
    /**
     * Second coin name for dual miner
     * @type {string}
     * @memberof FSItemMidInfo
     */
    dcoin?: string;
    /**
     * Second pool name for dual miner
     * @type {string}
     * @memberof FSItemMidInfo
     */
    dpool?: string;
    /**
     * Second wallet ID
     * @type {number}
     * @memberof FSItemMidInfo
     */
    dwalId?: number;
    /**
     *
     * @type {MinerName}
     * @memberof FSItemMidInfo
     */
    miner?: MinerName;
    /**
     * Additional text for miner name. For example fork name or veersion.
     * @type {string}
     * @memberof FSItemMidInfo
     */
    minerAlt?: string;
}
/**
 *
 * @export
 * @interface FSItems
 */
export interface FSItems {
    /**
     *
     * @type {FSItemFields[]}
     * @memberof FSItems
     */
    items?: FSItemFields[];
}
/**
 *
 * @export
 * @interface FSMidInfo
 */
export interface FSMidInfo {
    /**
     *
     * @type {number}
     * @memberof FSMidInfo
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof FSMidInfo
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof FSMidInfo
     */
    userId?: number;
    /**
     * Display name
     * @type {string}
     * @memberof FSMidInfo
     */
    name?: string;
    /**
     *
     * @type {FSItemMidInfo[]}
     * @memberof FSMidInfo
     */
    items?: FSItemMidInfo[];
}
/**
 *
 * @export
 * @interface FSShortInfo
 */
export interface FSShortInfo {
    /**
     *
     * @type {number}
     * @memberof FSShortInfo
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof FSShortInfo
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof FSShortInfo
     */
    userId?: number;
    /**
     * Display name
     * @type {string}
     * @memberof FSShortInfo
     */
    name?: string;
}
/**
 *
 * @export
 * @interface FSUpdateRequest
 */
export interface FSUpdateRequest extends FSFields {
    /**
     *
     * @type {FSItemFields[]}
     * @memberof FSUpdateRequest
     */
    items?: FSItemFields[];
}
/**
 * FanFlap controller stats
 * @export
 * @interface FanflapStats
 */
export interface FanflapStats {
    /**
     * Fan speeds, %
     * @type {number[]}
     * @memberof FanflapStats
     */
    fan?: number[];
}
/**
 *
 * @export
 * @interface Farm
 */
export interface Farm {
    id: number;
    /**
     * Display name
     * @type {string}
     * @memberof Farm
     */
    name?: string;
    /**
     * Time zone for all farm workers. Default is account's time zone.
     * @type {string}
     * @memberof Farm
     */
    timezone?: string;
    /**
     * Red Temperature for GPU workers, °C
     * @type {number}
     * @memberof Farm
     */
    gpuRedTemp?: number;
    /**
     * Red Temperature for ASIC workers, °C
     * @type {number}
     * @memberof Farm
     */
    asicRedTemp?: number;
    /**
     * Red Board Temperature for ASIC workers, °C
     * @type {number}
     * @memberof Farm
     */
    asicRedBoardTemp?: number;
    /**
     * Red memory temperature for GPU workers, °C
     * @type {number}
     * @memberof Farm
     */
    gpuRedMemTemp?: number;
    /**
     * Red CPU temperature for GPU workers, °C
     * @type {number}
     * @memberof Farm
     */
    gpuRedCpuTemp?: number;
    /**
     * Red Fan speed for GPU workers, %
     * @type {number}
     * @memberof Farm
     */
    gpuRedFan?: number;
    /**
     * Red Fan speed for ASIC workers, %
     * @type {number}
     * @memberof Farm
     */
    asicRedFan?: number;
    /**
     * Red Accepted Shares Ratio for GPU workers, %
     * @type {number}
     * @memberof Farm
     */
    gpuRedAsr?: number;
    /**
     * Red Accepted Shares Ratio for ASIC workers, %
     * @type {number}
     * @memberof Farm
     */
    asicRedAsr?: number;
    /**
     * Red Load Average per one CPU core for GPU workers
     * @type {number}
     * @memberof Farm
     */
    gpuRedLa?: number;
    /**
     * Red Load Average per one CPU core for ASIC workers
     * @type {number}
     * @memberof Farm
     */
    asicRedLa?: number;
    /**
     * Package repository URL list. Use this to override default list.
     * @type {string[]}
     * @memberof Farm
     */
    repoUrls?: string[];
    /**
     * Electricity price per kilowatt hour
     * @type {number}
     * @memberof Farm
     */
    powerPrice?: number;
    /**
     * Currency of electricity price
     * @type {string}
     * @memberof Farm
     */
    powerPriceCurrency?: string;
    /**
     * Enable charging on brand pool
     * @type {boolean}
     * @memberof Farm
     */
    chargeOnPool?: boolean;
    /**
     * Template new worker names.  Supported fields:   - id: worker id   - uid: worker uuid   - platform: name of platform (worker, rig, asic, device)   - mac: device mac address  Supported functions:   - uppercase: change text to upper case   - lowercase: change text to lower case   - replace(search, replace): replace search text to other text   - limit(size): text limit   - addAfter(value): add value after var   - addBefore(value): add value before var   - substring(offset, ?limit): get part of string, arguments support negative values, limit is not required  Template can be checked via `/string_templates/test/worker_name` endpoint.
     * @type {string}
     * @memberof Farm
     */
    workerNameTemplate?: string;
    /**
     * Unique ID to be used for connecting new workers to the farm
     * @type {string}
     * @memberof Farm
     */
    autocreateHash?: string;
    /**
     * Paid features state
     * @type {boolean}
     * @memberof Farm
     */
    nonfree?: boolean;
    /**
     * Farm is locked due to exceeding overdraft limit
     * @type {boolean}
     * @memberof Farm
     */
    locked?: boolean;
    /**
     * 2FA is required for update operations (if not owner)
     * @type {boolean}
     * @memberof Farm
     */
    twofaRequired?: boolean;
    /**
     * Farm is trusted (if not owner)
     * @type {boolean}
     * @memberof Farm
     */
    trusted?: boolean;
    /**
     *
     * @type {FarmPropsOwner}
     * @memberof Farm
     */
    owner?: FarmPropsOwner;
    /**
     *
     * @type {FarmPropsPayer}
     * @memberof Farm
     */
    payer?: FarmPropsPayer;
    /**
     *
     * @type {FarmPropsPersonalSettings}
     * @memberof Farm
     */
    personalSettings?: FarmPropsPersonalSettings;
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof Farm
     */
    role?: AccessRoleEnum;
    /**
     * Total amount of workers in farm
     * @type {number}
     * @memberof Farm
     */
    workersCount?: number;
    /**
     * Total amount of Rigs in farm
     * @type {number}
     * @memberof Farm
     */
    rigsCount?: number;
    /**
     * Total amount of ASICs in farm
     * @type {number}
     * @memberof Farm
     */
    asicsCount?: number;
    /**
     * Amount of disabled Rigs in farm
     * @type {number}
     * @memberof Farm
     */
    disabledRigsCount?: number;
    /**
     * Amount of disabled ASICs in farm
     * @type {number}
     * @memberof Farm
     */
    disabledAsicsCount?: number;
    /**
     *
     * @type {FarmMoneyMoney}
     * @memberof Farm
     */
    money?: FarmMoneyMoney;
    /**
     *
     * @type {FarmStats}
     * @memberof Farm
     */
    stats?: FarmStats;
    /**
     *
     * @type {FarmHashratesHashrates[]}
     * @memberof Farm
     */
    hashrates?: FarmHashratesHashrates[];
    /**
     * Summary hashrates per coin
     * @type {FarmHashratesHashratesByCoin[]}
     * @memberof Farm
     */
    hashratesByCoin?: FarmHashratesHashratesByCoin[];
    /**
     *
     * @type {number[]}
     * @memberof Farm
     */
    tagIds?: number[];
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof Farm
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof Farm
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof Farm
     */
    octofanCorrectPower?: boolean;
    /**
     * Auto-tags feature. If enabled - all workers inside the farm are automatically tagged. Rigs are tagged by GPU information such as model name, memory size, OEM, etc. ASICs are tagged by model name.
     * @type {boolean}
     * @memberof Farm
     */
    autoTags?: boolean;
    /**
     * Default flight sheets keyed by platform (1 - rig, 2 - asic). These flight sheets will be automatically attached to newly created workers.
     * @type {{ [key: string]: number }}
     * @memberof Farm
     */
    defaultFs?: {
        [key: string]: number;
    };
}
/**
 *
 * @export
 * @interface FarmAcl
 */
export interface FarmAcl {
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof FarmAcl
     */
    role?: AccessRoleEnum;
    /**
     * Tags list for restricted access
     * @type {number[]}
     * @memberof FarmAcl
     */
    tagIds?: number[];
    /**
     * Trusted user must have 2FA enabled otherwise the access will be read-only
     * @type {boolean}
     * @memberof FarmAcl
     */
    twofaRequired?: boolean;
    /**
     * Is active
     * @type {boolean}
     * @memberof FarmAcl
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface FarmAutoTags
 */
export interface FarmAutoTags {
    /**
     * Auto-tags feature. If enabled - all workers inside the farm are automatically tagged. Rigs are tagged by GPU information such as model name, memory size, OEM, etc. ASICs are tagged by model name.
     * @type {boolean}
     * @memberof FarmAutoTags
     */
    autoTags?: boolean;
}
/**
 *
 * @export
 * @interface FarmAutocreateHash
 */
export interface FarmAutocreateHash {
    /**
     * Unique ID to be used for connecting new workers to the farm
     * @type {string}
     * @memberof FarmAutocreateHash
     */
    autocreateHash?: string;
}
/**
 *
 * @export
 * @interface FarmConfigFiles
 */
export interface FarmConfigFiles {
    /**
     * rig.conf file contents
     * @type {string}
     * @memberof FarmConfigFiles
     */
    rigConf?: string;
}
/**
 *
 * @export
 * @interface FarmCreateRequest
 */
export interface FarmCreateRequest extends FarmFields {
    /**
     * Paid features state
     * @type {boolean}
     * @memberof FarmCreateRequest
     */
    nonfree?: boolean;
    /**
     *
     * @type {number[]}
     * @memberof FarmCreateRequest
     */
    tagIds?: number[];
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof FarmCreateRequest
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof FarmCreateRequest
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof FarmCreateRequest
     */
    octofanCorrectPower?: boolean;
    /**
     * Auto-tags feature. If enabled - all workers inside the farm are automatically tagged. Rigs are tagged by GPU information such as model name, memory size, OEM, etc. ASICs are tagged by model name.
     * @type {boolean}
     * @memberof FarmCreateRequest
     */
    autoTags?: boolean;
    /**
     * Default flight sheets keyed by platform (1 - rig, 2 - asic). These flight sheets will be automatically attached to newly created workers.
     * @type {{ [key: string]: number }}
     * @memberof FarmCreateRequest
     */
    defaultFs?: {
        [key: string]: number;
    };
}
/**
 *
 * @export
 * @interface FarmDefaultFS
 */
export interface FarmDefaultFS {
    /**
     * Default flight sheets keyed by platform (1 - rig, 2 - asic). These flight sheets will be automatically attached to newly created workers.
     * @type {{ [key: string]: number }}
     * @memberof FarmDefaultFS
     */
    defaultFs?: {
        [key: string]: number;
    };
}
/**
 *
 * @export
 * @interface FarmEvent
 */
export interface FarmEvent {
    /**
     *
     * @type {number}
     * @memberof FarmEvent
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof FarmEvent
     */
    timestamp?: number;
    /**
     *
     * @type {number}
     * @memberof FarmEvent
     */
    typeId?: number;
    /**
     *
     * @type {string}
     * @memberof FarmEvent
     */
    type?: string;
    /**
     * Action was performed by Hive administrator
     * @type {boolean}
     * @memberof FarmEvent
     */
    byAdmin?: boolean;
    /**
     * Indicates that this is a group of events
     * @type {boolean}
     * @memberof FarmEvent
     */
    isGroup?: boolean;
    /**
     * How many events the group contains
     * @type {number}
     * @memberof FarmEvent
     */
    groupSize?: number;
    /**
     * Details object is specific to event type
     * @type {any}
     * @memberof FarmEvent
     */
    details?: any;
    /**
     *
     * @type {FarmEventUser}
     * @memberof FarmEvent
     */
    user?: FarmEventUser;
    /**
     *
     * @type {FarmEventWorker}
     * @memberof FarmEvent
     */
    worker?: FarmEventWorker;
}
/**
 * User who performed the action
 * @export
 * @interface FarmEventUser
 */
export interface FarmEventUser {
}
/**
 * Related worker
 * @export
 * @interface FarmEventWorker
 */
export interface FarmEventWorker {
}
/**
 *
 * @export
 * @interface FarmFields
 */
export interface FarmFields {
    /**
     * Display name
     * @type {string}
     * @memberof FarmFields
     */
    name?: string;
    /**
     * Time zone for all farm workers. Default is account's time zone.
     * @type {string}
     * @memberof FarmFields
     */
    timezone?: string;
    /**
     * Red Temperature for GPU workers, °C
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedTemp?: number;
    /**
     * Red Temperature for ASIC workers, °C
     * @type {number}
     * @memberof FarmFields
     */
    asicRedTemp?: number;
    /**
     * Red Board Temperature for ASIC workers, °C
     * @type {number}
     * @memberof FarmFields
     */
    asicRedBoardTemp?: number;
    /**
     * Red memory temperature for GPU workers, °C
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedMemTemp?: number;
    /**
     * Red CPU temperature for GPU workers, °C
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedCpuTemp?: number;
    /**
     * Red Fan speed for GPU workers, %
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedFan?: number;
    /**
     * Red Fan speed for ASIC workers, %
     * @type {number}
     * @memberof FarmFields
     */
    asicRedFan?: number;
    /**
     * Red Accepted Shares Ratio for GPU workers, %
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedAsr?: number;
    /**
     * Red Accepted Shares Ratio for ASIC workers, %
     * @type {number}
     * @memberof FarmFields
     */
    asicRedAsr?: number;
    /**
     * Red Load Average per one CPU core for GPU workers
     * @type {number}
     * @memberof FarmFields
     */
    gpuRedLa?: number;
    /**
     * Red Load Average per one CPU core for ASIC workers
     * @type {number}
     * @memberof FarmFields
     */
    asicRedLa?: number;
    /**
     * Package repository URL list. Use this to override default list.
     * @type {string[]}
     * @memberof FarmFields
     */
    repoUrls?: string[];
    /**
     * Electricity price per kilowatt hour
     * @type {number}
     * @memberof FarmFields
     */
    powerPrice?: number;
    /**
     * Currency of electricity price
     * @type {string}
     * @memberof FarmFields
     */
    powerPriceCurrency?: string;
    /**
     * Enable charging on brand pool
     * @type {boolean}
     * @memberof FarmFields
     */
    chargeOnPool?: boolean;
    /**
     * Template new worker names.  Supported fields:   - id: worker id   - uid: worker uuid   - platform: name of platform (worker, rig, asic, device)   - mac: device mac address  Supported functions:   - uppercase: change text to upper case   - lowercase: change text to lower case   - replace(search, replace): replace search text to other text   - limit(size): text limit   - addAfter(value): add value after var   - addBefore(value): add value before var   - substring(offset, ?limit): get part of string, arguments support negative values, limit is not required  Template can be checked via `/string_templates/test/worker_name` endpoint.
     * @type {string}
     * @memberof FarmFields
     */
    workerNameTemplate?: string;
}
/**
 * Summary hashrates per algorithm
 * @export
 * @interface FarmHashrates
 */
export interface FarmHashrates {
    /**
     *
     * @type {FarmHashratesHashrates[]}
     * @memberof FarmHashrates
     */
    hashrates?: FarmHashratesHashrates[];
    /**
     * Summary hashrates per coin
     * @type {FarmHashratesHashratesByCoin[]}
     * @memberof FarmHashrates
     */
    hashratesByCoin?: FarmHashratesHashratesByCoin[];
}
/**
 *
 * @export
 * @interface FarmHashratesHashrates
 */
export interface FarmHashratesHashrates {
    /**
     *
     * @type {AlgoName}
     * @memberof FarmHashratesHashrates
     */
    algo?: AlgoName;
    /**
     * Hashrate value, kH/s
     * @type {number}
     * @memberof FarmHashratesHashrates
     */
    hashrate?: number;
}
/**
 *
 * @export
 * @interface FarmHashratesHashratesByCoin
 */
export interface FarmHashratesHashratesByCoin {
    /**
     *
     * @type {CoinSymbol}
     * @memberof FarmHashratesHashratesByCoin
     */
    coin?: CoinSymbol;
    /**
     *
     * @type {AlgoName}
     * @memberof FarmHashratesHashratesByCoin
     */
    algo?: AlgoName;
    /**
     * Hashrate value, kH/s
     * @type {number}
     * @memberof FarmHashratesHashratesByCoin
     */
    hashrate?: number;
}
/**
 *
 * @export
 * @interface FarmId
 */
export interface FarmId {
    /**
     *
     * @type {number}
     * @memberof FarmId
     */
    farmId?: number;
}
/**
 *
 * @export
 * @interface FarmMetric
 */
export interface FarmMetric {
    /**
     *
     * @type {number}
     * @memberof FarmMetric
     */
    time?: number;
    /**
     * Rigs online
     * @type {number}
     * @memberof FarmMetric
     */
    rigs?: number;
    /**
     * GPUs online
     * @type {number}
     * @memberof FarmMetric
     */
    gpus?: number;
    /**
     * ASICs online
     * @type {number}
     * @memberof FarmMetric
     */
    asics?: number;
    /**
     * ASIC boards online
     * @type {number}
     * @memberof FarmMetric
     */
    boards?: number;
    /**
     * Total power consumption of all workers, watts
     * @type {number}
     * @memberof FarmMetric
     */
    power?: number;
    /**
     * Total power consumption of all Rigs, watts
     * @type {number}
     * @memberof FarmMetric
     */
    rigsPower?: number;
    /**
     * Total power consumption of all ASICs, watts
     * @type {number}
     * @memberof FarmMetric
     */
    asicsPower?: number;
    /**
     * Hashrates by algorithm
     * @type {FarmMetricHashrates[]}
     * @memberof FarmMetric
     */
    hashrates?: FarmMetricHashrates[];
}
/**
 *
 * @export
 * @interface FarmMetricHashrates
 */
export interface FarmMetricHashrates {
    /**
     *
     * @type {AlgoName}
     * @memberof FarmMetricHashrates
     */
    algo?: AlgoName;
    /**
     * Hashrate
     * @type {number}
     * @memberof FarmMetricHashrates
     */
    value?: number;
}
/**
 *
 * @export
 * @interface FarmMoney
 */
export interface FarmMoney {
    /**
     *
     * @type {FarmMoneyMoney}
     * @memberof FarmMoney
     */
    money?: FarmMoneyMoney;
}
/**
 *
 * @export
 * @interface FarmMoneyCostItem
 */
export interface FarmMoneyCostItem {
    /**
     *
     * @type {BillingType}
     * @memberof FarmMoneyCostItem
     */
    type?: BillingType;
    /**
     * Display name of billing type
     * @type {string}
     * @memberof FarmMoneyCostItem
     */
    typeName?: string;
    /**
     * Amount of used workers of this billing type per day
     * @type {number}
     * @memberof FarmMoneyCostItem
     */
    amount?: number;
    /**
     * Monthly price of this billing type
     * @type {number}
     * @memberof FarmMoneyCostItem
     */
    monthlyPrice?: number;
    /**
     * Monthly cost of this amount of workers
     * @type {number}
     * @memberof FarmMoneyCostItem
     */
    monthlyCost?: number;
    /**
     * Daily cost (monthly cost divided by days in month)
     * @type {number}
     * @memberof FarmMoneyCostItem
     */
    dailyCost?: number;
}
/**
 *
 * @export
 * @interface FarmMoneyMoney
 */
export interface FarmMoneyMoney {
    /**
     * Indicates that paid features are enabled for this farm. These features are enabled automatically when amount of online workers exceeds free limit. Also these features can be enabled manually at any time using farm's `nonfree` flag.
     * @type {boolean}
     * @memberof FarmMoneyMoney
     */
    isPaid?: boolean;
    /**
     * Farm has zero cost. It means that either amount of online workers does not exceed free limit or all online workers are free.
     * @type {boolean}
     * @memberof FarmMoneyMoney
     */
    isFree?: boolean;
    /**
     * Balance
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    balance?: number;
    /**
     * Discount, %
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    discount?: number;
    /**
     * Monthly cost based on used amount of workers, including discount
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    monthlyCost?: number;
    /**
     * Daily cost based on used amount of workers, including discount
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    dailyCost?: number;
    /**
     * Cost details, discount is not included.
     * @type {FarmMoneyCostItem[]}
     * @memberof FarmMoneyMoney
     */
    costDetails?: FarmMoneyCostItem[];
    /**
     * Amount of days left until balance has reached zero, based on current balance and daily price
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    daysLeft?: number;
    /**
     * Balance is negative and farm is in overdraft state
     * @type {boolean}
     * @memberof FarmMoneyMoney
     */
    overdraft?: boolean;
    /**
     * Amount of days left until farm is locked when in overdraft state
     * @type {number}
     * @memberof FarmMoneyMoney
     */
    overdraftDaysLeft?: number;
}
/**
 *
 * @export
 * @interface FarmNonfree
 */
export interface FarmNonfree {
    /**
     * Paid features state
     * @type {boolean}
     * @memberof FarmNonfree
     */
    nonfree?: boolean;
}
/**
 *
 * @export
 * @interface FarmPersonalSettings
 */
export interface FarmPersonalSettings {
    /**
     * Is favorite flag
     * @type {boolean}
     * @memberof FarmPersonalSettings
     */
    isFavorite?: boolean;
    /**
     * Personal note for the farm
     * @type {string}
     * @memberof FarmPersonalSettings
     */
    note?: string;
}
/**
 *
 * @export
 * @interface FarmProps
 */
export interface FarmProps {
    /**
     * Farm is locked due to exceeding overdraft limit
     * @type {boolean}
     * @memberof FarmProps
     */
    locked?: boolean;
    /**
     * 2FA is required for update operations (if not owner)
     * @type {boolean}
     * @memberof FarmProps
     */
    twofaRequired?: boolean;
    /**
     * Farm is trusted (if not owner)
     * @type {boolean}
     * @memberof FarmProps
     */
    trusted?: boolean;
    /**
     *
     * @type {FarmPropsOwner}
     * @memberof FarmProps
     */
    owner?: FarmPropsOwner;
    /**
     *
     * @type {FarmPropsPayer}
     * @memberof FarmProps
     */
    payer?: FarmPropsPayer;
    /**
     *
     * @type {FarmPropsPersonalSettings}
     * @memberof FarmProps
     */
    personalSettings?: FarmPropsPersonalSettings;
}
/**
 * Who owns the farm
 * @export
 * @interface FarmPropsOwner
 */
export interface FarmPropsOwner {
}
/**
 * Who pays for the farm. If not set - owner is the payer.
 * @export
 * @interface FarmPropsPayer
 */
export interface FarmPropsPayer {
}
/**
 * Personal settings for current user
 * @export
 * @interface FarmPropsPersonalSettings
 */
export interface FarmPropsPersonalSettings {
}
/**
 *
 * @export
 * @interface FarmRole
 */
export interface FarmRole {
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof FarmRole
     */
    role?: AccessRoleEnum;
}
/**
 *
 * @export
 * @interface FarmShortInfo
 */
export interface FarmShortInfo {
    /**
     *
     * @type {number}
     * @memberof FarmShortInfo
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof FarmShortInfo
     */
    name?: string;
}
/**
 *
 * @export
 * @interface FarmShortInfoAccount
 */
export interface FarmShortInfoAccount extends FarmShortInfo {
    /**
     * Total amount of workers in farm
     * @type {number}
     * @memberof FarmShortInfoAccount
     */
    workersCount?: number;
    /**
     * Total amount of Rigs in farm
     * @type {number}
     * @memberof FarmShortInfoAccount
     */
    rigsCount?: number;
    /**
     * Total amount of ASICs in farm
     * @type {number}
     * @memberof FarmShortInfoAccount
     */
    asicsCount?: number;
    /**
     * Amount of disabled Rigs in farm
     * @type {number}
     * @memberof FarmShortInfoAccount
     */
    disabledRigsCount?: number;
    /**
     * Amount of disabled ASICs in farm
     * @type {number}
     * @memberof FarmShortInfoAccount
     */
    disabledAsicsCount?: number;
    /**
     *
     * @type {AccessRoleEnum}
     * @memberof FarmShortInfoAccount
     */
    role?: AccessRoleEnum;
}
/**
 *
 * @export
 * @interface FarmStats
 */
export interface FarmStats {
    /**
     * Total amount of workers
     * @type {number}
     * @memberof FarmStats
     */
    workersTotal?: number;
    /**
     * Amount of online workers
     * @type {number}
     * @memberof FarmStats
     */
    workersOnline?: number;
    /**
     * Amount of offline workers
     * @type {number}
     * @memberof FarmStats
     */
    workersOffline?: number;
    /**
     * Amount of overheated workers (GPUs/boards exceeds red value)
     * @type {number}
     * @memberof FarmStats
     */
    workersOverheated?: number;
    /**
     * Amount of workers that have units without temp
     * @type {number}
     * @memberof FarmStats
     */
    workersNoTemp?: number;
    /**
     * Amount of overloaded workers (15m CPU load average exceeds red value)
     * @type {number}
     * @memberof FarmStats
     */
    workersOverloaded?: number;
    /**
     * Amount of workers with invalid shares
     * @type {number}
     * @memberof FarmStats
     */
    workersInvalid?: number;
    /**
     * Amount of workers with low Accepted Shares Ratio (ASR is below red value)
     * @type {number}
     * @memberof FarmStats
     */
    workersLowAsr?: number;
    /**
     * Amount of workers without hashrate
     * @type {number}
     * @memberof FarmStats
     */
    workersNoHashrate?: number;
    /**
     * Total amount of Rigs
     * @type {number}
     * @memberof FarmStats
     */
    rigsTotal?: number;
    /**
     * Amount of online Rigs
     * @type {number}
     * @memberof FarmStats
     */
    rigsOnline?: number;
    /**
     * Amount of offline Rigs
     * @type {number}
     * @memberof FarmStats
     */
    rigsOffline?: number;
    /**
     * Total power draw of all Rigs, watts
     * @type {number}
     * @memberof FarmStats
     */
    rigsPower?: number;
    /**
     * Total amount of GPUs
     * @type {number}
     * @memberof FarmStats
     */
    gpusTotal?: number;
    /**
     * Amount of online GPUs
     * @type {number}
     * @memberof FarmStats
     */
    gpusOnline?: number;
    /**
     * Amount of offline GPUs
     * @type {number}
     * @memberof FarmStats
     */
    gpusOffline?: number;
    /**
     * Amount of overheated GPUs
     * @type {number}
     * @memberof FarmStats
     */
    gpusOverheated?: number;
    /**
     * Amount of GPUs that does not report temperature
     * @type {number}
     * @memberof FarmStats
     */
    gpusNoTemp?: number;
    /**
     * Total amount of ASICs
     * @type {number}
     * @memberof FarmStats
     */
    asicsTotal?: number;
    /**
     * Amount of online ASICs
     * @type {number}
     * @memberof FarmStats
     */
    asicsOnline?: number;
    /**
     * Total power draw of all ASICs, watts
     * @type {number}
     * @memberof FarmStats
     */
    asicsPower?: number;
    /**
     * Amount of offline ASICs
     * @type {number}
     * @memberof FarmStats
     */
    asicsOffline?: number;
    /**
     * Total amount of ASIC boards
     * @type {number}
     * @memberof FarmStats
     */
    boardsTotal?: number;
    /**
     * Amount of online ASIC boards
     * @type {number}
     * @memberof FarmStats
     */
    boardsOnline?: number;
    /**
     * Amount of offline ASIC boards
     * @type {number}
     * @memberof FarmStats
     */
    boardsOffline?: number;
    /**
     * Amount of overheated ASIC boards
     * @type {number}
     * @memberof FarmStats
     */
    boardsOverheated?: number;
    /**
     * Amount of ASIC boards that does not report temperature
     * @type {number}
     * @memberof FarmStats
     */
    boardsNoTemp?: number;
    /**
     * Amount of online CPUs
     * @type {number}
     * @memberof FarmStats
     */
    cpusOnline?: number;
    /**
     * Total amount of Devices
     * @type {number}
     * @memberof FarmStats
     */
    devicesTotal?: number;
    /**
     * Amount of online Devices
     * @type {number}
     * @memberof FarmStats
     */
    devicesOnline?: number;
    /**
     * Amount of offline Devices
     * @type {number}
     * @memberof FarmStats
     */
    devicesOffline?: number;
    /**
     * Total power draw of all workers, watts
     * @type {number}
     * @memberof FarmStats
     */
    powerDraw?: number;
    /**
     * Consuming electricity cost per hour (in configured currency)
     * @type {number}
     * @memberof FarmStats
     */
    powerCost?: number;
    /**
     * Accepted Shares Ratio, % Calculated as: `accepted_shares / total_shares * 100`
     * @type {number}
     * @memberof FarmStats
     */
    asr?: number;
}
/**
 *
 * @export
 * @interface FarmStatsField
 */
export interface FarmStatsField {
    /**
     *
     * @type {FarmStats}
     * @memberof FarmStatsField
     */
    stats?: FarmStats;
}
/**
 *
 * @export
 * @interface FarmTransfer
 */
export interface FarmTransfer {
    /**
     *
     * @type {InlineResponse20020User}
     * @memberof FarmTransfer
     */
    user?: InlineResponse20020User;
    /**
     *
     * @type {FarmTransferTargetUser}
     * @memberof FarmTransfer
     */
    targetUser?: FarmTransferTargetUser;
    /**
     *
     * @type {FarmTransferType}
     * @memberof FarmTransfer
     */
    type?: FarmTransferType;
    /**
     * When the request was created
     * @type {number}
     * @memberof FarmTransfer
     */
    createdAt?: number;
    /**
     * When the request will expire
     * @type {number}
     * @memberof FarmTransfer
     */
    expiresAt?: number;
}
/**
 * Who will be new farm's owner
 * @export
 * @interface FarmTransferTargetUser
 */
export interface FarmTransferTargetUser {
}
/**
 * Transfer type * `owner` - target user will become farm's owner * `payer` - target user will become farm's payer
 * @export
 * @enum {string}
 */
export declare enum FarmTransferType {
    Owner = "owner",
    Payer = "payer"
}
/**
 *
 * @export
 * @interface FarmUpdateRequest
 */
export interface FarmUpdateRequest extends FarmFields {
    /**
     * Paid features state
     * @type {boolean}
     * @memberof FarmUpdateRequest
     */
    nonfree?: boolean;
    /**
     *
     * @type {number[]}
     * @memberof FarmUpdateRequest
     */
    tagIds?: number[];
    /**
     * Update mode for tags * add - add spicified tags ignoring if already assigned
 * remove - remove spicified tags if assigned
 * replace - replace all assigned tags with specified ones
 
     * @type {string}
     * @memberof FarmUpdateRequest
     */
    tagUpdateMode?: FarmUpdateRequest.TagUpdateModeEnum;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof FarmUpdateRequest
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof FarmUpdateRequest
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof FarmUpdateRequest
     */
    octofanCorrectPower?: boolean;
    /**
     * Auto-tags feature. If enabled - all workers inside the farm are automatically tagged. Rigs are tagged by GPU information such as model name, memory size, OEM, etc. ASICs are tagged by model name.
     * @type {boolean}
     * @memberof FarmUpdateRequest
     */
    autoTags?: boolean;
    /**
     * Default flight sheets keyed by platform (1 - rig, 2 - asic). These flight sheets will be automatically attached to newly created workers.
     * @type {{ [key: string]: number }}
     * @memberof FarmUpdateRequest
     */
    defaultFs?: {
        [key: string]: number;
    };
}
/**
 * @export
 * @namespace FarmUpdateRequest
 */
export declare namespace FarmUpdateRequest {
    /**
     * @export
     * @enum {string}
     */
    enum TagUpdateModeEnum {
        Add = "add",
        Remove = "remove",
        Replace = "replace"
    }
}
/**
 *
 * @export
 * @interface FarmWorkersCounts
 */
export interface FarmWorkersCounts {
    /**
     * Total amount of workers in farm
     * @type {number}
     * @memberof FarmWorkersCounts
     */
    workersCount?: number;
    /**
     * Total amount of Rigs in farm
     * @type {number}
     * @memberof FarmWorkersCounts
     */
    rigsCount?: number;
    /**
     * Total amount of ASICs in farm
     * @type {number}
     * @memberof FarmWorkersCounts
     */
    asicsCount?: number;
    /**
     * Amount of disabled Rigs in farm
     * @type {number}
     * @memberof FarmWorkersCounts
     */
    disabledRigsCount?: number;
    /**
     * Amount of disabled ASICs in farm
     * @type {number}
     * @memberof FarmWorkersCounts
     */
    disabledAsicsCount?: number;
}
/**
 *
 * @export
 * @interface FarmsfarmIdtagsData
 */
export interface FarmsfarmIdtagsData {
    /**
     *
     * @type {number}
     * @memberof FarmsfarmIdtagsData
     */
    id?: number;
    /**
     *
     * @type {TagUpdateRequest}
     * @memberof FarmsfarmIdtagsData
     */
    data?: TagUpdateRequest;
}
/**
 *
 * @export
 * @interface FarmsfarmIdtransferType
 */
export interface FarmsfarmIdtransferType {
}
/**
 *
 * @export
 * @interface FarmsfarmIdworkersmultiData
 */
export interface FarmsfarmIdworkersmultiData {
    /**
     * Worker ID to update
     * @type {number}
     * @memberof FarmsfarmIdworkersmultiData
     */
    id?: number;
    /**
     *
     * @type {WorkerEditRequest}
     * @memberof FarmsfarmIdworkersmultiData
     */
    data?: WorkerEditRequest;
}
/**
 * Overclock configuration for AMD GPUs
 * @export
 * @interface FarmsfarmIdworkersoverclockAmd
 */
export interface FarmsfarmIdworkersoverclockAmd {
    /**
     * Core Clock (Mhz)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    coreClock?: number;
    /**
     * Core State (Index)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    coreState?: number;
    /**
     * Core Voltage (mV)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    coreVddc?: number;
    /**
     * Memory Clock (Mhz)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    memClock?: number;
    /**
     * Mem State (Index)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    memState?: number;
    /**
     * Memory voltage (mV)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    memMvdd?: number;
    /**
     * Memory bus voltage (mV)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    memVddci?: number;
    /**
     * Fan (%)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    fanSpeed?: number;
    /**
     * Power Limit (W) (0 for stock value)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    powerLimit?: number;
    /**
     *
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    trefTiming?: number;
    /**
     * SoC clock (MHz)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    socClock?: number;
    /**
     * SoC maximum voltage voltage (mV)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockAmd
     */
    socVddmax?: number;
}
/**
 * Overclock configuration for AMD GPUs
 * @export
 * @interface FarmsfarmIdworkersoverclockAmd1
 */
export interface FarmsfarmIdworkersoverclockAmd1 {
    /**
     * Aggressive undervolting (set OC for each DPM state)
     * @type {boolean}
     * @memberof FarmsfarmIdworkersoverclockAmd1
     */
    aggressive?: boolean;
}
/**
 *
 * @export
 * @interface FarmsfarmIdworkersoverclockCommonData
 */
export interface FarmsfarmIdworkersoverclockCommonData {
    /**
     * Worker IDs
     * @type {number[]}
     * @memberof FarmsfarmIdworkersoverclockCommonData
     */
    workerIds?: number[];
    /**
     *
     * @type {FarmsfarmIdworkersoverclockAmd1}
     * @memberof FarmsfarmIdworkersoverclockCommonData
     */
    amd?: FarmsfarmIdworkersoverclockAmd1;
    /**
     *
     * @type {FarmsfarmIdworkersoverclockNvidia1}
     * @memberof FarmsfarmIdworkersoverclockCommonData
     */
    nvidia?: FarmsfarmIdworkersoverclockNvidia1;
}
/**
 *
 * @export
 * @interface FarmsfarmIdworkersoverclockGpuData
 */
export interface FarmsfarmIdworkersoverclockGpuData {
    /**
     * GPUs to overclock. Different workers can be mixed here.
     * @type {FarmsfarmIdworkersoverclockGpus[]}
     * @memberof FarmsfarmIdworkersoverclockGpuData
     */
    gpus?: FarmsfarmIdworkersoverclockGpus[];
    /**
     *
     * @type {FarmsfarmIdworkersoverclockAmd}
     * @memberof FarmsfarmIdworkersoverclockGpuData
     */
    amd?: FarmsfarmIdworkersoverclockAmd;
    /**
     *
     * @type {FarmsfarmIdworkersoverclockNvidia}
     * @memberof FarmsfarmIdworkersoverclockGpuData
     */
    nvidia?: FarmsfarmIdworkersoverclockNvidia;
    /**
     * Options for GPU tweakers
     * @type {{ [key: string]: any }}
     * @memberof FarmsfarmIdworkersoverclockGpuData
     */
    tweakers?: {
        [key: string]: any;
    };
}
/**
 *
 * @export
 * @interface FarmsfarmIdworkersoverclockGpus
 */
export interface FarmsfarmIdworkersoverclockGpus {
    /**
     * Worker ID
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockGpus
     */
    workerId?: number;
    /**
     * Comma-separated list of GPU indexes (zero-based)
     * @type {string}
     * @memberof FarmsfarmIdworkersoverclockGpus
     */
    gpuIndex?: string;
}
/**
 * Overclock configuration for Nvidia GPUs
 * @export
 * @interface FarmsfarmIdworkersoverclockNvidia
 */
export interface FarmsfarmIdworkersoverclockNvidia {
    /**
     * +Core Clock (Mhz)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia
     */
    coreClock?: number;
    /**
     * +Memory (Mhz)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia
     */
    memClock?: number;
    /**
     * Fan (%) (0 for auto)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia
     */
    fanSpeed?: number;
    /**
     * Power Limit (W) (0 for stock value)
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia
     */
    powerLimit?: number;
}
/**
 * Overclock configuration for Nvidia GPUs
 * @export
 * @interface FarmsfarmIdworkersoverclockNvidia1
 */
export interface FarmsfarmIdworkersoverclockNvidia1 {
    /**
     * Turn Off LEDs (may not work on some cards)
     * @type {boolean}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    logoOff?: boolean;
    /**
     * Enable OhGodAnETHlargementPill
     * @type {boolean}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    ohgodapill?: boolean;
    /**
     * Timeout to start OhGodAnETHlargementPill, seconds
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    ohgodapillStartTimeout?: number;
    /**
     * Arguments for OhGodAnETHlargementPill
     * @type {string}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    ohgodapillArgs?: string;
    /**
     * Delay before applying overclock, seconds
     * @type {number}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    runningDelay?: number;
    /**
     * Reduce power usage in idle state (1000 series)
     * @type {boolean}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    reducePower?: boolean;
    /**
     * Force P0 power state
     * @type {boolean}
     * @memberof FarmsfarmIdworkersoverclockNvidia1
     */
    forceP0?: boolean;
}
/**
 *
 * @export
 * @interface FlightSheet
 */
export interface FlightSheet {
    /**
     * Display name
     * @type {string}
     * @memberof FlightSheet
     */
    name?: string;
    /**
     * Is favorite flag
     * @type {boolean}
     * @memberof FlightSheet
     */
    isFavorite?: boolean;
    /**
     *
     * @type {FSItemFullInfo[]}
     * @memberof FlightSheet
     */
    items?: FSItemFullInfo[];
    /**
     * Amount of workers that use this flight sheet
     * @type {number}
     * @memberof FlightSheet
     */
    workersCount?: number;
}
/**
 *
 * @export
 * @interface FlightSheetF
 */
export interface FlightSheetF extends FlightSheet {
    /**
     *
     * @type {number}
     * @memberof FlightSheetF
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof FlightSheetF
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface FlightSheetU
 */
export interface FlightSheetU extends FlightSheet {
    /**
     *
     * @type {number}
     * @memberof FlightSheetU
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface Gpu
 */
export interface Gpu {
    /**
     * GPU bus ID
     * @type {string}
     * @memberof Gpu
     */
    busId?: string;
    /**
     * GPU bus number
     * @type {number}
     * @memberof Gpu
     */
    busNumber?: number;
    /**
     * Brand name: amd, nvidia, internal
     * @type {string}
     * @memberof Gpu
     */
    brand?: string;
    /**
     * Model name
     * @type {string}
     * @memberof Gpu
     */
    model?: string;
    /**
     * Model short name
     * @type {string}
     * @memberof Gpu
     */
    shortName?: string;
    /**
     *
     * @type {GpuInfoDetails}
     * @memberof Gpu
     */
    details?: GpuInfoDetails;
    /**
     *
     * @type {GpuInfoPowerLimit}
     * @memberof Gpu
     */
    powerLimit?: GpuInfoPowerLimit;
    /**
     * Index on rig
     * @type {number}
     * @memberof Gpu
     */
    index?: number;
    /**
     *
     * @type {GpuStats}
     * @memberof Gpu
     */
    stats?: GpuStats;
    /**
     *
     * @type {GpuFlashingState}
     * @memberof Gpu
     */
    flashingState?: GpuFlashingState;
}
/**
 *
 * @export
 * @interface GpuFlashedRom
 */
export interface GpuFlashedRom {
    /**
     * Rom ID that was flashed
     * @type {number}
     * @memberof GpuFlashedRom
     */
    romId?: number;
    /**
     * Rom name
     * @type {string}
     * @memberof GpuFlashedRom
     */
    romName?: string;
    /**
     * When the ROM was flashed
     * @type {number}
     * @memberof GpuFlashedRom
     */
    time?: number;
}
/**
 * Contains information about currently running or recent flashing process.
 * @export
 * @interface GpuFlashingState
 */
export interface GpuFlashingState {
    /**
     *
     * @type {GpuFlashingStateLastOk}
     * @memberof GpuFlashingState
     */
    lastOk?: GpuFlashingStateLastOk;
    /**
     *
     * @type {GpuFlashingStateLastFailed}
     * @memberof GpuFlashingState
     */
    lastFailed?: GpuFlashingStateLastFailed;
    /**
     *
     * @type {GpuFlashingStateInProcess}
     * @memberof GpuFlashingState
     */
    inProcess?: GpuFlashingStateInProcess;
}
/**
 * Flashing being executed right now
 * @export
 * @interface GpuFlashingStateInProcess
 */
export interface GpuFlashingStateInProcess {
}
/**
 * Latest flashing if it failed
 * @export
 * @interface GpuFlashingStateLastFailed
 */
export interface GpuFlashingStateLastFailed {
}
/**
 * Last successfully flashed ROM
 * @export
 * @interface GpuFlashingStateLastOk
 */
export interface GpuFlashingStateLastOk {
}
/**
 *
 * @export
 * @interface GpuInfo
 */
export interface GpuInfo {
    /**
     * GPU bus ID
     * @type {string}
     * @memberof GpuInfo
     */
    busId?: string;
    /**
     * GPU bus number
     * @type {number}
     * @memberof GpuInfo
     */
    busNumber?: number;
    /**
     * Brand name: amd, nvidia, internal
     * @type {string}
     * @memberof GpuInfo
     */
    brand?: string;
    /**
     * Model name
     * @type {string}
     * @memberof GpuInfo
     */
    model?: string;
    /**
     * Model short name
     * @type {string}
     * @memberof GpuInfo
     */
    shortName?: string;
    /**
     *
     * @type {GpuInfoDetails}
     * @memberof GpuInfo
     */
    details?: GpuInfoDetails;
    /**
     *
     * @type {GpuInfoPowerLimit}
     * @memberof GpuInfo
     */
    powerLimit?: GpuInfoPowerLimit;
    /**
     * Index on rig
     * @type {number}
     * @memberof GpuInfo
     */
    index?: number;
}
/**
 *
 * @export
 * @interface GpuInfoDetails
 */
export interface GpuInfoDetails {
    /**
     * Memory size
     * @type {string}
     * @memberof GpuInfoDetails
     */
    mem?: string;
    /**
     * Memory size converted to gigabytes
     * @type {number}
     * @memberof GpuInfoDetails
     */
    memGb?: number;
    /**
     * Memory type
     * @type {string}
     * @memberof GpuInfoDetails
     */
    memType?: string;
    /**
     * Memory OEM
     * @type {string}
     * @memberof GpuInfoDetails
     */
    memOem?: string;
    /**
     *
     * @type {string}
     * @memberof GpuInfoDetails
     */
    vbios?: string;
    /**
     *
     * @type {string}
     * @memberof GpuInfoDetails
     */
    subvendor?: string;
    /**
     *
     * @type {string}
     * @memberof GpuInfoDetails
     */
    oem?: string;
}
/**
 *
 * @export
 * @interface GpuInfoPowerLimit
 */
export interface GpuInfoPowerLimit {
    /**
     * Minimum value
     * @type {string}
     * @memberof GpuInfoPowerLimit
     */
    min?: string;
    /**
     * Default value
     * @type {string}
     * @memberof GpuInfoPowerLimit
     */
    def?: string;
    /**
     * Maximum value
     * @type {string}
     * @memberof GpuInfoPowerLimit
     */
    max?: string;
}
/**
 * GPU stats
 * @export
 * @interface GpuStats
 */
export interface GpuStats {
    /**
     * Temperature, °C
     * @type {number}
     * @memberof GpuStats
     */
    temp?: number;
    /**
     * Fan speed, %
     * @type {number}
     * @memberof GpuStats
     */
    fan?: number;
    /**
     * Power draw, watts
     * @type {number}
     * @memberof GpuStats
     */
    power?: number;
    /**
     * Core clock, MHz
     * @type {number}
     * @memberof GpuStats
     */
    coreclk?: number;
    /**
     * Memory clock, MHz
     * @type {number}
     * @memberof GpuStats
     */
    memclk?: number;
    /**
     * Memory temperature, °C
     * @type {number}
     * @memberof GpuStats
     */
    memtemp?: number;
}
/**
 * Currency info
 * @export
 * @interface HiveCurrencyItem
 */
export interface HiveCurrencyItem {
    /**
     * Symbol
     * @type {string}
     * @memberof HiveCurrencyItem
     */
    currency?: string;
    /**
     * Display name
     * @type {string}
     * @memberof HiveCurrencyItem
     */
    name?: string;
    /**
     * Exchange rate to fiat currency
     * @type {number}
     * @memberof HiveCurrencyItem
     */
    rate?: number;
}
/**
 *
 * @export
 * @interface HiveStatItem
 */
export interface HiveStatItem {
    /**
     * Item name
     * @type {string}
     * @memberof HiveStatItem
     */
    name?: string;
    /**
     * Percentage amount
     * @type {number}
     * @memberof HiveStatItem
     */
    amount?: number;
}
/**
 * Hive OS version info
 * @export
 * @interface HiveVersion
 */
export interface HiveVersion {
    /**
     * System type (only for Hive release)
     * @type {string}
     * @memberof HiveVersion
     */
    systemType?: HiveVersion.SystemTypeEnum;
    /**
     * Version number (Hive, Asic Hub beta, Asic Hub)
     * @type {string}
     * @memberof HiveVersion
     */
    version?: string;
    /**
     * Release date
     * @type {string}
     * @memberof HiveVersion
     */
    date?: string;
    /**
     * Is new image released (only for Hive release)
     * @type {boolean}
     * @memberof HiveVersion
     */
    image?: boolean;
    /**
     * Indicates that released image (Hive) or release itself (Asic Hub) is beta
     * @type {boolean}
     * @memberof HiveVersion
     */
    beta?: boolean;
    /**
     * Version description
     * @type {string}
     * @memberof HiveVersion
     */
    description?: string;
}
/**
 * @export
 * @namespace HiveVersion
 */
export declare namespace HiveVersion {
    /**
     * @export
     * @enum {string}
     */
    enum SystemTypeEnum {
        Linux = "linux",
        Asic = "asic",
        Windows = "windows"
    }
}
/**
 *
 * @export
 * @interface IDs
 */
export interface IDs {
    /**
     *
     * @type {number[]}
     * @memberof IDs
     */
    ids?: number[];
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * Secret code
     * @type {string}
     * @memberof InlineResponse200
     */
    secret?: string;
    /**
     * URL to QR-Code image for scanning the secret
     * @type {string}
     * @memberof InlineResponse200
     */
    qrCodeUrl?: string;
}
/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     *
     * @type {NotificationChannels}
     * @memberof InlineResponse2001
     */
    notificationChannels?: NotificationChannels;
    /**
     *
     * @type {NotificationSubscriptionsAccount}
     * @memberof InlineResponse2001
     */
    notificationSubscriptionsAccount?: NotificationSubscriptionsAccount;
}
/**
 *
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
    /**
     *
     * @type {AuthTokenItem[]}
     * @memberof InlineResponse20010
     */
    data?: AuthTokenItem[];
}
/**
 *
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    /**
     *
     * @type {InlineResponse20011Data[]}
     * @memberof InlineResponse20011
     */
    data?: InlineResponse20011Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20011Data
 */
export interface InlineResponse20011Data {
    /**
     *
     * @type {number}
     * @memberof InlineResponse20011Data
     */
    id?: number;
    /**
     * Title
     * @type {string}
     * @memberof InlineResponse20011Data
     */
    title?: string;
    /**
     * Message text
     * @type {string}
     * @memberof InlineResponse20011Data
     */
    message?: string;
    /**
     * Severity type
     * @type {string}
     * @memberof InlineResponse20011Data
     */
    type?: InlineResponse20011Data.TypeEnum;
    /**
     * URL to details page
     * @type {string}
     * @memberof InlineResponse20011Data
     */
    url?: string;
    /**
     * When the associated event is scheduled to start
     * @type {number}
     * @memberof InlineResponse20011Data
     */
    startAt?: number;
    /**
     * When the associated event is scheduled to finish
     * @type {number}
     * @memberof InlineResponse20011Data
     */
    endAt?: number;
    /**
     * Announcements is hidden by user
     * @type {boolean}
     * @memberof InlineResponse20011Data
     */
    isHidden?: boolean;
}
/**
 * @export
 * @namespace InlineResponse20011Data
 */
export declare namespace InlineResponse20011Data {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        Info = "info",
        Success = "success",
        Warning = "warning",
        Danger = "danger"
    }
}
/**
 *
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 {
    /**
     *
     * @type {Farm[]}
     * @memberof InlineResponse20012
     */
    data?: Farm[];
    /**
     * Tags that are used by returned farms
     * @type {TagU[]}
     * @memberof InlineResponse20012
     */
    tags?: TagU[];
}
/**
 *
 * @export
 * @interface InlineResponse20013
 */
export interface InlineResponse20013 {
    /**
     *
     * @type {AsicPerfProfileModel[]}
     * @memberof InlineResponse20013
     */
    data?: AsicPerfProfileModel[];
}
/**
 *
 * @export
 * @interface InlineResponse20014
 */
export interface InlineResponse20014 {
    /**
     *
     * @type {FarmEvent[]}
     * @memberof InlineResponse20014
     */
    data?: FarmEvent[];
    /**
     *
     * @type {Pagination}
     * @memberof InlineResponse20014
     */
    pagination?: Pagination;
}
/**
 *
 * @export
 * @interface InlineResponse20015
 */
export interface InlineResponse20015 {
    /**
     *
     * @type {TransactionFarm[]}
     * @memberof InlineResponse20015
     */
    data?: TransactionFarm[];
}
/**
 *
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
    /**
     *
     * @type {FarmMetric[]}
     * @memberof InlineResponse20016
     */
    data?: FarmMetric[];
}
/**
 *
 * @export
 * @interface InlineResponse20017
 */
export interface InlineResponse20017 {
    /**
     *
     * @type {FarmHashrates}
     * @memberof InlineResponse20017
     */
    farmHashrates?: FarmHashrates;
    /**
     *
     * @type {FarmStatsField}
     * @memberof InlineResponse20017
     */
    farmStatsField?: FarmStatsField;
}
/**
 *
 * @export
 * @interface InlineResponse20018
 */
export interface InlineResponse20018 {
    /**
     *
     * @type {NotificationChannels}
     * @memberof InlineResponse20018
     */
    notificationChannels?: NotificationChannels;
    /**
     *
     * @type {NotificationSubscriptionsFarm}
     * @memberof InlineResponse20018
     */
    notificationSubscriptionsFarm?: NotificationSubscriptionsFarm;
}
/**
 *
 * @export
 * @interface InlineResponse20019
 */
export interface InlineResponse20019 {
    /**
     *
     * @type {any[]}
     * @memberof InlineResponse20019
     */
    data?: any[];
}
/**
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     *
     * @type {AccountEvent[]}
     * @memberof InlineResponse2002
     */
    data?: AccountEvent[];
    /**
     *
     * @type {Pagination}
     * @memberof InlineResponse2002
     */
    pagination?: Pagination;
}
/**
 *
 * @export
 * @interface InlineResponse20020
 */
export interface InlineResponse20020 {
    /**
     *
     * @type {InlineResponse20020Data[]}
     * @memberof InlineResponse20020
     */
    data?: InlineResponse20020Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20020Data
 */
export interface InlineResponse20020Data {
    /**
     *
     * @type {FarmShortInfo}
     * @memberof InlineResponse20020Data
     */
    farm?: FarmShortInfo;
    /**
     *
     * @type {InlineResponse20020User}
     * @memberof InlineResponse20020Data
     */
    user?: InlineResponse20020User;
    /**
     *
     * @type {FarmTransferType}
     * @memberof InlineResponse20020Data
     */
    type?: FarmTransferType;
    /**
     * When the request was created
     * @type {number}
     * @memberof InlineResponse20020Data
     */
    createdAt?: number;
}
/**
 * Who initiated the request
 * @export
 * @interface InlineResponse20020User
 */
export interface InlineResponse20020User {
}
/**
 *
 * @export
 * @interface InlineResponse20021
 */
export interface InlineResponse20021 {
    /**
     *
     * @type {Worker[]}
     * @memberof InlineResponse20021
     */
    data?: Worker[];
    /**
     * Tags that are used by returned workers
     * @type {TagF[]}
     * @memberof InlineResponse20021
     */
    tags?: TagF[];
}
/**
 *
 * @export
 * @interface InlineResponse20022
 */
export interface InlineResponse20022 {
    /**
     * Command ID
     * @type {number}
     * @memberof InlineResponse20022
     */
    id?: number;
    /**
     * Per-worker commands list
     * @type {any[]}
     * @memberof InlineResponse20022
     */
    commands?: any[];
}
/**
 *
 * @export
 * @interface InlineResponse20023
 */
export interface InlineResponse20023 {
    /**
     *
     * @type {WorkerShortInfo[]}
     * @memberof InlineResponse20023
     */
    data?: WorkerShortInfo[];
}
/**
 *
 * @export
 * @interface InlineResponse20024
 */
export interface InlineResponse20024 {
    /**
     *
     * @type {any[]}
     * @memberof InlineResponse20024
     */
    data?: any[];
}
/**
 *
 * @export
 * @interface InlineResponse20025
 */
export interface InlineResponse20025 {
    /**
     *
     * @type {Gpu[]}
     * @memberof InlineResponse20025
     */
    data?: Gpu[];
}
/**
 *
 * @export
 * @interface InlineResponse20026
 */
export interface InlineResponse20026 {
    /**
     *
     * @type {Problem[]}
     * @memberof InlineResponse20026
     */
    problems?: Problem[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    coins?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    pools?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    miners?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    kinds?: string[];
    /**
     *
     * @type {number[]}
     * @memberof InlineResponse20026
     */
    wallets?: number[];
    /**
     *
     * @type {number[]}
     * @memberof InlineResponse20026
     */
    tags?: number[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuNames?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuBrands?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuMemSizes?: string[];
    /**
     *
     * @type {number[]}
     * @memberof InlineResponse20026
     */
    gpuMemSizesGb?: number[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuMemTypes?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuMemOems?: string[];
    /**
     *
     * @type {string[]}
     * @memberof InlineResponse20026
     */
    gpuOems?: string[];
}
/**
 *
 * @export
 * @interface InlineResponse20027
 */
export interface InlineResponse20027 {
    /**
     *
     * @type {WorkerCommands}
     * @memberof InlineResponse20027
     */
    workerCommands?: WorkerCommands;
    /**
     * Command ID
     * @type {number}
     * @memberof InlineResponse20027
     */
    id?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20028
 */
export interface InlineResponse20028 {
    /**
     *
     * @type {WorkerMetric[]}
     * @memberof InlineResponse20028
     */
    data?: WorkerMetric[];
}
/**
 *
 * @export
 * @interface InlineResponse20029
 */
export interface InlineResponse20029 {
    /**
     *
     * @type {WorkerMessageFull[]}
     * @memberof InlineResponse20029
     */
    data?: WorkerMessageFull[];
}
/**
 *
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     *
     * @type {TransactionAccount[]}
     * @memberof InlineResponse2003
     */
    data?: TransactionAccount[];
}
/**
 *
 * @export
 * @interface InlineResponse20030
 */
export interface InlineResponse20030 {
    /**
     *
     * @type {FlightSheetF[]}
     * @memberof InlineResponse20030
     */
    data?: FlightSheetF[];
}
/**
 *
 * @export
 * @interface InlineResponse20031
 */
export interface InlineResponse20031 {
    /**
     *
     * @type {FlightSheetU[]}
     * @memberof InlineResponse20031
     */
    data?: FlightSheetU[];
}
/**
 *
 * @export
 * @interface InlineResponse20032
 */
export interface InlineResponse20032 {
    /**
     *
     * @type {WalletF[]}
     * @memberof InlineResponse20032
     */
    data?: WalletF[];
}
/**
 *
 * @export
 * @interface InlineResponse20033
 */
export interface InlineResponse20033 {
    /**
     *
     * @type {WalletU[]}
     * @memberof InlineResponse20033
     */
    data?: WalletU[];
}
/**
 *
 * @export
 * @interface InlineResponse20034
 */
export interface InlineResponse20034 {
    /**
     *
     * @type {OCF[]}
     * @memberof InlineResponse20034
     */
    data?: OCF[];
}
/**
 *
 * @export
 * @interface InlineResponse20035
 */
export interface InlineResponse20035 {
    /**
     *
     * @type {OCU[]}
     * @memberof InlineResponse20035
     */
    data?: OCU[];
}
/**
 *
 * @export
 * @interface InlineResponse20036
 */
export interface InlineResponse20036 {
    /**
     *
     * @type {TagF[]}
     * @memberof InlineResponse20036
     */
    data?: TagF[];
}
/**
 *
 * @export
 * @interface InlineResponse20037
 */
export interface InlineResponse20037 {
    /**
     *
     * @type {TagU[]}
     * @memberof InlineResponse20037
     */
    data?: TagU[];
}
/**
 *
 * @export
 * @interface InlineResponse20038
 */
export interface InlineResponse20038 {
    /**
     *
     * @type {FarmAcl[]}
     * @memberof InlineResponse20038
     */
    data?: FarmAcl[];
}
/**
 *
 * @export
 * @interface InlineResponse20039
 */
export interface InlineResponse20039 {
    /**
     *
     * @type {ApiKeyF[]}
     * @memberof InlineResponse20039
     */
    data?: ApiKeyF[];
}
/**
 *
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     *
     * @type {Payment[]}
     * @memberof InlineResponse2004
     */
    data?: Payment[];
}
/**
 *
 * @export
 * @interface InlineResponse20040
 */
export interface InlineResponse20040 {
    /**
     *
     * @type {ApiKeyU[]}
     * @memberof InlineResponse20040
     */
    data?: ApiKeyU[];
}
/**
 *
 * @export
 * @interface InlineResponse20041
 */
export interface InlineResponse20041 {
    /**
     *
     * @type {RomListItemF[]}
     * @memberof InlineResponse20041
     */
    data?: RomListItemF[];
}
/**
 *
 * @export
 * @interface InlineResponse20042
 */
export interface InlineResponse20042 {
    /**
     *
     * @type {RomListItemU[]}
     * @memberof InlineResponse20042
     */
    data?: RomListItemU[];
}
/**
 *
 * @export
 * @interface InlineResponse20043
 */
export interface InlineResponse20043 {
    /**
     *
     * @type {ScheduleListItemF[]}
     * @memberof InlineResponse20043
     */
    data?: ScheduleListItemF[];
    /**
     * Tags that are used by returned schedules
     * @type {TagF[]}
     * @memberof InlineResponse20043
     */
    tags?: TagF[];
}
/**
 *
 * @export
 * @interface InlineResponse20044
 */
export interface InlineResponse20044 {
    /**
     *
     * @type {ScheduleListItemU[]}
     * @memberof InlineResponse20044
     */
    data?: ScheduleListItemU[];
    /**
     * Tags that are used by returned schedules
     * @type {TagU[]}
     * @memberof InlineResponse20044
     */
    tags?: TagU[];
}
/**
 *
 * @export
 * @interface InlineResponse20045
 */
export interface InlineResponse20045 {
    /**
     *
     * @type {BenchmarkJob[]}
     * @memberof InlineResponse20045
     */
    data?: BenchmarkJob[];
}
/**
 *
 * @export
 * @interface InlineResponse20046
 */
export interface InlineResponse20046 {
    /**
     *
     * @type {BenchmarkWithResults[]}
     * @memberof InlineResponse20046
     */
    data?: BenchmarkWithResults[];
}
/**
 *
 * @export
 * @interface InlineResponse20047
 */
export interface InlineResponse20047 {
    /**
     *
     * @type {ContainerListItem[]}
     * @memberof InlineResponse20047
     */
    data?: ContainerListItem[];
}
/**
 *
 * @export
 * @interface InlineResponse20048
 */
export interface InlineResponse20048 {
    /**
     *
     * @type {InlineResponse20048Data[]}
     * @memberof InlineResponse20048
     */
    data?: InlineResponse20048Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20048Data
 */
export interface InlineResponse20048Data {
    /**
     * Notification ID
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    id?: string;
    /**
     * Notification title
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    title?: string;
    /**
     * Notification content
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    text?: string;
    /**
     * When the notification was created
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    time?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20049
 */
export interface InlineResponse20049 {
    /**
     *
     * @type {InlineResponse20049Pools[]}
     * @memberof InlineResponse20049
     */
    pools?: InlineResponse20049Pools[];
    /**
     * Pools list by coin
     * @type {{ [key: string]: string[] }}
     * @memberof InlineResponse20049
     */
    coins?: {
        [key: string]: string[];
    };
}
/**
 *
 * @export
 * @interface InlineResponse20049Pools
 */
export interface InlineResponse20049Pools {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20049Pools
     */
    name?: string;
    /**
     *
     * @type {CoinSymbol[]}
     * @memberof InlineResponse20049Pools
     */
    coins?: CoinSymbol[];
}
/**
 *
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     *
     * @type {ReferralBalance[]}
     * @memberof InlineResponse2005
     */
    data?: ReferralBalance[];
}
/**
 *
 * @export
 * @interface InlineResponse20050
 */
export interface InlineResponse20050 {
    /**
     *
     * @type {PoolTemplate[]}
     * @memberof InlineResponse20050
     */
    data?: PoolTemplate[];
}
/**
 *
 * @export
 * @interface InlineResponse20051
 */
export interface InlineResponse20051 {
    /**
     *
     * @type {FarmShortInfo[]}
     * @memberof InlineResponse20051
     */
    farms?: FarmShortInfo[];
    /**
     *
     * @type {WorkerShortInfo[]}
     * @memberof InlineResponse20051
     */
    workers?: WorkerShortInfo[];
    /**
     *
     * @type {FSShortInfo[]}
     * @memberof InlineResponse20051
     */
    fs?: FSShortInfo[];
    /**
     *
     * @type {OCShortInfo[]}
     * @memberof InlineResponse20051
     */
    oc?: OCShortInfo[];
    /**
     *
     * @type {WalletShortInfo[]}
     * @memberof InlineResponse20051
     */
    wallets?: WalletShortInfo[];
}
/**
 *
 * @export
 * @interface InlineResponse20052
 */
export interface InlineResponse20052 {
    /**
     *
     * @type {HiveVersion[]}
     * @memberof InlineResponse20052
     */
    data?: HiveVersion[];
}
/**
 *
 * @export
 * @interface InlineResponse20053
 */
export interface InlineResponse20053 {
    /**
     *
     * @type {MirrorUrl[]}
     * @memberof InlineResponse20053
     */
    data?: MirrorUrl[];
}
/**
 *
 * @export
 * @interface InlineResponse20054
 */
export interface InlineResponse20054 {
    /**
     *
     * @type {RepoUrl[]}
     * @memberof InlineResponse20054
     */
    data?: RepoUrl[];
}
/**
 *
 * @export
 * @interface InlineResponse20055
 */
export interface InlineResponse20055 {
    /**
     *
     * @type {InlineResponse20055Data[]}
     * @memberof InlineResponse20055
     */
    data?: InlineResponse20055Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20055Algos
 */
export interface InlineResponse20055Algos {
    /**
     * Algo name
     * @type {string}
     * @memberof InlineResponse20055Algos
     */
    id?: string;
    /**
     * Display name
     * @type {string}
     * @memberof InlineResponse20055Algos
     */
    name?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20055Dalgos
 */
export interface InlineResponse20055Dalgos {
    /**
     * Algo name
     * @type {string}
     * @memberof InlineResponse20055Dalgos
     */
    id?: string;
    /**
     * Display name
     * @type {string}
     * @memberof InlineResponse20055Dalgos
     */
    name?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20055Data
 */
export interface InlineResponse20055Data {
    /**
     *
     * @type {MinerName}
     * @memberof InlineResponse20055Data
     */
    id?: MinerName;
    /**
     * Miner name
     * @type {string}
     * @memberof InlineResponse20055Data
     */
    name?: string;
    /**
     *
     * @type {InlineResponse20055Platform}
     * @memberof InlineResponse20055Data
     */
    platform?: InlineResponse20055Platform;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20055Data
     */
    units?: string;
    /**
     * Available versions
     * @type {string[]}
     * @memberof InlineResponse20055Data
     */
    versions?: string[];
    /**
     * Suppoted algorithms
     * @type {InlineResponse20055Algos[]}
     * @memberof InlineResponse20055Data
     */
    algos?: InlineResponse20055Algos[];
    /**
     * Suppoted secondary algorithms for dual miner
     * @type {InlineResponse20055Dalgos[]}
     * @memberof InlineResponse20055Data
     */
    dalgos?: InlineResponse20055Dalgos[];
    /**
     *
     * @type {InlineResponse20055Forks[]}
     * @memberof InlineResponse20055Data
     */
    forks?: InlineResponse20055Forks[];
    /**
     * This fork is used on worker if no fork is provided in config
     * @type {string}
     * @memberof InlineResponse20055Data
     */
    defaultFork?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20055Forks
 */
export interface InlineResponse20055Forks {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20055Forks
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20055Forks
     */
    name?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20055Platform
 */
export interface InlineResponse20055Platform {
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse20055Platform
     */
    amd?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse20055Platform
     */
    nvidia?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse20055Platform
     */
    cpu?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse20055Platform
     */
    asic?: boolean;
}
/**
 *
 * @export
 * @interface InlineResponse20056
 */
export interface InlineResponse20056 {
    /**
     *
     * @type {InlineResponse20056Data[]}
     * @memberof InlineResponse20056
     */
    data?: InlineResponse20056Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20056Data
 */
export interface InlineResponse20056Data {
    /**
     * Coin ID
     * @type {number}
     * @memberof InlineResponse20056Data
     */
    id?: number;
    /**
     *
     * @type {CoinSymbol}
     * @memberof InlineResponse20056Data
     */
    coin?: CoinSymbol;
    /**
     * Coin display name
     * @type {string}
     * @memberof InlineResponse20056Data
     */
    name?: string;
    /**
     * Algorithms for this coin
     * @type {AlgoName[]}
     * @memberof InlineResponse20056Data
     */
    algos?: AlgoName[];
}
/**
 *
 * @export
 * @interface InlineResponse20057
 */
export interface InlineResponse20057 {
    /**
     *
     * @type {InlineResponse20057Data[]}
     * @memberof InlineResponse20057
     */
    data?: InlineResponse20057Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20057Data
 */
export interface InlineResponse20057Data {
    /**
     * Algo ID
     * @type {number}
     * @memberof InlineResponse20057Data
     */
    id?: number;
    /**
     *
     * @type {AlgoName}
     * @memberof InlineResponse20057Data
     */
    algo?: AlgoName;
    /**
     * Cois that uses this algorithm
     * @type {CoinSymbol[]}
     * @memberof InlineResponse20057Data
     */
    coins?: CoinSymbol[];
    /**
     * amd graphics card support
     * @type {boolean}
     * @memberof InlineResponse20057Data
     */
    forAmd?: boolean;
    /**
     * nvidia graphics card support
     * @type {boolean}
     * @memberof InlineResponse20057Data
     */
    forNvidia?: boolean;
    /**
     * support mining in cpu
     * @type {boolean}
     * @memberof InlineResponse20057Data
     */
    forCpu?: boolean;
    /**
     * support mining in asic
     * @type {boolean}
     * @memberof InlineResponse20057Data
     */
    forAsic?: boolean;
    /**
     * unit of mining
     * @type {string}
     * @memberof InlineResponse20057Data
     */
    units?: string;
    /**
     * coefficient for calculating required power
     * @type {number}
     * @memberof InlineResponse20057Data
     */
    power?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20058
 */
export interface InlineResponse20058 {
    /**
     * List of supported exchanges for which we can fetch balance
     * @type {string[]}
     * @memberof InlineResponse20058
     */
    exchanges?: string[];
    /**
     * List of supported pools for which we can fetch balance
     * @type {string[]}
     * @memberof InlineResponse20058
     */
    pools?: string[];
    /**
     * List of supported coins for which we can fetch balance from blockchain
     * @type {string[]}
     * @memberof InlineResponse20058
     */
    blockchains?: string[];
}
/**
 *
 * @export
 * @interface InlineResponse20059
 */
export interface InlineResponse20059 {
    /**
     * Amount of free workers per account
     * @type {number}
     * @memberof InlineResponse20059
     */
    freeWorkers?: number;
    /**
     * Price details
     * @type {InlineResponse20059PriceDetails[]}
     * @memberof InlineResponse20059
     */
    priceDetails?: InlineResponse20059PriceDetails[];
}
/**
 *
 * @export
 * @interface InlineResponse20059PriceDetails
 */
export interface InlineResponse20059PriceDetails {
    /**
     *
     * @type {BillingType}
     * @memberof InlineResponse20059PriceDetails
     */
    type?: BillingType;
    /**
     * Display name of billing type
     * @type {string}
     * @memberof InlineResponse20059PriceDetails
     */
    typeName?: string;
    /**
     * Monthly price
     * @type {number}
     * @memberof InlineResponse20059PriceDetails
     */
    price?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     *
     * @type {ReferralPayoutAddress[]}
     * @memberof InlineResponse2006
     */
    data?: ReferralPayoutAddress[];
}
/**
 *
 * @export
 * @interface InlineResponse20060
 */
export interface InlineResponse20060 {
    /**
     *
     * @type {InlineResponse20060Data[]}
     * @memberof InlineResponse20060
     */
    data?: InlineResponse20060Data[];
}
/**
 * Overclock configuration
 * @export
 * @interface InlineResponse20060Config
 */
export interface InlineResponse20060Config {
    /**
     * Core clock
     * @type {number}
     * @memberof InlineResponse20060Config
     */
    coreClock?: number;
    /**
     * Memory clock
     * @type {number}
     * @memberof InlineResponse20060Config
     */
    memClock?: number;
    /**
     * Power limit for Nvidia GPUs
     * @type {number}
     * @memberof InlineResponse20060Config
     */
    powerLimit?: number;
    /**
     * Core state for AMD GPUs
     * @type {number}
     * @memberof InlineResponse20060Config
     */
    coreState?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20060Data
 */
export interface InlineResponse20060Data {
    /**
     * GPU brand
     * @type {string}
     * @memberof InlineResponse20060Data
     */
    gpuBrand?: InlineResponse20060Data.GpuBrandEnum;
    /**
     * GPU Model name
     * @type {string}
     * @memberof InlineResponse20060Data
     */
    gpuModel?: string;
    /**
     * GPU Memory
     * @type {string}
     * @memberof InlineResponse20060Data
     */
    gpuMem?: string;
    /**
     * VBIOS version for AMD GPUs
     * @type {string}
     * @memberof InlineResponse20060Data
     */
    gpuVbios?: string;
    /**
     * Algo name
     * @type {string}
     * @memberof InlineResponse20060Data
     */
    algo?: string;
    /**
     * Amount of GPUs that use such configuration
     * @type {number}
     * @memberof InlineResponse20060Data
     */
    cardinality?: number;
    /**
     * Configuration rating - percentage of the cadinality. Bigger is better.
     * @type {number}
     * @memberof InlineResponse20060Data
     */
    rating?: number;
    /**
     *
     * @type {InlineResponse20060Config}
     * @memberof InlineResponse20060Data
     */
    config?: InlineResponse20060Config;
}
/**
 * @export
 * @namespace InlineResponse20060Data
 */
export declare namespace InlineResponse20060Data {
    /**
     * @export
     * @enum {string}
     */
    enum GpuBrandEnum {
        Nvidia = "nvidia",
        Amd = "amd"
    }
}
/**
 *
 * @export
 * @interface InlineResponse20061
 */
export interface InlineResponse20061 {
    /**
     * Algorithms proportion. For calculation we use amount of GPU that mine the algo.
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    algos?: HiveStatItem[];
    /**
     * Coins proportion. For calculation we use amount of GPU that mine the coin.
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    coins?: HiveStatItem[];
    /**
     * Miners proportion. For calculation we use amount of GPU that is used by the miner.
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    miners?: HiveStatItem[];
    /**
     * Pools proportion. For calculation we use amount of GPU that mine to the pool.
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    pools?: HiveStatItem[];
    /**
     * GPU brands proportion
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    gpuBrands?: HiveStatItem[];
    /**
     * AMD GPU models proportion
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    amdModels?: HiveStatItem[];
    /**
     * Nvidia GPU models proportion
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    nvidiaModels?: HiveStatItem[];
    /**
     * ASIC models proportion
     * @type {HiveStatItem[]}
     * @memberof InlineResponse20061
     */
    asicModels?: HiveStatItem[];
}
/**
 *
 * @export
 * @interface InlineResponse20062
 */
export interface InlineResponse20062 {
    /**
     *
     * @type {InlineResponse20062Data[]}
     * @memberof InlineResponse20062
     */
    data?: InlineResponse20062Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20062Data
 */
export interface InlineResponse20062Data {
    /**
     * Firmware name
     * @type {string}
     * @memberof InlineResponse20062Data
     */
    name?: string;
    /**
     * File URL
     * @type {string}
     * @memberof InlineResponse20062Data
     */
    url?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20063
 */
export interface InlineResponse20063 {
    /**
     *
     * @type {NotificationChannelEnum[]}
     * @memberof InlineResponse20063
     */
    channels?: NotificationChannelEnum[];
    /**
     *
     * @type {InlineResponse20063ChannelsData}
     * @memberof InlineResponse20063
     */
    channelsData?: InlineResponse20063ChannelsData;
}
/**
 *
 * @export
 * @interface InlineResponse20063ChannelsData
 */
export interface InlineResponse20063ChannelsData {
    /**
     *
     * @type {InlineResponse20063ChannelsDataTelegram}
     * @memberof InlineResponse20063ChannelsData
     */
    telegram?: InlineResponse20063ChannelsDataTelegram;
    /**
     *
     * @type {InlineResponse20063ChannelsDataDiscord}
     * @memberof InlineResponse20063ChannelsData
     */
    discord?: InlineResponse20063ChannelsDataDiscord;
}
/**
 *
 * @export
 * @interface InlineResponse20063ChannelsDataDiscord
 */
export interface InlineResponse20063ChannelsDataDiscord {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20063ChannelsDataDiscord
     */
    botName?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20063ChannelsDataDiscord
     */
    inviteUrl?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20063ChannelsDataDiscord
     */
    commandPrefix?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20063ChannelsDataTelegram
 */
export interface InlineResponse20063ChannelsDataTelegram {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20063ChannelsDataTelegram
     */
    botName?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20064
 */
export interface InlineResponse20064 {
    /**
     *
     * @type {HiveCurrencyItem[]}
     * @memberof InlineResponse20064
     */
    data?: HiveCurrencyItem[];
    /**
     * System's fiat currency
     * @type {string}
     * @memberof InlineResponse20064
     */
    fiatCurrency?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20065
 */
export interface InlineResponse20065 {
    /**
     *
     * @type {InlineResponse20065Data[]}
     * @memberof InlineResponse20065
     */
    data?: InlineResponse20065Data[];
}
/**
 *
 * @export
 * @interface InlineResponse20065Data
 */
export interface InlineResponse20065Data {
    /**
     * Provider name: * `hive` - Address is managed by Hive itself. * `coinpayments` - Address is managed by CoinPayments system.
     * @type {string}
     * @memberof InlineResponse20065Data
     */
    name?: InlineResponse20065Data.NameEnum;
    /**
     * Supported currencies
     * @type {string[]}
     * @memberof InlineResponse20065Data
     */
    currencies?: string[];
}
/**
 * @export
 * @namespace InlineResponse20065Data
 */
export declare namespace InlineResponse20065Data {
    /**
     * @export
     * @enum {string}
     */
    enum NameEnum {
        Hive = "hive",
        Coinpayments = "coinpayments"
    }
}
/**
 *
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * Updated referral balances
     * @type {ReferralBalance[]}
     * @memberof InlineResponse2007
     */
    data?: ReferralBalance[];
    /**
     * Updated user balance
     * @type {number}
     * @memberof InlineResponse2007
     */
    balance?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * URL where to submit the form
     * @type {string}
     * @memberof InlineResponse2008
     */
    url?: string;
    /**
     * Form data
     * @type {any}
     * @memberof InlineResponse2008
     */
    data?: any;
}
/**
 *
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
    /**
     *
     * @type {DepositAddress[]}
     * @memberof InlineResponse2009
     */
    data?: DepositAddress[];
}
/**
 *
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     *
     * @type {AuthToken}
     * @memberof InlineResponse201
     */
    authToken?: AuthToken;
    /**
     * Created user ID
     * @type {number}
     * @memberof InlineResponse201
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2011
 */
export interface InlineResponse2011 {
    /**
     * Created workers in order they were provided in request
     * @type {Worker[]}
     * @memberof InlineResponse2011
     */
    data?: Worker[];
}
/**
 *
 * @export
 * @interface InlineResponse2012
 */
export interface InlineResponse2012 {
    /**
     * Created tags in order they were provided in request
     * @type {TagF[]}
     * @memberof InlineResponse2012
     */
    data?: TagF[];
}
/**
 *
 * @export
 * @interface InlineResponse2013
 */
export interface InlineResponse2013 {
    /**
     * Created tags in order they were provided in request
     * @type {TagU[]}
     * @memberof InlineResponse2013
     */
    data?: TagU[];
}
/**
 *
 * @export
 * @interface InlineResponse400
 */
export interface InlineResponse400 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse400
     */
    message?: string;
    /**
     *
     * @type {number}
     * @memberof InlineResponse400
     */
    code?: number;
}
/**
 *
 * @export
 * @interface InlineResponse422
 */
export interface InlineResponse422 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse422
     */
    message?: string;
    /**
     * Errors by field
     * @type {{ [key: string]: string[] }}
     * @memberof InlineResponse422
     */
    errors?: {
        [key: string]: string[];
    };
}
/**
 *
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * User login or email
     * @type {string}
     * @memberof LoginRequest
     */
    login: string;
    /**
     * User password
     * @type {string}
     * @memberof LoginRequest
     */
    password: string;
    /**
     *
     * @type {TwofaCode}
     * @memberof LoginRequest
     */
    twofaCode?: TwofaCode;
    /**
     *
     * @type {boolean}
     * @memberof LoginRequest
     */
    remember?: boolean;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum MessageType {
    Success = "success",
    Info = "info",
    File = "file",
    Warning = "warning",
    Danger = "danger"
}
/**
 * Miner configuration. See MinerConfig object for list of per-miner options
 * @export
 * @interface MinerConfig
 */
export interface MinerConfig {
}
/**
 * Per-miner configuration options
 * @export
 * @interface MinerConfigExaple
 */
export interface MinerConfigExaple {
    /**
     *
     * @type {MinerConfigExapleClaymore}
     * @memberof MinerConfigExaple
     */
    claymore?: MinerConfigExapleClaymore;
    /**
     *
     * @type {MinerConfigExapleClaymorez}
     * @memberof MinerConfigExaple
     */
    claymoreZ?: MinerConfigExapleClaymorez;
    /**
     *
     * @type {MinerConfigExapleClaymorex}
     * @memberof MinerConfigExaple
     */
    claymoreX?: MinerConfigExapleClaymorex;
    /**
     *
     * @type {MinerConfigExapleEwbf}
     * @memberof MinerConfigExaple
     */
    ewbf?: MinerConfigExapleEwbf;
    /**
     *
     * @type {MinerConfigExapleCcminer}
     * @memberof MinerConfigExaple
     */
    ccminer?: MinerConfigExapleCcminer;
    /**
     *
     * @type {MinerConfigExapleEthminer}
     * @memberof MinerConfigExaple
     */
    ethminer?: MinerConfigExapleEthminer;
    /**
     *
     * @type {MinerConfigExapleSgminer}
     * @memberof MinerConfigExaple
     */
    sgminer?: MinerConfigExapleSgminer;
    /**
     *
     * @type {MinerConfigExapleDstm}
     * @memberof MinerConfigExaple
     */
    dstm?: MinerConfigExapleDstm;
    /**
     *
     * @type {MinerConfigExapleBminer}
     * @memberof MinerConfigExaple
     */
    bminer?: MinerConfigExapleBminer;
    /**
     *
     * @type {MinerConfigExapleLolminer}
     * @memberof MinerConfigExaple
     */
    lolminer?: MinerConfigExapleLolminer;
    /**
     *
     * @type {MinerConfigExapleOptiminer}
     * @memberof MinerConfigExaple
     */
    optiminer?: MinerConfigExapleOptiminer;
    /**
     *
     * @type {MinerConfigExapleXmrstak}
     * @memberof MinerConfigExaple
     */
    xmrStak?: MinerConfigExapleXmrstak;
    /**
     *
     * @type {MinerConfigExapleXmrig}
     * @memberof MinerConfigExaple
     */
    xmrig?: MinerConfigExapleXmrig;
    /**
     *
     * @type {MinerConfigExapleXmrig}
     * @memberof MinerConfigExaple
     */
    xmrigAmd?: MinerConfigExapleXmrig;
    /**
     *
     * @type {MinerConfigExapleXmrig}
     * @memberof MinerConfigExaple
     */
    xmrigNvidia?: MinerConfigExapleXmrig;
    /**
     *
     * @type {MinerConfigExapleCpumineropt}
     * @memberof MinerConfigExaple
     */
    cpuminerOpt?: MinerConfigExapleCpumineropt;
    /**
     *
     * @type {MinerConfigExapleCustom}
     * @memberof MinerConfigExaple
     */
    custom?: MinerConfigExapleCustom;
    /**
     *
     * @type {MinerConfigExapleAsicminer}
     * @memberof MinerConfigExaple
     */
    asicminer?: MinerConfigExapleAsicminer;
    /**
     *
     * @type {MinerConfigExapleCryptodredge}
     * @memberof MinerConfigExaple
     */
    cryptodredge?: MinerConfigExapleCryptodredge;
    /**
     *
     * @type {MinerConfigExaplePhoenixminer}
     * @memberof MinerConfigExaple
     */
    phoenixminer?: MinerConfigExaplePhoenixminer;
    /**
     *
     * @type {MinerConfigExapleTeamredminer}
     * @memberof MinerConfigExaple
     */
    teamredminer?: MinerConfigExapleTeamredminer;
    /**
     *
     * @type {MinerConfigExapleCryptodredge}
     * @memberof MinerConfigExaple
     */
    castXmr?: MinerConfigExapleCryptodredge;
    /**
     *
     * @type {MinerConfigExapleTrex}
     * @memberof MinerConfigExaple
     */
    tRex?: MinerConfigExapleTrex;
    /**
     *
     * @type {MinerConfigExapleCryptodredge}
     * @memberof MinerConfigExaple
     */
    wildrigMulti?: MinerConfigExapleCryptodredge;
    /**
     *
     * @type {MinerConfigExapleCryptodredge}
     * @memberof MinerConfigExaple
     */
    finminer?: MinerConfigExapleCryptodredge;
    /**
     *
     * @type {MinerConfigExapleGminer}
     * @memberof MinerConfigExaple
     */
    gminer?: MinerConfigExapleGminer;
    /**
     *
     * @type {MinerConfigExapleBeamcuda}
     * @memberof MinerConfigExaple
     */
    beamcuda?: MinerConfigExapleBeamcuda;
    /**
     *
     * @type {MinerConfigExapleBeamcl}
     * @memberof MinerConfigExaple
     */
    beamcl?: MinerConfigExapleBeamcl;
    /**
     *
     * @type {MinerConfigExapleGrinminer}
     * @memberof MinerConfigExaple
     */
    grinminer?: MinerConfigExapleGrinminer;
    /**
     *
     * @type {MinerConfigExapleGringoldminer}
     * @memberof MinerConfigExaple
     */
    gringoldminer?: MinerConfigExapleGringoldminer;
    /**
     *
     * @type {MinerConfigExapleGrinprominer}
     * @memberof MinerConfigExaple
     */
    grinprominer?: MinerConfigExapleGrinprominer;
    /**
     *
     * @type {MinerConfigExapleNbminer}
     * @memberof MinerConfigExaple
     */
    nbminer?: MinerConfigExapleNbminer;
    /**
     *
     * @type {MinerConfigExapleHspminerae}
     * @memberof MinerConfigExaple
     */
    hspminerae?: MinerConfigExapleHspminerae;
    /**
     *
     * @type {MinerConfigExapleZjazzcuda}
     * @memberof MinerConfigExaple
     */
    zjazzCuda?: MinerConfigExapleZjazzcuda;
    /**
     *
     * @type {MinerConfigExapleRhminer}
     * @memberof MinerConfigExaple
     */
    rhminer?: MinerConfigExapleRhminer;
    /**
     *
     * @type {MinerConfigExapleNanominer}
     * @memberof MinerConfigExaple
     */
    nanominer?: MinerConfigExapleNanominer;
    /**
     *
     * @type {MinerConfigExapleKbminer}
     * @memberof MinerConfigExaple
     */
    kbminer?: MinerConfigExapleKbminer;
    /**
     *
     * @type {MinerConfigExapleEggminergpu}
     * @memberof MinerConfigExaple
     */
    eggminergpu?: MinerConfigExapleEggminergpu;
    /**
     *
     * @type {MinerConfigExapleNoncepoolamd}
     * @memberof MinerConfigExaple
     */
    noncepoolAmd?: MinerConfigExapleNoncepoolamd;
    /**
     *
     * @type {MinerConfigExapleNoncepoolnvidia}
     * @memberof MinerConfigExaple
     */
    noncepoolNvidia?: MinerConfigExapleNoncepoolnvidia;
    /**
     *
     * @type {MinerConfigExapleMiniz}
     * @memberof MinerConfigExaple
     */
    miniz?: MinerConfigExapleMiniz;
    /**
     *
     * @type {MinerConfigExapleSushimineropencl}
     * @memberof MinerConfigExaple
     */
    sushiMinerOpencl?: MinerConfigExapleSushimineropencl;
    /**
     *
     * @type {MinerConfigExapleSushiminercuda}
     * @memberof MinerConfigExaple
     */
    sushiMinerCuda?: MinerConfigExapleSushiminercuda;
    /**
     *
     * @type {MinerConfigExapleNoncerproopencl}
     * @memberof MinerConfigExaple
     */
    noncerproOpencl?: MinerConfigExapleNoncerproopencl;
    /**
     *
     * @type {MinerConfigExapleNoncerprocuda}
     * @memberof MinerConfigExaple
     */
    noncerproCuda?: MinerConfigExapleNoncerprocuda;
    /**
     *
     * @type {MinerConfigExapleNoncerprokadena}
     * @memberof MinerConfigExaple
     */
    noncerproKadena?: MinerConfigExapleNoncerprokadena;
    /**
     *
     * @type {MinerConfigExapleTtminer}
     * @memberof MinerConfigExaple
     */
    ttMiner?: MinerConfigExapleTtminer;
    /**
     *
     * @type {MinerConfigExapleCkbminer}
     * @memberof MinerConfigExaple
     */
    ckbMiner?: MinerConfigExapleCkbminer;
    /**
     *
     * @type {MinerConfigExapleSmine}
     * @memberof MinerConfigExaple
     */
    smine?: MinerConfigExapleSmine;
    /**
     *
     * @type {MinerConfigExapleCortexminer}
     * @memberof MinerConfigExaple
     */
    cortexMiner?: MinerConfigExapleCortexminer;
    /**
     *
     * @type {MinerConfigExapleXmrignew}
     * @memberof MinerConfigExaple
     */
    xmrigNew?: MinerConfigExapleXmrignew;
    /**
     *
     * @type {MinerConfigExapleNqminer}
     * @memberof MinerConfigExaple
     */
    nqMiner?: MinerConfigExapleNqminer;
    /**
     *
     * @type {MinerConfigExapleNheqminer}
     * @memberof MinerConfigExaple
     */
    nheqminer?: MinerConfigExapleNheqminer;
    /**
     *
     * @type {MinerConfigExapleSrbminer}
     * @memberof MinerConfigExaple
     */
    srbminer?: MinerConfigExapleSrbminer;
    /**
     *
     * @type {MinerConfigExapleFah}
     * @memberof MinerConfigExaple
     */
    fah?: MinerConfigExapleFah;
    /**
     *
     * @type {MinerConfigExapleDamominer}
     * @memberof MinerConfigExaple
     */
    damominer?: MinerConfigExapleDamominer;
    /**
     *
     * @type {MinerConfigExapleHellminer}
     * @memberof MinerConfigExaple
     */
    hellminer?: MinerConfigExapleHellminer;
    /**
     *
     * @type {MinerConfigExapleXpmclient}
     * @memberof MinerConfigExaple
     */
    xpmclient?: MinerConfigExapleXpmclient;
    /**
     *
     * @type {MinerConfigExapleVioletminer}
     * @memberof MinerConfigExaple
     */
    violetminer?: MinerConfigExapleVioletminer;
    /**
     *
     * @type {MinerConfigExapleVerthashminer}
     * @memberof MinerConfigExaple
     */
    verthashminer?: MinerConfigExapleVerthashminer;
    /**
     *
     * @type {MinerConfigExapleUupoolChiaMiner}
     * @memberof MinerConfigExaple
     */
    uupoolChiaMiner?: MinerConfigExapleUupoolChiaMiner;
    /**
     *
     * @type {MinerConfigExapleBzminer}
     * @memberof MinerConfigExaple
     */
    bzminer?: MinerConfigExapleBzminer;
    /**
     *
     * @type {MinerConfigExapleTeamblackminer}
     * @memberof MinerConfigExaple
     */
    teamblackminer?: MinerConfigExapleTeamblackminer;
    /**
     *
     * @type {MinerConfigExapleDanilaminer}
     * @memberof MinerConfigExaple
     */
    danilaMiner?: MinerConfigExapleDanilaminer;
    /**
     *
     * @type {MinerConfigExapleDerostratumminer}
     * @memberof MinerConfigExaple
     */
    deroStratumMiner?: MinerConfigExapleDerostratumminer;
    /**
     *
     * @type {MinerConfigExapleTonpoolminer}
     * @memberof MinerConfigExaple
     */
    tonpoolminer?: MinerConfigExapleTonpoolminer;
    /**
     *
     * @type {MinerConfigExapleCminer}
     * @memberof MinerConfigExaple
     */
    cminer?: MinerConfigExapleCminer;
}
/**
 *
 * @export
 * @interface MinerConfigExapleAsicminer
 */
export interface MinerConfigExapleAsicminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    pass?: string;
    /**
     * Wallet and worker template (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    template2?: string;
    /**
     * Pool URL (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    url2?: string;
    /**
     * Pool pass (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    pass2?: string;
    /**
     * Wallet and worker template (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    template3?: string;
    /**
     * Pool URL (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    url3?: string;
    /**
     * Pool pass (fallback)
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    pass3?: string;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleAsicminer
     */
    ver?: string;
}
/**
 * Beam OpenCL Miner
 * @export
 * @interface MinerConfigExapleBeamcl
 */
export interface MinerConfigExapleBeamcl {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleBeamcl
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleBeamcl
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleBeamcl
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleBeamcl
     */
    ver?: string;
}
/**
 * Beam CUDA Miner
 * @export
 * @interface MinerConfigExapleBeamcuda
 */
export interface MinerConfigExapleBeamcuda {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleBeamcuda
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleBeamcuda
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleBeamcuda
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleBeamcuda
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleBminer
 */
export interface MinerConfigExapleBminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    pass?: string;
    /**
     * Use TLS
     * @type {boolean}
     * @memberof MinerConfigExapleBminer
     */
    tls?: boolean;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    algo2?: string;
    /**
     * Secondary wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    template2?: string;
    /**
     * Secondary pool URL
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    url2?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    pass2?: string;
    /**
     * Use TLS for secondary pool
     * @type {boolean}
     * @memberof MinerConfigExapleBminer
     */
    tls2?: boolean;
    /**
     * The intensity of the secondary mining
     * @type {number}
     * @memberof MinerConfigExapleBminer
     */
    intensity?: number;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleBminer
     */
    ver?: string;
}
/**
 * BzMiner
 * @export
 * @interface MinerConfigExapleBzminer
 */
export interface MinerConfigExapleBzminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    algo: string;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    algo2?: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    template: string;
    /**
     * Secondary wallet
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    template2?: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    worker?: string;
    /**
     * Secondary worker name
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    worker2?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    url: string;
    /**
     * Secondary pool URL
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    url2?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    pass?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    pass2?: string;
    /**
     * Disable some GPUs
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    disableGpus?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleBzminer
     */
    tls?: boolean;
    /**
     * Secondary enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleBzminer
     */
    tls2?: boolean;
    /**
     * Enable LHR
     * @type {boolean}
     * @memberof MinerConfigExapleBzminer
     */
    lhr?: boolean;
    /**
     * Secondary enable LHR
     * @type {boolean}
     * @memberof MinerConfigExapleBzminer
     */
    lhr2?: boolean;
    /**
     * Intensity
     * @type {number}
     * @memberof MinerConfigExapleBzminer
     */
    intensity?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleBzminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleCcminer
 */
export interface MinerConfigExapleCcminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccalgo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccuser: string;
    /**
     * Miner Fork
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    fork?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccurl: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccpass?: string;
    /**
     * Extra arguments for miner
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccextra?: string;
    /**
     * Extra params for pool
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ccpoolextra?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCcminer
     */
    ver?: string;
}
/**
 * ckb-miner
 * @export
 * @interface MinerConfigExapleCkbminer
 */
export interface MinerConfigExapleCkbminer {
    /**
     * RPC URL
     * @type {string}
     * @memberof MinerConfigExapleCkbminer
     */
    url: string;
    /**
     * Use AMD (OpenCL)
     * @type {boolean}
     * @memberof MinerConfigExapleCkbminer
     */
    opencl?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCkbminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCkbminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleClaymore
 */
export interface MinerConfigExapleClaymore {
    /**
     * epools.txt template
     * @type {string}
     * @memberof MinerConfigExapleClaymore
     */
    epoolsTpl: string;
    /**
     * dpools.txt template
     * @type {string}
     * @memberof MinerConfigExapleClaymore
     */
    dpoolsTpl?: string;
    /**
     * Second coin
     * @type {string}
     * @memberof MinerConfigExapleClaymore
     */
    dcoin?: string;
    /**
     * Second coin mining intensity 0-100
     * @type {number}
     * @memberof MinerConfigExapleClaymore
     */
    dcri?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleClaymore
     */
    claymoreUserConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleClaymore
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleClaymorex
 */
export interface MinerConfigExapleClaymorex {
    /**
     * epools.txt template
     * @type {string}
     * @memberof MinerConfigExapleClaymorex
     */
    xpoolsTpl: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleClaymorex
     */
    claymoreXUserConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleClaymorex
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleClaymorez
 */
export interface MinerConfigExapleClaymorez {
    /**
     * epools.txt template
     * @type {string}
     * @memberof MinerConfigExapleClaymorez
     */
    zpoolsTpl: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleClaymorez
     */
    claymoreZUserConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleClaymorez
     */
    ver?: string;
}
/**
 * Cminer
 * @export
 * @interface MinerConfigExapleCminer
 */
export interface MinerConfigExapleCminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    algo: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCminer
     */
    ver?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleCminer
     */
    tls?: boolean;
}
/**
 * Cortex Miner
 * @export
 * @interface MinerConfigExapleCortexminer
 */
export interface MinerConfigExapleCortexminer {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleCortexminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleCortexminer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCortexminer
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCortexminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCortexminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleCpumineropt
 */
export interface MinerConfigExapleCpumineropt {
    /**
     * Miner Fork
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    fork?: string;
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCpumineropt
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleCryptodredge
 */
export interface MinerConfigExapleCryptodredge {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleCryptodredge
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleCustom
 */
export interface MinerConfigExapleCustom {
    /**
     * This is the name of installed miner. Like \"mysuperminer\".
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    miner: string;
    /**
     * Installation URL URL where to get \"tar.gz\" package. It will not be downloaded if already installed.
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    installUrl?: string;
    /**
     *
     * @type {AlgoName}
     * @memberof MinerConfigExapleCustom
     */
    algo?: AlgoName;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleCustom
     */
    userConfig?: string;
}
/**
 * DamoMiner
 * @export
 * @interface MinerConfigExapleDamominer
 */
export interface MinerConfigExapleDamominer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    algo: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    pass?: string;
    /**
     * Second hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    algo2?: string;
    /**
     * Wallet and worker template for second algo
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    template2?: string;
    /**
     * Worker name for second algo
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    worker2?: string;
    /**
     * Pool URL for second algo
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    url2?: string;
    /**
     * Pool pass for second algo
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    pass2?: string;
    /**
     * Intensity
     * @type {number}
     * @memberof MinerConfigExapleDamominer
     */
    intensity?: number;
    /**
     * Nicehash mode
     * @type {boolean}
     * @memberof MinerConfigExapleDamominer
     */
    nicehash?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleDamominer
     */
    ver?: string;
}
/**
 * Danila Miner
 * @export
 * @interface MinerConfigExapleDanilaminer
 */
export interface MinerConfigExapleDanilaminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleDanilaminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleDanilaminer
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleDanilaminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleDanilaminer
     */
    ver?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleDanilaminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleDanilaminer
     */
    tls?: boolean;
}
/**
 * Dero Stratum Miner
 * @export
 * @interface MinerConfigExapleDerostratumminer
 */
export interface MinerConfigExapleDerostratumminer {
    /**
     * Miner algo
     * @type {string}
     * @memberof MinerConfigExapleDerostratumminer
     */
    algo?: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleDerostratumminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleDerostratumminer
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleDerostratumminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleDerostratumminer
     */
    ver?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleDerostratumminer
     */
    tls?: boolean;
}
/**
 *
 * @export
 * @interface MinerConfigExapleDstm
 */
export interface MinerConfigExapleDstm {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    template: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    port?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    pass?: string;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleDstm
     */
    ver?: string;
}
/**
 * EggMinerGpu
 * @export
 * @interface MinerConfigExapleEggminergpu
 */
export interface MinerConfigExapleEggminergpu {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleEggminergpu
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleEggminergpu
     */
    worker: string;
    /**
     * Use tmpfs to store mining file
     * @type {boolean}
     * @memberof MinerConfigExapleEggminergpu
     */
    tmpfs?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleEggminergpu
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleEggminergpu
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleEthminer
 */
export interface MinerConfigExapleEthminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    template: string;
    /**
     * AMD (OpenCL)
     * @type {boolean}
     * @memberof MinerConfigExapleEthminer
     */
    opencl?: boolean;
    /**
     * Nvidia (CUDA)
     * @type {boolean}
     * @memberof MinerConfigExapleEthminer
     */
    cuda?: boolean;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    port?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    pass?: string;
    /**
     * Extra arguments for miner
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleEthminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleEwbf
 */
export interface MinerConfigExapleEwbf {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    ztemplate: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    zserver: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    zport?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    zpass?: string;
    /**
     * Miner Fork
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    fork?: string;
    /**
     * Miner Algo
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    algo?: string;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleEwbf
     */
    ver?: string;
}
/**
 * Folding@Home Client
 * @export
 * @interface MinerConfigExapleFah
 */
export interface MinerConfigExapleFah {
    /**
     * Team name
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    team?: string;
    /**
     * User name
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    user?: string;
    /**
     * Pass key
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    pass?: string;
    /**
     * Enable CPU mode
     * @type {boolean}
     * @memberof MinerConfigExapleFah
     */
    cpu?: boolean;
    /**
     * Config for CPU mode
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    cpuConfig?: string;
    /**
     * Enable CUDA mode
     * @type {boolean}
     * @memberof MinerConfigExapleFah
     */
    cuda?: boolean;
    /**
     * Config for CUDA mode
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    cudaConfig?: string;
    /**
     * Enable OpenCL mode
     * @type {boolean}
     * @memberof MinerConfigExapleFah
     */
    opencl?: boolean;
    /**
     * Config for OpenCL mode
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    openclConfig?: string;
    /**
     * CPU usage intensity
     * @type {number}
     * @memberof MinerConfigExapleFah
     */
    cpuUsage?: number;
    /**
     * GPU usage intensity
     * @type {number}
     * @memberof MinerConfigExapleFah
     */
    gpuUsage?: number;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleFah
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleGminer
 */
export interface MinerConfigExapleGminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    template: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    port?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleGminer
     */
    tls?: boolean;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    algo2?: string;
    /**
     * Secondary wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    template2?: string;
    /**
     * Secondary pool server
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    server2?: string;
    /**
     * Secondary pool port
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    port2?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    pass2?: string;
    /**
     * Secondary enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleGminer
     */
    tls2?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleGminer
     */
    ver?: string;
}
/**
 * Grin Gold Miner
 * @export
 * @interface MinerConfigExapleGringoldminer
 */
export interface MinerConfigExapleGringoldminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleGringoldminer
     */
    tls?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    userConfig?: string;
    /**
     * Miner fork
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    fork?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleGringoldminer
     */
    ver?: string;
}
/**
 * Grin Miner
 * @export
 * @interface MinerConfigExapleGrinminer
 */
export interface MinerConfigExapleGrinminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleGrinminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleGrinminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleGrinminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleGrinminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleGrinminer
     */
    ver?: string;
}
/**
 * GrinPro Miner
 * @export
 * @interface MinerConfigExapleGrinprominer
 */
export interface MinerConfigExapleGrinprominer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleGrinprominer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleGrinprominer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleGrinprominer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleGrinprominer
     */
    tls?: boolean;
    /**
     * CPU load
     * @type {number}
     * @memberof MinerConfigExapleGrinprominer
     */
    cpuload?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleGrinprominer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleGrinprominer
     */
    ver?: string;
}
/**
 * Hellminer
 * @export
 * @interface MinerConfigExapleHellminer
 */
export interface MinerConfigExapleHellminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleHellminer
     */
    algo?: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleHellminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleHellminer
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleHellminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleHellminer
     */
    ver?: string;
}
/**
 * HSPMinerAE
 * @export
 * @interface MinerConfigExapleHspminerae
 */
export interface MinerConfigExapleHspminerae {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleHspminerae
     */
    ver?: string;
}
/**
 * KBMiner
 * @export
 * @interface MinerConfigExapleKbminer
 */
export interface MinerConfigExapleKbminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleKbminer
     */
    tls?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleKbminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleLolminer
 */
export interface MinerConfigExapleLolminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    algo: string;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    algo2?: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    template: string;
    /**
     * Secondary wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    template2?: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    worker?: string;
    /**
     * Secondary worker name
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    worker2?: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    server: string;
    /**
     * Secondary pool server
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    server2?: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    port?: string;
    /**
     * Secondary pool port
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    port2?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    pass?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    pass2?: string;
    /**
     * Use TLS
     * @type {boolean}
     * @memberof MinerConfigExapleLolminer
     */
    tls?: boolean;
    /**
     * Secondary use TLS
     * @type {boolean}
     * @memberof MinerConfigExapleLolminer
     */
    tls2?: boolean;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleLolminer
     */
    ver?: string;
}
/**
 * miniZ
 * @export
 * @interface MinerConfigExapleMiniz
 */
export interface MinerConfigExapleMiniz {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleMiniz
     */
    tls?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleMiniz
     */
    ver?: string;
}
/**
 * Nanominer
 * @export
 * @interface MinerConfigExapleNanominer
 */
export interface MinerConfigExapleNanominer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    userConfig?: string;
    /**
     * Second hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    algo2?: string;
    /**
     * Wallet and worker template for second algo
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    template2?: string;
    /**
     * Pool URL for second algo
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    url2?: string;
    /**
     * Pool pass for second algo
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    pass2?: string;
    /**
     * Config override for second algo
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    userConfig2?: string;
    /**
     * Common config override
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    commonConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNanominer
     */
    ver?: string;
}
/**
 * NBMiner
 * @export
 * @interface MinerConfigExapleNbminer
 */
export interface MinerConfigExapleNbminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    pass?: string;
    /**
     * Second hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    algo2?: string;
    /**
     * Wallet and worker template for second algo
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    template2?: string;
    /**
     * Pool URL for second algo
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    url2?: string;
    /**
     * Pool pass for second algo
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    pass2?: string;
    /**
     * Intensity
     * @type {number}
     * @memberof MinerConfigExapleNbminer
     */
    intensity?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNbminer
     */
    ver?: string;
}
/**
 * Equihash miner for NiceHash
 * @export
 * @interface MinerConfigExapleNheqminer
 */
export interface MinerConfigExapleNheqminer {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    userConfig?: string;
    /**
     * Miner fork
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    fork?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNheqminer
     */
    ver?: string;
}
/**
 * Noncepool AMD miner
 * @export
 * @interface MinerConfigExapleNoncepoolamd
 */
export interface MinerConfigExapleNoncepoolamd {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolamd
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolamd
     */
    worker: string;
    /**
     * Use tmpfs to store mining file
     * @type {boolean}
     * @memberof MinerConfigExapleNoncepoolamd
     */
    tmpfs?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolamd
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolamd
     */
    ver?: string;
}
/**
 * Noncepool Nvidia miner
 * @export
 * @interface MinerConfigExapleNoncepoolnvidia
 */
export interface MinerConfigExapleNoncepoolnvidia {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolnvidia
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolnvidia
     */
    worker: string;
    /**
     * Use tmpfs to store mining file
     * @type {boolean}
     * @memberof MinerConfigExapleNoncepoolnvidia
     */
    tmpfs?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolnvidia
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNoncepoolnvidia
     */
    ver?: string;
}
/**
 * NoncerPro CUDA
 * @export
 * @interface MinerConfigExapleNoncerprocuda
 */
export interface MinerConfigExapleNoncerprocuda {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    worker: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    port?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNoncerprocuda
     */
    ver?: string;
}
/**
 * NoncerPro Kadena
 * @export
 * @interface MinerConfigExapleNoncerprokadena
 */
export interface MinerConfigExapleNoncerprokadena {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    template: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    port?: string;
    /**
     * Enable CUDA mining
     * @type {boolean}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    cuda?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNoncerprokadena
     */
    ver?: string;
}
/**
 * NoncerPro OpenCL
 * @export
 * @interface MinerConfigExapleNoncerproopencl
 */
export interface MinerConfigExapleNoncerproopencl {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    worker: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    port?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNoncerproopencl
     */
    ver?: string;
}
/**
 * Nimiq GPU miner
 * @export
 * @interface MinerConfigExapleNqminer
 */
export interface MinerConfigExapleNqminer {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleNqminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleNqminer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleNqminer
     */
    url: string;
    /**
     * Enable CUDA mining
     * @type {boolean}
     * @memberof MinerConfigExapleNqminer
     */
    cuda?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleNqminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleNqminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleOptiminer
 */
export interface MinerConfigExapleOptiminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    template: string;
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    algo: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    port?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    pass?: string;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleOptiminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExaplePhoenixminer
 */
export interface MinerConfigExaplePhoenixminer {
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExaplePhoenixminer
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExaplePhoenixminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExaplePhoenixminer
     */
    ver?: string;
}
/**
 * RandomHash miner
 * @export
 * @interface MinerConfigExapleRhminer
 */
export interface MinerConfigExapleRhminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleRhminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleRhminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleRhminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleRhminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleRhminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleSgminer
 */
export interface MinerConfigExapleSgminer {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    template: string;
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    algo: string;
    /**
     * Miner Fork
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    fork?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    pass?: string;
    /**
     * Extra config arguments
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleSgminer
     */
    ver?: string;
}
/**
 * smine
 * @export
 * @interface MinerConfigExapleSmine
 */
export interface MinerConfigExapleSmine {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleSmine
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleSmine
     */
    url: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleSmine
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleSmine
     */
    ver?: string;
}
/**
 * SRBMiner-MULTI
 * @export
 * @interface MinerConfigExapleSrbminer
 */
export interface MinerConfigExapleSrbminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    algo: string;
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleSrbminer
     */
    tls?: boolean;
    /**
     * Second hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    algo2?: string;
    /**
     * Wallet template for second algo
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    template2?: string;
    /**
     * Worker name for second algo
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    worker2?: string;
    /**
     * Pool URL for second algo
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    url2?: string;
    /**
     * Pool pass for second algo
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    pass2?: string;
    /**
     * Enable TLS for second algo
     * @type {boolean}
     * @memberof MinerConfigExapleSrbminer
     */
    tls2?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleSrbminer
     */
    ver?: string;
}
/**
 * Sushi miner Nvidia
 * @export
 * @interface MinerConfigExapleSushiminercuda
 */
export interface MinerConfigExapleSushiminercuda {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    worker: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    port?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleSushiminercuda
     */
    ver?: string;
}
/**
 * Sushi miner AMD
 * @export
 * @interface MinerConfigExapleSushimineropencl
 */
export interface MinerConfigExapleSushimineropencl {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    worker: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    port?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleSushimineropencl
     */
    ver?: string;
}
/**
 * Team Black Miner
 * @export
 * @interface MinerConfigExapleTeamblackminer
 */
export interface MinerConfigExapleTeamblackminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    algo: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    worker?: string;
    /**
     * Pool host
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    host: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    port?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    pass?: string;
    /**
     * Disable some GPUs
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    disableGpus?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleTeamblackminer
     */
    tls?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleTeamblackminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleTeamredminer
 */
export interface MinerConfigExapleTeamredminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    algo: string;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    algo2?: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    template: string;
    /**
     * Secondary wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    template2?: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    worker?: string;
    /**
     * Secondary worker name
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    worker2?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    url: string;
    /**
     * Secondary pool URL
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    url2?: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    pass?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    pass2?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    userConfig?: string;
    /**
     * Secondary config override
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    userConfig2?: string;
    /**
     * Use TLS
     * @type {boolean}
     * @memberof MinerConfigExapleTeamredminer
     */
    tls?: boolean;
    /**
     * Use TLS for dual mining
     * @type {boolean}
     * @memberof MinerConfigExapleTeamredminer
     */
    tls2?: boolean;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    ver?: string;
    /**
     * The intensity of the mining
     * @type {string}
     * @memberof MinerConfigExapleTeamredminer
     */
    intensity?: string;
}
/**
 * TON pool miner
 * @export
 * @interface MinerConfigExapleTonpoolminer
 */
export interface MinerConfigExapleTonpoolminer {
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleTonpoolminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleTonpoolminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleTonpoolminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleTonpoolminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleTonpoolminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleTrex
 */
export interface MinerConfigExapleTrex {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    pass?: string;
    /**
     * Use TLS
     * @type {boolean}
     * @memberof MinerConfigExapleTrex
     */
    tls?: boolean;
    /**
     * Secondary hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    algo2?: string;
    /**
     * Secondary wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    template2?: string;
    /**
     * Secondary worker name
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    worker2?: string;
    /**
     * Secondary pool URL
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    url2?: string;
    /**
     * Secondary pool pass
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    pass2?: string;
    /**
     * Use TLS for secondary pool
     * @type {boolean}
     * @memberof MinerConfigExapleTrex
     */
    tls2?: boolean;
    /**
     * The intensity of the secondary mining
     * @type {number}
     * @memberof MinerConfigExapleTrex
     */
    intensity?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleTrex
     */
    ver?: string;
}
/**
 * TT-Miner
 * @export
 * @interface MinerConfigExapleTtminer
 */
export interface MinerConfigExapleTtminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleTtminer
     */
    ver?: string;
}
/**
 * UUPool CHIA Miner
 * @export
 * @interface MinerConfigExapleUupoolChiaMiner
 */
export interface MinerConfigExapleUupoolChiaMiner {
    /**
     * Account key
     * @type {string}
     * @memberof MinerConfigExapleUupoolChiaMiner
     */
    accountKey: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleUupoolChiaMiner
     */
    worker?: string;
    /**
     * List of directories containing CHIA plots
     * @type {string}
     * @memberof MinerConfigExapleUupoolChiaMiner
     */
    plotDirs?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleUupoolChiaMiner
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleUupoolChiaMiner
     */
    ver?: string;
}
/**
 * VerthashMiner
 * @export
 * @interface MinerConfigExapleVerthashminer
 */
export interface MinerConfigExapleVerthashminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    algo?: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    pass?: string;
    /**
     * Use tmpfs to store mining file
     * @type {boolean}
     * @memberof MinerConfigExapleVerthashminer
     */
    tmpfs?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleVerthashminer
     */
    ver?: string;
}
/**
 * Violetminer
 * @export
 * @interface MinerConfigExapleVioletminer
 */
export interface MinerConfigExapleVioletminer {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    algo: string;
    /**
     * Wallet
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    worker?: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    pass?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleVioletminer
     */
    tls?: boolean;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleVioletminer
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleXmrig
 */
export interface MinerConfigExapleXmrig {
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    pass?: string;
    /**
     * Threads configuration
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    threads?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleXmrig
     */
    ver?: string;
}
/**
 * XmRig (new)
 * @export
 * @interface MinerConfigExapleXmrignew
 */
export interface MinerConfigExapleXmrignew {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    pass?: string;
    /**
     * Enable CPU mining
     * @type {boolean}
     * @memberof MinerConfigExapleXmrignew
     */
    cpu?: boolean;
    /**
     * Config for CPU mining
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    cpuConfig?: string;
    /**
     * Enable OpenCL mining
     * @type {boolean}
     * @memberof MinerConfigExapleXmrignew
     */
    opencl?: boolean;
    /**
     * Config for OpenCL mining
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    openclConfig?: string;
    /**
     * Enable CUDA mining
     * @type {boolean}
     * @memberof MinerConfigExapleXmrignew
     */
    cuda?: boolean;
    /**
     * Config for CUDA mining
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    cudaConfig?: string;
    /**
     * Enable TLS
     * @type {boolean}
     * @memberof MinerConfigExapleXmrignew
     */
    tls?: boolean;
    /**
     * Amount of hugepages
     * @type {number}
     * @memberof MinerConfigExapleXmrignew
     */
    hugepages?: number;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    userConfig?: string;
    /**
     * Miner fork
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    fork?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleXmrignew
     */
    ver?: string;
}
/**
 *
 * @export
 * @interface MinerConfigExapleXmrstak
 */
export interface MinerConfigExapleXmrstak {
    /**
     * Miner Fork
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    fork?: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    userConfig?: string;
    /**
     * AMD config override
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    amd?: string;
    /**
     * Nvidia config override
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    nvidia?: string;
    /**
     * CPU config override
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    cpu?: string;
    /**
     * Amount of hugepages
     * @type {number}
     * @memberof MinerConfigExapleXmrstak
     */
    hugepages?: number;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleXmrstak
     */
    ver?: string;
}
/**
 * XPM miner
 * @export
 * @interface MinerConfigExapleXpmclient
 */
export interface MinerConfigExapleXpmclient {
    /**
     * Wallet template
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    template: string;
    /**
     * Worker name
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    worker: string;
    /**
     * Pool server
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    server: string;
    /**
     * Pool port
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    port?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleXpmclient
     */
    ver?: string;
}
/**
 * zjazz CUDA miner
 * @export
 * @interface MinerConfigExapleZjazzcuda
 */
export interface MinerConfigExapleZjazzcuda {
    /**
     * Hash algorithm
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    algo: string;
    /**
     * Wallet and worker template
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    template: string;
    /**
     * Pool URL
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    url: string;
    /**
     * Pool pass
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    pass?: string;
    /**
     * Config override
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    userConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof MinerConfigExapleZjazzcuda
     */
    ver?: string;
}
/**
 * Miner ID
 * @export
 * @enum {string}
 */
export declare enum MinerName {
    Claymore = "claymore",
    ClaymoreZ = "claymore-z",
    ClaymoreX = "claymore-x",
    Ewbf = "ewbf",
    Ccminer = "ccminer",
    Ethminer = "ethminer",
    Sgminer = "sgminer",
    Dstm = "dstm",
    Bminer = "bminer",
    Lolminer = "lolminer",
    Optiminer = "optiminer",
    XmrStak = "xmr-stak",
    Xmrig = "xmrig",
    CpuminerOpt = "cpuminer-opt",
    Custom = "custom",
    Asicminer = "asicminer"
}
/**
 * Miners configuration
 * @export
 * @interface MinersConfig
 */
export type MinersConfig = MinersConfigInner[];
/**
 *
 * @export
 * @interface MinersConfigInner
 */
export interface MinersConfigInner {
    /**
     *
     * @type {MinerName}
     * @memberof MinersConfigInner
     */
    miner: MinerName;
    /**
     *
     * @type {MinerConfig}
     * @memberof MinersConfigInner
     */
    config?: MinerConfig;
}
/**
 *
 * @export
 * @interface MirrorUrl
 */
export interface MirrorUrl {
}
/**
 * * `login` - Log in using password
 * @export
 * @enum {string}
 */
export declare enum NotificationAccountEventEnum {
    Login = "login"
}
/**
 * Notification channel
 * @export
 * @enum {string}
 */
export declare enum NotificationChannelEnum {
    Telegram = "telegram",
    Discord = "discord",
    Wechat = "wechat",
    Mobilepush = "mobilepush"
}
/**
 *
 * @export
 * @interface NotificationChannels
 */
export interface NotificationChannels {
    /**
     * List of enabled notification channels
     * @type {NotificationChannelEnum[]}
     * @memberof NotificationChannels
     */
    channels?: NotificationChannelEnum[];
    /**
     *
     * @type {NotificationChannelsChannelsData}
     * @memberof NotificationChannels
     */
    channelsData?: NotificationChannelsChannelsData;
}
/**
 *
 * @export
 * @interface NotificationChannelsChannelsData
 */
export interface NotificationChannelsChannelsData {
    /**
     *
     * @type {NotificationChannelsChannelsDataTelegram}
     * @memberof NotificationChannelsChannelsData
     */
    telegram?: NotificationChannelsChannelsDataTelegram;
    /**
     *
     * @type {NotificationChannelsChannelsDataDiscord}
     * @memberof NotificationChannelsChannelsData
     */
    discord?: NotificationChannelsChannelsDataDiscord;
    /**
     *
     * @type {NotificationChannelsChannelsDataWechat}
     * @memberof NotificationChannelsChannelsData
     */
    wechat?: NotificationChannelsChannelsDataWechat;
    /**
     *
     * @type {NotificationChannelsChannelsDataMobilepush}
     * @memberof NotificationChannelsChannelsData
     */
    mobilepush?: NotificationChannelsChannelsDataMobilepush;
}
/**
 *
 * @export
 * @interface NotificationChannelsChannelsDataDiscord
 */
export interface NotificationChannelsChannelsDataDiscord {
    /**
     * Entered authentication code. If present - Discord subscription process is not finished.
     * @type {string}
     * @memberof NotificationChannelsChannelsDataDiscord
     */
    authCode?: string;
    /**
     * Discord account username that is connected
     * @type {string}
     * @memberof NotificationChannelsChannelsDataDiscord
     */
    username?: string;
    /**
     * Channel is enabled
     * @type {boolean}
     * @memberof NotificationChannelsChannelsDataDiscord
     */
    enabled?: boolean;
}
/**
 * Mobile app tokens
 * @export
 * @interface NotificationChannelsChannelsDataMobilepush
 */
export interface NotificationChannelsChannelsDataMobilepush {
}
/**
 *
 * @export
 * @interface NotificationChannelsChannelsDataTelegram
 */
export interface NotificationChannelsChannelsDataTelegram {
    /**
     * Entered authentication code. If present - Telegram subscription process is not finished.
     * @type {string}
     * @memberof NotificationChannelsChannelsDataTelegram
     */
    authCode?: string;
    /**
     * Telegram account username that is connected
     * @type {string}
     * @memberof NotificationChannelsChannelsDataTelegram
     */
    username?: string;
    /**
     * Channel is enabled
     * @type {boolean}
     * @memberof NotificationChannelsChannelsDataTelegram
     */
    enabled?: boolean;
}
/**
 *
 * @export
 * @interface NotificationChannelsChannelsDataWechat
 */
export interface NotificationChannelsChannelsDataWechat {
    /**
     * Entered authentication code. If present - WeChat subscription process is not finished.
     * @type {string}
     * @memberof NotificationChannelsChannelsDataWechat
     */
    authCode?: string;
    /**
     * WeChat account username that is connected
     * @type {string}
     * @memberof NotificationChannelsChannelsDataWechat
     */
    username?: string;
    /**
     * Channel is enabled
     * @type {boolean}
     * @memberof NotificationChannelsChannelsDataWechat
     */
    enabled?: boolean;
}
/**
 * * `offline` - Worker went offline * `online` - Worker became online * `boot` - Worker booted * `danger` - Danger message from worker * `warning` - Warning message from worker * `info` - Info message from worker * `success` - Success message from worker * `red_temp` - Temperature >= red_temp + 3°C * `red_mem_temp` - GPU memory temperature >= red_mem_temp + 3°C * `red_cpu_temp` - CPU temperature >= red_cpu_temp + 3°C * `red_board_temp` - ASIC board temperature >= red_board_temp + 3°C * `red_fan` - Fan speed >= red_fan + 5% * `red_asr` - Accepted shares ratio <= red_asr - 5%. Notification is muted while total amount of shares < 10. * `red_la` - Load averege (15m) >= red_la + 1. Notification is muted for 20 minutes after boot. * `missed_unit` - Missed GPU/Board * `summary` - Hourly summary
 * @export
 * @enum {string}
 */
export declare enum NotificationFarmEventEnum {
    Offline = "offline",
    Online = "online",
    Boot = "boot",
    Danger = "danger",
    Warning = "warning",
    Info = "info",
    Success = "success",
    RedTemp = "red_temp",
    RedMemTemp = "red_mem_temp",
    RedCpuTemp = "red_cpu_temp",
    RedBoardTemp = "red_board_temp",
    RedFan = "red_fan",
    RedAsr = "red_asr",
    RedLa = "red_la",
    MissedUnit = "missed_unit",
    Summary = "summary"
}
/**
 *
 * @export
 * @interface NotificationSubscriptionsAccount
 */
export interface NotificationSubscriptionsAccount {
    /**
     *
     * @type {NotificationSubscriptionsAccountSubscriptions}
     * @memberof NotificationSubscriptionsAccount
     */
    subscriptions?: NotificationSubscriptionsAccountSubscriptions;
}
/**
 * Per-channel lists of event names to notify. - **telegram** - for Telegram
 - **discord** - for Discord
 - **wechat** - for WeChat
 
 * @export
 * @interface NotificationSubscriptionsAccountSubscriptions
 */
export interface NotificationSubscriptionsAccountSubscriptions {
    /**
     *
     * @type {NotificationSubscriptionsItemAccount}
     * @memberof NotificationSubscriptionsAccountSubscriptions
     */
    telegram?: NotificationSubscriptionsItemAccount;
    /**
     *
     * @type {NotificationSubscriptionsItemAccount}
     * @memberof NotificationSubscriptionsAccountSubscriptions
     */
    discord?: NotificationSubscriptionsItemAccount;
    /**
     *
     * @type {NotificationSubscriptionsItemAccount}
     * @memberof NotificationSubscriptionsAccountSubscriptions
     */
    wechat?: NotificationSubscriptionsItemAccount;
}
/**
 *
 * @export
 * @interface NotificationSubscriptionsFarm
 */
export interface NotificationSubscriptionsFarm {
    /**
     *
     * @type {NotificationSubscriptionsFarmSubscriptions}
     * @memberof NotificationSubscriptionsFarm
     */
    subscriptions?: NotificationSubscriptionsFarmSubscriptions;
}
/**
 * Per-channel lists of event names to notify. - **telegram** - for Telegram
 - **discord** - for Discord
 - **wechat** - for WeChat
 
 * @export
 * @interface NotificationSubscriptionsFarmSubscriptions
 */
export interface NotificationSubscriptionsFarmSubscriptions {
    /**
     *
     * @type {NotificationSubscriptionsItemFarm}
     * @memberof NotificationSubscriptionsFarmSubscriptions
     */
    telegram?: NotificationSubscriptionsItemFarm;
    /**
     *
     * @type {NotificationSubscriptionsItemFarm}
     * @memberof NotificationSubscriptionsFarmSubscriptions
     */
    discord?: NotificationSubscriptionsItemFarm;
    /**
     *
     * @type {NotificationSubscriptionsItemFarm}
     * @memberof NotificationSubscriptionsFarmSubscriptions
     */
    wechat?: NotificationSubscriptionsItemFarm;
}
/**
 *
 * @export
 * @interface NotificationSubscriptionsItemAccount
 */
export type NotificationSubscriptionsItemAccount = NotificationAccountEventEnum[];
/**
 *
 * @export
 * @interface NotificationSubscriptionsItemFarm
 */
export type NotificationSubscriptionsItemFarm = NotificationFarmEventEnum[];
/**
 *
 * @export
 * @interface OC
 */
export interface OC {
    /**
     * Display name
     * @type {string}
     * @memberof OC
     */
    name?: string;
    /**
     * Is favorite flag
     * @type {boolean}
     * @memberof OC
     */
    isFavorite?: boolean;
    /**
     *
     * @type {OCConfig}
     * @memberof OC
     */
    options?: OCConfig;
}
/**
 * Algorithm name. Overclock configuration for this algo will be applied. If not set - algo will be automatically resolved based on first applied flight sheet
 * @export
 * @interface OCAlgo
 */
export interface OCAlgo {
}
/**
 * Overclocking profile configuration
 * @export
 * @interface OCConfig
 */
export interface OCConfig {
    /**
     *
     * @type {OCConfigDefault}
     * @memberof OCConfig
     */
    _default?: OCConfigDefault;
    /**
     *
     * @type {any[]}
     * @memberof OCConfig
     */
    byAlgo?: any[];
}
/**
 * Options for AMD cards
 * @export
 * @interface OCConfigAmd
 */
export interface OCConfigAmd {
    /**
     * Core Clock (Mhz)
     * @type {string}
     * @memberof OCConfigAmd
     */
    coreClock?: string;
    /**
     * Core State (Index)
     * @type {string}
     * @memberof OCConfigAmd
     */
    coreState?: string;
    /**
     * Core Voltage (mV)
     * @type {string}
     * @memberof OCConfigAmd
     */
    coreVddc?: string;
    /**
     * Memory Clock (Mhz)
     * @type {string}
     * @memberof OCConfigAmd
     */
    memClock?: string;
    /**
     * Mem State (Index)
     * @type {string}
     * @memberof OCConfigAmd
     */
    memState?: string;
    /**
     * Memory voltage (mV)
     * @type {string}
     * @memberof OCConfigAmd
     */
    memMvdd?: string;
    /**
     * Memory bus voltage (mV)
     * @type {string}
     * @memberof OCConfigAmd
     */
    memVddci?: string;
    /**
     * Fan (%)
     * @type {string}
     * @memberof OCConfigAmd
     */
    fanSpeed?: string;
    /**
     * Power Limit (W) (0 for stock value)
     * @type {string}
     * @memberof OCConfigAmd
     */
    powerLimit?: string;
    /**
     *
     * @type {string}
     * @memberof OCConfigAmd
     */
    trefTiming?: string;
    /**
     * SoC clock (MHz)
     * @type {string}
     * @memberof OCConfigAmd
     */
    socClock?: string;
    /**
     * SoC maximum voltage (mV)
     * @type {string}
     * @memberof OCConfigAmd
     */
    socVddmax?: string;
    /**
     * Aggressive undervolting (set OC for each DPM state)
     * @type {boolean}
     * @memberof OCConfigAmd
     */
    aggressive?: boolean;
}
/**
 * Default overclock. This overclock will be applied if there is no configuration for needed algo.
 * @export
 * @interface OCConfigDefault
 */
export interface OCConfigDefault {
}
/**
 * Options for Nvidia cards
 * @export
 * @interface OCConfigNvidia
 */
export interface OCConfigNvidia {
    /**
     * +Core Clock (Mhz)
     * @type {string}
     * @memberof OCConfigNvidia
     */
    coreClock?: string;
    /**
     * +Memory (Mhz)
     * @type {string}
     * @memberof OCConfigNvidia
     */
    memClock?: string;
    /**
     * Fan (%) (0 for auto)
     * @type {string}
     * @memberof OCConfigNvidia
     */
    fanSpeed?: string;
    /**
     * Power Limit (W) (0 for stock value)
     * @type {string}
     * @memberof OCConfigNvidia
     */
    powerLimit?: string;
    /**
     * Turn Off LEDs (may not work on some cards)
     * @type {boolean}
     * @memberof OCConfigNvidia
     */
    logoOff?: boolean;
    /**
     * Enable OhGodAnETHlargementPill
     * @type {boolean}
     * @memberof OCConfigNvidia
     */
    ohgodapill?: boolean;
    /**
     * Timeout to start OhGodAnETHlargementPill, seconds
     * @type {number}
     * @memberof OCConfigNvidia
     */
    ohgodapillStartTimeout?: number;
    /**
     * Arguments for OhGodAnETHlargementPill
     * @type {string}
     * @memberof OCConfigNvidia
     */
    ohgodapillArgs?: string;
    /**
     * Delay before applying overclock, seconds
     * @type {number}
     * @memberof OCConfigNvidia
     */
    runningDelay?: number;
    /**
     * Reduce power usage in idle state (1000 series)
     * @type {boolean}
     * @memberof OCConfigNvidia
     */
    reducePower?: boolean;
    /**
     * Force P0 power state
     * @type {boolean}
     * @memberof OCConfigNvidia
     */
    forceP0?: boolean;
}
/**
 * Options for GPU tweakers
 * @export
 * @interface OCConfigTweakers
 */
export interface OCConfigTweakers {
    [key: string]: any[];
}
/**
 *
 * @export
 * @interface OCCreateRequest
 */
export interface OCCreateRequest extends OCFields {
}
/**
 *
 * @export
 * @interface OCF
 */
export interface OCF extends OC {
    /**
     *
     * @type {number}
     * @memberof OCF
     */
    farmId?: number;
}
/**
 *
 * @export
 * @interface OCFields
 */
export interface OCFields {
    /**
     * Display name
     * @type {string}
     * @memberof OCFields
     */
    name?: string;
    /**
     * Is favorite flag
     * @type {boolean}
     * @memberof OCFields
     */
    isFavorite?: boolean;
    /**
     *
     * @type {OCConfig}
     * @memberof OCFields
     */
    options?: OCConfig;
}
/**
 *
 * @export
 * @interface OCProps
 */
export interface OCProps {
    /**
     *
     * @type {OCConfigAmd}
     * @memberof OCProps
     */
    amd?: OCConfigAmd;
    /**
     *
     * @type {OCConfigNvidia}
     * @memberof OCProps
     */
    nvidia?: OCConfigNvidia;
    /**
     *
     * @type {OCConfigTweakers}
     * @memberof OCProps
     */
    tweakers?: OCConfigTweakers;
}
/**
 *
 * @export
 * @interface OCShortInfo
 */
export interface OCShortInfo {
    /**
     *
     * @type {number}
     * @memberof OCShortInfo
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof OCShortInfo
     */
    farmId?: number;
    /**
     * Display name
     * @type {string}
     * @memberof OCShortInfo
     */
    name?: string;
}
/**
 *
 * @export
 * @interface OCU
 */
export interface OCU extends OC {
    /**
     *
     * @type {number}
     * @memberof OCU
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface OCUpdateRequest
 */
export interface OCUpdateRequest extends OCFields {
    /**
     * How options will be saved: - replace - options will be saved as passed in request - merge - options will be merged on fields level
     * @type {string}
     * @memberof OCUpdateRequest
     */
    optionsUpdateMode?: OCUpdateRequest.OptionsUpdateModeEnum;
}
/**
 * @export
 * @namespace OCUpdateRequest
 */
export declare namespace OCUpdateRequest {
    /**
     * @export
     * @enum {string}
     */
    enum OptionsUpdateModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 * Pagination data
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Total count of entries available for current request
     * @type {number}
     * @memberof Pagination
     */
    total?: number;
    /**
     * Amount of returned entries
     * @type {number}
     * @memberof Pagination
     */
    count?: number;
    /**
     * Amount of entries per page
     * @type {number}
     * @memberof Pagination
     */
    perPage?: number;
    /**
     * Current page number
     * @type {number}
     * @memberof Pagination
     */
    currentPage?: number;
    /**
     * Amount of available pages
     * @type {number}
     * @memberof Pagination
     */
    totalPages?: number;
}
/**
 *
 * @export
 * @interface Password
 */
export interface Password {
}
/**
 *
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * Payment ID
     * @type {number}
     * @memberof Payment
     */
    id?: number;
    /**
     * Payment timestamp
     * @type {number}
     * @memberof Payment
     */
    timestamp?: number;
    /**
     * Payment currency
     * @type {string}
     * @memberof Payment
     */
    currency?: string;
    /**
     * Payment amount in currency
     * @type {number}
     * @memberof Payment
     */
    amount?: number;
    /**
     * Payment amount in fiat currency
     * @type {number}
     * @memberof Payment
     */
    amountFiat?: number;
    /**
     * Payment status
     * @type {number}
     * @memberof Payment
     */
    status?: number;
    /**
     * Payment status text
     * @type {string}
     * @memberof Payment
     */
    statusText?: string;
    /**
     * Transaction ID
     * @type {string}
     * @memberof Payment
     */
    txid?: string;
}
/**
 * Worker platform: * 1 - GPU * 2 - ASIC * 3 - Device
 * @export
 * @enum {string}
 */
export declare enum Platform {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
 *
 * @export
 * @interface PoolTemplate
 */
export interface PoolTemplate {
    /**
     * Pool name
     * @type {string}
     * @memberof PoolTemplate
     */
    pool?: string;
    /**
     *
     * @type {CoinSymbol}
     * @memberof PoolTemplate
     */
    coin?: CoinSymbol;
    /**
     *
     * @type {PoolTemplateProps}
     * @memberof PoolTemplate
     */
    props?: PoolTemplateProps;
}
/**
 *
 * @export
 * @interface PoolTemplateProps
 */
export interface PoolTemplateProps {
    /**
     * Pool servers
     * @type {PoolTemplatePropsServers[]}
     * @memberof PoolTemplateProps
     */
    servers?: PoolTemplatePropsServers[];
    /**
     * Miner config templates keyed by miner name
     * @type {{ [key: string]: any }}
     * @memberof PoolTemplateProps
     */
    miners?: {
        [key: string]: any;
    };
    /**
     * Is stratum ping supported by this pool for this coin
     * @type {boolean}
     * @memberof PoolTemplateProps
     */
    stratumPing?: boolean;
}
/**
 *
 * @export
 * @interface PoolTemplatePropsServers
 */
export interface PoolTemplatePropsServers {
    /**
     * Geo location of the server
     * @type {string}
     * @memberof PoolTemplatePropsServers
     */
    geo?: string;
    /**
     * URLs to use for connection
     * @type {string[]}
     * @memberof PoolTemplatePropsServers
     */
    urls?: string[];
    /**
     * SSL URLs to use for connection (if this server supports SSL)
     * @type {string[]}
     * @memberof PoolTemplatePropsServers
     */
    sslUrls?: string[];
}
/**
 *
 * @export
 * @interface PowerDrawSettings
 */
export interface PowerDrawSettings {
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof PowerDrawSettings
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof PowerDrawSettings
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof PowerDrawSettings
     */
    octofanCorrectPower?: boolean;
}
/**
 * Powermeter controller stats. Each value is an array containing values from corresponding meter.
 * @export
 * @interface PowermeterStats
 */
export interface PowermeterStats {
    /**
     * Current power draw, kilowatts (kW)
     * @type {Array<number>[]}
     * @memberof PowermeterStats
     */
    power?: Array<number>[];
    /**
     * Current total power draw, kilowatts (kW)
     * @type {number[]}
     * @memberof PowermeterStats
     */
    powerTotal?: number[];
    /**
     * Power usage value, kilowatthours (kWh)
     * @type {number[]}
     * @memberof PowermeterStats
     */
    energyTotal?: number[];
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum Problem {
    Overheat = "overheat",
    Overload = "overload",
    LowAsr = "low_asr",
    HasInvalid = "has_invalid",
    MissedUnit = "missed_unit",
    MissedHashrate = "missed_hashrate",
    MissedTemp = "missed_temp",
    MissedFan = "missed_fan",
    NoHashrate = "no_hashrate",
    ErrorMessage = "error_message",
    NoFs = "no_fs"
}
/**
 *
 * @export
 * @interface PushChannelData
 */
export interface PushChannelData {
    /**
     *
     * @type {PushChannelDataTokens[]}
     * @memberof PushChannelData
     */
    tokens?: PushChannelDataTokens[];
}
/**
 *
 * @export
 * @interface PushChannelDataTokens
 */
export interface PushChannelDataTokens {
    /**
     * Token ID
     * @type {string}
     * @memberof PushChannelDataTokens
     */
    id?: string;
    /**
     * Token name
     * @type {string}
     * @memberof PushChannelDataTokens
     */
    name?: string;
    /**
     * Token is enabled
     * @type {boolean}
     * @memberof PushChannelDataTokens
     */
    enabled?: boolean;
    /**
     * Token is active
     * @type {boolean}
     * @memberof PushChannelDataTokens
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface ReferralBalance
 */
export interface ReferralBalance {
    /**
     *
     * @type {ReferralCurrency}
     * @memberof ReferralBalance
     */
    currency?: ReferralCurrency;
    /**
     * Amount in currency
     * @type {number}
     * @memberof ReferralBalance
     */
    amount?: number;
    /**
     * Amount in fiat currency
     * @type {number}
     * @memberof ReferralBalance
     */
    amountFiat?: number;
    /**
     * Conversion rate to fiat currency
     * @type {number}
     * @memberof ReferralBalance
     */
    exchageRate?: number;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum ReferralCurrency {
    BTC = "BTC",
    ETH = "ETH",
    XRP = "XRP",
    LTC = "LTC",
    ZEC = "ZEC",
    ETC = "ETC",
    BCH = "BCH",
    XMR = "XMR",
    USDT = "USDT"
}
/**
 *
 * @export
 * @interface ReferralPayoutAddress
 */
export interface ReferralPayoutAddress {
    /**
     *
     * @type {ReferralCurrency}
     * @memberof ReferralPayoutAddress
     */
    currency: ReferralCurrency;
    /**
     *
     * @type {string}
     * @memberof ReferralPayoutAddress
     */
    payoutAddress: string;
}
/**
 *
 * @export
 * @interface ReferralPayoutRequest
 */
export interface ReferralPayoutRequest {
    /**
     *
     * @type {ReferralCurrency}
     * @memberof ReferralPayoutRequest
     */
    currency: ReferralCurrency;
    /**
     * Amount in currency to withdraw
     * @type {number}
     * @memberof ReferralPayoutRequest
     */
    amount?: number;
    /**
     * If TRUE - the whole referral balance in this currency will be withdrawn and \"amount\" will be ignored
     * @type {boolean}
     * @memberof ReferralPayoutRequest
     */
    all?: boolean;
}
/**
 *
 * @export
 * @interface RepoUrl
 */
export interface RepoUrl {
}
/**
 *
 * @export
 * @interface Rom
 */
export interface Rom extends RomFields {
    /**
     * When entity was created
     * @type {number}
     * @memberof Rom
     */
    createdAt?: number;
}
/**
 * @export
 * @namespace Rom
 */
export declare namespace Rom {
}
/**
 *
 * @export
 * @interface RomContents
 */
export interface RomContents {
    /**
     * Binary ROM contents
     * @type {string}
     * @memberof RomContents
     */
    contents?: string;
}
/**
 *
 * @export
 * @interface RomCreateUpdateRequest
 */
export interface RomCreateUpdateRequest extends RomFields {
    /**
     * Binary ROM contents
     * @type {string}
     * @memberof RomCreateUpdateRequest
     */
    contents?: string;
}
/**
 * @export
 * @namespace RomCreateUpdateRequest
 */
export declare namespace RomCreateUpdateRequest {
}
/**
 *
 * @export
 * @interface RomF
 */
export interface RomF extends RomWithContents {
    /**
     *
     * @type {number}
     * @memberof RomF
     */
    farmId?: number;
}
/**
 * @export
 * @namespace RomF
 */
export declare namespace RomF {
}
/**
 *
 * @export
 * @interface RomFields
 */
export interface RomFields {
    /**
     * File name
     * @type {string}
     * @memberof RomFields
     */
    fileName?: string;
    /**
     * GPU brand
     * @type {string}
     * @memberof RomFields
     */
    brand?: RomFields.BrandEnum;
    /**
     * Display name
     * @type {string}
     * @memberof RomFields
     */
    name?: string;
    /**
     * Brief description
     * @type {string}
     * @memberof RomFields
     */
    description?: string;
}
/**
 * @export
 * @namespace RomFields
 */
export declare namespace RomFields {
    /**
     * @export
     * @enum {string}
     */
    enum BrandEnum {
        Amd = "amd",
        Nvidia = "nvidia"
    }
}
/**
 *
 * @export
 * @interface RomListItemF
 */
export interface RomListItemF extends Rom {
    /**
     *
     * @type {number}
     * @memberof RomListItemF
     */
    farmId?: number;
}
/**
 * @export
 * @namespace RomListItemF
 */
export declare namespace RomListItemF {
}
/**
 *
 * @export
 * @interface RomListItemU
 */
export interface RomListItemU extends Rom {
    /**
     *
     * @type {number}
     * @memberof RomListItemU
     */
    userId?: number;
}
/**
 * @export
 * @namespace RomListItemU
 */
export declare namespace RomListItemU {
}
/**
 *
 * @export
 * @interface RomU
 */
export interface RomU extends RomWithContents {
    /**
     *
     * @type {number}
     * @memberof RomU
     */
    userId?: number;
}
/**
 * @export
 * @namespace RomU
 */
export declare namespace RomU {
}
/**
 *
 * @export
 * @interface RomUploadRequestItem
 */
export interface RomUploadRequestItem {
    /**
     * GPUs to flash. Different workers can be mixed here.
     * @type {FarmsfarmIdworkersoverclockGpus[]}
     * @memberof RomUploadRequestItem
     */
    gpus?: FarmsfarmIdworkersoverclockGpus[];
    /**
     * Stored Rom ID to use
     * @type {number}
     * @memberof RomUploadRequestItem
     */
    romId?: number;
    /**
     * Force flashing regardless of security checkings
     * @type {boolean}
     * @memberof RomUploadRequestItem
     */
    force?: boolean;
    /**
     * Reboot worker after successful flashing of all GPUs
     * @type {boolean}
     * @memberof RomUploadRequestItem
     */
    reboot?: boolean;
}
/**
 *
 * @export
 * @interface RomWithContents
 */
export interface RomWithContents extends RomFields {
    /**
     * Binary ROM contents
     * @type {string}
     * @memberof RomWithContents
     */
    contents?: string;
    /**
     * When entity was created
     * @type {number}
     * @memberof RomWithContents
     */
    createdAt?: number;
}
/**
 * @export
 * @namespace RomWithContents
 */
export declare namespace RomWithContents {
}
/**
 *
 * @export
 * @interface Schedule
 */
export interface Schedule extends ScheduleFields {
    /**
     * When entity was created
     * @type {number}
     * @memberof Schedule
     */
    createdAt?: number;
    /**
     * When the task was last executed
     * @type {number}
     * @memberof Schedule
     */
    prevLaunchAt?: number;
    /**
     * When the task is scheduled for execution
     * @type {number}
     * @memberof Schedule
     */
    nextLaunchAt?: number;
}
/**
 *
 * @export
 * @interface ScheduleActionData
 */
export interface ScheduleActionData extends WorkerEditFS {
    /**
     * Overclocking profile ID
     * @type {number}
     * @memberof ScheduleActionData
     */
    ocId?: number;
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof ScheduleActionData
     */
    ocApplyMode?: ScheduleActionData.OcApplyModeEnum;
    /**
     *
     * @type {ScheduleActionDataAsicOc}
     * @memberof ScheduleActionData
     */
    asicOc?: ScheduleActionDataAsicOc;
}
/**
 * @export
 * @namespace ScheduleActionData
 */
export declare namespace ScheduleActionData {
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 *
 * @export
 * @interface ScheduleActionDataAsicOc
 */
export interface ScheduleActionDataAsicOc {
    /**
     * Asic model short name
     * @type {string}
     * @memberof ScheduleActionDataAsicOc
     */
    model?: string;
    /**
     * Selected profile version
     * @type {number}
     * @memberof ScheduleActionDataAsicOc
     */
    version?: number;
    /**
     * Selected profile index
     * @type {number}
     * @memberof ScheduleActionDataAsicOc
     */
    profile?: number;
}
/**
 *
 * @export
 * @interface ScheduleActionF
 */
export interface ScheduleActionF {
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleActionF
     */
    action?: ScheduleActionFAction;
}
/**
 * Everything defined in this object will be applied to workers
 * @export
 * @interface ScheduleActionFAction
 */
export interface ScheduleActionFAction {
}
/**
 *
 * @export
 * @interface ScheduleActionU
 */
export interface ScheduleActionU {
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleActionU
     */
    action?: ScheduleActionFAction;
}
/**
 *
 * @export
 * @interface ScheduleCreateUpdateRequestF
 */
export interface ScheduleCreateUpdateRequestF extends ScheduleFields {
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleCreateUpdateRequestF
     */
    action?: ScheduleActionFAction;
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleCreateUpdateRequestF
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface ScheduleCreateUpdateRequestU
 */
export interface ScheduleCreateUpdateRequestU extends ScheduleFields {
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleCreateUpdateRequestU
     */
    action?: ScheduleActionFAction;
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleCreateUpdateRequestU
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface ScheduleF
 */
export interface ScheduleF extends FarmId {
    /**
     * Display name
     * @type {string}
     * @memberof ScheduleF
     */
    name?: string;
    /**
     * When to apply the flight sheet. If rrule is specified - this field defines when the first occurrence will happen.
     * @type {number}
     * @memberof ScheduleF
     */
    launchAt?: number;
    /**
     * How to repeat the task. This field accepts RRULE definition from RFC 5545.
     * @type {string}
     * @memberof ScheduleF
     */
    rrule?: string;
    /**
     * Time zone for RRule. By default farm's or user's time zone is used.
     * @type {string}
     * @memberof ScheduleF
     */
    timezone?: string;
    /**
     * Is active
     * @type {boolean}
     * @memberof ScheduleF
     */
    active?: boolean;
    /**
     * When entity was created
     * @type {number}
     * @memberof ScheduleF
     */
    createdAt?: number;
    /**
     * When the task was last executed
     * @type {number}
     * @memberof ScheduleF
     */
    prevLaunchAt?: number;
    /**
     * When the task is scheduled for execution
     * @type {number}
     * @memberof ScheduleF
     */
    nextLaunchAt?: number;
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleF
     */
    action?: ScheduleActionFAction;
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleF
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface ScheduleFields
 */
export interface ScheduleFields {
    /**
     * Display name
     * @type {string}
     * @memberof ScheduleFields
     */
    name?: string;
    /**
     * When to apply the flight sheet. If rrule is specified - this field defines when the first occurrence will happen.
     * @type {number}
     * @memberof ScheduleFields
     */
    launchAt?: number;
    /**
     * How to repeat the task. This field accepts RRULE definition from RFC 5545.
     * @type {string}
     * @memberof ScheduleFields
     */
    rrule?: string;
    /**
     * Time zone for RRule. By default farm's or user's time zone is used.
     * @type {string}
     * @memberof ScheduleFields
     */
    timezone?: string;
    /**
     * Is active
     * @type {boolean}
     * @memberof ScheduleFields
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface ScheduleListItemF
 */
export interface ScheduleListItemF extends FarmId {
}
/**
 *
 * @export
 * @interface ScheduleListItemU
 */
export interface ScheduleListItemU extends UserId {
}
/**
 *
 * @export
 * @interface ScheduleTargetF
 */
export interface ScheduleTargetF {
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleTargetF
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface ScheduleTargetFTarget
 */
export interface ScheduleTargetFTarget {
    /**
     * Tags list. Action will be applied to workers with these tags.
     * @type {number[]}
     * @memberof ScheduleTargetFTarget
     */
    tagIds?: number[];
}
/**
 *
 * @export
 * @interface ScheduleTargetU
 */
export interface ScheduleTargetU {
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleTargetU
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface ScheduleU
 */
export interface ScheduleU extends UserId {
    /**
     * Display name
     * @type {string}
     * @memberof ScheduleU
     */
    name?: string;
    /**
     * When to apply the flight sheet. If rrule is specified - this field defines when the first occurrence will happen.
     * @type {number}
     * @memberof ScheduleU
     */
    launchAt?: number;
    /**
     * How to repeat the task. This field accepts RRULE definition from RFC 5545.
     * @type {string}
     * @memberof ScheduleU
     */
    rrule?: string;
    /**
     * Time zone for RRule. By default farm's or user's time zone is used.
     * @type {string}
     * @memberof ScheduleU
     */
    timezone?: string;
    /**
     * Is active
     * @type {boolean}
     * @memberof ScheduleU
     */
    active?: boolean;
    /**
     * When entity was created
     * @type {number}
     * @memberof ScheduleU
     */
    createdAt?: number;
    /**
     * When the task was last executed
     * @type {number}
     * @memberof ScheduleU
     */
    prevLaunchAt?: number;
    /**
     * When the task is scheduled for execution
     * @type {number}
     * @memberof ScheduleU
     */
    nextLaunchAt?: number;
    /**
     *
     * @type {ScheduleActionFAction}
     * @memberof ScheduleU
     */
    action?: ScheduleActionFAction;
    /**
     *
     * @type {ScheduleTargetFTarget}
     * @memberof ScheduleU
     */
    target?: ScheduleTargetFTarget;
}
/**
 *
 * @export
 * @interface SignupRequest
 */
export interface SignupRequest extends UserProfile {
    /**
     *
     * @type {Password}
     * @memberof SignupRequest
     */
    password?: Password;
    /**
     * Referral promocode
     * @type {string}
     * @memberof SignupRequest
     */
    promocode?: string;
    /**
     * Referral ID
     * @type {number}
     * @memberof SignupRequest
     */
    refId?: number;
}
/**
 *
 * @export
 * @interface StringTemplateTestRequest
 */
export interface StringTemplateTestRequest {
    /**
     * String template
     * @type {string}
     * @memberof StringTemplateTestRequest
     */
    template: string;
    /**
     * Template data override.  By default synthetic values are used for all supprted fields.
     * @type {any}
     * @memberof StringTemplateTestRequest
     */
    data?: any;
}
/**
 *
 * @export
 * @interface StringTemplateTestResult
 */
export interface StringTemplateTestResult {
    /**
     * Template with resolved variables
     * @type {string}
     * @memberof StringTemplateTestResult
     */
    example?: string;
}
/**
 *
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * Display name
     * @type {string}
     * @memberof Tag
     */
    name?: string;
    /**
     * Display color ID
     * @type {number}
     * @memberof Tag
     */
    color?: number;
    /**
     * Amount of farms that use this tag
     * @type {number}
     * @memberof Tag
     */
    farmsCount?: number;
    /**
     * Amount of workers that use this tag
     * @type {number}
     * @memberof Tag
     */
    workersCount?: number;
}
/**
 *
 * @export
 * @interface TagCreateRequest
 */
export interface TagCreateRequest extends TagFields {
}
/**
 *
 * @export
 * @interface TagF
 */
export interface TagF extends Tag {
    /**
     *
     * @type {number}
     * @memberof TagF
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof TagF
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface TagFields
 */
export interface TagFields {
    /**
     * Display name
     * @type {string}
     * @memberof TagFields
     */
    name?: string;
    /**
     * Display color ID
     * @type {number}
     * @memberof TagFields
     */
    color?: number;
}
/**
 * Tag IDs
 * @export
 * @interface TagIds
 */
export interface TagIds {
    /**
     *
     * @type {number[]}
     * @memberof TagIds
     */
    tagIds?: number[];
}
/**
 *
 * @export
 * @interface TagIdsEdit
 */
export interface TagIdsEdit extends TagIds {
    /**
     * Update mode for tags * add - add spicified tags ignoring if already assigned
 * remove - remove spicified tags if assigned
 * replace - replace all assigned tags with specified ones
 
     * @type {string}
     * @memberof TagIdsEdit
     */
    tagUpdateMode?: TagIdsEdit.TagUpdateModeEnum;
}
/**
 * @export
 * @namespace TagIdsEdit
 */
export declare namespace TagIdsEdit {
    /**
     * @export
     * @enum {string}
     */
    enum TagUpdateModeEnum {
        Add = "add",
        Remove = "remove",
        Replace = "replace"
    }
}
/**
 *
 * @export
 * @interface TagTypeId
 */
export interface TagTypeId {
    /**
     * Tag type * 1 - For workers * 2 - For farms
     * @type {number}
     * @memberof TagTypeId
     */
    typeId?: number;
}
/**
 *
 * @export
 * @interface TagU
 */
export interface TagU extends Tag {
    /**
     * Tag type * 1 - For workers * 2 - For farms
     * @type {number}
     * @memberof TagU
     */
    typeId?: number;
    /**
     *
     * @type {number}
     * @memberof TagU
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface TagUCreateRequest
 */
export interface TagUCreateRequest extends TagFields {
    /**
     * Tag type * 1 - For workers * 2 - For farms
     * @type {number}
     * @memberof TagUCreateRequest
     */
    typeId?: number;
}
/**
 *
 * @export
 * @interface TagUUpdateRequest
 */
export interface TagUUpdateRequest extends TagFields {
    /**
     * Tag type * 1 - For workers * 2 - For farms
     * @type {number}
     * @memberof TagUUpdateRequest
     */
    typeId?: number;
}
/**
 *
 * @export
 * @interface TagUpdateRequest
 */
export interface TagUpdateRequest extends TagFields {
}
/**
 *
 * @export
 * @interface TagsData
 */
export interface TagsData {
    /**
     * Tag ID to update
     * @type {number}
     * @memberof TagsData
     */
    id?: number;
    /**
     *
     * @type {TagUUpdateRequest}
     * @memberof TagsData
     */
    data?: TagUUpdateRequest;
}
/**
 *
 * @export
 * @interface TransactionAccount
 */
export interface TransactionAccount {
    /**
     * Transaction ID
     * @type {number}
     * @memberof TransactionAccount
     */
    id?: number;
    /**
     * Transaction timestamp
     * @type {number}
     * @memberof TransactionAccount
     */
    timestamp?: number;
    /**
     *
     * @type {TransactionTypeAccount}
     * @memberof TransactionAccount
     */
    typeId?: TransactionTypeAccount;
    /**
     * Transaction amount
     * @type {number}
     * @memberof TransactionAccount
     */
    amount?: number;
    /**
     * Transaction currency
     * @type {string}
     * @memberof TransactionAccount
     */
    currency?: string;
    /**
     * Transaction amount in fiat currency
     * @type {number}
     * @memberof TransactionAccount
     */
    amountFiat?: number;
    /**
     * Cost details for type 2.
     * @type {TransactionCostItem[]}
     * @memberof TransactionAccount
     */
    costDetails?: TransactionCostItem[];
    /**
     *
     * @type {TransactionAccountReferralUser}
     * @memberof TransactionAccount
     */
    referralUser?: TransactionAccountReferralUser;
    /**
     * Comment for type 4
     * @type {string}
     * @memberof TransactionAccount
     */
    comment?: string;
    /**
     * Coinpayments transaction ID for type 1, or blockchain transaction ID for type 5
     * @type {string}
     * @memberof TransactionAccount
     */
    txid?: string;
    /**
     * Blockchain transaction explore URL for type 5
     * @type {string}
     * @memberof TransactionAccount
     */
    txurl?: string;
    /**
     *
     * @type {TransactionAccountTargetUser}
     * @memberof TransactionAccount
     */
    targetUser?: TransactionAccountTargetUser;
    /**
     *
     * @type {TransactionAccountSourceUser}
     * @memberof TransactionAccount
     */
    sourceUser?: TransactionAccountSourceUser;
    /**
     *
     * @type {TransactionAccountTargetFarm}
     * @memberof TransactionAccount
     */
    targetFarm?: TransactionAccountTargetFarm;
}
/**
 * Referral user for type 3
 * @export
 * @interface TransactionAccountReferralUser
 */
export interface TransactionAccountReferralUser {
}
/**
 * Source user for type 7
 * @export
 * @interface TransactionAccountSourceUser
 */
export interface TransactionAccountSourceUser {
}
/**
 * Target farm for types 2, 10
 * @export
 * @interface TransactionAccountTargetFarm
 */
export interface TransactionAccountTargetFarm {
}
/**
 * Target user for type 6
 * @export
 * @interface TransactionAccountTargetUser
 */
export interface TransactionAccountTargetUser {
}
/**
 *
 * @export
 * @interface TransactionCostItem
 */
export interface TransactionCostItem {
    /**
     *
     * @type {BillingType}
     * @memberof TransactionCostItem
     */
    type?: BillingType;
    /**
     * Amount of used workers of this billing type
     * @type {number}
     * @memberof TransactionCostItem
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface TransactionFarm
 */
export interface TransactionFarm {
    /**
     * Transaction ID
     * @type {number}
     * @memberof TransactionFarm
     */
    id?: number;
    /**
     * Transaction timestamp
     * @type {number}
     * @memberof TransactionFarm
     */
    timestamp?: number;
    /**
     *
     * @type {TransactionTypeFarm}
     * @memberof TransactionFarm
     */
    typeId?: TransactionTypeFarm;
    /**
     * Transaction amount in currency
     * @type {number}
     * @memberof TransactionFarm
     */
    amount?: number;
    /**
     * Transaction currency
     * @type {string}
     * @memberof TransactionFarm
     */
    currency?: string;
    /**
     * Cost details for type 2.
     * @type {TransactionCostItem[]}
     * @memberof TransactionFarm
     */
    costDetails?: TransactionCostItem[];
    /**
     * Comment for type 4
     * @type {string}
     * @memberof TransactionFarm
     */
    comment?: string;
    /**
     *
     * @type {TransactionFarmUser}
     * @memberof TransactionFarm
     */
    user?: TransactionFarmUser;
    /**
     *
     * @type {TransactionAccountSourceUser}
     * @memberof TransactionFarm
     */
    sourceUser?: TransactionAccountSourceUser;
    /**
     *
     * @type {TransactionFarmTargetFarm}
     * @memberof TransactionFarm
     */
    targetFarm?: TransactionFarmTargetFarm;
    /**
     *
     * @type {TransactionFarmSourceFarm}
     * @memberof TransactionFarm
     */
    sourceFarm?: TransactionFarmSourceFarm;
}
/**
 * Source farm for type 11
 * @export
 * @interface TransactionFarmSourceFarm
 */
export interface TransactionFarmSourceFarm {
}
/**
 * Target farm for type 10
 * @export
 * @interface TransactionFarmTargetFarm
 */
export interface TransactionFarmTargetFarm {
}
/**
 * User who performed the opertation
 * @export
 * @interface TransactionFarmUser
 */
export interface TransactionFarmUser {
}
/**
 * Transaction type: * 1 - Deposit * 2 - Daily service usage * 3 - Referral Reward * 4 - Gift of fate * 5 - Referral Withdrawal * 6 - Sent to User * 7 - Received from User * 8 - Referral Exchange * 9 - Promo code * 10 - Sent to Farm * 12 - Deposit from referral balance
 * @export
 * @enum {string}
 */
export declare enum TransactionTypeAccount {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_12 = 12
}
/**
 * Transaction type: * 2 - Daily service usage * 4 - Gift of fate * 7 - Received from User * 10 - Sent to Farm * 11 - Received from Farm
 * @export
 * @enum {string}
 */
export declare enum TransactionTypeFarm {
    NUMBER_2 = 2,
    NUMBER_4 = 4,
    NUMBER_7 = 7,
    NUMBER_10 = 10,
    NUMBER_11 = 11
}
/**
 * 2FA code from authenticating device
 * @export
 * @interface TwofaCode
 */
export interface TwofaCode {
}
/**
 *
 * @export
 * @interface UserId
 */
export interface UserId {
    /**
     *
     * @type {number}
     * @memberof UserId
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    telegram?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    skype?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    companyInfo?: string;
}
/**
 *
 * @export
 * @interface UserProfileFields
 */
export interface UserProfileFields {
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    telegram?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    skype?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfileFields
     */
    companyInfo?: string;
}
/**
 *
 * @export
 * @interface UserShortInfo
 */
export interface UserShortInfo {
    /**
     * User ID
     * @type {number}
     * @memberof UserShortInfo
     */
    id?: number;
    /**
     * User login
     * @type {string}
     * @memberof UserShortInfo
     */
    login?: string;
    /**
     * User full name
     * @type {string}
     * @memberof UserShortInfo
     */
    name?: string;
    /**
     * Is me
     * @type {boolean}
     * @memberof UserShortInfo
     */
    me?: boolean;
}
/**
 *
 * @export
 * @interface Wallet
 */
export interface Wallet {
    /**
     * Coin name
     * @type {string}
     * @memberof Wallet
     */
    coin?: string;
    /**
     * Display name
     * @type {string}
     * @memberof Wallet
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Wallet
     */
    wal?: string;
    /**
     * Wallet source. Can be either exchange name or any string. For supported exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof Wallet
     */
    source?: string;
    /**
     * Try to retrieve wallet balance from blockchain or exchange
     * @type {boolean}
     * @memberof Wallet
     */
    fetchBalance?: boolean;
    /**
     * ID of attached API key for balance fetching (if required)
     * @type {number}
     * @memberof Wallet
     */
    apiKeyId?: number;
    /**
     * is Hiveon wallet
     * @type {boolean}
     * @memberof Wallet
     */
    hiveon?: boolean;
    /**
     *
     * @type {WalletBalanceBalance}
     * @memberof Wallet
     */
    balance?: WalletBalanceBalance;
    /**
     * Balances from pools that this wallet uses
     * @type {any[]}
     * @memberof Wallet
     */
    poolBalances?: any[];
    /**
     * Amount of flight sheets that use this wallet
     * @type {number}
     * @memberof Wallet
     */
    fsCount?: number;
    /**
     * Amount of workers that use this wallet
     * @type {number}
     * @memberof Wallet
     */
    workersCount?: number;
}
/**
 *
 * @export
 * @interface WalletBalance
 */
export interface WalletBalance {
    /**
     *
     * @type {WalletBalanceBalance}
     * @memberof WalletBalance
     */
    balance?: WalletBalanceBalance;
}
/**
 * Wallet balance info. Either balance or status is present, not both. Pending status indicates that the balance is fetching at the moment and will be available soon. Other statuses indicate balance cannot be fetched. Balance info is cached by 30 minutes.
 * @export
 * @interface WalletBalanceBalance
 */
export interface WalletBalanceBalance {
    /**
     * Value in coins
     * @type {number}
     * @memberof WalletBalanceBalance
     */
    value?: number;
    /**
     * Value in fiat currency
     * @type {number}
     * @memberof WalletBalanceBalance
     */
    valueFiat?: number;
    /**
     * Status
     * @type {string}
     * @memberof WalletBalanceBalance
     */
    status?: WalletBalanceBalance.StatusEnum;
}
/**
 * @export
 * @namespace WalletBalanceBalance
 */
export declare namespace WalletBalanceBalance {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        Pending = "pending",
        NotFound = "not_found",
        InvalidAddress = "invalid_address",
        CoinNotSupported = "coin_not_supported",
        ExchangeNotSupported = "exchange_not_supported",
        PoolNotSupported = "pool_not_supported",
        ErrorFetching = "error_fetching",
        ErrorParsing = "error_parsing",
        Error = "error"
    }
}
/**
 *
 * @export
 * @interface WalletCoin
 */
export interface WalletCoin {
    /**
     * Coin name
     * @type {string}
     * @memberof WalletCoin
     */
    coin?: string;
}
/**
 *
 * @export
 * @interface WalletCreateRequest
 */
export interface WalletCreateRequest extends WalletCoin {
    /**
     * Display name
     * @type {string}
     * @memberof WalletCreateRequest
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof WalletCreateRequest
     */
    wal?: string;
    /**
     * Wallet source. Can be either exchange name or any string. For supported exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof WalletCreateRequest
     */
    source?: string;
    /**
     * Try to retrieve wallet balance from blockchain or exchange
     * @type {boolean}
     * @memberof WalletCreateRequest
     */
    fetchBalance?: boolean;
    /**
     * ID of attached API key for balance fetching (if required)
     * @type {number}
     * @memberof WalletCreateRequest
     */
    apiKeyId?: number;
    /**
     * is Hiveon wallet
     * @type {boolean}
     * @memberof WalletCreateRequest
     */
    hiveon?: boolean;
}
/**
 *
 * @export
 * @interface WalletF
 */
export interface WalletF extends Wallet {
    /**
     *
     * @type {number}
     * @memberof WalletF
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof WalletF
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface WalletFields
 */
export interface WalletFields {
    /**
     * Display name
     * @type {string}
     * @memberof WalletFields
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof WalletFields
     */
    wal?: string;
    /**
     * Wallet source. Can be either exchange name or any string. For supported exchanges see /hive/wallet_sources endpoint.
     * @type {string}
     * @memberof WalletFields
     */
    source?: string;
    /**
     * Try to retrieve wallet balance from blockchain or exchange
     * @type {boolean}
     * @memberof WalletFields
     */
    fetchBalance?: boolean;
    /**
     * ID of attached API key for balance fetching (if required)
     * @type {number}
     * @memberof WalletFields
     */
    apiKeyId?: number;
    /**
     * is Hiveon wallet
     * @type {boolean}
     * @memberof WalletFields
     */
    hiveon?: boolean;
}
/**
 *
 * @export
 * @interface WalletPoolBalances
 */
export interface WalletPoolBalances {
    /**
     * Balances from pools that this wallet uses
     * @type {any[]}
     * @memberof WalletPoolBalances
     */
    poolBalances?: any[];
}
/**
 *
 * @export
 * @interface WalletShortInfo
 */
export interface WalletShortInfo {
    /**
     *
     * @type {number}
     * @memberof WalletShortInfo
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof WalletShortInfo
     */
    farmId?: number;
    /**
     *
     * @type {number}
     * @memberof WalletShortInfo
     */
    userId?: number;
    /**
     * Display name
     * @type {string}
     * @memberof WalletShortInfo
     */
    name?: string;
}
/**
 *
 * @export
 * @interface WalletU
 */
export interface WalletU extends Wallet {
    /**
     *
     * @type {number}
     * @memberof WalletU
     */
    userId?: number;
}
/**
 *
 * @export
 * @interface WalletUpdateRequest
 */
export interface WalletUpdateRequest extends WalletFields {
}
/**
 *
 * @export
 * @interface Worker
 */
export interface Worker {
    /**
     *
     * @type {number}
     * @memberof Worker
     */
    farmId?: number;
    /**
     *
     * @type {Platform}
     * @memberof Worker
     */
    platform?: Platform;
    /**
     * Display name
     * @type {string}
     * @memberof Worker
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    description?: string;
    /**
     * Amount of GPUs/Boards
     * @type {number}
     * @memberof Worker
     */
    unitsCount?: number;
    /**
     * Amount of installed fans (for ASICs)
     * @type {number}
     * @memberof Worker
     */
    fansCount?: number;
    /**
     *
     * @type {boolean}
     * @memberof Worker
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    password?: string;
    /**
     *
     * @type {number[]}
     * @memberof Worker
     */
    tagIds?: number[];
    /**
     *
     * @type {MirrorUrl}
     * @memberof Worker
     */
    mirrorUrl?: MirrorUrl;
    /**
     *
     * @type {RepoUrl[]}
     * @memberof Worker
     */
    repoUrls?: RepoUrl[];
    /**
     * Red Temperature, °C
     * @type {number}
     * @memberof Worker
     */
    redTemp?: number;
    /**
     * Red memory temperature (for rigs), °C
     * @type {number}
     * @memberof Worker
     */
    redMemTemp?: number;
    /**
     * Red CPU temperature (for rigs), °C
     * @type {number}
     * @memberof Worker
     */
    redCpuTemp?: number;
    /**
     * Red Board Temperature (for ASICs), °C
     * @type {number}
     * @memberof Worker
     */
    redBoardTemp?: number;
    /**
     * Red Fan speed, %
     * @type {number}
     * @memberof Worker
     */
    redFan?: number;
    /**
     * Red Accepted Shares Ratio, %
     * @type {number}
     * @memberof Worker
     */
    redAsr?: number;
    /**
     * Red Load Average per one CPU core
     * @type {number}
     * @memberof Worker
     */
    redLa?: number;
    /**
     * Red hashrates per algo
     * @type {FarmHashratesHashrates[]}
     * @memberof Worker
     */
    redHashrates?: FarmHashratesHashrates[];
    /**
     * List of assigned ip addresses
     * @type {string[]}
     * @memberof Worker
     */
    ipAddresses?: string[];
    /**
     *
     * @type {WorkerRemoteAddressRemoteAddress}
     * @memberof Worker
     */
    remoteAddress?: WorkerRemoteAddressRemoteAddress;
    /**
     * VPN is configured
     * @type {boolean}
     * @memberof Worker
     */
    vpn?: boolean;
    /**
     * Worker has AMD GPUs
     * @type {boolean}
     * @memberof Worker
     */
    hasAmd?: boolean;
    /**
     * Worker has Nvidia GPUs
     * @type {boolean}
     * @memberof Worker
     */
    hasNvidia?: boolean;
    /**
     * New OS version is available
     * @type {boolean}
     * @memberof Worker
     */
    needsUpgrade?: boolean;
    /**
     * packages_hash
     * @type {string}
     * @memberof Worker
     */
    packagesHash?: string;
    /**
     *
     * @type {WorkerPropsLanConfig}
     * @memberof Worker
     */
    lanConfig?: WorkerPropsLanConfig;
    /**
     * Hive OS system type
     * @type {string}
     * @memberof Worker
     */
    systemType?: Worker.SystemTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    osName?: string;
    /**
     * Worker has Octominer fan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasOctofan?: boolean;
    /**
     * Worker has Coolbox fan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasCoolbox?: boolean;
    /**
     * Worker has FanFlap controller
     * @type {boolean}
     * @memberof Worker
     */
    hasFanflap?: boolean;
    /**
     * Worker has Powermeter controller
     * @type {boolean}
     * @memberof Worker
     */
    hasPowermeter?: boolean;
    /**
     * Worker is an ASIC Hub
     * @type {boolean}
     * @memberof Worker
     */
    hasAsichub?: boolean;
    /**
     * Worker has installed Donnager Relay controller
     * @type {boolean}
     * @memberof Worker
     */
    hasDonnagerRelay?: boolean;
    /**
     * Worker has installed Ykeda Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasYkedaAutofan?: boolean;
    /**
     * Worker has installed Windtank Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasWindtankAutofan?: boolean;
    /**
     * Worker has installed 8MK_NET Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasMknetAutofan?: boolean;
    /**
     *
     * @type {FarmPropsPersonalSettings}
     * @memberof Worker
     */
    personalSettings?: FarmPropsPersonalSettings;
    /**
     *
     * @type {WorkerVersionsVersions}
     * @memberof Worker
     */
    versions?: WorkerVersionsVersions;
    /**
     *
     * @type {FSMidInfo}
     * @memberof Worker
     */
    flightSheet?: FSMidInfo;
    /**
     *
     * @type {WorkerOverclockOverclock}
     * @memberof Worker
     */
    overclock?: WorkerOverclockOverclock;
    /**
     * ID of recently applied Overclocking profile
     * @type {number}
     * @memberof Worker
     */
    ocId?: number;
    /**
     *
     * @type {OCConfig}
     * @memberof Worker
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof Worker
     */
    ocAlgo?: OCAlgo;
    /**
     * Actual algorithm name for which overclock is applied. It is either manually defined or automatically resolved.
     * @type {string}
     * @memberof Worker
     */
    ocAlgoActual?: string;
    /**
     * Resolved overclock algorithm name based on applied flight sheet and tuning. This property just indicates which overclock should be applied. See \"oc_algo_actual\" for which is actually applied.
     * @type {string}
     * @memberof Worker
     */
    ocAlgoResolved?: string;
    /**
     *
     * @type {MinersConfig}
     * @memberof Worker
     */
    minersConfig?: MinersConfig;
    /**
     * List of miner names from active flight sheet that are tuned in this worker.
     * @type {MinerName[]}
     * @memberof Worker
     */
    tunedMiners?: MinerName[];
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof Worker
     */
    watchdog?: WorkerWatchdogWatchdog;
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof Worker
     */
    options?: WorkerOptionsOptions;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof Worker
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof Worker
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof Worker
     */
    octofanCorrectPower?: boolean;
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof Worker
     */
    autofan?: WorkerAutofanAutofan;
    /**
     *
     * @type {WorkerStatsStats}
     * @memberof Worker
     */
    stats?: WorkerStatsStats;
    /**
     *
     * @type {WorkerMinersSummaryMinersSummary}
     * @memberof Worker
     */
    minersSummary?: WorkerMinersSummaryMinersSummary;
    /**
     *
     * @type {WorkerMinersStatsMinersStats}
     * @memberof Worker
     */
    minersStats?: WorkerMinersStatsMinersStats;
    /**
     *
     * @type {WorkerGpuStatsSummaryGpuSummary}
     * @memberof Worker
     */
    gpuSummary?: WorkerGpuStatsSummaryGpuSummary;
    /**
     * GPU information
     * @type {GpuInfo[]}
     * @memberof Worker
     */
    gpuInfo?: GpuInfo[];
    /**
     * GPU stats
     * @type {any[]}
     * @memberof Worker
     */
    gpuStats?: any[];
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfo}
     * @memberof Worker
     */
    hardwareInfo?: WorkerHardwareInfoHardwareInfo;
    /**
     *
     * @type {WorkerHardwareStatsHardwareStats}
     * @memberof Worker
     */
    hardwareStats?: WorkerHardwareStatsHardwareStats;
    /**
     *
     * @type {WorkerAsicInfoAsicInfo}
     * @memberof Worker
     */
    asicInfo?: WorkerAsicInfoAsicInfo;
    /**
     * ID of AsicHUB which manages this ASIC
     * @type {number}
     * @memberof Worker
     */
    asichubId?: number;
    /**
     *
     * @type {WorkerAsicStatsAsicStats}
     * @memberof Worker
     */
    asicStats?: WorkerAsicStatsAsicStats;
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof Worker
     */
    octofan?: WorkerOctofanOctofan;
    /**
     *
     * @type {WorkerOctofanStatsOctofanStats}
     * @memberof Worker
     */
    octofanStats?: WorkerOctofanStatsOctofanStats;
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof Worker
     */
    coolbox?: WorkerCoolboxCoolbox;
    /**
     *
     * @type {WorkerMknetAutofanInfoCoolboxInfo}
     * @memberof Worker
     */
    coolboxInfo?: WorkerMknetAutofanInfoCoolboxInfo;
    /**
     *
     * @type {WorkerCoolboxStatsCoolboxStats}
     * @memberof Worker
     */
    coolboxStats?: WorkerCoolboxStatsCoolboxStats;
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof Worker
     */
    fanflap?: WorkerFanflapFanflap;
    /**
     *
     * @type {FanflapStats}
     * @memberof Worker
     */
    fanflapStats?: FanflapStats;
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof Worker
     */
    powermeter?: WorkerPowermeterPowermeter;
    /**
     *
     * @type {PowermeterStats}
     * @memberof Worker
     */
    powermeterStats?: PowermeterStats;
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelay}
     * @memberof Worker
     */
    donnagerRelay?: WorkerDonnagerRelayDonnagerRelay;
    /**
     *
     * @type {WorkerDonnagerRelayInfoDonnagerRelayInfo}
     * @memberof Worker
     */
    donnagerRelayInfo?: WorkerDonnagerRelayInfoDonnagerRelayInfo;
    /**
     *
     * @type {WorkerDonnagerRelayStatsDonnagerRelayStats}
     * @memberof Worker
     */
    donnagerRelayStats?: WorkerDonnagerRelayStatsDonnagerRelayStats;
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof Worker
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
    /**
     *
     * @type {WorkerMknetAutofanStatsYkedaAutofanStats}
     * @memberof Worker
     */
    ykedaAutofanStats?: WorkerMknetAutofanStatsYkedaAutofanStats;
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof Worker
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
    /**
     *
     * @type {WorkerWindtankAutofanInfoWindtankAutofanInfo}
     * @memberof Worker
     */
    windtankAutofanInfo?: WorkerWindtankAutofanInfoWindtankAutofanInfo;
    /**
     *
     * @type {WorkerWindtankAutofanStatsWindtankAutofanStats}
     * @memberof Worker
     */
    windtankAutofanStats?: WorkerWindtankAutofanStatsWindtankAutofanStats;
    /**
     * Worker messages
     * @type {WorkerMessage[]}
     * @memberof Worker
     */
    messages?: WorkerMessage[];
    /**
     * Worker queue commands
     * @type {WorkerCommandsCommands[]}
     * @memberof Worker
     */
    commands?: WorkerCommandsCommands[];
    /**
     * ID of currently running benchmark. This field is present until the benchmark is finished.
     * @type {number}
     * @memberof Worker
     */
    benchmarkId?: number;
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof Worker
     */
    asicConfig?: {
        [key: string]: string;
    };
}
/**
 *
 * @export
 * @interface WorkerActive
 */
export interface WorkerActive {
    /**
     *
     * @type {boolean}
     * @memberof WorkerActive
     */
    active?: boolean;
}
/**
 *
 * @export
 * @interface WorkerAsicConfig
 */
export interface WorkerAsicConfig {
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof WorkerAsicConfig
     */
    asicConfig?: {
        [key: string]: string;
    };
}
/**
 *
 * @export
 * @interface WorkerAsicInfo
 */
export interface WorkerAsicInfo {
    /**
     *
     * @type {WorkerAsicInfoAsicInfo}
     * @memberof WorkerAsicInfo
     */
    asicInfo?: WorkerAsicInfoAsicInfo;
    /**
     * ID of AsicHUB which manages this ASIC
     * @type {number}
     * @memberof WorkerAsicInfo
     */
    asichubId?: number;
}
/**
 * ASIC information
 * @export
 * @interface WorkerAsicInfoAsicInfo
 */
export interface WorkerAsicInfoAsicInfo {
    /**
     * Model name
     * @type {string}
     * @memberof WorkerAsicInfoAsicInfo
     */
    model?: string;
    /**
     * Model short name
     * @type {string}
     * @memberof WorkerAsicInfoAsicInfo
     */
    shortName?: string;
    /**
     * Logic version
     * @type {string}
     * @memberof WorkerAsicInfoAsicInfo
     */
    logicVersion?: string;
    /**
     * Firmware information
     * @type {string}
     * @memberof WorkerAsicInfoAsicInfo
     */
    firmware?: string;
    /**
     * ASIC has Hiveon firmware
     * @type {boolean}
     * @memberof WorkerAsicInfoAsicInfo
     */
    hiveon?: boolean;
}
/**
 *
 * @export
 * @interface WorkerAsicStats
 */
export interface WorkerAsicStats {
    /**
     *
     * @type {WorkerAsicStatsAsicStats}
     * @memberof WorkerAsicStats
     */
    asicStats?: WorkerAsicStatsAsicStats;
}
/**
 * ASIC stats
 * @export
 * @interface WorkerAsicStatsAsicStats
 */
export interface WorkerAsicStatsAsicStats {
    /**
     * Case fan speeds
     * @type {WorkerAsicStatsAsicStatsFans[]}
     * @memberof WorkerAsicStatsAsicStats
     */
    fans?: WorkerAsicStatsAsicStatsFans[];
    /**
     * Amount of connected fans
     * @type {number}
     * @memberof WorkerAsicStatsAsicStats
     */
    fansCount?: number;
    /**
     * Boards stats
     * @type {WorkerAsicStatsAsicStatsBoards[]}
     * @memberof WorkerAsicStatsAsicStats
     */
    boards?: WorkerAsicStatsAsicStatsBoards[];
    /**
     * Indicates that asicboost technology is used. May be null if not supported.
     * @type {boolean}
     * @memberof WorkerAsicStatsAsicStats
     */
    asicboost?: boolean;
}
/**
 *
 * @export
 * @interface WorkerAsicStatsAsicStatsBoards
 */
export interface WorkerAsicStatsAsicStatsBoards {
    /**
     * Chain number
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    chain?: number;
    /**
     *
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    acn?: number;
    /**
     * Frequency, MHz
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    freq?: number;
    /**
     * Status of every chip. Possible values: - 0 - Not working - 1 - OK - 2 - Hashrate problem
     * @type {number[]}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    status?: number[];
    /**
     * Chip temperature, °C
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    temp?: number;
    /**
     * Board temperature, °C
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    boardTemp?: number;
    /**
     * Hardware errors count
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    hwErrors?: number;
    /**
     * Power draw, watts
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    power?: number;
    /**
     * Chain voltage, mV
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsBoards
     */
    chainVoltage?: number;
}
/**
 *
 * @export
 * @interface WorkerAsicStatsAsicStatsFans
 */
export interface WorkerAsicStatsAsicStatsFans {
    /**
     * Slot number where the fan is connected
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsFans
     */
    index?: number;
    /**
     * Fan speed in %
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsFans
     */
    fan?: number;
    /**
     * Fan speed in RPM
     * @type {number}
     * @memberof WorkerAsicStatsAsicStatsFans
     */
    fanRpm?: number;
}
/**
 *
 * @export
 * @interface WorkerAutofan
 */
export interface WorkerAutofan {
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof WorkerAutofan
     */
    autofan?: WorkerAutofanAutofan;
}
/**
 * Autofan configuration
 * @export
 * @interface WorkerAutofanAutofan
 */
export interface WorkerAutofanAutofan {
    /**
     * Enable autofan
     * @type {boolean}
     * @memberof WorkerAutofanAutofan
     */
    enabled: boolean;
    /**
     * Target temperature, °C. Worker will try to keep this temperature by adjusting fan speeds in specified range.
     * @type {number}
     * @memberof WorkerAutofanAutofan
     */
    targetTemp: number;
    /**
     * Target memory temperature for supported GPUs, °C.
     * @type {number}
     * @memberof WorkerAutofanAutofan
     */
    targetMemTemp?: number;
    /**
     * Minimum fan speed, %
     * @type {number}
     * @memberof WorkerAutofanAutofan
     */
    minFan: number;
    /**
     * Maximum fan speed, %
     * @type {number}
     * @memberof WorkerAutofanAutofan
     */
    maxFan: number;
    /**
     * Critical temperature, °C. Miners are suspended if worker reached this temperature.
     * @type {number}
     * @memberof WorkerAutofanAutofan
     */
    criticalTemp?: number;
    /**
     * Action to perform when critical temperature is reached
     * @type {string}
     * @memberof WorkerAutofanAutofan
     */
    criticalTempAction?: WorkerAutofanAutofan.CriticalTempActionEnum;
    /**
     * Don't apply to AMD GPUs
     * @type {boolean}
     * @memberof WorkerAutofanAutofan
     */
    noAmd?: boolean;
    /**
     * Reboot worker in case of autofan errors
     * @type {boolean}
     * @memberof WorkerAutofanAutofan
     */
    rebootOnErrors?: boolean;
    /**
     * Enable Smart Mode
     * @type {boolean}
     * @memberof WorkerAutofanAutofan
     */
    smartMode?: boolean;
}
/**
 * @export
 * @namespace WorkerAutofanAutofan
 */
export declare namespace WorkerAutofanAutofan {
    /**
     * @export
     * @enum {string}
     */
    enum CriticalTempActionEnum {
        Reboot = "reboot",
        Shutdown = "shutdown"
    }
}
/**
 *
 * @export
 * @interface WorkerBatchRenameItem
 */
export interface WorkerBatchRenameItem {
    /**
     * Worker ID to rename
     * @type {number}
     * @memberof WorkerBatchRenameItem
     */
    workerId: number;
    /**
     * New worker name
     * @type {string}
     * @memberof WorkerBatchRenameItem
     */
    name: string;
}
/**
 *
 * @export
 * @interface WorkerBenchmark
 */
export interface WorkerBenchmark {
    /**
     * ID of currently running benchmark. This field is present until the benchmark is finished.
     * @type {number}
     * @memberof WorkerBenchmark
     */
    benchmarkId?: number;
}
/**
 *
 * @export
 * @interface WorkerCommands
 */
export interface WorkerCommands {
    /**
     * Worker queue commands
     * @type {WorkerCommandsCommands[]}
     * @memberof WorkerCommands
     */
    commands?: WorkerCommandsCommands[];
}
/**
 *
 * @export
 * @interface WorkerCommandsCommands
 */
export interface WorkerCommandsCommands {
    /**
     * Command name
     * @type {string}
     * @memberof WorkerCommandsCommands
     */
    command?: string;
    /**
     * Command ID
     * @type {number}
     * @memberof WorkerCommandsCommands
     */
    id?: number;
    /**
     * Command data
     * @type {any}
     * @memberof WorkerCommandsCommands
     */
    data?: any;
}
/**
 *
 * @export
 * @interface WorkerConfigFiles
 */
export interface WorkerConfigFiles {
    /**
     * rig.conf file contents
     * @type {string}
     * @memberof WorkerConfigFiles
     */
    rigConf?: string;
}
/**
 *
 * @export
 * @interface WorkerCoolbox
 */
export interface WorkerCoolbox {
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof WorkerCoolbox
     */
    coolbox?: WorkerCoolboxCoolbox;
}
/**
 * Configuration for Coolbox fan controller
 * @export
 * @interface WorkerCoolboxCoolbox
 */
export interface WorkerCoolboxCoolbox {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerCoolboxCoolbox
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerCoolboxCoolbox
     */
    auto?: boolean;
    /**
     * Target temperature for autofan, °C
     * @type {number}
     * @memberof WorkerCoolboxCoolbox
     */
    targetTemp?: number;
    /**
     * Target temperature for memory, °C
     * @type {number}
     * @memberof WorkerCoolboxCoolbox
     */
    targetMemTemp?: number;
    /**
     * Enable watchdog
     * @type {boolean}
     * @memberof WorkerCoolboxCoolbox
     */
    wdEnabled?: boolean;
    /**
     * Reset worker after, minutes
     * @type {number}
     * @memberof WorkerCoolboxCoolbox
     */
    wdInterval?: number;
}
/**
 *
 * @export
 * @interface WorkerCoolboxInfo
 */
export interface WorkerCoolboxInfo {
    /**
     *
     * @type {WorkerCoolboxInfoCoolboxInfo}
     * @memberof WorkerCoolboxInfo
     */
    coolboxInfo?: WorkerCoolboxInfoCoolboxInfo;
}
/**
 * Information about installed Coolbox fan controller
 * @export
 * @interface WorkerCoolboxInfoCoolboxInfo
 */
export interface WorkerCoolboxInfoCoolboxInfo {
    /**
     * Controller version: - L - LITE: only manual fan speed control - P - PRO: autofan, watchdog
     * @type {string}
     * @memberof WorkerCoolboxInfoCoolboxInfo
     */
    version?: WorkerCoolboxInfoCoolboxInfo.VersionEnum;
    /**
     * Revision number
     * @type {string}
     * @memberof WorkerCoolboxInfoCoolboxInfo
     */
    revision?: string;
}
/**
 * @export
 * @namespace WorkerCoolboxInfoCoolboxInfo
 */
export declare namespace WorkerCoolboxInfoCoolboxInfo {
    /**
     * @export
     * @enum {string}
     */
    enum VersionEnum {
        L = "L",
        P = "P"
    }
}
/**
 *
 * @export
 * @interface WorkerCoolboxStats
 */
export interface WorkerCoolboxStats {
    /**
     *
     * @type {WorkerCoolboxStatsCoolboxStats}
     * @memberof WorkerCoolboxStats
     */
    coolboxStats?: WorkerCoolboxStatsCoolboxStats;
}
/**
 * Coolbox fan controller stats
 * @export
 * @interface WorkerCoolboxStatsCoolboxStats
 */
export interface WorkerCoolboxStatsCoolboxStats {
    /**
     * Case fan speeds, %
     * @type {number[]}
     * @memberof WorkerCoolboxStatsCoolboxStats
     */
    casefan?: number[];
    /**
     * Temperatures from sensors, °C
     * @type {number[]}
     * @memberof WorkerCoolboxStatsCoolboxStats
     */
    thermosensors?: number[];
}
/**
 *
 * @export
 * @interface WorkerCreateRequest
 */
export interface WorkerCreateRequest extends WorkerFields {
    /**
     *
     * @type {boolean}
     * @memberof WorkerCreateRequest
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof WorkerCreateRequest
     */
    password?: string;
    /**
     *
     * @type {number[]}
     * @memberof WorkerCreateRequest
     */
    tagIds?: number[];
    /**
     *
     * @type {MirrorUrl}
     * @memberof WorkerCreateRequest
     */
    mirrorUrl?: MirrorUrl;
    /**
     *
     * @type {RepoUrl[]}
     * @memberof WorkerCreateRequest
     */
    repoUrls?: RepoUrl[];
    /**
     *
     * @type {WorkerEditVpnVpn}
     * @memberof WorkerCreateRequest
     */
    vpn?: WorkerEditVpnVpn;
    /**
     * Flight sheet ID
     * @type {number}
     * @memberof WorkerCreateRequest
     */
    fsId?: number;
    /**
     * Overclocking profile ID
     * @type {number}
     * @memberof WorkerCreateRequest
     */
    ocId?: number;
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof WorkerCreateRequest
     */
    ocApplyMode?: WorkerCreateRequest.OcApplyModeEnum;
    /**
     *
     * @type {OCConfig}
     * @memberof WorkerCreateRequest
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof WorkerCreateRequest
     */
    ocAlgo?: OCAlgo;
    /**
     *
     * @type {MinersConfig}
     * @memberof WorkerCreateRequest
     */
    minersConfig?: MinersConfig;
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof WorkerCreateRequest
     */
    watchdog?: WorkerWatchdogWatchdog;
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof WorkerCreateRequest
     */
    options?: WorkerOptionsOptions;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof WorkerCreateRequest
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof WorkerCreateRequest
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof WorkerCreateRequest
     */
    octofanCorrectPower?: boolean;
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof WorkerCreateRequest
     */
    autofan?: WorkerAutofanAutofan;
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof WorkerCreateRequest
     */
    octofan?: WorkerOctofanOctofan;
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof WorkerCreateRequest
     */
    coolbox?: WorkerCoolboxCoolbox;
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof WorkerCreateRequest
     */
    fanflap?: WorkerFanflapFanflap;
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof WorkerCreateRequest
     */
    powermeter?: WorkerPowermeterPowermeter;
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelay}
     * @memberof WorkerCreateRequest
     */
    donnagerRelay?: WorkerDonnagerRelayDonnagerRelay;
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof WorkerCreateRequest
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof WorkerCreateRequest
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof WorkerCreateRequest
     */
    asicConfig?: {
        [key: string]: string;
    };
}
/**
 * @export
 * @namespace WorkerCreateRequest
 */
export declare namespace WorkerCreateRequest {
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 *
 * @export
 * @interface WorkerDonnagerRelay
 */
export interface WorkerDonnagerRelay {
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelay}
     * @memberof WorkerDonnagerRelay
     */
    donnagerRelay?: WorkerDonnagerRelayDonnagerRelay;
}
/**
 * Donnager Relay configuration
 * @export
 * @interface WorkerDonnagerRelayDonnagerRelay
 */
export interface WorkerDonnagerRelayDonnagerRelay {
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelayChannels[]}
     * @memberof WorkerDonnagerRelayDonnagerRelay
     */
    channels?: WorkerDonnagerRelayDonnagerRelayChannels[];
}
/**
 *
 * @export
 * @interface WorkerDonnagerRelayDonnagerRelayChannels
 */
export interface WorkerDonnagerRelayDonnagerRelayChannels {
    /**
     * Channel index
     * @type {number}
     * @memberof WorkerDonnagerRelayDonnagerRelayChannels
     */
    index?: number;
    /**
     * Attached worker ID
     * @type {number}
     * @memberof WorkerDonnagerRelayDonnagerRelayChannels
     */
    workerId?: number;
}
/**
 *
 * @export
 * @interface WorkerDonnagerRelayInfo
 */
export interface WorkerDonnagerRelayInfo {
    /**
     *
     * @type {WorkerDonnagerRelayInfoDonnagerRelayInfo}
     * @memberof WorkerDonnagerRelayInfo
     */
    donnagerRelayInfo?: WorkerDonnagerRelayInfoDonnagerRelayInfo;
}
/**
 * Donnager Relay information
 * @export
 * @interface WorkerDonnagerRelayInfoDonnagerRelayInfo
 */
export interface WorkerDonnagerRelayInfoDonnagerRelayInfo {
    /**
     * Firmware version
     * @type {string}
     * @memberof WorkerDonnagerRelayInfoDonnagerRelayInfo
     */
    firmware?: string;
}
/**
 *
 * @export
 * @interface WorkerDonnagerRelayStats
 */
export interface WorkerDonnagerRelayStats {
    /**
     *
     * @type {WorkerDonnagerRelayStatsDonnagerRelayStats}
     * @memberof WorkerDonnagerRelayStats
     */
    donnagerRelayStats?: WorkerDonnagerRelayStatsDonnagerRelayStats;
}
/**
 * Donnager Relay stats
 * @export
 * @interface WorkerDonnagerRelayStatsDonnagerRelayStats
 */
export interface WorkerDonnagerRelayStatsDonnagerRelayStats {
    /**
     *
     * @type {WorkerDonnagerRelayStatsDonnagerRelayStatsChannels[]}
     * @memberof WorkerDonnagerRelayStatsDonnagerRelayStats
     */
    channels?: WorkerDonnagerRelayStatsDonnagerRelayStatsChannels[];
}
/**
 *
 * @export
 * @interface WorkerDonnagerRelayStatsDonnagerRelayStatsChannels
 */
export interface WorkerDonnagerRelayStatsDonnagerRelayStatsChannels {
    /**
     * Channel index
     * @type {number}
     * @memberof WorkerDonnagerRelayStatsDonnagerRelayStatsChannels
     */
    index?: number;
    /**
     * Channel state
     * @type {number}
     * @memberof WorkerDonnagerRelayStatsDonnagerRelayStatsChannels
     */
    state?: number;
    /**
     * Channel current, A
     * @type {number}
     * @memberof WorkerDonnagerRelayStatsDonnagerRelayStatsChannels
     */
    current?: number;
}
/**
 *
 * @export
 * @interface WorkerEditFS
 */
export interface WorkerEditFS {
    /**
     * Flight sheet ID
     * @type {number}
     * @memberof WorkerEditFS
     */
    fsId?: number;
}
/**
 *
 * @export
 * @interface WorkerEditOC
 */
export interface WorkerEditOC extends WorkerEditOCId {
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof WorkerEditOC
     */
    ocApplyMode?: WorkerEditOC.OcApplyModeEnum;
    /**
     *
     * @type {OCConfig}
     * @memberof WorkerEditOC
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof WorkerEditOC
     */
    ocAlgo?: OCAlgo;
}
/**
 * @export
 * @namespace WorkerEditOC
 */
export declare namespace WorkerEditOC {
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 *
 * @export
 * @interface WorkerEditOCId
 */
export interface WorkerEditOCId {
    /**
     * Overclocking profile ID
     * @type {number}
     * @memberof WorkerEditOCId
     */
    ocId?: number;
}
/**
 *
 * @export
 * @interface WorkerEditOCMode
 */
export interface WorkerEditOCMode {
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof WorkerEditOCMode
     */
    ocApplyMode?: WorkerEditOCMode.OcApplyModeEnum;
}
/**
 * @export
 * @namespace WorkerEditOCMode
 */
export declare namespace WorkerEditOCMode {
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 *
 * @export
 * @interface WorkerEditPassword
 */
export interface WorkerEditPassword extends WorkerPassword {
    /**
     * Change mode: 1 - Change password in DB and try to change it on worker
 2 - Change password in DB only. The worker with current password will offline
     * @type {number}
     * @memberof WorkerEditPassword
     */
    passwordUpdateMode?: number;
}
/**
 *
 * @export
 * @interface WorkerEditRequest
 */
export interface WorkerEditRequest extends WorkerFields {
    /**
     *
     * @type {boolean}
     * @memberof WorkerEditRequest
     */
    active?: boolean;
    /**
     *
     * @type {number[]}
     * @memberof WorkerEditRequest
     */
    tagIds?: number[];
    /**
     * Update mode for tags * add - add spicified tags ignoring if already assigned
     * remove - remove spicified tags if assigned
     * replace - replace all assigned tags with specified ones
     * @type {string}
     * @memberof WorkerEditRequest
     */
    tagUpdateMode?: WorkerEditRequest.TagUpdateModeEnum;
    /**
     *
     * @type {MirrorUrl}
     * @memberof WorkerEditRequest
     */
    mirrorUrl?: MirrorUrl;
    /**
     *
     * @type {RepoUrl[]}
     * @memberof WorkerEditRequest
     */
    repoUrls?: RepoUrl[];
    /**
     *
     * @type {WorkerEditVpnVpn}
     * @memberof WorkerEditRequest
     */
    vpn?: WorkerEditVpnVpn;
    /**
     * Flight sheet ID
     * @type {number}
     * @memberof WorkerEditRequest
     */
    fsId?: number;
    /**
     * Overclocking profile ID
     * @type {number}
     * @memberof WorkerEditRequest
     */
    ocId?: number;
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof WorkerEditRequest
     */
    ocApplyMode?: WorkerEditRequest.OcApplyModeEnum;
    /**
     *
     * @type {OCConfig}
     * @memberof WorkerEditRequest
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof WorkerEditRequest
     */
    ocAlgo?: OCAlgo;
    /**
     *
     * @type {MinersConfig}
     * @memberof WorkerEditRequest
     */
    minersConfig?: MinersConfig;
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof WorkerEditRequest
     */
    watchdog?: WorkerWatchdogWatchdog;
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof WorkerEditRequest
     */
    options?: WorkerOptionsOptions;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof WorkerEditRequest
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof WorkerEditRequest
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof WorkerEditRequest
     */
    octofanCorrectPower?: boolean;
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof WorkerEditRequest
     */
    autofan?: WorkerAutofanAutofan;
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof WorkerEditRequest
     */
    octofan?: WorkerOctofanOctofan;
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof WorkerEditRequest
     */
    coolbox?: WorkerCoolboxCoolbox;
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof WorkerEditRequest
     */
    fanflap?: WorkerFanflapFanflap;
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof WorkerEditRequest
     */
    powermeter?: WorkerPowermeterPowermeter;
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelay}
     * @memberof WorkerEditRequest
     */
    donnagerRelay?: WorkerDonnagerRelayDonnagerRelay;
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof WorkerEditRequest
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof WorkerEditRequest
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof WorkerEditRequest
     */
    asicConfig?: {
        [key: string]: string;
    };
}
/**
 * @export
 * @namespace WorkerEditRequest
 */
export declare namespace WorkerEditRequest {
    /**
     * @export
     * @enum {string}
     */
    enum TagUpdateModeEnum {
        Add = "add",
        Remove = "remove",
        Replace = "replace"
    }
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
}
/**
 *
 * @export
 * @interface WorkerEditVpn
 */
export interface WorkerEditVpn {
    /**
     *
     * @type {WorkerEditVpnVpn}
     * @memberof WorkerEditVpn
     */
    vpn?: WorkerEditVpnVpn;
}
/**
 * VPN configuration  Files will be named as following, so certificates in client.conf should be named ca.crt, client.crt, client.key.  Also you can embed certificates in client.conf and upload just one file.
 * @export
 * @interface WorkerEditVpnVpn
 */
export interface WorkerEditVpnVpn {
    /**
     * client.conf file contents
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    clientconf: string;
    /**
     * ca.crt file contents
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    cacrt?: string;
    /**
     * client.crt file contents
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    clientcrt?: string;
    /**
     * client.key file contents
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    clientkey?: string;
    /**
     *
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    login?: string;
    /**
     *
     * @type {string}
     * @memberof WorkerEditVpnVpn
     */
    password?: string;
}
/**
 *
 * @export
 * @interface WorkerFS
 */
export interface WorkerFS {
    /**
     *
     * @type {FSMidInfo}
     * @memberof WorkerFS
     */
    flightSheet?: FSMidInfo;
}
/**
 *
 * @export
 * @interface WorkerFanflap
 */
export interface WorkerFanflap {
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof WorkerFanflap
     */
    fanflap?: WorkerFanflapFanflap;
}
/**
 * Configuration for FanFlap controller
 * @export
 * @interface WorkerFanflapFanflap
 */
export interface WorkerFanflapFanflap {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerFanflapFanflap
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerFanflapFanflap
     */
    auto?: boolean;
    /**
     * Target temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerFanflapFanflap
     */
    targetTemp?: number;
    /**
     * Minimum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerFanflapFanflap
     */
    minFan?: number;
    /**
     * Maximum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerFanflapFanflap
     */
    maxFan?: number;
}
/**
 *
 * @export
 * @interface WorkerFanflapStats
 */
export interface WorkerFanflapStats {
    /**
     *
     * @type {FanflapStats}
     * @memberof WorkerFanflapStats
     */
    fanflapStats?: FanflapStats;
}
/**
 *
 * @export
 * @interface WorkerFields
 */
export interface WorkerFields {
    /**
     *
     * @type {Platform}
     * @memberof WorkerFields
     */
    platform?: Platform;
    /**
     * Display name
     * @type {string}
     * @memberof WorkerFields
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof WorkerFields
     */
    description?: string;
    /**
     * Amount of GPUs/Boards
     * @type {number}
     * @memberof WorkerFields
     */
    unitsCount?: number;
    /**
     * Amount of installed fans (for ASICs)
     * @type {number}
     * @memberof WorkerFields
     */
    fansCount?: number;
}
/**
 *
 * @export
 * @interface WorkerGpuInfo
 */
export interface WorkerGpuInfo {
    /**
     * GPU information
     * @type {GpuInfo[]}
     * @memberof WorkerGpuInfo
     */
    gpuInfo?: GpuInfo[];
}
/**
 *
 * @export
 * @interface WorkerGpuStats
 */
export interface WorkerGpuStats {
    /**
     * GPU stats
     * @type {any[]}
     * @memberof WorkerGpuStats
     */
    gpuStats?: any[];
}
/**
 *
 * @export
 * @interface WorkerGpuStatsSummary
 */
export interface WorkerGpuStatsSummary {
    /**
     *
     * @type {WorkerGpuStatsSummaryGpuSummary}
     * @memberof WorkerGpuStatsSummary
     */
    gpuSummary?: WorkerGpuStatsSummaryGpuSummary;
}
/**
 * GPU summary stats
 * @export
 * @interface WorkerGpuStatsSummaryGpuSummary
 */
export interface WorkerGpuStatsSummaryGpuSummary {
    /**
     * Aggregated list of GPUs
     * @type {WorkerGpuStatsSummaryGpuSummaryGpus[]}
     * @memberof WorkerGpuStatsSummaryGpuSummary
     */
    gpus?: WorkerGpuStatsSummaryGpuSummaryGpus[];
    /**
     * Maximum GPU temperature, °C
     * @type {number}
     * @memberof WorkerGpuStatsSummaryGpuSummary
     */
    maxTemp?: number;
    /**
     * Maximum GPU fan speed, %
     * @type {number}
     * @memberof WorkerGpuStatsSummaryGpuSummary
     */
    maxFan?: number;
}
/**
 *
 * @export
 * @interface WorkerGpuStatsSummaryGpuSummaryGpus
 */
export interface WorkerGpuStatsSummaryGpuSummaryGpus {
    /**
     * GPU name
     * @type {string}
     * @memberof WorkerGpuStatsSummaryGpuSummaryGpus
     */
    name?: string;
    /**
     * Amount of GPUs with this name
     * @type {number}
     * @memberof WorkerGpuStatsSummaryGpuSummaryGpus
     */
    amount?: number;
}
/**
 *
 * @export
 * @interface WorkerHardwareInfo
 */
export interface WorkerHardwareInfo {
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfo}
     * @memberof WorkerHardwareInfo
     */
    hardwareInfo?: WorkerHardwareInfoHardwareInfo;
}
/**
 * Hardware information
 * @export
 * @interface WorkerHardwareInfoHardwareInfo
 */
export interface WorkerHardwareInfoHardwareInfo {
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfoMotherboard}
     * @memberof WorkerHardwareInfoHardwareInfo
     */
    motherboard?: WorkerHardwareInfoHardwareInfoMotherboard;
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfoCpu}
     * @memberof WorkerHardwareInfoHardwareInfo
     */
    cpu?: WorkerHardwareInfoHardwareInfoCpu;
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfoDisk}
     * @memberof WorkerHardwareInfoHardwareInfo
     */
    disk?: WorkerHardwareInfoHardwareInfoDisk;
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfoNetInterfaces[]}
     * @memberof WorkerHardwareInfoHardwareInfo
     */
    netInterfaces?: WorkerHardwareInfoHardwareInfoNetInterfaces[];
}
/**
 *
 * @export
 * @interface WorkerHardwareInfoHardwareInfoCpu
 */
export interface WorkerHardwareInfoHardwareInfoCpu {
    /**
     * CPU ID
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoCpu
     */
    id?: string;
    /**
     * Model name
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoCpu
     */
    model?: string;
    /**
     * CPU cores amount
     * @type {number}
     * @memberof WorkerHardwareInfoHardwareInfoCpu
     */
    cores?: number;
    /**
     * AES supported
     * @type {boolean}
     * @memberof WorkerHardwareInfoHardwareInfoCpu
     */
    aes?: boolean;
}
/**
 *
 * @export
 * @interface WorkerHardwareInfoHardwareInfoDisk
 */
export interface WorkerHardwareInfoHardwareInfoDisk {
    /**
     * Model name
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoDisk
     */
    model?: string;
}
/**
 *
 * @export
 * @interface WorkerHardwareInfoHardwareInfoMotherboard
 */
export interface WorkerHardwareInfoHardwareInfoMotherboard {
    /**
     * Brand name
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoMotherboard
     */
    manufacturer?: string;
    /**
     * Model name
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoMotherboard
     */
    model?: string;
    /**
     * BIOS info (version and date)
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoMotherboard
     */
    bios?: string;
}
/**
 *
 * @export
 * @interface WorkerHardwareInfoHardwareInfoNetInterfaces
 */
export interface WorkerHardwareInfoHardwareInfoNetInterfaces {
    /**
     * Interface name
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoNetInterfaces
     */
    iface?: string;
    /**
     * MAC address
     * @type {string}
     * @memberof WorkerHardwareInfoHardwareInfoNetInterfaces
     */
    mac?: string;
}
/**
 *
 * @export
 * @interface WorkerHardwareStats
 */
export interface WorkerHardwareStats {
    /**
     *
     * @type {WorkerHardwareStatsHardwareStats}
     * @memberof WorkerHardwareStats
     */
    hardwareStats?: WorkerHardwareStatsHardwareStats;
}
/**
 * Hardware stats
 * @export
 * @interface WorkerHardwareStatsHardwareStats
 */
export interface WorkerHardwareStatsHardwareStats {
    /**
     * Free disk space
     * @type {string}
     * @memberof WorkerHardwareStatsHardwareStats
     */
    df?: string;
    /**
     * CPU load average (1 minute / 5 minutes / 15 minutes)
     * @type {number[]}
     * @memberof WorkerHardwareStatsHardwareStats
     */
    cpuavg?: number[];
    /**
     * CPU temperature, °C
     * @type {number[]}
     * @memberof WorkerHardwareStatsHardwareStats
     */
    cputemp?: number[];
    /**
     * CPU cores amount
     * @type {number}
     * @memberof WorkerHardwareStatsHardwareStats
     */
    cpuCores?: number;
    /**
     *
     * @type {WorkerHardwareStatsHardwareStatsMemory}
     * @memberof WorkerHardwareStatsHardwareStats
     */
    memory?: WorkerHardwareStatsHardwareStatsMemory;
}
/**
 *
 * @export
 * @interface WorkerHardwareStatsHardwareStatsMemory
 */
export interface WorkerHardwareStatsHardwareStatsMemory {
    /**
     * Total RAM in megabytes
     * @type {number}
     * @memberof WorkerHardwareStatsHardwareStatsMemory
     */
    total?: number;
    /**
     * Free RAM in megabytes
     * @type {number}
     * @memberof WorkerHardwareStatsHardwareStatsMemory
     */
    free?: number;
}
/**
 *
 * @export
 * @interface WorkerIds
 */
export interface WorkerIds {
    /**
     *
     * @type {number[]}
     * @memberof WorkerIds
     */
    workerIds?: number[];
}
/**
 *
 * @export
 * @interface WorkerIpAddresses
 */
export interface WorkerIpAddresses {
    /**
     * List of assigned ip addresses
     * @type {string[]}
     * @memberof WorkerIpAddresses
     */
    ipAddresses?: string[];
}
/**
 *
 * @export
 * @interface Worker
 */
export interface Worker {
    /**
     *
     * @type {Platform}
     * @memberof Worker
     */
    platform?: Platform;
    /**
     * Display name
     * @type {string}
     * @memberof Worker
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    description?: string;
    /**
     * Amount of GPUs/Boards
     * @type {number}
     * @memberof Worker
     */
    unitsCount?: number;
    /**
     * Amount of installed fans (for ASICs)
     * @type {number}
     * @memberof Worker
     */
    fansCount?: number;
    /**
     *
     * @type {boolean}
     * @memberof Worker
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    password?: string;
    /**
     *
     * @type {number[]}
     * @memberof Worker
     */
    tagIds?: number[];
    /**
     *
     * @type {MirrorUrl}
     * @memberof Worker
     */
    mirrorUrl?: MirrorUrl;
    /**
     *
     * @type {RepoUrl[]}
     * @memberof Worker
     */
    repoUrls?: RepoUrl[];
    /**
     * Red Temperature, °C
     * @type {number}
     * @memberof Worker
     */
    redTemp?: number;
    /**
     * Red memory temperature (for rigs), °C
     * @type {number}
     * @memberof Worker
     */
    redMemTemp?: number;
    /**
     * Red CPU temperature (for rigs), °C
     * @type {number}
     * @memberof Worker
     */
    redCpuTemp?: number;
    /**
     * Red Board Temperature (for ASICs), °C
     * @type {number}
     * @memberof Worker
     */
    redBoardTemp?: number;
    /**
     * Red Fan speed, %
     * @type {number}
     * @memberof Worker
     */
    redFan?: number;
    /**
     * Red Accepted Shares Ratio, %
     * @type {number}
     * @memberof Worker
     */
    redAsr?: number;
    /**
     * Red Load Average per one CPU core
     * @type {number}
     * @memberof Worker
     */
    redLa?: number;
    /**
     * Red hashrates per algo
     * @type {FarmHashratesHashrates[]}
     * @memberof Worker
     */
    redHashrates?: FarmHashratesHashrates[];
    /**
     * List of assigned ip addresses
     * @type {string[]}
     * @memberof Worker
     */
    ipAddresses?: string[];
    /**
     *
     * @type {WorkerRemoteAddressRemoteAddress}
     * @memberof Worker
     */
    remoteAddress?: WorkerRemoteAddressRemoteAddress;
    /**
     * VPN is configured
     * @type {boolean}
     * @memberof Worker
     */
    vpn?: boolean;
    /**
     * Worker has AMD GPUs
     * @type {boolean}
     * @memberof Worker
     */
    hasAmd?: boolean;
    /**
     * Worker has Nvidia GPUs
     * @type {boolean}
     * @memberof Worker
     */
    hasNvidia?: boolean;
    /**
     * New OS version is available
     * @type {boolean}
     * @memberof Worker
     */
    needsUpgrade?: boolean;
    /**
     * packages_hash
     * @type {string}
     * @memberof Worker
     */
    packagesHash?: string;
    /**
     *
     * @type {WorkerPropsLanConfig}
     * @memberof Worker
     */
    lanConfig?: WorkerPropsLanConfig;
    /**
     * Hive OS system type
     * @type {string}
     * @memberof Worker
     */
    systemType?: Worker.SystemTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Worker
     */
    osName?: string;
    /**
     * Worker has Octominer fan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasOctofan?: boolean;
    /**
     * Worker has Coolbox fan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasCoolbox?: boolean;
    /**
     * Worker has FanFlap controller
     * @type {boolean}
     * @memberof Worker
     */
    hasFanflap?: boolean;
    /**
     * Worker has Powermeter controller
     * @type {boolean}
     * @memberof Worker
     */
    hasPowermeter?: boolean;
    /**
     * Worker is an ASIC Hub
     * @type {boolean}
     * @memberof Worker
     */
    hasAsichub?: boolean;
    /**
     * Worker has installed Donnager Relay controller
     * @type {boolean}
     * @memberof Worker
     */
    hasDonnagerRelay?: boolean;
    /**
     * Worker has installed Ykeda Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasYkedaAutofan?: boolean;
    /**
     * Worker has installed Windtank Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasWindtankAutofan?: boolean;
    /**
     * Worker has installed 8MK_NET Autofan controller
     * @type {boolean}
     * @memberof Worker
     */
    hasMknetAutofan?: boolean;
    /**
     *
     * @type {FarmPropsPersonalSettings}
     * @memberof Worker
     */
    personalSettings?: FarmPropsPersonalSettings;
    /**
     *
     * @type {WorkerVersionsVersions}
     * @memberof Worker
     */
    versions?: WorkerVersionsVersions;
    /**
     *
     * @type {WorkerStatsStats}
     * @memberof Worker
     */
    stats?: WorkerStatsStats;
    /**
     *
     * @type {FSMidInfo}
     * @memberof Worker
     */
    flightSheet?: FSMidInfo;
    /**
     *
     * @type {WorkerOverclockOverclock}
     * @memberof Worker
     */
    overclock?: WorkerOverclockOverclock;
    /**
     * List of miner names from active flight sheet that are tuned in this worker.
     * @type {MinerName[]}
     * @memberof Worker
     */
    tunedMiners?: MinerName[];
    /**
     *
     * @type {WorkerMinersSummaryMinersSummary}
     * @memberof Worker
     */
    minersSummary?: WorkerMinersSummaryMinersSummary;
    /**
     *
     * @type {WorkerMinersStatsMinersStats}
     * @memberof Worker
     */
    minersStats?: WorkerMinersStatsMinersStats;
    /**
     *
     * @type {WorkerHardwareInfoHardwareInfo}
     * @memberof Worker
     */
    hardwareInfo?: WorkerHardwareInfoHardwareInfo;
    /**
     *
     * @type {WorkerHardwareStatsHardwareStats}
     * @memberof Worker
     */
    hardwareStats?: WorkerHardwareStatsHardwareStats;
    /**
     *
     * @type {WorkerGpuStatsSummaryGpuSummary}
     * @memberof Worker
     */
    gpuSummary?: WorkerGpuStatsSummaryGpuSummary;
    /**
     * GPU information
     * @type {GpuInfo[]}
     * @memberof Worker
     */
    gpuInfo?: GpuInfo[];
    /**
     * GPU stats
     * @type {any[]}
     * @memberof Worker
     */
    gpuStats?: any[];
    /**
     *
     * @type {WorkerAsicInfoAsicInfo}
     * @memberof Worker
     */
    asicInfo?: WorkerAsicInfoAsicInfo;
    /**
     * ID of AsicHUB which manages this ASIC
     * @type {number}
     * @memberof Worker
     */
    asichubId?: number;
    /**
     *
     * @type {WorkerAsicStatsAsicStats}
     * @memberof Worker
     */
    asicStats?: WorkerAsicStatsAsicStats;
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof Worker
     */
    watchdog?: WorkerWatchdogWatchdog;
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof Worker
     */
    options?: WorkerOptionsOptions;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof Worker
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof Worker
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof Worker
     */
    octofanCorrectPower?: boolean;
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof Worker
     */
    autofan?: WorkerAutofanAutofan;
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof Worker
     */
    octofan?: WorkerOctofanOctofan;
    /**
     *
     * @type {WorkerOctofanStatsOctofanStats}
     * @memberof Worker
     */
    octofanStats?: WorkerOctofanStatsOctofanStats;
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof Worker
     */
    coolbox?: WorkerCoolboxCoolbox;
    /**
     *
     * @type {WorkerMknetAutofanInfoCoolboxInfo}
     * @memberof Worker
     */
    coolboxInfo?: WorkerMknetAutofanInfoCoolboxInfo;
    /**
     *
     * @type {WorkerCoolboxStatsCoolboxStats}
     * @memberof Worker
     */
    coolboxStats?: WorkerCoolboxStatsCoolboxStats;
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof Worker
     */
    fanflap?: WorkerFanflapFanflap;
    /**
     *
     * @type {FanflapStats}
     * @memberof Worker
     */
    fanflapStats?: FanflapStats;
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof Worker
     */
    powermeter?: WorkerPowermeterPowermeter;
    /**
     *
     * @type {PowermeterStats}
     * @memberof Worker
     */
    powermeterStats?: PowermeterStats;
    /**
     *
     * @type {WorkerDonnagerRelayDonnagerRelay}
     * @memberof Worker
     */
    donnagerRelay?: WorkerDonnagerRelayDonnagerRelay;
    /**
     *
     * @type {WorkerDonnagerRelayInfoDonnagerRelayInfo}
     * @memberof Worker
     */
    donnagerRelayInfo?: WorkerDonnagerRelayInfoDonnagerRelayInfo;
    /**
     *
     * @type {WorkerDonnagerRelayStatsDonnagerRelayStats}
     * @memberof Worker
     */
    donnagerRelayStats?: WorkerDonnagerRelayStatsDonnagerRelayStats;
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof Worker
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
    /**
     *
     * @type {WorkerMknetAutofanStatsYkedaAutofanStats}
     * @memberof Worker
     */
    ykedaAutofanStats?: WorkerMknetAutofanStatsYkedaAutofanStats;
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof Worker
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
    /**
     *
     * @type {WorkerWindtankAutofanInfoWindtankAutofanInfo}
     * @memberof Worker
     */
    windtankAutofanInfo?: WorkerWindtankAutofanInfoWindtankAutofanInfo;
    /**
     *
     * @type {WorkerWindtankAutofanStatsWindtankAutofanStats}
     * @memberof Worker
     */
    windtankAutofanStats?: WorkerWindtankAutofanStatsWindtankAutofanStats;
    /**
     * Worker queue commands
     * @type {WorkerCommandsCommands[]}
     * @memberof Worker
     */
    commands?: WorkerCommandsCommands[];
    /**
     * ID of currently running benchmark. This field is present until the benchmark is finished.
     * @type {number}
     * @memberof Worker
     */
    benchmarkId?: number;
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof Worker
     */
    asicConfig?: {
        [key: string]: string;
    };
    /**
     *
     * @type {WorkerMessagesCountMessagesCounts}
     * @memberof Worker
     */
    messagesCounts?: WorkerMessagesCountMessagesCounts;
}
/**
 * @export
 * @namespace Worker
 */
export declare namespace Worker {
    /**
     * @export
     * @enum {string}
     */
    enum SystemTypeEnum {
        Linux = "linux",
        Asic = "asic",
        Windows = "windows"
    }
}
/**
 *
 * @export
 * @interface WorkerMessage
 */
export interface WorkerMessage {
    /**
     *
     * @type {number}
     * @memberof WorkerMessage
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof WorkerMessage
     */
    title?: string;
    /**
     *
     * @type {MessageType}
     * @memberof WorkerMessage
     */
    type?: MessageType;
    /**
     *
     * @type {number}
     * @memberof WorkerMessage
     */
    time?: number;
    /**
     * Command ID for which this message is related to
     * @type {number}
     * @memberof WorkerMessage
     */
    cmdId?: number;
    /**
     * Command name for which this message is related to
     * @type {string}
     * @memberof WorkerMessage
     */
    command?: string;
    /**
     * Result of executed command
     * @type {any}
     * @memberof WorkerMessage
     */
    commandResult?: any;
    /**
     *
     * @type {boolean}
     * @memberof WorkerMessage
     */
    hasPayload?: boolean;
}
/**
 *
 * @export
 * @interface WorkerMessageFull
 */
export interface WorkerMessageFull extends WorkerMessage {
    /**
     * Message payload (for example it can be command output). For type=file payload is base64-encoded file contents and title is file name.
     * @type {string}
     * @memberof WorkerMessageFull
     */
    payload?: string;
}
/**
 *
 * @export
 * @interface WorkerMessages
 */
export interface WorkerMessages {
    /**
     * Worker messages
     * @type {WorkerMessage[]}
     * @memberof WorkerMessages
     */
    messages?: WorkerMessage[];
}
/**
 *
 * @export
 * @interface WorkerMessagesCount
 */
export interface WorkerMessagesCount {
    /**
     *
     * @type {WorkerMessagesCountMessagesCounts}
     * @memberof WorkerMessagesCount
     */
    messagesCounts?: WorkerMessagesCountMessagesCounts;
}
/**
 *
 * @export
 * @interface WorkerMessagesCountMessagesCounts
 */
export interface WorkerMessagesCountMessagesCounts {
    /**
     * Count of messages with type 'success'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    success?: number;
    /**
     * Count of messages with type 'danger'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    danger?: number;
    /**
     * Count of messages with type 'warning'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    warning?: number;
    /**
     * Count of messages with type 'info'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    info?: number;
    /**
     * Count of messages with type 'default'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    _default?: number;
    /**
     * Count of messages with type 'file'
     * @type {number}
     * @memberof WorkerMessagesCountMessagesCounts
     */
    file?: number;
}
/**
 *
 * @export
 * @interface WorkerMetric
 */
export interface WorkerMetric {
    /**
     *
     * @type {number}
     * @memberof WorkerMetric
     */
    time?: number;
    /**
     * GPUs or ASIC boards count
     * @type {number}
     * @memberof WorkerMetric
     */
    units?: number;
    /**
     * Temperature, °C
     * @type {number[]}
     * @memberof WorkerMetric
     */
    temp?: number[];
    /**
     * Fan speed
     * @type {number[]}
     * @memberof WorkerMetric
     */
    fan?: number[];
    /**
     * Total power draw, watts
     * @type {number}
     * @memberof WorkerMetric
     */
    power?: number;
    /**
     * Hashrates by algorithm
     * @type {WorkerMetricHashrates[]}
     * @memberof WorkerMetric
     */
    hashrates?: WorkerMetricHashrates[];
    /**
     *
     * @type {FanflapStats}
     * @memberof WorkerMetric
     */
    fanflap?: FanflapStats;
    /**
     *
     * @type {PowermeterStats}
     * @memberof WorkerMetric
     */
    powermeter?: PowermeterStats;
}
/**
 *
 * @export
 * @interface WorkerMetricHashrates
 */
export interface WorkerMetricHashrates {
    /**
     *
     * @type {AlgoName}
     * @memberof WorkerMetricHashrates
     */
    algo?: AlgoName;
    /**
     * Hashrate
     * @type {number[]}
     * @memberof WorkerMetricHashrates
     */
    values?: number[];
}
/**
 *
 * @export
 * @interface WorkerMinersConfig
 */
export interface WorkerMinersConfig {
    /**
     *
     * @type {MinersConfig}
     * @memberof WorkerMinersConfig
     */
    minersConfig?: MinersConfig;
}
/**
 *
 * @export
 * @interface WorkerMinersStats
 */
export interface WorkerMinersStats {
    /**
     *
     * @type {WorkerMinersStatsMinersStats}
     * @memberof WorkerMinersStats
     */
    minersStats?: WorkerMinersStatsMinersStats;
}
/**
 *
 * @export
 * @interface WorkerMinersStatsMinersStats
 */
export interface WorkerMinersStatsMinersStats {
    /**
     * Miners stats
     * @type {WorkerMinersStatsMinersStatsHashrates[]}
     * @memberof WorkerMinersStatsMinersStats
     */
    hashrates?: WorkerMinersStatsMinersStatsHashrates[];
}
/**
 *
 * @export
 * @interface WorkerMinersStatsMinersStatsHashrates
 */
export interface WorkerMinersStatsMinersStatsHashrates {
    /**
     *
     * @type {MinerName}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    miner?: MinerName;
    /**
     *
     * @type {AlgoName}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    algo?: AlgoName;
    /**
     *
     * @type {CoinSymbol}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    coin?: CoinSymbol;
    /**
     * Hashrates, kH/s
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    hashes?: number[];
    /**
     *
     * @type {DAlgoName}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    dalgo?: DAlgoName;
    /**
     *
     * @type {DCoinSymbol}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    dcoin?: DCoinSymbol;
    /**
     * Secondary hashrates for dual miners, kH/s
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    dhashes?: number[];
    /**
     * Temperatures, °C
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    temps?: number[];
    /**
     * Fan speeds for GPU miners, %
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    fans?: number[];
    /**
     * Amounts of invalid shares
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    invalidShares?: number[];
    /**
     * GPU bus numbers
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    busNumbers?: number[];
    /**
     * Secondary GPU bus numbers for dual miners
     * @type {number[]}
     * @memberof WorkerMinersStatsMinersStatsHashrates
     */
    dbusNumbers?: number[];
}
/**
 *
 * @export
 * @interface WorkerMinersSummary
 */
export interface WorkerMinersSummary {
    /**
     *
     * @type {WorkerMinersSummaryMinersSummary}
     * @memberof WorkerMinersSummary
     */
    minersSummary?: WorkerMinersSummaryMinersSummary;
}
/**
 *
 * @export
 * @interface WorkerMinersSummaryMinersSummary
 */
export interface WorkerMinersSummaryMinersSummary {
    /**
     * Miners summary hashrates
     * @type {WorkerMinersSummaryMinersSummaryHashrates[]}
     * @memberof WorkerMinersSummaryMinersSummary
     */
    hashrates?: WorkerMinersSummaryMinersSummaryHashrates[];
}
/**
 *
 * @export
 * @interface WorkerMinersSummaryMinersSummaryHashrates
 */
export interface WorkerMinersSummaryMinersSummaryHashrates {
    /**
     *
     * @type {MinerName}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    miner?: MinerName;
    /**
     * Actual miner version
     * @type {string}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    ver?: string;
    /**
     *
     * @type {AlgoName}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    algo?: AlgoName;
    /**
     *
     * @type {CoinSymbol}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    coin?: CoinSymbol;
    /**
     * Hashrate summary, kH/s
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    hash?: number;
    /**
     *
     * @type {DAlgoName}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    dalgo?: DAlgoName;
    /**
     *
     * @type {DCoinSymbol}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    dcoin?: DCoinSymbol;
    /**
     * Secondary hashrate summary for dual miners, kH/s
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    dhash?: number;
    /**
     *
     * @type {WorkerMinersSummaryMinersSummaryShares}
     * @memberof WorkerMinersSummaryMinersSummaryHashrates
     */
    shares?: WorkerMinersSummaryMinersSummaryShares;
}
/**
 * Shares statistics
 * @export
 * @interface WorkerMinersSummaryMinersSummaryShares
 */
export interface WorkerMinersSummaryMinersSummaryShares {
    /**
     * Amount of accepted shares
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryShares
     */
    accepted?: number;
    /**
     * Amount of rejected shares
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryShares
     */
    rejected?: number;
    /**
     * Amount of invalid shares
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryShares
     */
    invalid?: number;
    /**
     * Accepted shares ratio, %
     * @type {number}
     * @memberof WorkerMinersSummaryMinersSummaryShares
     */
    ratio?: number;
}
/**
 *
 * @export
 * @interface WorkerMirrorUrl
 */
export interface WorkerMirrorUrl {
    /**
     *
     * @type {MirrorUrl}
     * @memberof WorkerMirrorUrl
     */
    mirrorUrl?: MirrorUrl;
}
/**
 *
 * @export
 * @interface WorkerMknetAutofan
 */
export interface WorkerMknetAutofan {
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof WorkerMknetAutofan
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
}
/**
 *
 * @export
 * @interface WorkerMknetAutofanInfo
 */
export interface WorkerMknetAutofanInfo {
    /**
     *
     * @type {WorkerMknetAutofanInfoCoolboxInfo}
     * @memberof WorkerMknetAutofanInfo
     */
    coolboxInfo?: WorkerMknetAutofanInfoCoolboxInfo;
}
/**
 * Information about installed 8MK_NET Autofan controller
 * @export
 * @interface WorkerMknetAutofanInfoCoolboxInfo
 */
export interface WorkerMknetAutofanInfoCoolboxInfo {
    /**
     * Model name
     * @type {string}
     * @memberof WorkerMknetAutofanInfoCoolboxInfo
     */
    model?: string;
}
/**
 *
 * @export
 * @interface WorkerMknetAutofanStats
 */
export interface WorkerMknetAutofanStats {
    /**
     *
     * @type {WorkerMknetAutofanStatsYkedaAutofanStats}
     * @memberof WorkerMknetAutofanStats
     */
    ykedaAutofanStats?: WorkerMknetAutofanStatsYkedaAutofanStats;
}
/**
 * 8MK_NET Autofan controller stats
 * @export
 * @interface WorkerMknetAutofanStatsYkedaAutofanStats
 */
export interface WorkerMknetAutofanStatsYkedaAutofanStats {
    /**
     * Fan speeds, %
     * @type {number[]}
     * @memberof WorkerMknetAutofanStatsYkedaAutofanStats
     */
    casefan?: number[];
    /**
     * Temperatures from sensors, °C
     * @type {number[]}
     * @memberof WorkerMknetAutofanStatsYkedaAutofanStats
     */
    thermosensors?: number[];
}
/**
 * Configuration for 8MK_NET Autofan controller
 * @export
 * @interface WorkerMknetAutofanYkedaAutofan
 */
export interface WorkerMknetAutofanYkedaAutofan {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    auto?: boolean;
    /**
     * Target temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    targetTemp?: number;
    /**
     * Target memory temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    targetMemTemp?: number;
    /**
     * Minimum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    minFan?: number;
    /**
     * Maximum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerMknetAutofanYkedaAutofan
     */
    maxFan?: number;
}
/**
 *
 * @export
 * @interface WorkerMultiEditRequest
 */
export interface WorkerMultiEditRequest extends WorkerActive {
    /**
     * Flight sheet ID
     * @type {number}
     * @memberof WorkerMultiEditRequest
     */
    fsId?: number;
    /**
     * Overclocking profile ID
     * @type {number}
     * @memberof WorkerMultiEditRequest
     */
    ocId?: number;
    /**
     * How to apply overclocking profile: - When applying profile via `oc_id`   - replace - copy entire per-brand configurations of both default and per-algo sets   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets - When applying config via `oc_config`   - replace - full replace the oc_config field in worker with one from request   - merge - update individual fields in worker's oc_config
     * @type {string}
     * @memberof WorkerMultiEditRequest
     */
    ocApplyMode?: WorkerMultiEditRequest.OcApplyModeEnum;
    /**
     *
     * @type {OCConfig}
     * @memberof WorkerMultiEditRequest
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof WorkerMultiEditRequest
     */
    ocAlgo?: OCAlgo;
    /**
     *
     * @type {number[]}
     * @memberof WorkerMultiEditRequest
     */
    tagIds?: number[];
    /**
     * Update mode for tags * add - add spicified tags ignoring if already assigned
 * remove - remove spicified tags if assigned
 * replace - replace all assigned tags with specified ones
 
     * @type {string}
     * @memberof WorkerMultiEditRequest
     */
    tagUpdateMode?: WorkerMultiEditRequest.TagUpdateModeEnum;
    /**
     *
     * @type {MirrorUrl}
     * @memberof WorkerMultiEditRequest
     */
    mirrorUrl?: MirrorUrl;
    /**
     *
     * @type {RepoUrl[]}
     * @memberof WorkerMultiEditRequest
     */
    repoUrls?: RepoUrl[];
    /**
     *
     * @type {MinersConfig}
     * @memberof WorkerMultiEditRequest
     */
    minersConfig?: MinersConfig;
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof WorkerMultiEditRequest
     */
    watchdog?: WorkerWatchdogWatchdog;
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof WorkerMultiEditRequest
     */
    options?: WorkerOptionsOptions;
    /**
     * Power consumption of worker's hardware, watts
     * @type {number}
     * @memberof WorkerMultiEditRequest
     */
    hardwarePowerDraw?: number;
    /**
     * Efficiency of power supply unit, %
     * @type {number}
     * @memberof WorkerMultiEditRequest
     */
    psuEfficiency?: number;
    /**
     * Apply power correction settings to power consumption value from Octominer fan controller. Default is false.
     * @type {boolean}
     * @memberof WorkerMultiEditRequest
     */
    octofanCorrectPower?: boolean;
    /**
     *
     * @type {WorkerAutofanAutofan}
     * @memberof WorkerMultiEditRequest
     */
    autofan?: WorkerAutofanAutofan;
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof WorkerMultiEditRequest
     */
    octofan?: WorkerOctofanOctofan;
    /**
     *
     * @type {WorkerCoolboxCoolbox}
     * @memberof WorkerMultiEditRequest
     */
    coolbox?: WorkerCoolboxCoolbox;
    /**
     *
     * @type {WorkerFanflapFanflap}
     * @memberof WorkerMultiEditRequest
     */
    fanflap?: WorkerFanflapFanflap;
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof WorkerMultiEditRequest
     */
    powermeter?: WorkerPowermeterPowermeter;
    /**
     *
     * @type {WorkerMknetAutofanYkedaAutofan}
     * @memberof WorkerMultiEditRequest
     */
    ykedaAutofan?: WorkerMknetAutofanYkedaAutofan;
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof WorkerMultiEditRequest
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
    /**
     * Settings for ASICs with Hive firmware, depends on model and firmware version
     * @type {{ [key: string]: string }}
     * @memberof WorkerMultiEditRequest
     */
    asicConfig?: {
        [key: string]: string;
    };
}
/**
 * @export
 * @namespace WorkerMultiEditRequest
 */
export declare namespace WorkerMultiEditRequest {
    /**
     * @export
     * @enum {string}
     */
    enum OcApplyModeEnum {
        Replace = "replace",
        Merge = "merge"
    }
    /**
     * @export
     * @enum {string}
     */
    enum TagUpdateModeEnum {
        Add = "add",
        Remove = "remove",
        Replace = "replace"
    }
}
/**
 *
 * @export
 * @interface WorkerOCAlgoActual
 */
export interface WorkerOCAlgoActual {
    /**
     * Actual algorithm name for which overclock is applied. It is either manually defined or automatically resolved.
     * @type {string}
     * @memberof WorkerOCAlgoActual
     */
    ocAlgoActual?: string;
}
/**
 *
 * @export
 * @interface WorkerOCAlgoResolved
 */
export interface WorkerOCAlgoResolved {
    /**
     * Resolved overclock algorithm name based on applied flight sheet and tuning. This property just indicates which overclock should be applied. See \"oc_algo_actual\" for which is actually applied.
     * @type {string}
     * @memberof WorkerOCAlgoResolved
     */
    ocAlgoResolved?: string;
}
/**
 *
 * @export
 * @interface WorkerOCConfig
 */
export interface WorkerOCConfig {
    /**
     *
     * @type {OCConfig}
     * @memberof WorkerOCConfig
     */
    ocConfig?: OCConfig;
    /**
     *
     * @type {OCAlgo}
     * @memberof WorkerOCConfig
     */
    ocAlgo?: OCAlgo;
}
/**
 *
 * @export
 * @interface WorkerOCId
 */
export interface WorkerOCId {
    /**
     * ID of recently applied Overclocking profile
     * @type {number}
     * @memberof WorkerOCId
     */
    ocId?: number;
}
/**
 *
 * @export
 * @interface WorkerOctofan
 */
export interface WorkerOctofan {
    /**
     *
     * @type {WorkerOctofanOctofan}
     * @memberof WorkerOctofan
     */
    octofan?: WorkerOctofanOctofan;
}
/**
 * Configuration for Octominer fan controller
 * @export
 * @interface WorkerOctofanOctofan
 */
export interface WorkerOctofanOctofan {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerOctofanOctofan
     */
    auto?: boolean;
    /**
     * Target temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    targetTemp?: number;
    /**
     * Target memory temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    targetMemTemp?: number;
    /**
     * Minimum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    minFan?: number;
    /**
     * Maximum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    maxFan?: number;
    /**
     * Enable LED blink in case of rig errors
     * @type {boolean}
     * @memberof WorkerOctofanOctofan
     */
    blinkOnErrors?: boolean;
    /**
     * Enable LED blink to find the rig
     * @type {boolean}
     * @memberof WorkerOctofanOctofan
     */
    blinkToFind?: boolean;
    /**
     * Maximum RPM for 1 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan1MaxRpm?: number;
    /**
     * Maximum RPM for 2 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan2MaxRpm?: number;
    /**
     * Maximum RPM for 3 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan3MaxRpm?: number;
    /**
     * Port number for 1 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan1Port?: number;
    /**
     * Port number for 2 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan2Port?: number;
    /**
     * Port number for 3 fan
     * @type {number}
     * @memberof WorkerOctofanOctofan
     */
    fan3Port?: number;
}
/**
 *
 * @export
 * @interface WorkerOctofanStats
 */
export interface WorkerOctofanStats {
    /**
     *
     * @type {WorkerOctofanStatsOctofanStats}
     * @memberof WorkerOctofanStats
     */
    octofanStats?: WorkerOctofanStatsOctofanStats;
}
/**
 * Octominer's fan controller stats
 * @export
 * @interface WorkerOctofanStatsOctofanStats
 */
export interface WorkerOctofanStatsOctofanStats {
    /**
     * Case fan speeds, %
     * @type {number[]}
     * @memberof WorkerOctofanStatsOctofanStats
     */
    casefan?: number[];
    /**
     * Temperatures from sensors, °C Typically the temps are: * T0 - Rig intake air * T1 - Rig exhaust air * T2 - PSU intake air * T3 - PSU exhaust air
     * @type {number[]}
     * @memberof WorkerOctofanStatsOctofanStats
     */
    thermosensors?: number[];
}
/**
 *
 * @export
 * @interface WorkerOptions
 */
export interface WorkerOptions {
    /**
     *
     * @type {WorkerOptionsOptions}
     * @memberof WorkerOptions
     */
    options?: WorkerOptionsOptions;
}
/**
 * Worker options. This object will be merged with existing one on update.
 * @export
 * @interface WorkerOptionsOptions
 */
export interface WorkerOptionsOptions {
    /**
     * Disable GUI on boot (don't start X server, console only, no OC for Nvidia)
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    disableGui?: boolean;
    /**
     * Enable maintenance mode * 0 - Maintenance mode is disabled * 1 - Don't start miner and watchdog * 2 - The same as 1 and don't load drivers
     * @type {number}
     * @memberof WorkerOptionsOptions
     */
    maintenanceMode?: number;
    /**
     * Interval in seconds between pushing stats to server. Default is 10 seconds. Note that configs and commands will be pulled by worker with the same interval.
     * @type {number}
     * @memberof WorkerOptionsOptions
     */
    pushInterval?: number;
    /**
     * Delay in seconds before miner start on worker boot.
     * @type {number}
     * @memberof WorkerOptionsOptions
     */
    minerDelay?: number;
    /**
     * Enable DoH (DNS over HTTPS). If no value is set Hive will not touch any related services. * 0 - DoH is disabled * 1 - DoH is enabled only for Hive services * 2 - DoH is enabled globaly for the whole system
     * @type {number}
     * @memberof WorkerOptionsOptions
     */
    doh?: number;
    /**
     * Use \"shutdown & boot after 30 sec\" instead of regular reboot (on miner errors, watchdog, etc.).
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    powerCycle?: boolean;
    /**
     * enable or disable shellinabox
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    shellinaboxEnable?: boolean;
    /**
     * enable or disable ssh access
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    sshEnable?: boolean;
    /**
     * enable or disable ssh authentication by password
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    sshPasswordEnable?: boolean;
    /**
     * ssh authorization keys required if ssh_password_enable is false
     * @type {string}
     * @memberof WorkerOptionsOptions
     */
    sshAuthorizedKeys?: string;
    /**
     * enable or disable vnc
     * @type {boolean}
     * @memberof WorkerOptionsOptions
     */
    vncEnable?: boolean;
    /**
     * vnc password required if vnc_enable is true should be different than worker password
     * @type {string}
     * @memberof WorkerOptionsOptions
     */
    vncPassword?: string;
}
/**
 *
 * @export
 * @interface WorkerOverclock
 */
export interface WorkerOverclock {
    /**
     *
     * @type {WorkerOverclockOverclock}
     * @memberof WorkerOverclock
     */
    overclock?: WorkerOverclockOverclock;
}
/**
 * Actually applied overclock
 * @export
 * @interface WorkerOverclockOverclock
 */
export interface WorkerOverclockOverclock {
}
/**
 *
 * @export
 * @interface WorkerPassword
 */
export interface WorkerPassword {
    /**
     *
     * @type {string}
     * @memberof WorkerPassword
     */
    password?: string;
}
/**
 *
 * @export
 * @interface WorkerPowermeter
 */
export interface WorkerPowermeter {
    /**
     *
     * @type {WorkerPowermeterPowermeter}
     * @memberof WorkerPowermeter
     */
    powermeter?: WorkerPowermeterPowermeter;
}
/**
 * Configuration for Powermeter controller
 * @export
 * @interface WorkerPowermeterPowermeter
 */
export interface WorkerPowermeterPowermeter {
    /**
     * Energy meters configuration
     * @type {WorkerPowermeterPowermeterMeters[]}
     * @memberof WorkerPowermeterPowermeter
     */
    meters?: WorkerPowermeterPowermeterMeters[];
}
/**
 *
 * @export
 * @interface WorkerPowermeterPowermeterMeters
 */
export interface WorkerPowermeterPowermeterMeters {
    /**
     * API URL
     * @type {string}
     * @memberof WorkerPowermeterPowermeterMeters
     */
    url: string;
    /**
     * Username
     * @type {string}
     * @memberof WorkerPowermeterPowermeterMeters
     */
    user?: string;
    /**
     * Password
     * @type {string}
     * @memberof WorkerPowermeterPowermeterMeters
     */
    pass?: string;
}
/**
 *
 * @export
 * @interface WorkerPowermeterStats
 */
export interface WorkerPowermeterStats {
    /**
     *
     * @type {PowermeterStats}
     * @memberof WorkerPowermeterStats
     */
    powermeterStats?: PowermeterStats;
}
/**
 *
 * @export
 * @interface WorkerProps
 */
export interface WorkerProps extends WorkerIpAddresses {
    /**
     *
     * @type {WorkerRemoteAddressRemoteAddress}
     * @memberof WorkerProps
     */
    remoteAddress?: WorkerRemoteAddressRemoteAddress;
    /**
     * VPN is configured
     * @type {boolean}
     * @memberof WorkerProps
     */
    vpn?: boolean;
    /**
     * Worker has AMD GPUs
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasAmd?: boolean;
    /**
     * Worker has Nvidia GPUs
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasNvidia?: boolean;
    /**
     * New OS version is available
     * @type {boolean}
     * @memberof WorkerProps
     */
    needsUpgrade?: boolean;
    /**
     * packages_hash
     * @type {string}
     * @memberof WorkerProps
     */
    packagesHash?: string;
    /**
     *
     * @type {WorkerPropsLanConfig}
     * @memberof WorkerProps
     */
    lanConfig?: WorkerPropsLanConfig;
    /**
     * Hive OS system type
     * @type {string}
     * @memberof WorkerProps
     */
    systemType?: WorkerProps.SystemTypeEnum;
    /**
     *
     * @type {string}
     * @memberof WorkerProps
     */
    osName?: string;
    /**
     * Worker has Octominer fan controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasOctofan?: boolean;
    /**
     * Worker has Coolbox fan controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasCoolbox?: boolean;
    /**
     * Worker has FanFlap controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasFanflap?: boolean;
    /**
     * Worker has Powermeter controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasPowermeter?: boolean;
    /**
     * Worker is an ASIC Hub
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasAsichub?: boolean;
    /**
     * Worker has installed Donnager Relay controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasDonnagerRelay?: boolean;
    /**
     * Worker has installed Ykeda Autofan controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasYkedaAutofan?: boolean;
    /**
     * Worker has installed Windtank Autofan controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasWindtankAutofan?: boolean;
    /**
     * Worker has installed 8MK_NET Autofan controller
     * @type {boolean}
     * @memberof WorkerProps
     */
    hasMknetAutofan?: boolean;
    /**
     *
     * @type {FarmPropsPersonalSettings}
     * @memberof WorkerProps
     */
    personalSettings?: FarmPropsPersonalSettings;
}
/**
 * @export
 * @namespace WorkerProps
 */
export declare namespace WorkerProps {
    /**
     * @export
     * @enum {string}
     */
    enum SystemTypeEnum {
        Linux = "linux",
        Asic = "asic",
        Windows = "windows"
    }
}
/**
 * LAN configuration
 * @export
 * @interface WorkerPropsLanConfig
 */
export interface WorkerPropsLanConfig {
    /**
     * DHCP is enabled
     * @type {boolean}
     * @memberof WorkerPropsLanConfig
     */
    dhcp?: boolean;
    /**
     * IP address
     * @type {string}
     * @memberof WorkerPropsLanConfig
     */
    address?: string;
    /**
     * Gateway address
     * @type {string}
     * @memberof WorkerPropsLanConfig
     */
    gateway?: string;
    /**
     * DNS server
     * @type {string}
     * @memberof WorkerPropsLanConfig
     */
    dns?: string;
}
/**
 *
 * @export
 * @interface WorkerRedValues
 */
export interface WorkerRedValues {
    /**
     * Red Temperature, °C
     * @type {number}
     * @memberof WorkerRedValues
     */
    redTemp?: number;
    /**
     * Red memory temperature (for rigs), °C
     * @type {number}
     * @memberof WorkerRedValues
     */
    redMemTemp?: number;
    /**
     * Red CPU temperature (for rigs), °C
     * @type {number}
     * @memberof WorkerRedValues
     */
    redCpuTemp?: number;
    /**
     * Red Board Temperature (for ASICs), °C
     * @type {number}
     * @memberof WorkerRedValues
     */
    redBoardTemp?: number;
    /**
     * Red Fan speed, %
     * @type {number}
     * @memberof WorkerRedValues
     */
    redFan?: number;
    /**
     * Red Accepted Shares Ratio, %
     * @type {number}
     * @memberof WorkerRedValues
     */
    redAsr?: number;
    /**
     * Red Load Average per one CPU core
     * @type {number}
     * @memberof WorkerRedValues
     */
    redLa?: number;
    /**
     * Red hashrates per algo
     * @type {FarmHashratesHashrates[]}
     * @memberof WorkerRedValues
     */
    redHashrates?: FarmHashratesHashrates[];
}
/**
 *
 * @export
 * @interface WorkerRemoteAddress
 */
export interface WorkerRemoteAddress {
    /**
     *
     * @type {WorkerRemoteAddressRemoteAddress}
     * @memberof WorkerRemoteAddress
     */
    remoteAddress?: WorkerRemoteAddressRemoteAddress;
}
/**
 * Remote address info
 * @export
 * @interface WorkerRemoteAddressRemoteAddress
 */
export interface WorkerRemoteAddressRemoteAddress {
    /**
     * IP address
     * @type {string}
     * @memberof WorkerRemoteAddressRemoteAddress
     */
    ip?: string;
    /**
     * Resolved hostname
     * @type {string}
     * @memberof WorkerRemoteAddressRemoteAddress
     */
    hostname?: string;
}
/**
 *
 * @export
 * @interface WorkerRepoUrls
 */
export interface WorkerRepoUrls {
    /**
     *
     * @type {RepoUrl[]}
     * @memberof WorkerRepoUrls
     */
    repoUrls?: RepoUrl[];
}
/**
 *
 * @export
 * @interface WorkerSearchId
 */
export interface WorkerSearchId {
    /**
     * ID of cached workers selection
     * @type {string}
     * @memberof WorkerSearchId
     */
    searchId?: string;
}
/**
 *
 * @export
 * @interface WorkerShortInfo
 */
export interface WorkerShortInfo {
    /**
     * List of assigned ip addresses
     * @type {string[]}
     * @memberof WorkerShortInfo
     */
    ipAddresses?: string[];
}
/**
 *
 * @export
 * @interface WorkerStats
 */
export interface WorkerStats {
    /**
     *
     * @type {WorkerStatsStats}
     * @memberof WorkerStats
     */
    stats?: WorkerStatsStats;
}
/**
 * Worker stats
 * @export
 * @interface WorkerStatsStats
 */
export interface WorkerStatsStats {
    /**
     * Rig is online and reports stats
     * @type {boolean}
     * @memberof WorkerStatsStats
     */
    online?: boolean;
    /**
     * When the rig was booted
     * @type {number}
     * @memberof WorkerStatsStats
     */
    bootTime?: number;
    /**
     * Timestamp when these stats were updated
     * @type {number}
     * @memberof WorkerStatsStats
     */
    statsTime?: number;
    /**
     * Timestamp when miner was started
     * @type {number}
     * @memberof WorkerStatsStats
     */
    minerStartTime?: number;
    /**
     * Amount of online GPUs
     * @type {number}
     * @memberof WorkerStatsStats
     */
    gpusOnline?: number;
    /**
     * Amount of offline GPUs
     * @type {number}
     * @memberof WorkerStatsStats
     */
    gpusOffline?: number;
    /**
     * Amount of overheated GPUs
     * @type {number}
     * @memberof WorkerStatsStats
     */
    gpusOverheated?: number;
    /**
     * Amount of offline CPUs
     * @type {number}
     * @memberof WorkerStatsStats
     */
    cpusOffline?: number;
    /**
     * Amount of online ASIC boards
     * @type {number}
     * @memberof WorkerStatsStats
     */
    boardsOnline?: number;
    /**
     * Amount of offline ASIC boards
     * @type {number}
     * @memberof WorkerStatsStats
     */
    boardsOffline?: number;
    /**
     * Amount of overheated ASIC boards
     * @type {number}
     * @memberof WorkerStatsStats
     */
    boardsOverheated?: number;
    /**
     * Worker power draw, watts
     * @type {number}
     * @memberof WorkerStatsStats
     */
    powerDraw?: number;
    /**
     * Has too hot GPUs/boards (exceeds red value)
     * @type {boolean}
     * @memberof WorkerStatsStats
     */
    overheated?: boolean;
    /**
     * Has too high CPU load (exceeds red value)
     * @type {boolean}
     * @memberof WorkerStatsStats
     */
    overloaded?: boolean;
    /**
     * Has invalid shares
     * @type {boolean}
     * @memberof WorkerStatsStats
     */
    invalid?: boolean;
    /**
     * Has too low Accepted Shares Ratio (below red value)
     * @type {boolean}
     * @memberof WorkerStatsStats
     */
    lowAsr?: boolean;
    /**
     * List of current worker problems
     * @type {Problem[]}
     * @memberof WorkerStatsStats
     */
    problems?: Problem[];
    /**
     * Average hashrates per algorithm in kH/s
     * @type {any}
     * @memberof WorkerStatsStats
     */
    avgHashrates?: any;
}
/**
 *
 * @export
 * @interface WorkerTransferRequest
 */
export interface WorkerTransferRequest {
    /**
     * Farm ID where to transfer the worker
     * @type {number}
     * @memberof WorkerTransferRequest
     */
    targetFarmId: number;
}
/**
 *
 * @export
 * @interface WorkerTunedMiners
 */
export interface WorkerTunedMiners {
    /**
     * List of miner names from active flight sheet that are tuned in this worker.
     * @type {MinerName[]}
     * @memberof WorkerTunedMiners
     */
    tunedMiners?: MinerName[];
}
/**
 *
 * @export
 * @interface WorkerVersions
 */
export interface WorkerVersions {
    /**
     *
     * @type {WorkerVersionsVersions}
     * @memberof WorkerVersions
     */
    versions?: WorkerVersionsVersions;
}
/**
 *
 * @export
 * @interface WorkerVersionsVersions
 */
export interface WorkerVersionsVersions {
    /**
     * Hive OS version
     * @type {string}
     * @memberof WorkerVersionsVersions
     */
    hive?: string;
    /**
     * Linux kernel version
     * @type {string}
     * @memberof WorkerVersionsVersions
     */
    kernel?: string;
    /**
     * AMD driver version
     * @type {string}
     * @memberof WorkerVersionsVersions
     */
    amdDriver?: string;
    /**
     * Nvidia driver version
     * @type {string}
     * @memberof WorkerVersionsVersions
     */
    nvidiaDriver?: string;
}
/**
 *
 * @export
 * @interface WorkerWatchdog
 */
export interface WorkerWatchdog {
    /**
     *
     * @type {WorkerWatchdogWatchdog}
     * @memberof WorkerWatchdog
     */
    watchdog?: WorkerWatchdogWatchdog;
}
/**
 * Watchdog system
 * @export
 * @interface WorkerWatchdogWatchdog
 */
export interface WorkerWatchdogWatchdog {
    /**
     * Enable watchdog
     * @type {boolean}
     * @memberof WorkerWatchdogWatchdog
     */
    enabled: boolean;
    /**
     * Restart miner after minutes. Required if enabled
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    restartTimeout: number;
    /**
     * Reboot worker after minutes. Required if enabled
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    rebootTimeout: number;
    /**
     * Enable chacking power in watchdog.
     * @type {boolean}
     * @memberof WorkerWatchdogWatchdog
     */
    checkPower?: boolean;
    /**
     * Enable checking internet connection in watchdog
     * @type {boolean}
     * @memberof WorkerWatchdogWatchdog
     */
    checkConnection?: boolean;
    /**
     * Min power for start action. Setup action in power_action parameter.
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    minPower?: number;
    /**
     * Max power for start action. Setup action in power_action parameter.
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    maxPower?: number;
    /**
     * Action for start if power value will be lower or upper appopriate paramter.
     * @type {string}
     * @memberof WorkerWatchdogWatchdog
     */
    powerAction?: WorkerWatchdogWatchdog.PowerActionEnum;
    /**
     * Reboot worker if GPU get offline
     * @type {boolean}
     * @memberof WorkerWatchdogWatchdog
     */
    checkGpu?: boolean;
    /**
     * Reboot worker if Load Average is higher than this value
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    maxLa?: number;
    /**
     * Reboot worker if Accepted shares ratio is lower than this value
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    minAsr?: number;
    /**
     * Reboot worker if miner does not generate shares within this amount of minutes
     * @type {number}
     * @memberof WorkerWatchdogWatchdog
     */
    shareTime?: number;
    /**
     * Per miner options
     * @type {WorkerWatchdogWatchdogOptions[]}
     * @memberof WorkerWatchdogWatchdog
     */
    options?: WorkerWatchdogWatchdogOptions[];
}
/**
 * @export
 * @namespace WorkerWatchdogWatchdog
 */
export declare namespace WorkerWatchdogWatchdog {
    /**
     * @export
     * @enum {string}
     */
    enum PowerActionEnum {
        Reboot = "reboot",
        Shutdown = "shutdown"
    }
}
/**
 *
 * @export
 * @interface WorkerWatchdogWatchdogOptions
 */
export interface WorkerWatchdogWatchdogOptions {
    /**
     *
     * @type {MinerName}
     * @memberof WorkerWatchdogWatchdogOptions
     */
    miner: MinerName;
    /**
     * Minimal hashrate value
     * @type {number}
     * @memberof WorkerWatchdogWatchdogOptions
     */
    minhash: number;
    /**
     * Units for Minimal hashrate value. Omit this parameter to use raw minhash value
     * @type {string}
     * @memberof WorkerWatchdogWatchdogOptions
     */
    units?: WorkerWatchdogWatchdogOptions.UnitsEnum;
}
/**
 * @export
 * @namespace WorkerWatchdogWatchdogOptions
 */
export declare namespace WorkerWatchdogWatchdogOptions {
    /**
     * @export
     * @enum {string}
     */
    enum UnitsEnum {
        K = "k",
        M = "M",
        G = "G",
        T = "T",
        P = "P"
    }
}
/**
 *
 * @export
 * @interface WorkerWindtankAutofan
 */
export interface WorkerWindtankAutofan {
    /**
     *
     * @type {WorkerWindtankAutofanWindtankAutofan}
     * @memberof WorkerWindtankAutofan
     */
    windtankAutofan?: WorkerWindtankAutofanWindtankAutofan;
}
/**
 *
 * @export
 * @interface WorkerWindtankAutofanInfo
 */
export interface WorkerWindtankAutofanInfo {
    /**
     *
     * @type {WorkerWindtankAutofanInfoWindtankAutofanInfo}
     * @memberof WorkerWindtankAutofanInfo
     */
    windtankAutofanInfo?: WorkerWindtankAutofanInfoWindtankAutofanInfo;
}
/**
 * Information about installed Windtank Autofan controller
 * @export
 * @interface WorkerWindtankAutofanInfoWindtankAutofanInfo
 */
export interface WorkerWindtankAutofanInfoWindtankAutofanInfo {
    /**
     * Model name
     * @type {string}
     * @memberof WorkerWindtankAutofanInfoWindtankAutofanInfo
     */
    model?: string;
}
/**
 *
 * @export
 * @interface WorkerWindtankAutofanStats
 */
export interface WorkerWindtankAutofanStats {
    /**
     *
     * @type {WorkerWindtankAutofanStatsWindtankAutofanStats}
     * @memberof WorkerWindtankAutofanStats
     */
    windtankAutofanStats?: WorkerWindtankAutofanStatsWindtankAutofanStats;
}
/**
 * Windtank Autofan controller stats
 * @export
 * @interface WorkerWindtankAutofanStatsWindtankAutofanStats
 */
export interface WorkerWindtankAutofanStatsWindtankAutofanStats {
    /**
     * Fan speeds, %
     * @type {number[]}
     * @memberof WorkerWindtankAutofanStatsWindtankAutofanStats
     */
    casefan?: number[];
    /**
     * Temperatures from sensors, °C
     * @type {number[]}
     * @memberof WorkerWindtankAutofanStatsWindtankAutofanStats
     */
    thermosensors?: number[];
}
/**
 * Configuration for Windtank Autofan controller
 * @export
 * @interface WorkerWindtankAutofanWindtankAutofan
 */
export interface WorkerWindtankAutofanWindtankAutofan {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerWindtankAutofanWindtankAutofan
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerWindtankAutofanWindtankAutofan
     */
    auto?: boolean;
    /**
     * Target temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerWindtankAutofanWindtankAutofan
     */
    targetTemp?: number;
    /**
     * Target memory temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerWindtankAutofanWindtankAutofan
     */
    targetMemTemp?: number;
    /**
     * Minimum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerWindtankAutofanWindtankAutofan
     */
    minFan?: number;
}
/**
 *
 * @export
 * @interface WorkerYkedaAutofan
 */
export interface WorkerYkedaAutofan {
    /**
     *
     * @type {WorkerYkedaAutofanYkedaAutofan}
     * @memberof WorkerYkedaAutofan
     */
    ykedaAutofan?: WorkerYkedaAutofanYkedaAutofan;
}
/**
 *
 * @export
 * @interface WorkerYkedaAutofanInfo
 */
export interface WorkerYkedaAutofanInfo {
    /**
     *
     * @type {WorkerYkedaAutofanInfoCoolboxInfo}
     * @memberof WorkerYkedaAutofanInfo
     */
    coolboxInfo?: WorkerYkedaAutofanInfoCoolboxInfo;
}
/**
 * Information about installed Ykeda Autofan controller
 * @export
 * @interface WorkerYkedaAutofanInfoCoolboxInfo
 */
export interface WorkerYkedaAutofanInfoCoolboxInfo {
    /**
     * Model name
     * @type {string}
     * @memberof WorkerYkedaAutofanInfoCoolboxInfo
     */
    model?: string;
}
/**
 *
 * @export
 * @interface WorkerYkedaAutofanStats
 */
export interface WorkerYkedaAutofanStats {
    /**
     *
     * @type {WorkerYkedaAutofanStatsYkedaAutofanStats}
     * @memberof WorkerYkedaAutofanStats
     */
    ykedaAutofanStats?: WorkerYkedaAutofanStatsYkedaAutofanStats;
}
/**
 * Ykeda Autofan controller stats
 * @export
 * @interface WorkerYkedaAutofanStatsYkedaAutofanStats
 */
export interface WorkerYkedaAutofanStatsYkedaAutofanStats {
    /**
     * Fan speeds, %
     * @type {number[]}
     * @memberof WorkerYkedaAutofanStatsYkedaAutofanStats
     */
    casefan?: number[];
    /**
     * Temperatures from sensors, °C
     * @type {number[]}
     * @memberof WorkerYkedaAutofanStatsYkedaAutofanStats
     */
    thermosensors?: number[];
}
/**
 * Configuration for Ykeda Autofan controller
 * @export
 * @interface WorkerYkedaAutofanYkedaAutofan
 */
export interface WorkerYkedaAutofanYkedaAutofan {
    /**
     * Manual fan speed, %
     * @type {number}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    fan?: number;
    /**
     * Enable automatic fan speed manage
     * @type {boolean}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    auto?: boolean;
    /**
     * Target temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    targetTemp?: number;
    /**
     * Target memory temperature for automatic mode, °C
     * @type {number}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    targetMemTemp?: number;
    /**
     * Minimum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    minFan?: number;
    /**
     * Maximum fan speed for automatic mode, %
     * @type {number}
     * @memberof WorkerYkedaAutofanYkedaAutofan
     */
    maxFan?: number;
}
