<script>
  import CustomStep from '$components/CustomStep.svelte';
  import MainPanel from '$components/MainPanel.svelte';
</script>

<CustomStep>
  <svelte:fragment slot="header">Input flyer IDs</svelte:fragment>
  <MainPanel></MainPanel>
</CustomStep>
