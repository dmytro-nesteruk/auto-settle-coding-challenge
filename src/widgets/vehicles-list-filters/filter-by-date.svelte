<script lang="ts">
	import { useFilterByDate } from '@features/vehicles-list-filters/use-filter-by-date';
	import { afterUpdate } from 'svelte';

	export let query: string;
	export let dateFromKey: string;
	export let dateToKey: string;

	const { applyFilter, defaultSelected } = useFilterByDate(query, dateFromKey, dateToKey);

	let from = defaultSelected.from;
	let to = defaultSelected.to;

	afterUpdate(() => {
		if (!globalThis.window) return;

		if (from !== defaultSelected.from) {
			applyFilter(from, dateFromKey);
		}

		if (to !== defaultSelected.to) {
			applyFilter(to, dateToKey);
		}
	});
</script>

<div class="border border-slate-800 rounded-lg p-2 flex items-center gap-4 h-full">
	<label class="flex flex-col flex-grow justify-between h-full">
		<span>From:</span>
		<input class="h-14 border border-slate-800 rounded-sm" type="date" bind:value={from} />
	</label>
	<span class="font-bold text-lg">-</span>
	<label class="flex flex-col flex-grow justify-between h-full">
		<span>To:</span>
		<input class="h-14 border border-slate-800 rounded-sm" type="date" bind:value={to} />
	</label>
</div>
