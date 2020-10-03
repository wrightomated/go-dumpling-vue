<template>
  <div class="player-row" :class="{ 'player-row--winner': player.winner }">
    <div class="player-details item">
      <div v-if="player.winner">Winner!</div>
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
    <div class="player-row__puddins">Puddins: {{ player.playerPuddins }}</div>
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
  border: 4px solid white;
  background: #aec6cf;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin-bottom: 25px;

  &--winner {
    background: $green;
  }

  .item {
    margin: 10px 5px;
  }

  &__puddins {
    width: 100px;
    align-self: center;
    // justify-content: flex-end;
    margin: 5px 10px 5px auto;
    // margin;
  }
}

.card {
  width: 75px;
}
.player-details {
  width: 100px;
  align-self: center;
}
</style>
