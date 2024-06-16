import dayjs from 'dayjs';
import { get, writable } from 'svelte/store';

import { isServer } from '@shared/utils/env';

const DATE_FORMAT = 'YYYY-MM-DD';

export const useFilterByDate = (query: string, dateFromKey: string, dateToKey: string) => {
	const searchParams = writable(new URLSearchParams(query));

	const defaultSelected = (() => {
		const params = new URLSearchParams(query);

		const f = dayjs(params.get(dateFromKey));
		const t = dayjs(params.get(dateToKey));

		const from = f.isValid() ? f.format(DATE_FORMAT) : undefined;
		const to = t.isValid() ? t.format(DATE_FORMAT) : undefined;

		return {
			from,
			to,
		};
	})();

	const applyFilter = (next: string | undefined, key: string) => {
		if (isServer()) return;

		const params = get(searchParams);

		if (!next) {
			params.delete(key);
			window.location.search = params.toString();
			return;
		}

		const date = dayjs(next);

		if (!date.isValid()) return;

		params.set(key, date.format('YYYY-MM-DD'));
		window.location.search = params.toString();
	};

	return { defaultSelected, applyFilter };
};
