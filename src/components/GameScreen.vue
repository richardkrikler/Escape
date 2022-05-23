<template>
  <div class="flex justify-center items-center h-screen w-full" ref="gameView">

    <div class="text-9xl" :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' text-white'">
      <div class="max-w-min overflow-hidden relative">
        <img v-if="$store.getters.currentView.visible" :src="$store.getters.imgPath($store.getters.currentView.img)"
             class="game-img" alt="current view">


      </div>
    </div>


    <div v-if="this.$store.getters.outerViewVisible">
      <div class="absolute h-full top-0 left-0 flex flex-col justify-center"
           :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred')">
        <div class="pl-5 pr-2 py-2.5 cursor-pointer"
             @click="this.$store.dispatch('switchOuterView', {increment: false})">
          <arrow-back-component class="icon-left element-glow"/>
        </div>
      </div>

      <div class="absolute h-full top-0 right-0 flex flex-col justify-center"
           :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred')">
        <div class="pr-3 pl-4 py-2.5 cursor-pointer"
             @click="this.$store.dispatch('switchOuterView', {increment: true})">
          <arrow-forward-component class="icon-right element-glow"/>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- something else -->
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
import PauseOverlay from '@/components/PauseOverlay.vue'
import SettingsOverlay from '@/components/SettingsOverlay.vue'
import ArrowBackComponent from '@/components/ArrowBackComponent.vue'
import ArrowForwardComponent from '@/components/ArrowForwardComponent.vue'

export default {
  name: 'GameScreen',

  components: {
    ArrowForwardComponent,
    ArrowBackComponent,
    PauseOverlay,
    SettingsOverlay,
  },

  props: {
    loadFromStorage: String,
  },

  data() {
    return {}
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
      } else if ((evt.key === 'ArrowLeft' || evt.key === 'a') && this.$store.state.save.screen.outerView) {
        this.$store.commit('switchOuterView', false)
      } else if ((evt.key === 'ArrowRight' || evt.key === 'd') && this.$store.state.save.screen.outerView) {
        this.$store.commit('switchOuterView', true)
      } else if (evt.key === 'x') {
        const input = prompt();
        this.$store.commit('changeScreen', {outerView: false, screen: input})
      }
    }
  }
}
</script>

<style scoped>
.game-img {
  width: auto;
  max-width: 100vw;
  max-height: 100vh;
}

.icon-left,
.icon-right {
  width: 30px;
  height: 30px;
}
</style>