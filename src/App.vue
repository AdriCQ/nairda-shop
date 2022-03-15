<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { $app, $user, _app, _user } from 'src/injectables';

provide(_user, $user);
provide(_app, $app);
</script>
