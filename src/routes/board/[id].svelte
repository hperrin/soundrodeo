<svelte:head>
  <title>{board.name} - Sound Rodeo</title>
</svelte:head>

<h2>{board.name}</h2>

<script>
  import { stores, goto } from "@sapper/app";
  import { loading, boards } from "../../stores.js";

  import Button, { Label } from "@smui/button";

  const { page } = stores();
  const { id } = $page.params;

  $: board = $boards.filter(b => b.id === id)[0];
</script>
