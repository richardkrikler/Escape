<template>
  <div class="relative flex min-h-screen">
    <Transition name="long-fade">
      <router-view/>
    </Transition>
  </div>
</template>

<script>

export default {
  name: 'App',

  created() {
    this.$store.commit('loadSettings')
  }
}

</script>

<style lang="scss">

body {
  background-color: #1A1919
}

* {
  font-family: adorn-condensed-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text-glow:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff;
  color: white;
  // font-size: 40px;
}

.blurred {
  transition: filter 0.3s ease;
  filter: blur(8px);
}

.not-blurred {
  transition: filter 0.3s ease;
  filter: blur(0px);
}

.short-fade-enter-active,
.short-fade-leave-active {
  transition: opacity 0.3s ease;
}

.long-fade-enter-active,
.long-fade-leave-active {
  transition: opacity 1s ease;
}

.short-fade-enter-from,
.short-fade-leave-to,
.long-fade-enter-from,
.long-fade-leave-to {
  opacity: 0;
}

</style>
