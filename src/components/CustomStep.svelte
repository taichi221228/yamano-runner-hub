<script>
  import { Step } from '@skeletonlabs/skeleton';
</script>

<Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
  <svelte:fragment slot="header">
    <h2><slot name="header" /></h2>
  </svelte:fragment>
  <slot />
</Step>
