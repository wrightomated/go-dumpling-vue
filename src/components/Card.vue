<template>
  <div
    v-on:click="selectCard()"
    v-bind:class="[
      {
        'card--player-card': isPlayerCard,
        'card--is-selected': isSelected,
      },
      cardType,
    ]"
  >
    <img src="../assets/dumpling-no-bg.png" alt="Avatar" style="width:100%" />
    <div class="container">
      <span class="card__name">{{ cardType }}</span>
      <Tooltip class="card__tooltip" :cardType="cardType" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socket from "../services/socket.service";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "Card",
  components: {
    Tooltip: Tooltip,
  },
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
  color: white;

  &__name {
    font-family: $display-font;
    font-weight: bold;
  }

  &--player-card {
    cursor: pointer;

    &.champagne {
      & .card__name {
        font-size: 0.8em;
        line-height: 1.5em;
      }
    }
  }

  &--is-selected {
    border: 4px solid $main;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &__tooltip {
    display: none;
  }
}
.beef {
  background: linear-gradient(45deg, darken($coral, 10%), $coral);
}

.prawn {
  background: linear-gradient(
    45deg,
    $coral-secondary,
    lighten($coral-secondary, 10%)
  );
}

.pork {
  // background: linear-gradient(45deg, darken($coral, 10%), $coral-secondary);
  background: linear-gradient(45deg, $coral, $coral-secondary);
}

.champagne {
  background: linear-gradient(45deg, $gold, $gold-secondary);
  // background: $gold;
}

.birthday {
  background: linear-gradient(45deg, $green, $teal, $purple, $coral);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  margin-bottom: 4px;

  &:hover {
    .card__tooltip {
      display: block;
    }
  }
  // font-family: ;
}
</style>
