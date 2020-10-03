<template>
  <div v-for="(p, i) in end" :key="i">
    <div>{{ p.name }}: {{ p.score }}points</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "End",
  data() {
    return { end: [{ name: "none", score: 1 }] };
  },
  mounted() {
    socket.onEnd((players: any[]) => {
      this.end = players;
      console.log(players);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  margin-top: 50px;
  width: 100%;
  min-height: 500px;

  &__round {
    font-family: $display-font;
    font-size: 1.5em;
    // line-height: 2em;
    margin-bottom: 20px;
  }
}
</style>
