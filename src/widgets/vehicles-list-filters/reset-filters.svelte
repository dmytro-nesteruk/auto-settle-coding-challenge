<script lang="ts">
	import { resetFilters } from '@features/vehicles-list-filters/reset-filters';
</script>

<button class="px-4 py-2 border border-slate-800 rounded-md" on:click={resetFilters}>
	Reset filters
</button>
