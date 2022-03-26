<template>
  <login-form v-if="login" @toggle="login = !login" />
  <register-form v-else @toggle="login = !login" />
</template>

<script setup lang="ts">
import LoginForm from 'src/components/forms/LoginForm.vue';
import RegisterForm from 'src/components/forms/RegisterForm.vue';
import { ref } from 'vue';

const login = ref(false);
</script>
