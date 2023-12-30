<script>
  import CustomStep from '$components/CustomStep.svelte';
  import MainPanel from '$components/MainPanel.svelte';
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
            <td>北関東</td>
            <td>
              <input
                type="text"
                placeholder="000000"
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>南関東</td>
            <td>
              <input
                type="text"
                placeholder="111111"
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>東海</td>
            <td>
              <input
                type="text"
                placeholder="222222"
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>北陸</td>
            <td>
              <input
                type="text"
                placeholder=""
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>近畿</td>
            <td>
              <input
                type="text"
                placeholder=""
                class="input -my-[9999px] w-full rounded-none border-[1px] p-0 text-[inherit] [&:not(:focus-within)]:border-transparent [&:not(:focus-within,:hover)]:bg-transparent"
              />
            </td>
          </tr>
          <tr>
            <td>中四国</td>
            <td>
              <input
                type="text"
                placeholder=""
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
        <input class="input" type="text" placeholder="000000, 111111, 222222" />
      </label>
      <button type="button" class="variant-filled btn">Add</button>
    </div>
  </MainPanel>
</CustomStep>
