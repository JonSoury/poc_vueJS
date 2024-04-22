<script setup lang="ts">
interface Props {
  id: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

import { defineProps, onMounted, ref } from "vue";

const props = defineProps<Props>();

const post = ref<Post | null>(null);

onMounted(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    .then((res) => res.json())
    .then((data) => {
      post.value = data;
      console.log("post", post.value, data);
    });
  console.log("post", post.value);
});
</script>

<template>
  <h1>le post</h1>
  <div class="post" v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<style>
.post {
  padding: 1em;
  border: 1px solid #333;
}
</style>
