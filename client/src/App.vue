<template>
  <div class="relative flex min-h-screen" style="background-color: #1A1919">
    <Transition name="long-fade">
      <router-view/>
    </Transition>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {},
}

</script>

<style lang="scss">
* {
  font-family: adorn-condensed-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  user-select: none;
}

.text-glow:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff;
  color: white;
  // font-size: 40px;
}


.blurred {
  filter: blur(8px);
}

.short-fade-enter-active,
.short-fade-leave-active {
  transition: opacity .2s ease-in-out;
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
