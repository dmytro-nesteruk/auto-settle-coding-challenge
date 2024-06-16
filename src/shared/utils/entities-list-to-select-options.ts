import type { SelectOption } from '@shared/types/general';

/* eslint-disable-next-line */
export type EntityListToSelectOptionsProps<T extends Record<string, any>> = {
	data: Array<T>;
	valueAccessor: keyof T;
	labelAccessors: Array<keyof T>;
	labelJoinSeparator?: string;
};

/* eslint-disable-next-line */
export function entitiesListToSelectOptions<T extends Record<string, any>>({
	data,
	valueAccessor,
	labelAccessors,
	labelJoinSeparator = ' ',
}: EntityListToSelectOptionsProps<T>): Array<SelectOption> {
	return data.map((entity) => {
		const value = entity[valueAccessor] as string;
		const label = labelAccessors
			.map((accessor) => entity[accessor])
			.join(labelJoinSeparator) as string;

		return { value, label };
	});
}
