import { z } from 'zod';

export const RemoteAPIVehicleEntitySchema = z.object({
	id: z.string(),
	make: z.string(),
	model: z.string(),
	manufactureYear: z.string(),
	dateCreated: z.string().datetime(),
	price: z.string(),
});

export const RemoteAPIVehicleEntitiesListSchema = z.array(RemoteAPIVehicleEntitySchema);

export const VehicleEntitySchema = z.object({
	id: z.string(),
	make: z.string(),
	model: z.string(),
	manufactureYear: z.number().positive(),
	dateCreated: z.string().datetime(),
	price: z.number().positive(),
});

export const VehicleEntitiesListSchema = z.array(VehicleEntitySchema);

export type RemoteAPIVehicleEntity = z.infer<typeof RemoteAPIVehicleEntitySchema>;
export type RemoteAPIVehicleEntitiesList = z.infer<typeof RemoteAPIVehicleEntitiesListSchema>;
export type VehicleEntity = z.infer<typeof VehicleEntitySchema>;
export type VehicleEntitiesList = z.infer<typeof VehicleEntitiesListSchema>;

export type VehiclesStats = {
	averagePrice: number;
	averageTime: number;
	mostExpensive: VehicleEntity;
	leastExpensive: VehicleEntity;
};
