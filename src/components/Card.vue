<template>
  <div
    v-on:click="selectCard()"
    v-bind:class="[
      {
        'card--player-card': isPlayerCard,
        'card--table-card': !isPlayerCard,
        'card--is-selected': isSelected,
      },
      cardType,
    ]"
  >
    <img :src="getImage()" :alt="cardType" />
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
    getImage() {
      if (this.cardType === "chilli") {
        // return "../assets/hotsauce.png";
        return require("../assets/" + "hotsauce.png");
      } else {
        // return "../assets/dumpling-no-bg.png";
        return require("../assets/" + "dumpling-no-bg.png");
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

  img {
    max-width: 100%;
  }

  &__name {
    font-family: $display-font;
    font-weight: bold;
  }
  &.chilli {
    img {
      max-height: 60px;
      width: auto;
      margin-top: 13px;
    }
  }

  &--player-card {
    cursor: pointer;

    &.chilli {
      img {
        max-height: 90px;
        margin-top: 10px;
      }
    }
  }

  &--table-card {
    &.champagne {
      & .card__name {
        font-size: 0.7em;
      }
    }
  }

  &--is-selected {
    border: 4px solid $green;
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

.chilli {
  background: linear-gradient(45deg, black, darken($coral, 50%));
}

.vinegar {
  background: linear-gradient(45deg, darken($coral, 50%), darken($coral, 30%));
}

.ice {
  background: linear-gradient(45deg, $teal, $teal-secondary);
}

.bowl {
  background: linear-gradient(45deg, darken($green, 20%), $green-secondary);
}

.puddin {
  background: linear-gradient(45deg, $coral, $gold-secondary);
}

.dummy {
  background: white;
}
/* Add some padding inside the card container */
.container {
  margin-bottom: 4px;

  &:hover {
    .card__tooltip {
      display: block;
    }
  }
  // font-family: ;
}
</style>
