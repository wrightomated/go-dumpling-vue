<template>
  <div class="container" :class="{ 'hide-overview': timeleft <= 0 }">
    <div class="console">
      <h1>Go Dumpling</h1>
      <div v-if="!ready" class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="playerName"
          name="playerName"
          v-model="playerName"
          required
          v-on:keyup.enter="connect(playerName)"
        />
        <label for="playerName" class="form__label">Playa</label>
        <button v-on:click="connect(playerName)">Ready</button>
      </div>
      <div v-if="ready">
        <p>
          <span class="players-ready"
            >{{ playersReady }} player{{
              playersReady > 1 ? "s" : ""
            }}
            ready</span
          >
        </p>
        <p v-if="timeleft !== -1" class="time-left">{{ timeleft }}</p>
        <p v-if="timeleft === -1">
          Room Full
        </p>
      </div>

      <img src="../assets/dumplingCooker.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socket from "../services/socket.service";

export default defineComponent({
  name: "GameDetails",
  data() {
    return { playersReady: "", ready: false, timeleft: "?" };
  },
  mounted() {
    socket.onPlayerNumberUpdate((x: string) => (this.playersReady = x));
    socket.onCountdown((x: string) => {
      this.timeleft = x;
    });
  },
  methods: {
    connect(playerName: string) {
      this.ready = true;
      socket.clientReady(playerName);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 3em;
}
img {
  height: 300px;
}
.container {
  position: fixed; /* Stay in place */
  opacity: 1;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: $white; /* Fallback color */
}
.hide-overview {
  opacity: 0;
  transition: 1s;
  z-index: -1;
}
.console {
  position: relative;
  height: 100%;
  width: 500px;
  font-size: 1rem;
  // background: $fifth;
  border-radius: 25px;
  color: $blue-grey;
  margin: auto;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  border: none;
  color: $blue-grey;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  background-color: $white;
  // background: linear-gradient(to right, $third, $fifth);
  border: 1px solid $white;

  &:hover {
    // background: linear-gradient(to right, $third, $fifth);
    color: $main;
    transition: 0.3s;
    border: 1px solid $main;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    // border-width: 3px;
    // border-image: linear-gradient(to right, $third, $fifth);
    // border-image-slice: 1;
    // border: 1px solid #f1f1f1;
  }
}

.players-ready {
  font-size: 1em;
}
.time-left {
  font-size: 2em;
  font-family: "Sansita", sans-serif;
  // color: $fifth;
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $blue-grey;
  outline: 0;
  font-size: 1.3rem;
  color: $blue-grey;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $blue-grey;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $main;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $main, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */
// body {
//   font-family: "Poppins", sans-serif;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   font-size: 1.5rem;
//   background-color: #222222;
// }
</style>
