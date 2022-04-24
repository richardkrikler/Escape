<template>
    <div class="flex justify-center items-center h-screen" ref="gameView">
      <div class="text-9xl" :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' text-white'">
        Game View
      </div>

      <Transition name="short-fade">
        <pause-screen v-if="$store.state.overlay.paused"/>
      </Transition>

      <Transition name="short-fade">
        <settings-overlay v-if="$store.state.overlay.settings"/>
      </Transition>
    </div>
</template>

<script>
import PauseScreen from '@/components/PauseScreen'
import SettingsOverlay from '@/components/SettingsOverlay'

export default {
  name: 'GameView',

  components: {
    PauseScreen,
    SettingsOverlay
  },

  props: {
    loadFromStorage: String,
  },

  mounted() {
    if (this.loadFromStorage === 'no') {
      this.$store.commit('saveGame')
    } else {
      this.$store.commit('loadGame')
    }

    document.onkeyup = (evt) => {
      if (evt.key === 'Escape') {
        if (this.$store.state.overlay.settings) {
          this.$store.state.overlay.paused = true
          this.$store.state.overlay.settings = false
        } else if (this.$store.state.overlay.paused) {
          this.$store.state.overlay.blurred = false
          this.$store.state.overlay.paused = false
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