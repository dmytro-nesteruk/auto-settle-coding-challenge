import { get, writable } from 'svelte/store';

import type { SelectOption } from '@shared/types/general';
import { isServer } from '@shared/utils/env';

export const useFilterByMake = (query: string, key: string, options: SelectOption[]) => {
	const searchParams = writable(new URLSearchParams(query));

	const defaultSelected = (() => {
		const params = new URLSearchParams(query);
		return options.filter((o) => params.has(key, o.value));
	})();

	const updateFilter = (nextValue: SelectOption[] | undefined) => {
		const params = get(searchParams);

		params.delete(key);

		if (!nextValue) return;

		nextValue.forEach(({ value }) => {
			params.append(key, value);
		});

		searchParams.update(() => params);
	};

	const applyFilter = () => {
		if (isServer()) return;

		const params = get(searchParams).toString();
		const q = query.startsWith('?') ? query.replace('?', '') : query;

		if (q === params) return;

		window.location.search = params;
	};

	return { defaultSelected, updateFilter, applyFilter };
};
