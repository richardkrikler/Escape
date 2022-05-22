<template>
  <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 text-white">
    <div class="mx-32 my-16">
      <div class="flex justify-between">
        <h2 class="text-center text-8xl text-white mt-12 mb-2 text-title">PAUSE</h2>
        <div class="flex mt-12 mb-2">
          <img src="../assets/media/icons/schedule.svg" alt="clock-icon"
               class="clock-icon self-end mb-3 mx-2">
          <h2 class="text-center text-6xl text-white text-title self-end mx-2">{{ $store.getters.elapsedTime }}</h2>
        </div>
      </div>

      <div class="w-full bg-white mb-16 h-0.5"></div>

      <div>
        <div
            class="text-5xl my-10 cursor-pointer text-glow w-max"
            @click="continueGame">
          FORTSETZEN
        </div>
        <div class="flex my-10 w-max">
          <div class="text-5xl cursor-pointer text-glow w-max" @click="saveGame">SPEICHERN</div>
          <transition name="long-fade">
            <div class="text-2xl my-auto mx-5 pb-1" v-if="savedMsg">
              <span class="opacity-70">GESPEICHERT</span>
            </div>
          </transition>
        </div>
        <div
            class="text-5xl my-10 cursor-pointer text-glow w-max"
            @click="openSettings">
          EINSTELLUNGEN
        </div>
        <div
            class="text-5xl my-10 cursor-pointer text-glow w-max"
            @click="endGame">
          BEENDEN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PauseOverlay',

  methods: {
    continueGame() {
      this.$store.state.overlay.blurred = false
      this.$store.state.overlay.paused = false
    },

    saveGame() {
      this.$store.commit('saveGame')
      this.savedMsg = true
      setTimeout(() => this.savedMsg = false, 3000)
    },

    openSettings() {
      this.$store.state.overlay.blurred = true
      this.$store.state.overlay.paused = false
      this.$store.state.overlay.settings = true
    },

    endGame() {
      this.$store.state.overlay.blurred = false
      this.$store.state.overlay.paused = false
      this.$router.push({name: 'default'})
    }
  },

  data() {
    return {
      savedMsg: false
    }
  }
}
</script>

<style scoped>
.clock-icon {
  width: 55px;
  height: 55px;
}
</style>