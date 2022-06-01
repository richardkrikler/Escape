<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="914" height="110" viewBox="0 0 914 110">
      <g id="Rechteck_1" data-name="Rechteck 1" fill="gray" stroke="#292929" stroke-width="3" opacity="0.392">
        <rect width="914" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="911" height="107" fill="none"/>
      </g>
      <g id="Rechteck_2" data-name="Rechteck 2" fill="none" stroke="#292929" stroke-linejoin="bevel" stroke-width="3"
         opacity="0.998">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_3" data-name="Rechteck 3" transform="translate(113)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_4" data-name="Rechteck 4" transform="translate(227)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_5" data-name="Rechteck 5" transform="translate(341)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_6" data-name="Rechteck 6" transform="translate(455)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_7" data-name="Rechteck 7" transform="translate(569)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_8" data-name="Rechteck 8" transform="translate(683)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
      <g id="Rechteck_9" data-name="Rechteck 9" transform="translate(797)" fill="none" stroke="#292929"
         stroke-linejoin="bevel" stroke-width="3">
        <rect width="117" height="110" stroke="none"/>
        <rect x="1.5" y="1.5" width="114" height="107" fill="none"/>
      </g>
    </svg>

    <div class="absolute flex justify-around w-full h-full top-0">
      <div v-for="(pa, i) in 8" class="flex">
        <div v-if="$store.state.save.itembar[i] === undefined" class="w-16 h-16"></div>

        <img v-else :src="$store.getters.imgPath($store.state.save.itembar[i].pixelArt)"
             :alt="$store.state.save.itembar[i].name"
             class="w-16 h-16 my-auto glow"
             @click="itemClick($store.state.save.itembar[i].frame)">
      </div>
    </div>
  </div>
</template>

<script>

import {BASE_IMG_PATH} from '../store'

export default {
  name: 'ItembarComponent',

  methods: {
    itemClick(item) {
      if (item === 'frameBrief1') {
        this.$store.state.overlay.blurred = true
        this.$store.state.overlay.letter.img = BASE_IMG_PATH + 'Textfield_letter.png'
        this.$store.state.overlay.letter.visible = true
      }
    },
  }
}
</script>

<style scoped>
.glow {
  filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #fff);
  color: white;
}

.glow:hover {
  filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #fff) drop-shadow(0 0 15px #fff);
}
</style>