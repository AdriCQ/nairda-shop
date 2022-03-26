<template>
  <q-card class="login-card" :class="{ 'absolute-center': $props.centered }">
    <q-card-section class="text-center text-grey-9">
      <div class="text-body1">Iniciar Sesión</div>
    </q-card-section>
    <q-form @submit.prevent="login">
      <q-card-section class="q-gutter-y-md">
        <q-input
          name="email"
          v-model="loginForm.email"
          type="email"
          label="Email"
        />
        <q-input
          name="password"
          v-model="loginForm.password"
          type="password"
          label="Contraseña"
        />
      </q-card-section>
      <q-card-actions>
        <q-btn
          class="full-width"
          color="primary"
          text-color="dark"
          label="Iniciar"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { notificationHelper } from 'src/helpers';
import { IUserAuthLoginRequest } from 'src/api';
import { injectStrict, _user } from 'src/injectables';
import { useRouter } from 'vue-router';
import { ROUTE_NAME } from 'src/router';

/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const $props = withDefaults(defineProps<{ centered?: boolean }>(), {
  centered: false,
});
const $user = injectStrict(_user);
const $router = useRouter();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const loginForm = ref<IUserAuthLoginRequest>({
  email: '',
  password: '',
  service_name: 'MainApp',
  auth_mode: 'user',
});

/**
 * -----------------------------------------
 *	methods
 * -----------------------------------------
 */
/**
 * login
 */
async function login() {
  notificationHelper.loading();
  try {
    await $user.loginAction(loginForm.value);
    void $router.push({ name: ROUTE_NAME.HOME });
    notificationHelper.success([`Bienvenido ${$user.profile?.first_name}`]);
  } catch (error) {
    notificationHelper.error(['Credenciales incorrectas']);
  }
  notificationHelper.loading(false);
}
</script>

<style scoped>
.login-card {
  max-width: 25rem;
  min-width: 20rem;
}
</style>
