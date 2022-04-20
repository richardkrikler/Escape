<template>
  <div class="relative flex min-h-screen" style="background-color: lightblue">
    <router-view/>
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
}

.text-glow:hover {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #fff, 0 0 82px #fff, 0 0 92px #fff;
  color: white;
  // font-size: 40px;
}

</style>
