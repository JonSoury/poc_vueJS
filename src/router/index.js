import { createRouter, createWebHashHistory } from "vue-router";
import Posts from "../views/Posts.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Post from "../components/Post.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Posts,
  },
  {
    path: "/contact",
    name: "contact",
    component: HelloWorld,
  },
  {
    path: "/new-post",
    name: "new-post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/NewPost.vue");
    },
  },
  { path: "/posts/:id", name: "post", component: Post, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
