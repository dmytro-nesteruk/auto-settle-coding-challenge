<script lang="ts">
	import type { VehiclesStats } from '@entities/vehicle/model';
	import VehicleCard from '@entities/vehicle/ui/vehicle-card/vehicle-card.svelte';

	export let as: keyof HTMLElementTagNameMap = 'article';

	export let stats: VehiclesStats;
</script>

<svelte:element
	this={as}
	class="border-2 p-4 border-primary rounded-lg shadow-xl flex flex-col gap-4"
>
	<p><span class="font-bold">Average price:</span> {stats.averagePrice.toFixed(1)}</p>
	<p>
		<span class="font-bold">Average time on the market:</span>
		{stats.averageTime.toFixed(1)} days
	</p>

	<div>
		<p class="font-bold">Most expensive vehicle:</p>
		<VehicleCard
			make={stats.mostExpensive.make}
			model={stats.mostExpensive.model}
			price={stats.mostExpensive.price}
			manufactureYear={stats.mostExpensive.manufactureYear}
			dateCreated={stats.mostExpensive.dateCreated}
		/>
	</div>

	<div>
		<p class="font-bold">Least expensive vehicle:</p>
		<VehicleCard
			make={stats.leastExpensive.make}
			model={stats.leastExpensive.model}
			price={stats.leastExpensive.price}
			manufactureYear={stats.leastExpensive.manufactureYear}
			dateCreated={stats.leastExpensive.dateCreated}
		/>
	</div>
</svelte:element>
