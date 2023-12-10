<script>
  import { SlideToggle, Step, Stepper } from '@skeletonlabs/skeleton';

  let value1 = false;
  let value2 = false;
  let value3 = false;
</script>

<div class="card flex h-full w-full flex-col items-center p-6">
  <Stepper class="flex h-full w-full flex-col space-y-6" regionContent="grow">
    <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
      <svelte:fragment slot="header">Get Started!</svelte:fragment>
      <div class="card bg-surface-50-900-token text-token">
        <ul>
          <li
            class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-2 first:pt-4 last:border-none last:pb-4"
          >
            Value 1
            <SlideToggle name="slide" bind:checked={value1} />
          </li>
          <li
            class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-2 first:pt-4 last:border-none last:pb-4"
          >
            Value 2
            <SlideToggle name="slide" bind:checked={value3} />
          </li>
          <li
            class="mx-4 flex items-center justify-between border-b border-surface-500/[.2] py-2 first:pt-4 last:border-none last:pb-4"
          >
            Value 3
            <SlideToggle name="slide" bind:checked={value2} />
          </li>
        </ul>
      </div>
    </Step>
    <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
      <svelte:fragment slot="header">Get Started!</svelte:fragment>
      This example Stepper will teach you how to use this component. Tap next to proceed to the next
      step.
    </Step>
    {#if value1}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 3</svelte:fragment>
        This is the third step.
      </Step>
    {/if}
    {#if value2}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 4</svelte:fragment>
        This is the fourth step.
      </Step>
    {/if}
    {#if value3}
      <Step class="flex h-full flex-col space-y-10" regionNavigation="!mt-auto">
        <svelte:fragment slot="header">Step 5</svelte:fragment>
        This is the fifth step.
      </Step>
    {/if}
  </Stepper>
</div>
