<template>
  <div class="flex flex-col justify-center min-h-screen place-items-center dark:bg-gray-800">
    <div class="container">
      <h1 class="text-7xl font-bold text-center border-2 dark:border-gray-700 rounded-xl p-3.5 m-2.5 text-gray-600 dark:text-gray-200">
        Escape
      </h1>

      <div class="flex flex-row">
        <timeline class="container"/>
        <tasks class="container"/>
      </div>
    </div>

    <p class="text-blue-600">{{ $store.state.test }}</p>

    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--  <router-view />-->
  </div>
</template>

<script>

</script>

<style>

</style>
