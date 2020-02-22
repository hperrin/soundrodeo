<svelte:head>
  <title>{board.name} - Sound Rodeo</title>
</svelte:head>

{#if $editMode}
  <div>
    <Slider
      bind:value={board.size}
      on:MDCSlider:change={() => ($boards = $boards)}
      min={0}
      max={1}
      step={0.1}
      style="width: 100%;" />
  </div>
{/if}

<board>

  {#each [...Array(10)] as sound}
    <Card style="width: {250 * board.size}px; height: {250 * board.size}px;">
      <PrimaryAction
        class="mdc-theme--secondary-bg mdc-theme--on-secondary"
        on:click={() => alert('click')}
        padded
        style="height: 100%; display: flex; justify-content: center;
        align-items: center; text-align: center;">
        Primary Action
      </PrimaryAction>
      {#if $editMode}
        <Actions>
          <ActionIcons>
            <IconButton title="Edit">
              <Icon>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d={mdiPencil} />
                </svg>
              </Icon>
            </IconButton>
            <IconButton title="Delete">
              <Icon>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d={mdiDelete} />
                </svg>
              </Icon>
            </IconButton>
          </ActionIcons>
        </Actions>
      {/if}
    </Card>
  {/each}

</board>

<script>
  import { stores, goto } from "@sapper/app";
  import { mdiPencil, mdiDelete } from "@mdi/js";
  import { loading, boards, editMode } from "../../stores.js";

  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import IconButton, { Icon } from "@smui/icon-button";
  import Slider from "@smui/slider";

  const { page } = stores();
  const { id } = $page.params;

  $: board = $boards.filter(b => b.id === id)[0];
</script>

<style>
  board {
    display: flex;
    padding-top: 2em;
    flex-wrap: wrap;
  }

  board > :global(*) {
    margin: 1em;
  }
</style>
