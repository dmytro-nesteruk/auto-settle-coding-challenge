export const MIN_REMOTE_API_VALID_STATUS = 200;
export const MAX_REMOTE_API_VALID_STATUS = 300;

export const isValidRemoteAPIStatus = (status: number) =>
	status >= MIN_REMOTE_API_VALID_STATUS && status < MAX_REMOTE_API_VALID_STATUS;
