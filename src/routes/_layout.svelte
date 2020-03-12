<svelte:window on:resize={setMiniWindow} />
<TopAppBar variant="static" class="main-top-app-bar">
  <Row>
    <Section>
      {#if miniWindow}
        <IconButton
          class="material-icons"
          on:click={() => (drawerOpen = !drawerOpen)}>
          menu
        </IconButton>
      {/if}
      <Title
        component={A}
        href="/"
        class="mdc-theme--on-primary"
        style={miniWindow ? 'padding-left: 0;' : ''}>
        Sound Rodeo
      </Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton disabled title={$working ? 'Working...' : 'Ready'}>
        <Icon>
          <svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
            class:spin={$working}>
            <path fill="#FFFFFF" d={$working ? mdiLoading : mdiCheck} />
          </svg>
        </Icon>
      </IconButton>
      {#if $boards.length}
        <IconButton on:click={() => ($editMode = !$editMode)} title="Edit Mode">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d={$editMode ? mdiPencilOff : mdiPencil} />
            </svg>
          </Icon>
        </IconButton>
      {/if}
      <IconButton href="https://twitter.com/SciActive">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiTwitter} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/soundrodeo">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiGithubCircle} />
          </svg>
        </Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<div class="drawer-container">
  <Drawer
    variant={miniWindow ? 'modal' : null}
    bind:open={drawerOpen}
    class="main-drawer {miniWindow ? 'main-drawer-adjust' : ''}">
    <Content>
      <List>
        {#each $boards as board, i (board.id)}
          <Item
            href={$editMode ? null : `board/${board.id}`}
            on:click={() => pickBoard()}
            activated={pathname === `/board/${board.id}` || pathname === `/board/edit/${board.id}`}
            title={board.name}
            style={board.level ? 'margin-left: ' + board.level * 25 + 'px;' : ''}>
            {#if $editMode}
              <IconButton href={`board/edit/${board.id}`} title="Edit">
                <Icon>
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d={mdiPencil} />
                  </svg>
                </Icon>
              </IconButton>
              {#if i > 0}
                <IconButton
                  on:click={() => ($boards = [...$boards.slice(0, i - 1), board, $boards[i - 1], ...$boards.slice(i + 1)])}
                  title="Move Up">
                  <Icon>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="#FFFFFF" d={mdiArrowUp} />
                    </svg>
                  </Icon>
                </IconButton>
              {/if}
              {#if i < $boards.length - 1}
                <IconButton
                  on:click={() => ($boards = [...$boards.slice(0, i), $boards[i + 1], board, ...$boards.slice(i + 2)])}
                  title="Move Down">
                  <Icon>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="#FFFFFF" d={mdiArrowDown} />
                    </svg>
                  </Icon>
                </IconButton>
              {/if}
            {/if}
            <Text>{board.name}</Text>
          </Item>
        {:else}
          <Item disabled>
            <Text>You've got no boards.</Text>
          </Item>
        {/each}
      </List>
      <div style="display: flex; justify-content: flex-end;">
        <IconButton href="/board/edit" title="New Board">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d={mdiPlus} />
            </svg>
          </Icon>
        </IconButton>
      </div>
    </Content>
  </Drawer>

  {#if miniWindow}
    <Scrim />
  {/if}
  <AppContent class="app-content">
    <main class="main-content" bind:this={mainContent}>
      <slot />
    </main>
  </AppContent>
</div>

<script>
  import { onMount, afterUpdate } from "svelte";
  import { stores } from "@sapper/app";
  import {
    mdiLoading,
    mdiCheck,
    mdiTwitter,
    mdiGithubCircle,
    mdiPlus,
    mdiPencil,
    mdiPencilOff,
    mdiArrowUp,
    mdiArrowDown
  } from "@mdi/js";
  import { working, boards, editMode } from "../stores.svelte";

  import "./_app.scss";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import Drawer, { Content, Scrim, AppContent } from "@smui/drawer";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import { Label, Icon } from "@smui/common";
  import A from "@smui/common/A.svelte";

  const { page } = stores();

  let pathname = $page.path;
  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  onMount(setMiniWindow);

  afterUpdate(() => {
    pathname = window.location.pathname;
  });

  function pickBoard() {
    drawerOpen = false;
    mainContent.scrollTop = 0;
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>
