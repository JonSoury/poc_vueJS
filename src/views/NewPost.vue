<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const title = ref("");
const body = ref("");

const createPost = async () => {
  const post = {
    title: title.value,
    body: body.value,
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    router.push("/");
  } else {
    console.log("error");
  }
};
</script>

<template>
  <div class="posts">
    <h1>Ajouter un post</h1>

    <form @submit.prevent="createPost">
      <div>
        <label for="title">Titre</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div>
        <label for="body">Contenu</label>
        <textarea id="body" v-model="body"></textarea>
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: 1px solid #333;
  border-radius: 0.5em;
  max-width: 500px;
  margin: 0 auto;
  & form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    & div {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }
    & label {
      font-weight: bold;
    }
    & input,
    & textarea {
      padding: 0.5em;
      border: 1px solid #333;
      border-radius: 0.25em;
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;
    }
    & button {
      padding: 0.5em;
      border: none;
      border-radius: 0.25em;
      background-color: var(--vite-green);
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
