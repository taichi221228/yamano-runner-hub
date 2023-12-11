<script>
  import { Step } from '@skeletonlabs/skeleton';
</script>

<Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
  <svelte:fragment slot="header">
    <slot name="header" />
  </svelte:fragment>
  <slot />
</Step>
