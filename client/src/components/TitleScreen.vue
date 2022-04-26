<template>
  <div class="title-screen">
    <div :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' title-screen-content relative flex'">
      <div class="flex-1 grid place-items-center h-screen ml-20">
        <div>
          <div class="container">
            <h1 class="text-center text-9xl text-white mb-24">
              ELYSION
            </h1>
          </div>
          <div class="text-center text-4xl text-white mb-8 cursor-pointer text-glow" @click="newGame">
            NEUES SPIEL
          </div>
          <div class="text-center text-4xl text-white mb-8 cursor-pointer text-glow" @click="loadGame">
            SPIEL LADEN
          </div>
          <div class="text-center text-4xl text-white mb-8 cursor-pointer text-glow" @click="openSettings">
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
  </div>
</template>

<script>
import SettingsOverlay from '@/components/SettingsOverlay'

export default {
  name: 'TitleScreen',

  components: {
    SettingsOverlay
  },

  mounted() {
    document.onkeyup = (evt) => {
      if (evt.key === 'Escape') {
        if (this.$store.state.overlay.settings) {
          this.$store.state.overlay.blurred = false
          this.$store.state.overlay.settings = false
        }
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

        // TODO: Change to appropriately Designed Dialog which allows the user to answer yes or no
        // There is a saved Game in localStorage, so ask the user if he wants to overwrite it
        alert('You already have a saved game, do you want to overwrite it?')

      }
    },

    loadGame() {
      //checks if there is already something saved in localStorage
      if (JSON.parse(localStorage.getItem('saveGame')) === null) {

        // TODO: Dont know, maybe just start a new game, without telling the user he hasn't saved a game yet?
        // There is no saved Game, either tell the User he hasn't started a Game yet or just start a new Game
        alert('You don\'t have a saved game yet')

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
    }
  }
}
</script>

<style scoped>
.title-screen {
  width: 100%;
}

.title-screen-content {
  background-image: url('../assets/media/images/Titlescreen.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

</style>