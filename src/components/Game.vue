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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameDetails from "./GameDetails.vue";
import PlayerCards from "./PlayerCards.vue";
import Table from "./Table.vue";

export default defineComponent({
  name: "Game",
  components: {
    GameDetails,
    PlayerCards,
    Table,
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
}
// .grid-container {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   // grid-template-rows: repeat(3, 1fr);
//   gap: 8px 8px;
//   grid-template-areas:
//     "player-hand player-hand player-hand player-hand player-hand game-details"
//     "play-area play-area play-area play-area play-area play-area"
//     "play-area play-area play-area play-area play-area play-area";
// }
// .player-hand {
//   display: grid;
//   grid-template-columns: repeat(10, 1fr);
//   grid-template-rows: 1fr;
//   gap: 1px 8px;
//   grid-template-areas: ". . . . . . . . . .";
//   grid-area: player-hand;
// }
// .game-details {
//   grid-area: game-details;
// }
// .play-area {
//   display: grid;
//   grid-template-columns: repeat(13, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   gap: 1px 8px;
//   grid-template-areas:
//     ". . . . . . . . . . . . ."
//     ". . . . . . . . . . . . ."
//     ". . . . . . . . . . . . ."
//     ". . . . . . . . . . . . ."
//     ". . . . . . . . . . . . .";
//   grid-area: play-area;
// }
</style>
