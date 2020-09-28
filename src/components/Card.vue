<template>
  <div
    v-on:click="selectCard()"
    v-bind:class="{
      'card--player-card': isPlayerCard,
      'card--is-selected': isSelected,
    }"
    class="card"
  >
    <img src="../assets/dumpling-no-bg.png" alt="Avatar" style="width:100%" />
    <div class="container">
      <b>{{ cardType }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "Card",
  props: {
    cardId: Number,
    cardType: String,
    isPlayerCard: Boolean,
    isSelected: Boolean,
  },
  methods: {
    selectCard() {
      if (this.isPlayerCard) {
        socket.selectCard(this.cardId);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 25px;
  border: 4px solid white;

  &--player-card {
    cursor: pointer;
    background: $third;
  }

  &--is-selected {
    border: 4px solid $fourth;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
