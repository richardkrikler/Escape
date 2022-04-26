<template>
  <div class="flex justify-center items-center h-screen" ref="gameView">
    <div class="text-9xl" :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' text-white'">
      Game View
    </div>

    <transition name="short-fade">
      <pause-overlay v-if="$store.state.overlay.paused"/>
    </transition>

    <transition name="short-fade">
      <settings-overlay v-if="$store.state.overlay.settings"/>
    </transition>
  </div>
</template>

<script>
import PauseOverlay from '@/components/PauseOverlay'
import SettingsOverlay from '@/components/SettingsOverlay'

export default {
  name: 'GameScreen',

  components: {
    PauseOverlay,
    SettingsOverlay
  },

  props: {
    loadFromStorage: String,
  },

  methods: {
    incrementTimer() {
      if (this.$store.state.overlay.paused === false) {
        this.$store.state.save.elapsedTime += 1
        setTimeout(this.incrementTimer, 1000)
      }
    }
  },

  mounted() {
    if (this.loadFromStorage === 'no') {
      this.$store.commit('saveGame')
    } else {
      this.$store.commit('loadGame')
    }

    this.incrementTimer()

    document.onkeyup = (evt) => {
      if (evt.key === 'Escape') {
        if (this.$store.state.overlay.settings) {
          this.$store.state.overlay.paused = true
          this.$store.state.overlay.settings = false
        } else if (this.$store.state.overlay.paused) {
          this.$store.state.overlay.blurred = false
          this.$store.state.overlay.paused = false
          this.incrementTimer()
        } else {
          this.$store.state.overlay.blurred = true
          this.$store.state.overlay.paused = true
        }
      }
    }
  }
}
</script>

<style scoped>
</style>