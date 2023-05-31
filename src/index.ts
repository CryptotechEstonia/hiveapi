import type {
	InlineResponse20012,
	InlineResponse20021, Worker,
	Farm,
	InlineResponse20028, WorkerMetric
} from './hive'

import axios, { AxiosError, AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

const API_ROOT = 'https://api2.hiveos.farm/api/v2/'

export type HiveOSAPIErrorMessage = 'Unauthorized'

export interface HiveOSAPIErrorData {
	code: null
	message: HiveOSAPIErrorMessage
	redirect: string
}

export class HiveOSAPIError extends Error {
	constructor({ code, message }: HiveOSAPIErrorData) {
		super(`[${code}] ${message}`)
	}
}

export interface MetricsParams {
	/**
	 * Format: `yyyy-mm-dd`
	 * Default: today
	 */
	date?: string

	/**
	 * Period (1 day, 1 week, 1 month)
	 * Default: 1d
	 */
	period?: '1d' | '1w' | '1m'

	/**
	 * Fill gaps with empty points
	 * Default: 0
	 */
	fill_gaps?: 0 | 1
}

export class HiveOSAPI {
	private apiClient: AxiosInstance

	constructor(private token: string) {
		this.apiClient = axios.create({
			baseURL: API_ROOT,
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		})

		axiosRetry(this.apiClient, {
			retries: 3,
			retryDelay: (retryCount) => {
				return retryCount * 1000
			}
		})
	}

	async request<T>(url: string = '/', method: string = 'GET', params: object = {}): Promise<T> {
		try {
			const response = await this.apiClient.request<T>({
				method: method,
				url: url,
				params: params
			})

			return response.data
		} catch (error) {
			console.error(error)

			if (error instanceof AxiosError)
				throw new HiveOSAPIError(error.response?.data)

			throw error
		}
	}

	async farms(): Promise<Farm[]> {
		return this.request<InlineResponse20012>(`/farms`)
			.then(result => result.data || [])
	}

	async farm(id: number): Promise<Farm> {
		return this.request<Farm>(`/farms/${id}`)
	}

	async workers(farm: number): Promise<Worker[]> {
		return this.request<InlineResponse20021>(`/farms/${farm}/workers`)
			.then(result => result.data || [])
	}

	async metrics(farm: number, worker: number, params: MetricsParams = {}): Promise<WorkerMetric[]> {
		return this.request<InlineResponse20028>(`/farms/${farm}/workers/${worker}/metrics`, 'GET', params)
			.then(result => result.data || [])
	}
}
