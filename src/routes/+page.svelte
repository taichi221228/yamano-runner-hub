<script>
  import { Step, Stepper } from '@skeletonlabs/skeleton';
  import { store } from '../features/link-install/store';
  import SelectType from '../features/link-install/components/selectType.svelte';
</script>

<div class="card flex h-full w-full flex-col items-center p-6">
  <Stepper class="flex h-full w-full flex-col space-y-6" regionContent="grow">
    <SelectType />
    <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
      <svelte:fragment slot="header">Get Started!</svelte:fragment>
      This example Stepper will teach you how to use this component. Tap next to proceed to the next
      step.
    </Step>
    {#if $store.isMultiPage}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 3</svelte:fragment>
        This is the third step.
      </Step>
    {/if}
    {#if $store.isMultiLink}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 4</svelte:fragment>
        This is the fourth step.
      </Step>
    {/if}
    {#if $store.isMultiEdition}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 5</svelte:fragment>
        This is the fifth step.
      </Step>
    {/if}
  </Stepper>
</div>
