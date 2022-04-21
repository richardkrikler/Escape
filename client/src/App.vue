<template>
  <div class="relative flex min-h-screen">
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
