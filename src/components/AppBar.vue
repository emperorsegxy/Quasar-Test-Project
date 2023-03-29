<template>
  <div class="app-bar-wrap">
    <q-header class="bg-dark flex items-center justify-center">
      <q-toolbar>
        <img :src="AppLogo" alt="App-Logo" />
      </q-toolbar>
    </q-header>
  </div>
</template>

<script setup>
import AppLogo from 'assets/app-logo.svg'
</script>

<style scoped lang="scss">
.app-bar-wrap :deep {
  .q-header {
    height: 80px !important;

    .q-toolbar {
      width: 100%;
      max-width: 1200px;
    }

    img {
      height: 36px !important;
      width: 171px !important;
    }
  }
}
</style>
