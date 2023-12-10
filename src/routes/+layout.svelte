<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Yamano-runner-hub</strong>
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
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <!-- Insert the list: -->
    <nav class="list-nav">
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
