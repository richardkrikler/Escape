<template>
  <div class="title-screen">
    <div class="relative flex">
      <div class="flex-1 grid place-items-center h-screen ml-20">
        <div>
          <div class="container">
            <h1 class="text-center text-9xl  text-white mb-24 text-title">
              ELYSION
            </h1>
          </div>
          <div class="text-center text-4xl text-white mb-8 text-button text-glow" @click="newGame">
            NEUES SPIEL
          </div>
          <div class="text-center text-4xl text-white mb-8 text-button text-glow" @click="loadGame">
            SPIEL LADEN
          </div>
          <div class="text-center text-4xl text-white mb-8 text-button text-glow" @click="openSetting">
            EINSTELLUNGEN
          </div>
        </div>
      </div>

      <div class="flex-1"></div>
      <div class="absolute bottom-4 left-4 text-white text-2xl text-button text-glow" @click="redirectImpressum">
        Impressum
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleScreen',

  methods: {
    newGame() {
      //checks if there is already something saved in localStorage
      if (JSON.parse(localStorage.getItem('saveGame')) === null) {

        // There is no saved Game  in localStorage, so push the gameView and tell the Component to not load anything
        this.$router.push({name: 'GameView', params: {loadFromStorage: 'no'}})

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

        // There is a saved Game in localStorage, so push the gameView and tell the Component to load it
        this.$router.push({name: 'GameView', params: {loadFromStorage: 'yes'}})
      }
    },

    openSetting() {

    },

    redirectImpressum() {

    }
  }
}
</script>

<style scoped>

.title-screen {
  background-image: url('../assets/Titlescreen.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
}

.text-title {
  cursor: default;
}

.text-button {
  cursor: pointer;
}

</style>