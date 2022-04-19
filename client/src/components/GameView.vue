<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-9xl">
      Game View
    </div>
  </div>
</template>

<script>
export default {
  name: "GameView",

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

</style>