<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import {
  $app,
  $mapInjectable,
  $user,
  _app,
  _map,
  _user,
} from 'src/injectables';

provide(_app, $app);
provide(_map, $mapInjectable);
provide(_user, $user);

$user.load();
</script>
