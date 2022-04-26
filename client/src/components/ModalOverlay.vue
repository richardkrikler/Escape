<template>
  <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 text-white flex justify-center flex-col">
    <div class="mx-32 my-16 flex justify-center">
      <div>
        <h2 class="text-5xl">{{ question }}</h2>
        <div class="flex justify-around">
          <div
              class="text-5xl my-10 cursor-pointer text-glow w-max"
              @click="accept">
            Ja
          </div>
          <div
              class="text-5xl my-10 cursor-pointer text-glow w-max"
              @click="exit">
            Nein
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalOverlay',

  props: {
    name: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    }
  },

  methods: {
    accept() {
      this.$store.state.blurred = false
      this.$store.state.paused = false

      this.$store.state.overlay.blurred = false
      this.$store.state.overlay[this.name] = false

      if (this.name === 'newGameModal') {
        this.$store.commit('deleteGame')

        // There is no saved Game  in localStorage, so push the gameView and tell the Component to not load anything
        this.$router.push({name: 'GameScreen', params: {loadFromStorage: 'no'}})
      } else if (this.name === 'loadingGameModal') {
        // There is a saved Game in localStorage, so push the gameView and tell the Component to load it
        this.$router.push({name: 'GameScreen', params: {loadFromStorage: 'yes'}})
      }
    },

    exit() {
      this.$store.state.overlay.blurred = false
      this.$store.state.overlay[this.name] = false
    }
  }
}
</script>

<style scoped>

</style>