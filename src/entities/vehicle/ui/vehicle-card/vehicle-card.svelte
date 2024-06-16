<script lang="ts">
	import dayjs from 'dayjs';

	export let as: keyof HTMLElementTagNameMap = 'article';

	export let make: string;
	export let model: string;
	export let manufactureYear: number;
	export let dateCreated: string;
	export let price: number;

	$: formattedDateCreated = dayjs(dateCreated).format('DD.MM.YYYY');
</script>

<svelte:element this={as} class="border-2 p-4 border-primary rounded-lg shadow-xl">
	<p>Make: {make}</p>
	<p>Model: {model}</p>
	<p>Manufacture year: {manufactureYear}</p>
	<p>Price: {price}</p>
	<p>Created: {formattedDateCreated}</p>
</svelte:element>
