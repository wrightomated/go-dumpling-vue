<template>
  <div class="tooltip">
    <h3>{{ cardType }}</h3>
    <div class="tooltip__content" v-html="getContent()"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TooltipContentService } from "../services/tooltipContent.service";
import { CardType } from "../models/cardType";
export default defineComponent({
  name: "Tooltip",
  props: {
    cardType: String,
  },
  methods: {
    getContent() {
      return TooltipContentService.getContent(this.cardType as CardType);
    },
  },
});
</script>

<style scoped lang="scss">
.tooltip {
  color: $navy;
  background: $white;
  padding: 10px 10px 10px 20px;
  position: absolute;
  z-index: 1000;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;

  h3 {
    text-transform: capitalize;
  }

  &__content {
    text-align: left;
    list-style-type: none;
  }
}
ul {
  text-align: left;
  // list-style-type: none;
}
</style>
