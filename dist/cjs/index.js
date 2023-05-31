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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveOSAPI = exports.HiveOSAPIError = void 0;
const axios_1 = __importStar(require("axios"));
const API_ROOT = 'https://api2.hiveos.farm/api/v2/';
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
}
exports.HiveOSAPI = HiveOSAPI;
