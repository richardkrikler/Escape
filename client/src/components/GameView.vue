<template>
    <div class="flex justify-center items-center h-screen" ref="gameView">
      <div class="text-9xl" :class="($store.state.blurred ? 'blurred ' : '') + ' text-white'">
        Game View
      </div>

      <Transition name="short-fade">
        <pause-screen v-if="$store.state.paused"/>
      </Transition>
    </div>
</template>

<script>
import PauseScreen from '@/components/PauseScreen'

export default {
  name: 'GameView',

  components: {
    PauseScreen
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
        if (this.$store.state.paused) {
          this.$store.state.blurred = false
          this.$store.state.paused = false
        } else {
          this.$store.state.blurred = true
          this.$store.state.paused = true
        }
      }
    }
  }
}
</script>

<style scoped>
</style>