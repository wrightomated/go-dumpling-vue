<template>
  <Card
    class="card"
    v-for="card in hand"
    :key="card.id"
    :cardType="card.type"
    :cardId="card.id"
    :isPlayerCard="true"
    :isSelected="card.offered"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "PlayerCards",
  components: {
    Card: Card,
  },
  data() {
    return { hand: [] };
  },
  mounted() {
    socket.onUpdatedHand((x: any) => {
      console.log("udating hand: ", x);
      this.hand = x;
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 100px;
  margin: 4px;
}
</style>
