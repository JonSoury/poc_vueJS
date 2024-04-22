<script setup lang="ts">
import { ref } from "vue";
import NavLink from "./NavLink.vue";

const navBarLink = ref([
  { url: "/", text: "Posts" },
  { url: "/new-post", text: "Nouveau post" },
  { url: "/contact", text: "Contact" },
]);
</script>

<template>
  <nav class="navBar">
    <NavLink v-for="link in navBarLink" :url="link.url" :text="link.text" />
  </nav>
  <router-view />
</template>

<style scoped>
.navBar {
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2em;
}
</style>
