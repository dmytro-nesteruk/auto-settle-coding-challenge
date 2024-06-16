import dayjs from 'dayjs';

import type { SelectOption } from '@shared/types/general';
import { entitiesListToSelectOptions } from '@shared/utils/entities-list-to-select-options';

import type { RemoteAPIVehicleEntity, VehicleEntity, VehiclesStats } from '../model';

import { QUERY_KEYS } from './query';

// make app entity
export const mapRemoteAPIVehicleToVehicleEntity = (
	entity: RemoteAPIVehicleEntity
): VehicleEntity => ({
	...entity,
	price: Number(entity.price),
	manufactureYear: Number(entity.manufactureYear),
});

// make select options
export const mapVehiclesListToSelectOptions = (entities: VehicleEntity[]) =>
	entitiesListToSelectOptions({
		data: entities,
		valueAccessor: 'make',
		labelAccessors: ['make'],
	}).reduce<SelectOption[]>((result, current) => {
		if (result.some((o) => o.label === current.label)) {
			return result;
		}

		result.push(current);

		return result;
	}, []);

// make filtered list
export const filterVehiclesList = (entities: VehicleEntity[], query: string): VehicleEntity[] => {
	const searchParams = new URLSearchParams(query);

	const hasMakeFilter = searchParams.has(QUERY_KEYS.MAKE);
	const dateFrom = searchParams.get(QUERY_KEYS.DATE_FROM);
	const dateTo = searchParams.get(QUERY_KEYS.DATE_TO);

	let result = [...entities];

	if (hasMakeFilter) {
		result = result.filter((vehicle) => searchParams.has(QUERY_KEYS.MAKE, vehicle.make));
	}

	if (dateFrom && dateTo) {
		return result.filter((vehicle) => {
			const date = dayjs(vehicle.dateCreated);
			return date.isBefore(dateTo) && date.isAfter(dateFrom);
		});
	}

	if (dateFrom) {
		return result.filter((vehicle) => dayjs(vehicle.dateCreated).isAfter(dateFrom));
	}

	if (dateTo) {
		return result.filter((vehicle) => dayjs(vehicle.dateCreated).isBefore(dateTo));
	}

	return result;
};

// make statistic
export const getStatisticsByVehiclesFilteredList = (entities: VehicleEntity[]): VehiclesStats => {
	const today = dayjs();

	const reduced = entities.reduce<VehiclesStats>(
		(res, current) => {
			res.averagePrice += current.price;
			res.averageTime += today.diff(dayjs(current.dateCreated), 'days');

			if (res.mostExpensive.price < current.price) {
				res.mostExpensive = current;
			}

			if (res.leastExpensive.price > current.price) {
				res.leastExpensive = current;
			}

			return res;
		},
		{
			averagePrice: 0,
			averageTime: 0,
			mostExpensive: {
				id: '',
				make: '',
				model: '',
				price: -Infinity,
				manufactureYear: 0,
				dateCreated: '',
			},
			leastExpensive: {
				id: '',
				make: '',
				model: '',
				price: Infinity,
				manufactureYear: 0,
				dateCreated: '',
			},
		}
	);

	reduced.averagePrice = reduced.averagePrice / entities.length;
	reduced.averageTime = reduced.averageTime / entities.length;

	return reduced;
};
