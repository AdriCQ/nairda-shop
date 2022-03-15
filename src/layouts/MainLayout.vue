<template>
  <q-layout view="lHh Lpr lFf">
    <app-header />

    <drawer-left />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import AppHeader from './Header.vue';
import DrawerLeft from './DrawerLeft.vue';
</script>
