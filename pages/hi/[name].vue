<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.name

watchEffect(() => {
  user.setNewName(route.params.name as string)
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div i-carbon-piggy-bank text-4xl inline-block />
    <p>
      Hi, {{ name }}
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm my-4>
        <span op-50>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <LazyCounter />

    <div>
      <NuxtLink
        class="btn m-3 text-sm"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
