<svelte:head>
  <title>{create ? 'New Board' : `Edit ${board.name}`} - Sound Rodeo</title>
</svelte:head>

<h2>{create ? 'Create a Board' : `Edit ${board.name}`}</h2>

<form on:submit={commit}>
  <!-- <div>
    <Textfield
      bind:value={board.id}
      label="ID"
      input$aria-controls="helper-id"
      input$aria-describedby="helper-id"
      input$required
      input$pattern="^[a-zA-Z0-9][a-zA-Z0-9-]*$"
      style="min-width: 250px;" />
    <HelperText id="helper-id">
      The board's ID is used for the URL. It can have letters, numbers, and
      dashes. It mustn't start with a dash.
    </HelperText>
  </div> -->

  <div>
    <Textfield
      bind:value={board.name}
      label="Name"
      input$aria-controls="helper-name"
      input$aria-describedby="helper-name"
      input$required
      style="min-width: 250px;" />
    <HelperText id="helper-name">
      The name is used in the sidebar and on the board page.
    </HelperText>
  </div>

  <div>
    <Textfield
      type="number"
      bind:value={board.level}
      label="Level"
      input$aria-controls="helper-level"
      input$aria-describedby="helper-level"
      input$required
      input$min="0"
      input$max="4"
      input$pattern="\d"
      style="min-width: 250px;" />
    <HelperText id="helper-level">
      The level determines how far to indent the board in the sidebar. 0-4.
    </HelperText>
  </div>

  <div style="width: 250px; text-align: right; margin-top: 2em;">
    <Button type="submit" bind:disabled={$loading}>
      <Label>{create ? 'Create' : 'Done'}</Label>
    </Button>
    {#if !create}
      <Button type="button" on:click={deleteBoard} bind:disabled={$loading}>
        <Label>Delete</Label>
      </Button>
    {/if}
  </div>
</form>

<script>
  import { stores, goto } from "@sapper/app";
  import { loading, boards } from "../../../stores.js";

  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Button, { Label } from "@smui/button";

  const { page } = stores();

  let create = true;
  let board;

  do {
    board = {
      id: `${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`,
      name: "",
      sounds: [],
      size: 1,
      level: 0
    };
  } while ($boards.filter(b => b.id === board.id).length);

  if ("id" in $page.params) {
    const { id } = $page.params;
    create = false;
    board = $boards.filter(b => b.id === id)[0];
  }

  function commit(e) {
    e.preventDefault();

    if (create) {
      // if ($boards.filter(b => b.id === board.id).length) {
      //   alert(
      //     "You already have a board with that ID. Creating another one with the same ID is illegal."
      //   );
      //   return;
      // }
      $boards = [...$boards, board];
    } else {
      $boards = $boards;
    }

    goto(`/board/${board.id}`);
  }

  function deleteBoard() {
    if (
      confirm("Are you sure you want to delete this board and all its sounds?")
    ) {
      $boards = $boards.filter(b => b.id !== board.id);
      goto(`/`);
    }
  }
</script>
