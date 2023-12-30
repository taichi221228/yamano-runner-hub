<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';

  import CustomStep from '$components/CustomStep.svelte';
  import MainPanel from '$components/MainPanel.svelte';

  import { store } from '../store';

  $: value = '';

  const inputFlyerIds: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('v:', value);
  };
</script>

<CustomStep>
  <svelte:fragment slot="header">Input flyer IDs</svelte:fragment>
  <MainPanel>
    <div class="table-container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Company Area</th>
            <th>Flyer ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Kantō</td>
            <td>
              <input
                type="text"
                placeholder="000000"
                value={$store.flyerIds.northernKanto}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>Southern Kantō</td>
            <td>
              <input
                type="text"
                placeholder="111111"
                value={$store.flyerIds.southernKanto}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>Tōkai</td>
            <td>
              <input
                type="text"
                placeholder="222222"
                value={$store.flyerIds.tokai}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>Hokuriku</td>
            <td>
              <input
                type="text"
                placeholder=""
                value={$store.flyerIds.hokuriku}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>Kinki</td>
            <td>
              <input
                type="text"
                placeholder=""
                value={$store.flyerIds.kinki}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>Chūgoku & Shikoku</td>
            <td>
              <input
                type="text"
                placeholder=""
                value={$store.flyerIds.chugokuShikoku}
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
        </tbody>
        <tfoot class="!bg-surface-200 dark:!bg-surface-700">
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="mt-5 flex gap-4">
      <label class="label grow">
        <input
          class="input"
          type="text"
          placeholder="000000,111111,222222"
          on:change={(event) => {
            if (event.target instanceof HTMLInputElement) value = event.target.value;
          }}
        />
      </label>
      <button type="button" class="variant-filled btn" on:click={inputFlyerIds}>Add</button>
    </div>
  </MainPanel>
</CustomStep>
