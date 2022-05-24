<template>
  <div class="imprint-screen w-full h-full text-white flex justify-center flex-col">
    <div class="mx-2 my-16 flex justify-center">
      <div class="max-w-5xl mx-16">
        <h1 class="text-7xl my-5 text-center text-glow cursor-pointer" @click="$router.push({name: 'default'})">
          Elysion</h1>
        <h1 class="text-5xl my-5 text-center">Impressum</h1>

        <div class="w-full bg-white mt-5 mb-16 h-0.5"></div>

        <div class="text-2xl">
          <p><b>Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25 MedienG, &sect; 63 GewO und &sect; 14
            UGB</b></p>
          <p class="mt-7 mb-1"><b>Webseitenbetreiber:</b> Richard Krikler</p>
          <p class="mt-7 mb-1"><b>Anschrift:</b> Rennweg, 89b, 1030 Wien</p>
          <p class="mt-7 mb-1"><b>Kontaktdaten:</b> <br>Email: <a href="mailto:richard.krikler@htl.rennweg.at" class="text-glow">richard.krikler@htl.rennweg.at</a></p>

          <p class="mt-7 mb-1"><b>Anwendbare Rechtsvorschrift:</b> <a href="https://www.ris.bka.gv.at" target="_blank" class="text-glow">www.ris.bka.gv.at</a> <br> <b>Berufsbezeichnung:</b>
            Schüler</p>

          <p class="mt-7 mb-1"><b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich oder in einem sonstigen
            Vertragsstaat der
            ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder
            Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission
            stellt eine Plattform hierfür bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" class="text-glow">https://ec.europa.eu/consumers/odr</a></p>

          <p class="mt-7 mb-1"><b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich
            möglich ist, diversen
            Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche
            urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.</p>

          <p class="mt-7 mb-1"><b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
            Webseitenbetreiber
            dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden,
            welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um
            dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br>Die Urheberrechte Dritter
            werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.</p>

          <p class="mt-7 mb-1"><b>Quelle:</b> <a href="https://fairesrecht.at" target="_blank" class="text-glow">https://fairesrecht.at</a></p>


          <div class="w-full bg-white mt-5 mb-16 h-0.5"></div>

          <h2 class="mt-7 mb-1 font-bold">Schriften</h2>
          <p><a href="https://fonts.adobe.com/fonts/adorn-sans" target="_blank" class="text-glow">Adorn Condensed Sans</a></p>
          <p>Lizenz: <a href="https://fonts.adobe.com/fonts/adorn-sans#licensing-section" target="_blank" class="text-glow">https://fonts.adobe.com/fonts/adorn-sans#licensing-section</a>
          </p>

          <h2 class="mt-7 mb-1 font-bold">Icons</h2>
          <p><a href="https://fonts.google.com/icons" target="_blank" class="text-glow">Google Material Icons</a></p>
          <p>Lizenz: <a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank" class="text-glow">Apache License,
            Version 2.0</a></p>
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

h2, p, b, a {
  font-family: sans-serif;
}

</style>