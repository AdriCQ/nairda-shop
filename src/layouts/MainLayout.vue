<template>
  <q-layout view="lHh Lpr lff">
    <app-header />

    <drawer-left />

    <q-page-container>
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue';
import AppHeader from './Header.vue';
import DrawerLeft from './DrawerLeft.vue';
</script>
