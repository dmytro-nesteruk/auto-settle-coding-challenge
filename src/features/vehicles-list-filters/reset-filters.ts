import { QUERY_KEYS } from '@entities/vehicle/utils';

import { isServer } from '@shared/utils/env';

export const resetFilters = () => {
	if (isServer()) return;

	const params = new URLSearchParams(window.location.search);

	params.delete(QUERY_KEYS.MAKE);
	params.delete(QUERY_KEYS.DATE_FROM);
	params.delete(QUERY_KEYS.DATE_TO);

	window.location.search = params.toString();
};
