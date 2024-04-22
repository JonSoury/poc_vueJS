<!-- script setup est une nouvelle fonctionnalité de Vue 3 qui permet de simplifier la syntaxe des composants en regroupant la logique du composant dans une seule section script. Cela rend le code plus lisible et plus facile à maintenir en séparant la logique de présentation de la logique de l'application. En utilisant script setup, on peut déclarer les props, les variables réactives et les hooks de cycle de vie du composant de manière plus concise et plus claire. Cela permet également de réduire la duplication du code et d'améliorer les performances du composant en évitant les rendus inutiles. En résumé, script setup est une fonctionnalité puissante qui simplifie le développement des composants Vue et améliore l'expérience des développeurs. -->
<script setup>
import { onMounted, ref } from "vue";

// ref est une fonction qui permet de créer une référence réactive à une valeur donnée
// et de la rendre réactive. Cela signifie que si la valeur change,
// tous les composants qui utilisent cette référence seront mis à jour automatiquement.
const posts = ref(null);
const errorMessage = ref("");
const isError = ref(false);

//onMounted et fetch sont des fonctions asynchrones
//onMounted est une fonction qui s'exécute après le rendu du composant
//fetch est une fonction qui permet de faire une requête HTTP
onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts.value = data;
      console.log("posts", posts.value, data);
    })
    .catch((err) => {
      console.log(err);
      errorMessage.value = err;
      isError.value = true;
    });
});

console.log(posts.value);
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vue.svg" />

    <div v-if="posts" class="posts">
      <router-link
        v-for="post in posts"
        :key="post.id"
        class="post-card"
        :to="{ name: 'post', params: { id: post.id } }"
      >
        <h3 class="post-card-title">{{ post.title }}</h3>
        <p class="post-card-body">{{ post.body }}</p>
      </router-link>
    </div>

    <!-- si isError est vrai, afficher le message d'erreur -->
    <div v-show="isError">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 1em;
  & > a {
    text-decoration: none;
    color: inherit;
  }
  & .post-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    border: 1px solid #333;
    border-radius: 0.5em;
    &:hover {
      background-color: var(--vite-green);
      cursor: pointer;
    }
  }
  & .post-card-title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  & .post-card-body {
    font-size: 1em;
  }
}
</style>
