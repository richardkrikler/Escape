<template>
  <div class="title-screen">
    <div :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' title-content relative flex'" @click="backgroundSound">
      <div class="flex-1 grid place-items-center h-screen ml-20">
        <div class="text-4xl">
          <div class="container">
            <h1 class="text-center text-9xl text-white mb-24">
              ELYSION
            </h1>
          </div>
          <div class="text-center text-white mb-8 cursor-pointer text-glow text-grow" @click="newGame">
            NEUES SPIEL
          </div>
          <div class="text-center text-white mb-8 cursor-pointer text-glow text-grow" @click="loadGame">
            SPIEL LADEN
          </div>
          <div class="text-center text-white mb-8 cursor-pointer text-glow text-grow" @click="openSettings">
            EINSTELLUNGEN
          </div>
        </div>
      </div>

      <div class="flex-1"></div>

      <div class="absolute bottom-4 left-4 text-white text-2xl cursor-pointer text-glow" @click="redirectImprint">
        Impressum
      </div>
    </div>

    <transition name="short-fade">
      <settings-overlay v-if="$store.state.overlay.settings"/>
    </transition>

    <transition name="short-fade">
      <modal-overlay v-if="$store.state.overlay.newGameModal" name="newGameModal"
                     question="Gespeicherten Spielstand überschreiben?"/>
    </transition>

    <transition name="short-fade">
      <modal-overlay v-if="$store.state.overlay.loadingGameModal" name="loadingGameModal"
                     text="Kein gespeicherter Spielstand."
                     question="Möchten Sie ein neues Spiel starten?"/>
    </transition>
    <audio
        ref="intro"
        src="src/assets/media/audio/startingScreen.wav"
        preload
        id="intro"
    ></audio>
  </div>
</template>

<script>
import SettingsOverlay from '@/components/SettingsOverlay.vue'
import ModalOverlay from '@/components/ModalOverlay.vue'

export default {
  name: 'TitleScreen',

  components: {
    ModalOverlay,
    SettingsOverlay
  },

  data() {
    return {
      click: false,
    }
  },

  mounted() {
    document.onkeyup = (evt) => {
      if (evt.key === 'Escape') {
        if (this.$store.state.overlay.settings) {
          this.$store.state.overlay.settings = false
        } else if (this.$store.state.overlay.newGameModal) {
          this.$store.state.overlay.newGameModal = false
        } else if (this.$store.state.overlay.loadingGameModal) {
          this.$store.state.overlay.loadingGameModal = false
        }
        this.$store.state.overlay.blurred = false
      }
    }
  },

  methods: {
    newGame() {
      //checks if there is already something saved in localStorage
      if (JSON.parse(localStorage.getItem('saveGame')) === null) {
        this.$store.state.blurred = false
        this.$store.state.paused = false

        // There is no saved Game  in localStorage, so push the gameView and tell the Component to not load anything
        this.$router.push({name: 'GameScreen', params: {loadFromStorage: 'no'}})
      } else {
        this.$store.state.overlay.blurred = true
        this.$store.state.overlay.newGameModal = true
      }
    },

    loadGame() {
      //checks if there is already something saved in localStorage
      if (JSON.parse(localStorage.getItem('saveGame')) === null) {
        this.$store.state.overlay.blurred = true
        this.$store.state.overlay.loadingGameModal = true
      } else {
        this.$store.state.blurred = false
        this.$store.state.paused = false

        // There is a saved Game in localStorage, so push the gameView and tell the Component to load it
        this.$router.push({name: 'GameScreen', params: {loadFromStorage: 'yes'}})
      }
    },

    openSettings() {
      this.$store.state.overlay.blurred = true
      this.$store.state.overlay.settings = true
    },

    redirectImprint() {
      this.$router.push({name: 'ImprintScreen'})
    },

    backgroundSound() {
      if(!this.click) {
        let audio = this.$refs.intro
        audio.play()
        setTimeout(this.loop, 50000)
        this.click = true
      }
    },

    loop() {
      let audio = this.$refs.intro

      audio.play()

      console.log('hey')

      setTimeout(this.loop, 50000)
    }
  }
}
</script>

<style scoped>
.title-screen {
  width: 100%;
}

.title-content {
  background-image: url('../assets/media/images/Titlescreen.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

</style>