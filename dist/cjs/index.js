"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveOSAPI = exports.HiveOSAPIError = exports.WorkerWatchdogWatchdogOptions = exports.WorkerWatchdogWatchdog = exports.WorkerProps = exports.WorkerMultiEditRequest = exports.Worker = exports.WorkerEditRequest = exports.WorkerEditOCMode = exports.WorkerEditOC = exports.WorkerCreateRequest = exports.WorkerCoolboxInfoCoolboxInfo = exports.WorkerAutofanAutofan = exports.WalletBalanceBalance = exports.TransactionTypeFarm = exports.TransactionTypeAccount = exports.TagIdsEdit = exports.ScheduleActionData = exports.RomFields = exports.ReferralCurrency = exports.Problem = exports.Platform = exports.OCUpdateRequest = exports.NotificationFarmEventEnum = exports.NotificationChannelEnum = exports.NotificationAccountEventEnum = exports.MinerName = exports.MessageType = exports.InlineResponse20065Data = exports.InlineResponse20060Data = exports.InlineResponse20011Data = exports.HiveVersion = exports.FarmUpdateRequest = exports.FarmTransferType = exports.Deposit = exports.CommandsEnum = exports.BillingType = exports.ApiKeySource = exports.ApiKeyCreateRequest = exports.ApiKey = exports.AccessRoleEnum = void 0;
const axios_1 = __importStar(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const API_ROOT = 'https://api2.hiveos.farm/api/v2/';
/**
 * Access role
 * @export
 * @enum {string}
 */
var AccessRoleEnum;
(function (AccessRoleEnum) {
    AccessRoleEnum["Monitor"] = "monitor";
    AccessRoleEnum["Tech"] = "tech";
    AccessRoleEnum["Rocket"] = "rocket";
    AccessRoleEnum["Advanced"] = "advanced";
    AccessRoleEnum["Full"] = "full";
})(AccessRoleEnum = exports.AccessRoleEnum || (exports.AccessRoleEnum = {}));
/**
 * @export
 * @namespace ApiKey
 */
var ApiKey;
(function (ApiKey) {
    /**
     * @export
     * @enum {string}
     */
    let SourceTypeEnum;
    (function (SourceTypeEnum) {
        SourceTypeEnum["Pool"] = "pool";
        SourceTypeEnum["Exchange"] = "exchange";
    })(SourceTypeEnum = ApiKey.SourceTypeEnum || (ApiKey.SourceTypeEnum = {}));
})(ApiKey = exports.ApiKey || (exports.ApiKey = {}));
/**
 * @export
 * @namespace ApiKeyCreateRequest
 */
var ApiKeyCreateRequest;
(function (ApiKeyCreateRequest) {
    /**
     * @export
     * @enum {string}
     */
    let SourceTypeEnum;
    (function (SourceTypeEnum) {
        SourceTypeEnum["Pool"] = "pool";
        SourceTypeEnum["Exchange"] = "exchange";
    })(SourceTypeEnum = ApiKeyCreateRequest.SourceTypeEnum || (ApiKeyCreateRequest.SourceTypeEnum = {}));
})(ApiKeyCreateRequest = exports.ApiKeyCreateRequest || (exports.ApiKeyCreateRequest = {}));
/**
 * @export
 * @namespace ApiKeySource
 */
var ApiKeySource;
(function (ApiKeySource) {
    /**
     * @export
     * @enum {string}
     */
    let SourceTypeEnum;
    (function (SourceTypeEnum) {
        SourceTypeEnum["Pool"] = "pool";
        SourceTypeEnum["Exchange"] = "exchange";
    })(SourceTypeEnum = ApiKeySource.SourceTypeEnum || (ApiKeySource.SourceTypeEnum = {}));
})(ApiKeySource = exports.ApiKeySource || (exports.ApiKeySource = {}));
/**
 * Billing type: * 11 - Rigs general * 12 - Rigs that mine on hiveon pool * 13 - Rigs that mine hiveon coins on other pools * 21 - ASICs general * 22 - ASICs with Hive firmware
 * @export
 * @enum {string}
 */
var BillingType;
(function (BillingType) {
    BillingType[BillingType["NUMBER_11"] = 11] = "NUMBER_11";
    BillingType[BillingType["NUMBER_12"] = 12] = "NUMBER_12";
    BillingType[BillingType["NUMBER_13"] = 13] = "NUMBER_13";
    BillingType[BillingType["NUMBER_21"] = 21] = "NUMBER_21";
    BillingType[BillingType["NUMBER_22"] = 22] = "NUMBER_22";
})(BillingType = exports.BillingType || (exports.BillingType = {}));
/**
 * Command name
 * @export
 * @enum {string}
 */
var CommandsEnum;
(function (CommandsEnum) {
    CommandsEnum["Reboot"] = "reboot";
    CommandsEnum["Shutdown"] = "shutdown";
    CommandsEnum["Upgrade"] = "upgrade";
    CommandsEnum["Miner"] = "miner";
    CommandsEnum["Teleconsole"] = "teleconsole";
    CommandsEnum["Hssh"] = "hssh";
    CommandsEnum["Exec"] = "exec";
    CommandsEnum["AmdDownload"] = "amd_download";
    CommandsEnum["AmdUpload"] = "amd_upload";
    CommandsEnum["NvidiaDownload"] = "nvidia_download";
    CommandsEnum["NvidiaUpload"] = "nvidia_upload";
    CommandsEnum["AsicUpgrade"] = "asic_upgrade";
    CommandsEnum["OctofanRecalibrate"] = "octofan_recalibrate";
    CommandsEnum["BenchmarkStop"] = "benchmark_stop";
    CommandsEnum["DonnagerRelaySwitch"] = "donnager_relay_switch";
    CommandsEnum["PoolTest"] = "pool_test";
})(CommandsEnum = exports.CommandsEnum || (exports.CommandsEnum = {}));
/**
 * @export
 * @namespace Deposit
 */
var Deposit;
(function (Deposit) {
    /**
     * @export
     * @enum {string}
     */
    let SourceEnum;
    (function (SourceEnum) {
        SourceEnum["Account"] = "account";
        SourceEnum["Farm"] = "farm";
    })(SourceEnum = Deposit.SourceEnum || (Deposit.SourceEnum = {}));
})(Deposit = exports.Deposit || (exports.Deposit = {}));
/**
 * Transfer type * `owner` - target user will become farm's owner * `payer` - target user will become farm's payer
 * @export
 * @enum {string}
 */
var FarmTransferType;
(function (FarmTransferType) {
    FarmTransferType["Owner"] = "owner";
    FarmTransferType["Payer"] = "payer";
})(FarmTransferType = exports.FarmTransferType || (exports.FarmTransferType = {}));
/**
 * @export
 * @namespace FarmUpdateRequest
 */
var FarmUpdateRequest;
(function (FarmUpdateRequest) {
    /**
     * @export
     * @enum {string}
     */
    let TagUpdateModeEnum;
    (function (TagUpdateModeEnum) {
        TagUpdateModeEnum["Add"] = "add";
        TagUpdateModeEnum["Remove"] = "remove";
        TagUpdateModeEnum["Replace"] = "replace";
    })(TagUpdateModeEnum = FarmUpdateRequest.TagUpdateModeEnum || (FarmUpdateRequest.TagUpdateModeEnum = {}));
})(FarmUpdateRequest = exports.FarmUpdateRequest || (exports.FarmUpdateRequest = {}));
/**
 * @export
 * @namespace HiveVersion
 */
var HiveVersion;
(function (HiveVersion) {
    /**
     * @export
     * @enum {string}
     */
    let SystemTypeEnum;
    (function (SystemTypeEnum) {
        SystemTypeEnum["Linux"] = "linux";
        SystemTypeEnum["Asic"] = "asic";
        SystemTypeEnum["Windows"] = "windows";
    })(SystemTypeEnum = HiveVersion.SystemTypeEnum || (HiveVersion.SystemTypeEnum = {}));
})(HiveVersion = exports.HiveVersion || (exports.HiveVersion = {}));
/**
 * @export
 * @namespace InlineResponse20011Data
 */
var InlineResponse20011Data;
(function (InlineResponse20011Data) {
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Info"] = "info";
        TypeEnum["Success"] = "success";
        TypeEnum["Warning"] = "warning";
        TypeEnum["Danger"] = "danger";
    })(TypeEnum = InlineResponse20011Data.TypeEnum || (InlineResponse20011Data.TypeEnum = {}));
})(InlineResponse20011Data = exports.InlineResponse20011Data || (exports.InlineResponse20011Data = {}));
/**
 * @export
 * @namespace InlineResponse20060Data
 */
var InlineResponse20060Data;
(function (InlineResponse20060Data) {
    /**
     * @export
     * @enum {string}
     */
    let GpuBrandEnum;
    (function (GpuBrandEnum) {
        GpuBrandEnum["Nvidia"] = "nvidia";
        GpuBrandEnum["Amd"] = "amd";
    })(GpuBrandEnum = InlineResponse20060Data.GpuBrandEnum || (InlineResponse20060Data.GpuBrandEnum = {}));
})(InlineResponse20060Data = exports.InlineResponse20060Data || (exports.InlineResponse20060Data = {}));
/**
 * @export
 * @namespace InlineResponse20065Data
 */
var InlineResponse20065Data;
(function (InlineResponse20065Data) {
    /**
     * @export
     * @enum {string}
     */
    let NameEnum;
    (function (NameEnum) {
        NameEnum["Hive"] = "hive";
        NameEnum["Coinpayments"] = "coinpayments";
    })(NameEnum = InlineResponse20065Data.NameEnum || (InlineResponse20065Data.NameEnum = {}));
})(InlineResponse20065Data = exports.InlineResponse20065Data || (exports.InlineResponse20065Data = {}));
/**
 *
 * @export
 * @enum {string}
 */
var MessageType;
(function (MessageType) {
    MessageType["Success"] = "success";
    MessageType["Info"] = "info";
    MessageType["File"] = "file";
    MessageType["Warning"] = "warning";
    MessageType["Danger"] = "danger";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * Miner ID
 * @export
 * @enum {string}
 */
var MinerName;
(function (MinerName) {
    MinerName["Claymore"] = "claymore";
    MinerName["ClaymoreZ"] = "claymore-z";
    MinerName["ClaymoreX"] = "claymore-x";
    MinerName["Ewbf"] = "ewbf";
    MinerName["Ccminer"] = "ccminer";
    MinerName["Ethminer"] = "ethminer";
    MinerName["Sgminer"] = "sgminer";
    MinerName["Dstm"] = "dstm";
    MinerName["Bminer"] = "bminer";
    MinerName["Lolminer"] = "lolminer";
    MinerName["Optiminer"] = "optiminer";
    MinerName["XmrStak"] = "xmr-stak";
    MinerName["Xmrig"] = "xmrig";
    MinerName["CpuminerOpt"] = "cpuminer-opt";
    MinerName["Custom"] = "custom";
    MinerName["Asicminer"] = "asicminer";
})(MinerName = exports.MinerName || (exports.MinerName = {}));
/**
 * * `login` - Log in using password
 * @export
 * @enum {string}
 */
var NotificationAccountEventEnum;
(function (NotificationAccountEventEnum) {
    NotificationAccountEventEnum["Login"] = "login";
})(NotificationAccountEventEnum = exports.NotificationAccountEventEnum || (exports.NotificationAccountEventEnum = {}));
/**
 * Notification channel
 * @export
 * @enum {string}
 */
var NotificationChannelEnum;
(function (NotificationChannelEnum) {
    NotificationChannelEnum["Telegram"] = "telegram";
    NotificationChannelEnum["Discord"] = "discord";
    NotificationChannelEnum["Wechat"] = "wechat";
    NotificationChannelEnum["Mobilepush"] = "mobilepush";
})(NotificationChannelEnum = exports.NotificationChannelEnum || (exports.NotificationChannelEnum = {}));
/**
 * * `offline` - Worker went offline * `online` - Worker became online * `boot` - Worker booted * `danger` - Danger message from worker * `warning` - Warning message from worker * `info` - Info message from worker * `success` - Success message from worker * `red_temp` - Temperature >= red_temp + 3°C * `red_mem_temp` - GPU memory temperature >= red_mem_temp + 3°C * `red_cpu_temp` - CPU temperature >= red_cpu_temp + 3°C * `red_board_temp` - ASIC board temperature >= red_board_temp + 3°C * `red_fan` - Fan speed >= red_fan + 5% * `red_asr` - Accepted shares ratio <= red_asr - 5%. Notification is muted while total amount of shares < 10. * `red_la` - Load averege (15m) >= red_la + 1. Notification is muted for 20 minutes after boot. * `missed_unit` - Missed GPU/Board * `summary` - Hourly summary
 * @export
 * @enum {string}
 */
var NotificationFarmEventEnum;
(function (NotificationFarmEventEnum) {
    NotificationFarmEventEnum["Offline"] = "offline";
    NotificationFarmEventEnum["Online"] = "online";
    NotificationFarmEventEnum["Boot"] = "boot";
    NotificationFarmEventEnum["Danger"] = "danger";
    NotificationFarmEventEnum["Warning"] = "warning";
    NotificationFarmEventEnum["Info"] = "info";
    NotificationFarmEventEnum["Success"] = "success";
    NotificationFarmEventEnum["RedTemp"] = "red_temp";
    NotificationFarmEventEnum["RedMemTemp"] = "red_mem_temp";
    NotificationFarmEventEnum["RedCpuTemp"] = "red_cpu_temp";
    NotificationFarmEventEnum["RedBoardTemp"] = "red_board_temp";
    NotificationFarmEventEnum["RedFan"] = "red_fan";
    NotificationFarmEventEnum["RedAsr"] = "red_asr";
    NotificationFarmEventEnum["RedLa"] = "red_la";
    NotificationFarmEventEnum["MissedUnit"] = "missed_unit";
    NotificationFarmEventEnum["Summary"] = "summary";
})(NotificationFarmEventEnum = exports.NotificationFarmEventEnum || (exports.NotificationFarmEventEnum = {}));
/**
 * @export
 * @namespace OCUpdateRequest
 */
var OCUpdateRequest;
(function (OCUpdateRequest) {
    /**
     * @export
     * @enum {string}
     */
    let OptionsUpdateModeEnum;
    (function (OptionsUpdateModeEnum) {
        OptionsUpdateModeEnum["Replace"] = "replace";
        OptionsUpdateModeEnum["Merge"] = "merge";
    })(OptionsUpdateModeEnum = OCUpdateRequest.OptionsUpdateModeEnum || (OCUpdateRequest.OptionsUpdateModeEnum = {}));
})(OCUpdateRequest = exports.OCUpdateRequest || (exports.OCUpdateRequest = {}));
/**
 * Worker platform: * 1 - GPU * 2 - ASIC * 3 - Device
 * @export
 * @enum {string}
 */
var Platform;
(function (Platform) {
    Platform[Platform["NUMBER_1"] = 1] = "NUMBER_1";
    Platform[Platform["NUMBER_2"] = 2] = "NUMBER_2";
    Platform[Platform["NUMBER_3"] = 3] = "NUMBER_3";
})(Platform = exports.Platform || (exports.Platform = {}));
/**
 *
 * @export
 * @enum {string}
 */
var Problem;
(function (Problem) {
    Problem["Overheat"] = "overheat";
    Problem["Overload"] = "overload";
    Problem["LowAsr"] = "low_asr";
    Problem["HasInvalid"] = "has_invalid";
    Problem["MissedUnit"] = "missed_unit";
    Problem["MissedHashrate"] = "missed_hashrate";
    Problem["MissedTemp"] = "missed_temp";
    Problem["MissedFan"] = "missed_fan";
    Problem["NoHashrate"] = "no_hashrate";
    Problem["ErrorMessage"] = "error_message";
    Problem["NoFs"] = "no_fs";
})(Problem = exports.Problem || (exports.Problem = {}));
/**
 *
 * @export
 * @enum {string}
 */
var ReferralCurrency;
(function (ReferralCurrency) {
    ReferralCurrency["BTC"] = "BTC";
    ReferralCurrency["ETH"] = "ETH";
    ReferralCurrency["XRP"] = "XRP";
    ReferralCurrency["LTC"] = "LTC";
    ReferralCurrency["ZEC"] = "ZEC";
    ReferralCurrency["ETC"] = "ETC";
    ReferralCurrency["BCH"] = "BCH";
    ReferralCurrency["XMR"] = "XMR";
    ReferralCurrency["USDT"] = "USDT";
})(ReferralCurrency = exports.ReferralCurrency || (exports.ReferralCurrency = {}));
/**
 * @export
 * @namespace RomFields
 */
var RomFields;
(function (RomFields) {
    /**
     * @export
     * @enum {string}
     */
    let BrandEnum;
    (function (BrandEnum) {
        BrandEnum["Amd"] = "amd";
        BrandEnum["Nvidia"] = "nvidia";
    })(BrandEnum = RomFields.BrandEnum || (RomFields.BrandEnum = {}));
})(RomFields = exports.RomFields || (exports.RomFields = {}));
/**
 * @export
 * @namespace ScheduleActionData
 */
var ScheduleActionData;
(function (ScheduleActionData) {
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = ScheduleActionData.OcApplyModeEnum || (ScheduleActionData.OcApplyModeEnum = {}));
})(ScheduleActionData = exports.ScheduleActionData || (exports.ScheduleActionData = {}));
/**
 * @export
 * @namespace TagIdsEdit
 */
var TagIdsEdit;
(function (TagIdsEdit) {
    /**
     * @export
     * @enum {string}
     */
    let TagUpdateModeEnum;
    (function (TagUpdateModeEnum) {
        TagUpdateModeEnum["Add"] = "add";
        TagUpdateModeEnum["Remove"] = "remove";
        TagUpdateModeEnum["Replace"] = "replace";
    })(TagUpdateModeEnum = TagIdsEdit.TagUpdateModeEnum || (TagIdsEdit.TagUpdateModeEnum = {}));
})(TagIdsEdit = exports.TagIdsEdit || (exports.TagIdsEdit = {}));
/**
 * Transaction type: * 1 - Deposit * 2 - Daily service usage * 3 - Referral Reward * 4 - Gift of fate * 5 - Referral Withdrawal * 6 - Sent to User * 7 - Received from User * 8 - Referral Exchange * 9 - Promo code * 10 - Sent to Farm * 12 - Deposit from referral balance
 * @export
 * @enum {string}
 */
var TransactionTypeAccount;
(function (TransactionTypeAccount) {
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_1"] = 1] = "NUMBER_1";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_2"] = 2] = "NUMBER_2";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_3"] = 3] = "NUMBER_3";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_4"] = 4] = "NUMBER_4";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_5"] = 5] = "NUMBER_5";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_6"] = 6] = "NUMBER_6";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_7"] = 7] = "NUMBER_7";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_8"] = 8] = "NUMBER_8";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_9"] = 9] = "NUMBER_9";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_10"] = 10] = "NUMBER_10";
    TransactionTypeAccount[TransactionTypeAccount["NUMBER_12"] = 12] = "NUMBER_12";
})(TransactionTypeAccount = exports.TransactionTypeAccount || (exports.TransactionTypeAccount = {}));
/**
 * Transaction type: * 2 - Daily service usage * 4 - Gift of fate * 7 - Received from User * 10 - Sent to Farm * 11 - Received from Farm
 * @export
 * @enum {string}
 */
var TransactionTypeFarm;
(function (TransactionTypeFarm) {
    TransactionTypeFarm[TransactionTypeFarm["NUMBER_2"] = 2] = "NUMBER_2";
    TransactionTypeFarm[TransactionTypeFarm["NUMBER_4"] = 4] = "NUMBER_4";
    TransactionTypeFarm[TransactionTypeFarm["NUMBER_7"] = 7] = "NUMBER_7";
    TransactionTypeFarm[TransactionTypeFarm["NUMBER_10"] = 10] = "NUMBER_10";
    TransactionTypeFarm[TransactionTypeFarm["NUMBER_11"] = 11] = "NUMBER_11";
})(TransactionTypeFarm = exports.TransactionTypeFarm || (exports.TransactionTypeFarm = {}));
/**
 * @export
 * @namespace WalletBalanceBalance
 */
var WalletBalanceBalance;
(function (WalletBalanceBalance) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Pending"] = "pending";
        StatusEnum["NotFound"] = "not_found";
        StatusEnum["InvalidAddress"] = "invalid_address";
        StatusEnum["CoinNotSupported"] = "coin_not_supported";
        StatusEnum["ExchangeNotSupported"] = "exchange_not_supported";
        StatusEnum["PoolNotSupported"] = "pool_not_supported";
        StatusEnum["ErrorFetching"] = "error_fetching";
        StatusEnum["ErrorParsing"] = "error_parsing";
        StatusEnum["Error"] = "error";
    })(StatusEnum = WalletBalanceBalance.StatusEnum || (WalletBalanceBalance.StatusEnum = {}));
})(WalletBalanceBalance = exports.WalletBalanceBalance || (exports.WalletBalanceBalance = {}));
/**
 * @export
 * @namespace WorkerAutofanAutofan
 */
var WorkerAutofanAutofan;
(function (WorkerAutofanAutofan) {
    /**
     * @export
     * @enum {string}
     */
    let CriticalTempActionEnum;
    (function (CriticalTempActionEnum) {
        CriticalTempActionEnum["Reboot"] = "reboot";
        CriticalTempActionEnum["Shutdown"] = "shutdown";
    })(CriticalTempActionEnum = WorkerAutofanAutofan.CriticalTempActionEnum || (WorkerAutofanAutofan.CriticalTempActionEnum = {}));
})(WorkerAutofanAutofan = exports.WorkerAutofanAutofan || (exports.WorkerAutofanAutofan = {}));
/**
 * @export
 * @namespace WorkerCoolboxInfoCoolboxInfo
 */
var WorkerCoolboxInfoCoolboxInfo;
(function (WorkerCoolboxInfoCoolboxInfo) {
    /**
     * @export
     * @enum {string}
     */
    let VersionEnum;
    (function (VersionEnum) {
        VersionEnum["L"] = "L";
        VersionEnum["P"] = "P";
    })(VersionEnum = WorkerCoolboxInfoCoolboxInfo.VersionEnum || (WorkerCoolboxInfoCoolboxInfo.VersionEnum = {}));
})(WorkerCoolboxInfoCoolboxInfo = exports.WorkerCoolboxInfoCoolboxInfo || (exports.WorkerCoolboxInfoCoolboxInfo = {}));
/**
 * @export
 * @namespace WorkerCreateRequest
 */
var WorkerCreateRequest;
(function (WorkerCreateRequest) {
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = WorkerCreateRequest.OcApplyModeEnum || (WorkerCreateRequest.OcApplyModeEnum = {}));
})(WorkerCreateRequest = exports.WorkerCreateRequest || (exports.WorkerCreateRequest = {}));
/**
 * @export
 * @namespace WorkerEditOC
 */
var WorkerEditOC;
(function (WorkerEditOC) {
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = WorkerEditOC.OcApplyModeEnum || (WorkerEditOC.OcApplyModeEnum = {}));
})(WorkerEditOC = exports.WorkerEditOC || (exports.WorkerEditOC = {}));
/**
 * @export
 * @namespace WorkerEditOCMode
 */
var WorkerEditOCMode;
(function (WorkerEditOCMode) {
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = WorkerEditOCMode.OcApplyModeEnum || (WorkerEditOCMode.OcApplyModeEnum = {}));
})(WorkerEditOCMode = exports.WorkerEditOCMode || (exports.WorkerEditOCMode = {}));
/**
 * @export
 * @namespace WorkerEditRequest
 */
var WorkerEditRequest;
(function (WorkerEditRequest) {
    /**
     * @export
     * @enum {string}
     */
    let TagUpdateModeEnum;
    (function (TagUpdateModeEnum) {
        TagUpdateModeEnum["Add"] = "add";
        TagUpdateModeEnum["Remove"] = "remove";
        TagUpdateModeEnum["Replace"] = "replace";
    })(TagUpdateModeEnum = WorkerEditRequest.TagUpdateModeEnum || (WorkerEditRequest.TagUpdateModeEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = WorkerEditRequest.OcApplyModeEnum || (WorkerEditRequest.OcApplyModeEnum = {}));
})(WorkerEditRequest = exports.WorkerEditRequest || (exports.WorkerEditRequest = {}));
/**
 * @export
 * @namespace Worker
 */
var Worker;
(function (Worker) {
    /**
     * @export
     * @enum {string}
     */
    let SystemTypeEnum;
    (function (SystemTypeEnum) {
        SystemTypeEnum["Linux"] = "linux";
        SystemTypeEnum["Asic"] = "asic";
        SystemTypeEnum["Windows"] = "windows";
    })(SystemTypeEnum = Worker.SystemTypeEnum || (Worker.SystemTypeEnum = {}));
})(Worker = exports.Worker || (exports.Worker = {}));
/**
 * @export
 * @namespace WorkerMultiEditRequest
 */
var WorkerMultiEditRequest;
(function (WorkerMultiEditRequest) {
    /**
     * @export
     * @enum {string}
     */
    let OcApplyModeEnum;
    (function (OcApplyModeEnum) {
        OcApplyModeEnum["Replace"] = "replace";
        OcApplyModeEnum["Merge"] = "merge";
    })(OcApplyModeEnum = WorkerMultiEditRequest.OcApplyModeEnum || (WorkerMultiEditRequest.OcApplyModeEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TagUpdateModeEnum;
    (function (TagUpdateModeEnum) {
        TagUpdateModeEnum["Add"] = "add";
        TagUpdateModeEnum["Remove"] = "remove";
        TagUpdateModeEnum["Replace"] = "replace";
    })(TagUpdateModeEnum = WorkerMultiEditRequest.TagUpdateModeEnum || (WorkerMultiEditRequest.TagUpdateModeEnum = {}));
})(WorkerMultiEditRequest = exports.WorkerMultiEditRequest || (exports.WorkerMultiEditRequest = {}));
/**
 * @export
 * @namespace WorkerProps
 */
var WorkerProps;
(function (WorkerProps) {
    /**
     * @export
     * @enum {string}
     */
    let SystemTypeEnum;
    (function (SystemTypeEnum) {
        SystemTypeEnum["Linux"] = "linux";
        SystemTypeEnum["Asic"] = "asic";
        SystemTypeEnum["Windows"] = "windows";
    })(SystemTypeEnum = WorkerProps.SystemTypeEnum || (WorkerProps.SystemTypeEnum = {}));
})(WorkerProps = exports.WorkerProps || (exports.WorkerProps = {}));
/**
 * @export
 * @namespace WorkerWatchdogWatchdog
 */
var WorkerWatchdogWatchdog;
(function (WorkerWatchdogWatchdog) {
    /**
     * @export
     * @enum {string}
     */
    let PowerActionEnum;
    (function (PowerActionEnum) {
        PowerActionEnum["Reboot"] = "reboot";
        PowerActionEnum["Shutdown"] = "shutdown";
    })(PowerActionEnum = WorkerWatchdogWatchdog.PowerActionEnum || (WorkerWatchdogWatchdog.PowerActionEnum = {}));
})(WorkerWatchdogWatchdog = exports.WorkerWatchdogWatchdog || (exports.WorkerWatchdogWatchdog = {}));
/**
 * @export
 * @namespace WorkerWatchdogWatchdogOptions
 */
var WorkerWatchdogWatchdogOptions;
(function (WorkerWatchdogWatchdogOptions) {
    /**
     * @export
     * @enum {string}
     */
    let UnitsEnum;
    (function (UnitsEnum) {
        UnitsEnum["K"] = "k";
        UnitsEnum["M"] = "M";
        UnitsEnum["G"] = "G";
        UnitsEnum["T"] = "T";
        UnitsEnum["P"] = "P";
    })(UnitsEnum = WorkerWatchdogWatchdogOptions.UnitsEnum || (WorkerWatchdogWatchdogOptions.UnitsEnum = {}));
})(WorkerWatchdogWatchdogOptions = exports.WorkerWatchdogWatchdogOptions || (exports.WorkerWatchdogWatchdogOptions = {}));
class HiveOSAPIError extends Error {
    constructor({ code, message }) {
        super(`[${code}] ${message}`);
    }
}
exports.HiveOSAPIError = HiveOSAPIError;
class HiveOSAPI {
    constructor(token) {
        this.token = token;
        this.apiClient = axios_1.default.create({
            baseURL: API_ROOT,
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
        });
        (0, axios_retry_1.default)(this.apiClient, {
            retries: 3,
            retryDelay: (retryCount) => {
                return retryCount * 1000;
            }
        });
    }
    async request(url = '/', method = 'GET', params = {}) {
        try {
            const response = await this.apiClient.request({
                method: method,
                url: url,
                params: params
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            if (error instanceof axios_1.AxiosError)
                throw new HiveOSAPIError(error.response?.data);
            throw error;
        }
    }
    async farms() {
        return this.request(`/farms`)
            .then(result => result.data || []);
    }
    async farm(id) {
        return this.request(`/farms/${id}`);
    }
    async workers(farm) {
        return this.request(`/farms/${farm}/workers`)
            .then(result => result.data || []);
    }
    async metrics(farm, worker, params = {}) {
        return this.request(`/farms/${farm}/workers/${worker}/metrics`, 'GET', params)
            .then(result => result.data || []);
    }
    async wallets(farm) {
        return this.request(`/farms/${farm}/wallets`)
            .then(result => result.data || []);
    }
}
exports.HiveOSAPI = HiveOSAPI;
