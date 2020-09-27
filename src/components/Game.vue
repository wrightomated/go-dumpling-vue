<template>
  <div class="grid-container">
    <div class="player-area">
      <PlayerCards />
    </div>
    <div class="console">
      <HelloWorld />
    </div>
    <div class="what">
      <PlayArea />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./HelloWorld.vue";
import PlayerCards from "./PlayerCards.vue";
import PlayArea from "./PlayArea.vue";

@Options({
  components: {
    HelloWorld,
    PlayerCards,
    PlayArea,
  },
})
export default class Game extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "player-area player-area player-area player-area console"
    ". . . . ."
    ". . . . .";
}
.player-area {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  gap: 1px 4px;
  grid-template-areas: ". . . . . . . . . .";
  grid-area: player-area;
}
.console {
  grid-area: console;
}
</style>
