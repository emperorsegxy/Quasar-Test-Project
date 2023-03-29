<template>
  <q-layout view="lHh Lpr lFf">
    <app-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import AppBar from 'components/AppBar.vue';
</script>
