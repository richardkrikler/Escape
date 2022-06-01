<template>
  <div class="relative flex min-h-screen">
    <transition name="long-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import {BASE_IMG_PATH} from "./store";

export default {
  name: 'App',

  created() {
    this.$store.commit('loadSettings')

    // first letter, explaining the game
    this.$store.state.overlay.letter.img = '/media/images/Textfield_letter1.png'
    this.$store.state.overlay.letter.visible = true
    this.$store.state.overlay.blurred = true
  },

  watch: {
    $route() {
      for (let key in this.$store.state.overlay) {
        if (key !== 'letter') {
          this.$store.state.overlay[key] = false;
        }
      }
    }
  }
}

</script>

<style lang="scss">

body {
  background-color: #1A1919
}

* {
  font-family: adorn-condensed-sans, sans-serif;
  font-weight: 400;
  font-style: normal;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text-glow:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff;
  color: white;
}

.element-glow:hover {
  filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #fff) drop-shadow(0 0 15px #fff) drop-shadow(0 0 17px #fff) drop-shadow(0 0 19px #fff);
  color: white;
}

.text-grow:hover {
  font-size: 125%;
}

.blurred {
  transition: filter 0.3s ease;
  filter: blur(8px);
}

.not-blurred {
  transition: filter 0.3s ease;
  filter: blur(0px);
}

.short-fade-enter-active,
.short-fade-leave-active {
  transition: opacity 0.3s ease;
}

.long-fade-enter-active,
.long-fade-leave-active {
  transition: opacity 1s ease;
}

.short-fade-enter-from,
.short-fade-leave-to,
.long-fade-enter-from,
.long-fade-leave-to {
  opacity: 0;
}

</style>
