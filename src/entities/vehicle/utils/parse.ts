import {
	RemoteAPIVehicleEntitiesListSchema,
	RemoteAPIVehicleEntitySchema,
	VehicleEntitiesListSchema,
	VehicleEntitySchema,
} from '../model/index';

export const parseRemoteAPIVechileEnity = (e: unknown) => RemoteAPIVehicleEntitySchema.parse(e);
export const parseRemoteAPIVechileEnitiesList = (e: unknown) =>
	RemoteAPIVehicleEntitiesListSchema.parse(e);
export const parseVechileEnity = (e: unknown) => VehicleEntitySchema.parse(e);
export const parseVechileEnitiesList = (e: unknown) => VehicleEntitiesListSchema.parse(e);
