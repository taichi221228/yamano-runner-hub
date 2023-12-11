<script>
  import CustomStep from '../../../components/CustomStep.svelte';
  import MainPanel from '../../../components/MainPanel.svelte';
</script>

<CustomStep>
  <svelte:fragment slot="header">
    <h2>Input flyer IDs</h2>
  </svelte:fragment>
  <MainPanel></MainPanel>
</CustomStep>
