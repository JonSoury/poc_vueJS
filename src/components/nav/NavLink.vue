<script setup lang="ts">
interface Props {
  url: string;
  text: string;
}

import { defineProps } from "vue";

const props = defineProps<Props>();
</script>

<template>
  <router-link :to="props.url">{{ props.text }}</router-link>
</template>

<style scoped>
a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 1em;
  margin: 1em;
  border-radius: 0.25em;
  background-color: #333;
}
a.router-link-exact-active {
  color: var(--vite-green);
}
</style>
