<template>
  <div class="flex justify-center items-center h-screen" ref="gameView">
    <div class="text-9xl" :class="($store.state.blurred ? 'blurred ' : '') + 'transition-all'">
      Game View
    </div>

    <Transition>
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
.transition-all {
  transition: all 0.2s ease;
}

.blurred {
  filter: blur(8px);
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>