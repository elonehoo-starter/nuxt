<script setup lang="ts">
useHead({
  title: 'starter nuxt',
  link: [
    {
      rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <NuxtPage />
      <LazyFooter />
    </main>
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222222;
  color: #ffffff;
}
</style>
