<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<!--<AppShell slotSidebarLeft="bg-surface-50-900-token w-56 p-4">-->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar class="shadow-2xl">
      <svelte:fragment slot="lead">
        <h1 class="text-xl uppercase">Yamano-runner-hub</h1>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="variant-ghost-surface btn btn-sm"
          href="https://discord.gg/EXqV7W8MtY"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        <a
          class="variant-ghost-surface btn btn-sm"
          href="https://twitter.com/SkeletonUI"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="variant-ghost-surface btn btn-sm"
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <div>
          <LightSwitch class="ml-4" />
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <!--  <svelte:fragment slot="sidebarLeft">-->
  <!--    &lt;!&ndash; Insert the list: &ndash;&gt;-->
  <!--    <nav class="list-nav">-->
  <!--      <ul>-->
  <!--        <li><a href="/">Home</a></li>-->
  <!--      </ul>-->
  <!--    </nav>-->
  <!--  </svelte:fragment>-->

  <!-- Page Route Content -->
  <div class="h-full w-full p-8">
    <slot />
  </div>
</AppShell>
