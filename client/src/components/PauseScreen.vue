<template>
  <div class="absolute top-0 left-0 w-full h-full">
    <div class="mx-32 my-16">
      <div class="flex justify-between">
        <h2 class="text-center text-8xl text-white mt-12 mb-2 text-title">PAUSE</h2>
        <div class="flex mt-12 mb-2">
          <img src="../assets/schedule_white_24dp.svg" alt="clock-icon" class="clock-icon self-end mb-3 mx-2">
          <h2 class="text-center text-6xl text-white text-title self-end mx-2">22:13</h2>
        </div>
      </div>

      <div class="w-full bg-white mb-16 h-0.5"></div>

      <div>
        <div
            class="text-5xl text-white my-10 cursor-pointer text-glow w-max"
            @click="newGame">
          FORTSETZEN
        </div>
        <div
            class="text-5xl text-white my-10 cursor-pointer text-glow w-max"
            @click="loadGame">
          SPEICHERN
        </div>
        <div
            class="text-5xl text-white my-10 cursor-pointer text-glow w-max"
            @click="openSetting">
          EINSTELLUNGEN
        </div>
        <div
            class="text-5xl text-white my-10 cursor-pointer text-glow w-max"
            @click="openSetting">
          BEENDEN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PauseScreen'
}
</script>

<style scoped>
.clock-icon {
  width: 55px;
  height: 55px;
}
</style>