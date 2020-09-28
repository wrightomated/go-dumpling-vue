<template>
  <Card
    v-for="card in hand"
    :key="card.id"
    :cardType="card.type"
    :cardId="card.id"
    :isPlayerCard="true"
    :isSelected="card.offered"
  />
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
// export default class PlayerCards extends Vue {
//   hand = [
//     { id: 1, type: "cake" },
//     { id: 2, type: "Choc" },
//   ];
//   mounted() {
//     socket.onUpdatedHand((x: any) => (this.hand = x));
//   }
// }
import { defineComponent } from "vue";
import Card from "./Card.vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "PlayerCards",
  components: {
    Card: Card,
  },
  data() {
    return { hand: [{ id: 1, type: "cake" }] };
  },
  mounted() {
    socket.onUpdatedHand((x: any) => (this.hand = x));
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
