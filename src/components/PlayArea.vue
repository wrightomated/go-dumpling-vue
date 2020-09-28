<template>
  <div v-for="(player, index) in playArea" :key="index" class="row">
    <Card
      v-for="card in player"
      :key="card.id"
      :cardType="card.type"
      :cardId="card.id"
    />
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
// import Card from "./Card.vue";
// import socket from "../services/socket.service";

// @Options({
//   components: {
//     Card,
//   },
// })
// export default class PlayArea extends Vue {
//   playArea: any = [];
//   mounted() {
//     socket.onUpdatePlayArea((x: any) => {
//       this.playArea = x;
//       console.log(this.playArea);
//     });
//   }
// }
import { defineComponent } from "vue";
import Card from "./Card.vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "PlayArea",
  components: {
    Card: Card,
  },
  data() {
    return { playArea: [] };
  },
  mounted() {
    socket.onUpdatePlayArea((x: any) => {
      this.playArea = x;
      console.log(this.playArea);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
