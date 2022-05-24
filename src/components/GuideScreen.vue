<template>
  <div class="imprint-screen w-full h-full text-white flex justify-center flex-col">
    <div class="mx-2 mt-16 flex justify-center">
      <div class="max-w-5xl mx-16">
        <h1 class="text-7xl my-5 text-center text-glow cursor-pointer" @click="$router.push({name: fromSanitized})">
          Elysion</h1>
        <h1 class="text-5xl my-5 text-center">Anleitung</h1>

        <div class="w-full bg-white mt-5 mb-16 h-0.5"></div>

        <div class="text-2xl">

          <p class="mt-7 mb-1">
            <b>1.</b>
            Klicken Sie auf den Button „Neues Spiel“ um ein neues Spiel zu starten.
          </p>

          <p class="mt-7 mb-1">
            <b>2.</b>
            Nun müssen Sie versuchen die Rätsel im Spiel zu lösen.
            Sie können Codes knacken, Schlüssel finden und Items suchen.
            Diese befinden sich irgendwo auf ihrem Bildschirm.
          </p>

          <p class="mt-7 mb-1">
            <b>3.</b>
            Wenn Sie ein Item gefunden habenund anklicken,
            wird das Item aus dem Bild verschwinden und in ihrem Inventar
            am unteren Bildschirmrand wieder erscheinen.
          </p>

          <p class="mt-7 mb-1">
            <b>4.</b>
            Items können miteinander kombiniert werden,
            aber nur bestimmte Kombinationen bringen Sie im Spiel weiter.
            Falls Sie bei einem Rätsel also nicht weiterkommen,
            kann das bedeuten das sie noch nicht alle nötigen Items dafür haben.
          </p>

          <p class="mt-7 mb-1">
            <b>5.</b>
            Wenn Sie während des Spielens „ESC“ drücken,
            dann erscheint ein Menü und das Spiel wird pausiert.
            Dort können Sie ein paar Einstellungen vornehmen,
            um Ihr Spielerlebniss zu verbessern.
            Wenn Sie das Spiel verlassen wird es automatisch gespeichert
            und Sie können später weiterspielen.
          </p>

          <p class="mt-7 mb-1">
            <b>6.</b>
            Beenden Sie das Spiel,
            indem Sie aus dem Keller ausbrechen.
            Viel Spaß beim Rätseln.
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideScreen",
  props: {
    from: String,
  },
  data() {
    return {
      fromSanitized: null
    }
  },

  created() {
    this.fromSanitized = this.from ? this.from : 'default'
  }
}
</script>

<style scoped>

</style>