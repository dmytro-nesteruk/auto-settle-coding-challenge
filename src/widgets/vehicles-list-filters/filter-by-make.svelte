<script lang="ts">
	import { afterUpdate } from 'svelte';

	import { useFilterByMake } from '@features/vehicles-list-filters/use-filter-by-make';

	import type { SelectOption } from '@shared/types/general';

	export let options: SelectOption[];
	export let query: string;
	export let key: string;

	const { defaultSelected, updateFilter, applyFilter } = useFilterByMake(query, key, options);

	let value = defaultSelected.map((i) => i.value);

	const onBlur = () => {
		applyFilter();
	};

	afterUpdate(() => {
		const next = options.filter((o) => value.includes(o.value));
		updateFilter(next);
	});
</script>

<label class="flex flex-col border border-slate-800 rounded-lg p-2 gap-4 h-full">
	<span>Make</span>

	<select multiple class="h-14 border border-slate-800 rounded-sm" bind:value on:blur={onBlur}>
		{#each options as item}
			<option
				aria-selected={value.some((i) => i === item.value)}
				selected={value.some((i) => i === item.value)}
				class="rounded-lg py-1 px-2 text-neutral-800 hover:bg-slate-100 aria-selected:bg-slate-200 active:bg-slate-200 focus:bg-slate-200"
				value={item.value}
			>
				{item.label}
			</option>
		{/each}
	</select>
</label>
