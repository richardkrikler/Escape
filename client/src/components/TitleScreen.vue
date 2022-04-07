<template>
  <div class="relative flex min-h-screen">
    <div class="flex-1 grid place-items-center h-screen ml-20">
      <div>
        <div class="container">
          <h1 class="text-center text-9xl text-white adorn-font mb-24 text-title">
            ELYSION
          </h1>
        </div>
        <div class="text-center text-4xl text-white adorn-font mb-8 text-button text-glow" @click="newGame">
          NEUES SPIEL
        </div>
        <div class="text-center text-4xl text-white adorn-font mb-8 text-button text-glow" @click="loadGame">
          SPIEL LADEN
        </div>
        <div class="text-center text-4xl text-white adorn-font mb-8 text-button text-glow" @click="openSetting">
          EINSTELLUNGEN
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
    <!--
        <div class="relative h-32 w-32">
          <div class="absolute bottom-0 left-0 h-16 w-16 text-white adorn-font text-2xl">Impressum</div>
        </div>
        -->
  </div>
</template>

<script>
export default {
  name: "TitleScreen",

  methods: {
    newGame() {
      this.$router.push({ name: 'game' })
    },

    loadGame() {

    },

    openSetting() {

    },


  }
}
</script>

<style scoped>

body {
  background-image: url('../assets/Titlescreen.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.text-glow:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff;
  color: white;
  font-size: 40px;
  text-align: center;
}

.adorn-font {
  font-family: adorn-condensed-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.text-title {
  cursor: default;
}

.text-button {
  cursor: pointer;
}


</style>