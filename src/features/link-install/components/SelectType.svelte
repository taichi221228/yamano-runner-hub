<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import CustomStep from '../../../components/CustomStep.svelte';
  import MainPanel from '../../../components/MainPanel.svelte';
  import { store } from '../store';
</script>

<CustomStep>
  <svelte:fragment slot="header">Select a flyer type</svelte:fragment>
  <MainPanel>
    <ul>
      <li
        class="flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-0 last:border-none last:pb-0"
      >
        Multiple pages
        <SlideToggle name="slide" bind:checked={$store.isMultiPage} />
      </li>
      <li
        class="flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-0 last:border-none last:pb-0"
      >
        Multiple links
        <SlideToggle name="slide" bind:checked={$store.isMultiLink} />
      </li>
      <li
        class="flex items-center justify-between border-b border-surface-500/[.2] py-3 first:pt-0 last:border-none last:pb-0"
      >
        Multiple editions
        <SlideToggle name="slide" bind:checked={$store.isMultiEdition} />
      </li>
    </ul>
  </MainPanel>
</CustomStep>
