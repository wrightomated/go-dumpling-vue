<template>
  <Game />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "./components/Game.vue";

export default defineComponent({
  name: "App",
  components: {
    Game,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Sansita:ital,wght@0,400;1,800&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Sansita", sans-serif;
    font-weight: 800;
    font-weight: bold;
    font-style: italic;
  }
  // p{
  //   font-family: "Roboto";
  // }
}
</style>

<style></style>
