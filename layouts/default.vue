<script lang="ts" setup>
  console.log("layout");
</script>

<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar/>
    <div>
      <slot />
    </div>
    <UiButton/>
  </section>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>