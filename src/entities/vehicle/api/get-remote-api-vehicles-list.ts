import type { RemoteAPIVehicleEntitiesList } from '../model';
import { parseRemoteAPIVechileEnitiesList } from '../utils';

export const getRemoteAPIVehiclesList = async (): Promise<RemoteAPIVehicleEntitiesList | null> => {
	// @ts-expect-error local json file
	const data = (await import('/public/data.json')).default!;

	let parsedData: RemoteAPIVehicleEntitiesList | null;

	try {
		// checking for valid JSON
		JSON.parse(JSON.stringify(data));

		// parsing data
		parsedData = parseRemoteAPIVechileEnitiesList(data);
	} catch (e) {
		parsedData = null;
	}

	return parsedData;
};
