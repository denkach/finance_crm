<script lang="ts" setup>
import { account } from '@/lib/appwrite';

const store = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession('current');
  store.clear();
  await router.push('/login');
  isLoadingStore.set(false);
}
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative v-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="120px" class="mx-auto"/>
    </NuxtLink>
    <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20"/>
    </button>
    <LayoutMenu />
  </aside>
</template>

<style scoped>

</style>