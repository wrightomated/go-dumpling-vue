<template>
  <div class="console">
    <button v-if="!ready" v-on:click="connect()">Ready</button>
    <div v-if="ready && timeleft !== 0">
      <p>
        Players ready: <span class="players-ready">{{ playersReady }}</span>
      </p>
      <p>Countdown: {{ timeleft }}s</p>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
// import socket from "../services/socket.service";

// @Options({
//   props: {
//     msg: String,
//   },
// })
// export default class HelloWorld extends Vue {
//   msg!: string;
//   playersReady = "";
//   ready = false;
//   timeleft = "?";
//   mounted() {
//     socket.onPlayerNumberUpdate((x: string) => (this.playersReady = x));
//     socket.onCountdown((x: string) => (this.timeleft = x));
//   }
//   connect() {
//     this.ready = true;
//     socket.clientReady();
//   }
// }
import { defineComponent } from "vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "GameDetails",
  data() {
    return { playersReady: "", ready: false, timeleft: "?" };
  },
  mounted() {
    socket.onPlayerNumberUpdate((x: string) => (this.playersReady = x));
    socket.onCountdown((x: string) => (this.timeleft = x));
  },
  methods: {
    connect() {
      this.ready = true;
      socket.clientReady();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  color: white;
}
.console {
  height: 200px;
  width: 200px;
  // background: $fifth;
  border-radius: 25px;
  color: grey;
  margin: auto;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  // justify-content: center;
  text-align: left;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  background-color: white;
  border: none;
  color: grey;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: $main;
    color: white;
    transition: 0.3s;
    border: 1px solid $main;
  }
}
.players-ready {
  color: $fifth;
  font-size: 1em;
}
</style>
