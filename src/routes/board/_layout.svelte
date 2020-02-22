<div>
  {#if $loading}
    <svg
      style="width: 150px; height: 150px; margin: 0 auto;"
      viewBox="0 0 24 24"
      class="spin">
      <path fill="#FFFFFF" d={mdiLoading} />
    </svg>
  {:else}
    <slot />
  {/if}
</div>

<script>
  import { mdiLoading } from "@mdi/js";
  import { loading } from "../../stores.js";
</script>

<style>
  div {
    padding: 0 2em 2em;
  }
</style>
