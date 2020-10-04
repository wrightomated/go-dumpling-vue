<template>
  <div class="game-details">
    <GameDetails />
  </div>
  <div class="game-container">
    <div class="player-hand">
      <PlayerCards />
    </div>
    <div class="play-area">
      <Table />
    </div>
    <End />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameDetails from "./GameDetails.vue";
import PlayerCards from "./PlayerCards.vue";
import Table from "./Table.vue";
// import End from "./End.vue";

export default defineComponent({
  name: "Game",
  components: {
    GameDetails,
    PlayerCards,
    Table,
    // End,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game-container {
  position: relative;
  width: 100%;
}
.player-hand {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 145px;
}
</style>
