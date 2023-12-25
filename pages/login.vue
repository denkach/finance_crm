<script lang="ts" setup>
useHead({
  title: "Login | CRM System",
});

const name = ref("");
const email = ref("");
const password = ref("");


</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5 ">Login</h1>

      <form>
        <UiInput placeholder="Name" type="name" class="mb-3"
          v-model="name"
        />
        <UiInput placeholder="Email" type="email" class="mb-3"
            v-model="email"
          />
        <UiInput placeholder="Password" type="password" class="mb-3"
            v-model="password"
        />

        <div class="flex items-center justify-center gap-5">
          <UiButton type="button">Login</UiButton>
          <UiButton type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>