<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import CustomStep from '../../../components/CustomStep.svelte';
  import { store } from '../store';
</script>

<CustomStep>
  <svelte:fragment slot="header">Select a flyer type</svelte:fragment>
  <div class="card bg-surface-50-900-token text-token">
    <ul>
      <li
        class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-4 last:border-none last:pb-4"
      >
        Multiple pages
        <SlideToggle name="slide" bind:checked={$store.isMultiPage} />
      </li>
      <li
        class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-4 last:border-none last:pb-4"
      >
        Multiple links
        <SlideToggle name="slide" bind:checked={$store.isMultiLink} />
      </li>
      <li
        class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-4 last:border-none last:pb-4"
      >
        Multiple editions
        <SlideToggle name="slide" bind:checked={$store.isMultiEdition} />
      </li>
    </ul>
  </div>
</CustomStep>
