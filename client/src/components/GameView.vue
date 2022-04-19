<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-9xl" :class="$store.state.blurred ? 'blurred' : ''">
      Game View
    </div>
    <pause-screen />
  </div>
</template>

<script>
import PauseScreen from '@/components/PauseScreen'
export default {
  name: "GameView",

  components: {
    PauseScreen
  },

  props : {
    loadFromStorage : String,
  },

  mounted() {
    if(this.loadFromStorage === 'no') {
      this.$store.commit('saveGame')
    } else {
      this.$store.commit('loadGame')
    }
  }
}
</script>

<style scoped>
.blurred {
  filter: blur(8px);
}
</style>