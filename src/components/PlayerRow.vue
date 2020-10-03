<template>
  <div class="player-row">
    <div class="player-details item">
      <div class="name">{{ player.playerName }}</div>
      <div class="score">Score: {{ player.playerScore }}</div>
    </div>
    <Card
      class="card item"
      v-for="card in player.playArea"
      :key="card.id"
      :cardType="card.type"
      :cardId="card.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  name: "PlayerRow",
  components: {
    Card: Card,
  },
  props: {
    player: Object,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-row {
  display: flex;
  min-height: 125px;
  flex-wrap: wrap;
}
.item {
  margin: 5px;
}
.card {
  width: 75px;
}
.player-details {
  width: 100px;
  align-self: center;
}
</style>
