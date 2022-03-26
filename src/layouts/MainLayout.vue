<template>
  <q-layout view="lHh Lpr lFF">
    <app-header />

    <drawer-left />

    <q-page-container class="bg-grey-5">
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue';
import AppHeader from './Header.vue';
import DrawerLeft from './DrawerLeft.vue';
import { provide } from 'vue';
import { _shopCategory, $shopCategory } from 'src/injectables';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */
provide(_shopCategory, $shopCategory);
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
void $shopCategory.availableAction();
void $shopCategory.allAction();
</script>
