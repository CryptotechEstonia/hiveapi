import type {
	InlineResponse20012, FarmListItem,
	InlineResponse20021, WorkerListItem,
	Farm,
	InlineResponse20028, WorkerMetric
} from './hive'

import axios, { AxiosError, AxiosInstance } from 'axios'

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

export class HiveOSAPI {
	private apiClient: AxiosInstance

	constructor(private token: string) {
		this.apiClient = axios.create({
			baseURL: API_ROOT,
			headers: {
				'Authorization': `Bearer ${this.token}`,
			},
		})
	}

	async request<T>(url: string = '/', method: string = 'GET'): Promise<T> {
		try {
			const response = await this.apiClient.request<T>({
				method: method,
				url: url
			})

			return response.data
		} catch (error) {
			console.error(error)

			if (error instanceof AxiosError)
				throw new HiveOSAPIError(error.response?.data)

			throw error
		}
	}

	async farms(): Promise<FarmListItem[]> {
		return this.request<InlineResponse20012>(`/farms`)
			.then(result => result.data || [])
	}

	async farm(id: number): Promise<Farm> {
		return this.request<Farm>(`/farms/${id}`)
	}

	async workers(farm: number): Promise<WorkerListItem[]> {
		return this.request<InlineResponse20021>(`/farms/${farm}/workers`)
			.then(result => result.data || [])
	}

	async metrics(farm: number, worker: number): Promise<WorkerMetric[]> {
		return this.request<InlineResponse20028>(`/farms/${farm}/workers/${worker}/metrics`)
			.then(result => result.data || [])
	}
}
