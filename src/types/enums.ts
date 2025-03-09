export enum AppEnvEnum {
	local = 'local',
	dev = 'dev',
	prod = 'prod',
	staging = 'staging'
}

export enum ApiAccessTypeEnum {
	TOKEN = 'TOKEN',
	API_KEY = 'API_KEY'
}

export enum PaymentFrequencyEnum {
	MONTHLY = 1,
	QUARTERLY = 2,
	HALF_YEARLY = 3,
	ANNUALLY = 4,
	PER_UNIT = 5
}
export enum ServiceEnquiryStatus {
	PENDING = 1,
	ACCEPTED = 2,
	REJECTED = 3
}

export enum ServiceType {
	RENTAL = 1,
	TASK = 2
}
