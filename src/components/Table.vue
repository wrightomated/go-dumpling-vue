<template>
  <div class="table">
    <div class="table__round">Round: {{ table.round }}/3</div>
    <PlayerRow
      v-for="(player, index) in table.players"
      :key="index"
      :player="player"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerRow from "./PlayerRow.vue";
import socket from "../services/socket.service";
import { TableModel } from "../models/tableModel";

export default defineComponent({
  name: "Table",
  components: {
    PlayerRow: PlayerRow,
  },
  props: {
    player: Object,
  },
  data() {
    return { table: {} };
  },
  mounted() {
    socket.onUpdatedTable((table: TableModel) => {
      console.log(table);
      this.table = table;
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
