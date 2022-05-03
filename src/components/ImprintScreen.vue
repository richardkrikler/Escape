<template>
  <div class="imprint-screen w-full h-full text-white flex justify-center flex-col">
    <div class="mx-2 my-16 flex justify-center">
      <div>
        <h1 class="text-7xl my-5 text-center text-glow cursor-pointer" @click="$router.push({name: 'default'})">Elysion</h1>
        <h1 class="text-5xl my-5 text-center">Impressum</h1>

        <div class="w-full bg-white mt-5 mb-16 h-0.5"></div>

        <div class="text-2xl">
          <p class="my-5">Offenlegungspflicht laut §25 Mediengesetz</p>

          <h2 class="mt-7 mb-1 font-bold">Medieninhaber und Herausgeber</h2>
          <p>Projektteam Escape</p>
          <p>vertreten durch Nicolas Kellner</p>

          <h2 class="mt-7 mb-1 font-bold">Projektmitglieder</h2>

          <ul class="list-inside list-disc">
            <li>Niklas Dirry</li>
            <li>Richard Krikler</li>
            <li>Nicolas Kellner</li>
            <li>Florian Kozel</li>
            <li>Martin Windhager</li>
          </ul>

          <h2 class="mt-7 mb-1 font-bold">Adresse</h2>
          <p>Rennweg 89b</p>
          <p>Wien, 1030</p>
          <p>Austria</p>

          <h2 class="mt-7 mb-1 font-bold">E-Mail</h2>
          <p><a href="mailto:nicolas.kellner@htl.rennweg.at" class="text-glow">nicolas.kellner@htl.rennweg.at</a></p>

          <div class="w-full bg-white mt-5 mb-16 h-0.5"></div>

          <h2 class="mt-7 mb-1 font-bold">Schriften</h2>
          <p><a href="https://fonts.adobe.com/fonts/adorn-sans" class="text-glow">Adorn Condensed Sans</a></p>
          <p>Lizenz: <a href="https://fonts.adobe.com/fonts/adorn-sans#licensing-section" class="text-glow">https://fonts.adobe.com/fonts/adorn-sans#licensing-section</a></p>

          <h2 class="mt-7 mb-1 font-bold">Icons</h2>
          <p><a href="https://fonts.google.com/icons" class="text-glow">Google Material Icons</a></p>
          <p>Lizenz: <a href="https://www.apache.org/licenses/LICENSE-2.0.html" class="text-glow">Apache License, Version 2.0</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImprintScreen'
}
</script>

<style scoped>

.imprint-screen * {
  -webkit-touch-callout: default;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

</style>