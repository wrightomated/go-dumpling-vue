<template>
  <div>{{ table.round }}</div>
  <div v-for="(player, index) in table.players" :key="index" class="row">
    <div>{{ player.playerName }}</div>
    <Card
      class="card"
      v-for="card in player.playArea"
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
import { Table } from "../models/table";

export default defineComponent({
  name: "PlayArea",
  components: {
    Card: Card,
  },
  data() {
    return { table: {} };
  },
  mounted() {
    // this.table = [[]];
    // socket.onUpdatePlayArea((x: any) => {
    //   this.playArea = x;
    //   console.log(this.playArea);
    // });
    socket.onUpdatedTable((table: Table) => {
      console.log(table);
      this.table = table;
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 75px;
}
.row {
  display: flex;
}
</style>
