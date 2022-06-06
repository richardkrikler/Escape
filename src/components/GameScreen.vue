<template>
  <div class="flex justify-center items-center h-screen w-full" ref="gameView">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">


    <div class="text-9xl" :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' text-white'"
         @click="$store.state.save.gameState['7'].closeup = !$store.state.save.gameState['7'].closeup">
      <div class="game-container overflow-hidden relative">

        <div v-if="$store.state.save.screen.outerView">
          <img :alt="'outer View'+$store.state.save.screen.screen"
               :src="'../src/assets/media/images/outerView' + $store.state.save.screen.screen + '.png'"
               class="game-img">
        </div>
        <div v-else>

          <img :alt="'Image ' + $store.state.save.screen.screen"
               :src="'../src/assets/media/images/O'
           + $store.state.save.screen.screen
           + ($store.state.save.gameState[$store.state.save.screen.screen].offen ? '_offen' : '')
           + ($store.state.save.gameState[$store.state.save.screen.screen].closeup ? '_closeup' : '')
           + '.jpg'" class="game-img">

          <img v-for="item in currentItems()"

               alt="Foto-9" src="../assets/media/images/O6-ziffer2.png" class="game-img absolute left-0 top-0">
        </div>

      </div>
    </div>
    <div v-if="this.$store.state.save.screen.outerView">
      <div class="clickable absolute h-full top-0 left-0 flex flex-col justify-center"
           @click="this.$store.commit('switchOuterView',false)">
        <span class="iconLeft material-icons text-white">
          arrow_back_ios
        </span>
      </div>
      <div class="clickable absolute h-full top-0 right-0 flex flex-col justify-center"
           @click="this.$store.commit('switchOuterView',true)">
        <span class="iconRight material-icons text-white">
          arrow_forward_ios
        </span>
      </div>
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

const background1 = new Audio('../src/assets/media/audio/background1.wav')
const background2 = new Audio('../src/assets/media/audio/background2.wav')
background1.volume = $store.state.settings.music/10;
background2.volume = $store.state.settings.music/10;

export default {
  name: 'GameScreen',

  components: {
    PauseOverlay,
    SettingsOverlay,
  },

  props: {
    loadFromStorage: String,
  },

  data() {
    return {
      backgroundSound: true,
    }
  },

  methods: {
    incrementTimer() {
      if (this.$store.state.overlay.paused === false) {
        this.$store.state.save.elapsedTime += 1
        setTimeout(this.incrementTimer, 1000)
      }
    },
    randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    /**
     * Play sound at the beginning of the game twice
     * and then do the same every 250 to 350 seconds (~5 min)
     **/
    loop() {

      this.backgroundSound = !this.backgroundSound

      if (!this.backgroundSound) {
        background1.play()

        setTimeout(() => {
              background1.play()
              setTimeout(this.loop, this.randomIntFromInterval(50000, 60000))
            }

            //Background sound 1

            , 35000)
        //Background sound 2
      } else {
        background2.play()
        setTimeout(this.loop, this.randomIntFromInterval(162000, 172000))
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


      this.loop()


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
        } else if (evt.key === 'ArrowLeft' || evt.key === 'a' && this.$store.state.save.screen.outerView) {
          this.$store.commit('switchOuterView', false)
        } else if (evt.key === 'ArrowRight' || evt.key === 'd' && this.$store.state.save.screen.outerView) {
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
.game-container {
  max-width: min-content;
}

.game-img {
  width: auto;
  max-width: 100vw;
  max-height: 100vh;
}

.iconLeft {
  margin-left: 4vh;
  margin-right: 2vh;
}

.iconRight {
  margin-right: 4vh;
  margin-left: 2vh;
}

.clickable:hover {
  cursor: pointer;
}
</style>