<template>
  <div class="flex justify-center items-center h-screen w-full" ref="gameView">

    <div class="text-9xl" :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred') + ' text-white'">
      <div class="max-w-min overflow-hidden relative">

        <img v-if="$store.getters.currentView.visible" :src="$store.getters.imgPath($store.getters.currentView.img)"
             class="game-img" :alt="$store.getters.currentView.name">

        <div v-if="!$store.getters.outerViewVisible">
          <img v-for="ob in $store.getters.currentView.objects" v-show="ob.visible && ob.img !== undefined"
               :src="$store.getters.imgPath(ob.img)"
               class="game-img absolute left-0 top-0"
               :alt="ob.name"/>
        </div>

        <div class="absolute left-0 top-0 h-full w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 4000" preserveAspectRatio="none" class="h-full"
               stroke="gray" stroke-width="2" fill="transparent">

            <g @click="itembarAdd">
              <path id="frameBatterie"
                    class="element-glow"
                    v-if="$store.state.save.screen.outerViews[1].innerViews[0].visible && $store.state.save.screen.outerViews[1].innerViews[0].objects[1].visible"
                    d="M2009,2459l142-32s23-9,23-29,0-62.26,0-62.26c0,0-2-9.74-14-20.74-15-21-104-155-104-155,0,0-4-8-29-6-28,5-129,26-129,26,0,0-24,13-20,28,.5,17.5,5.5,71.5,5.5,71.5,0,0-1,3,4,11s95,154,95,154c0,0,9,15,26.5,14.5Z"/>
            </g>

            <g @click="itembarAdd">
              <path id="frameBrief1"
                    class="element-glow"
                    v-if="$store.state.save.screen.outerViews[2].innerViews[1].visible && $store.state.save.screen.outerViews[2].innerViews[1].objects[0].visible"
                    d="M2247.48,2010.07v-388.31s277.21,22.65,394.79,19.42c117.57-3.24,239.46,6.47,239.46,6.47l148.85,2.16v390.47h-276.13s-182.29,17.26-319.28-12.94c-136.99-30.2-187.69-17.26-187.69-17.26Z"/>
            </g>

            <!--            <g @click="test">-->
            <!--              <polygon id="frame_buechse1"-->
            <!--                       points="3230.11 2072.63 3957.12 2307.78 4090.88 2027.33 4140.49 1815.91 3413.48 1600.18 3230.11 1884.94 3210.7 2048.9 3230.11 2072.63"/>-->
            <!--            </g>-->

            <!--            <g @click="test">-->
            <!--              <path id="frame_buechse2"-->
            <!--                    d="M833.35,1448.09s69.57-250.79,488.63-249.17,469.21,220.04,469.21,220.04l14.56,1095.37s4.04,307.42-464.36,341.39c-307.42,0-386.7-179.6-423.91-271.82l-84.13-1135.82Z"/>-->
            <!--            </g>-->

            <!--            <g>-->
            <!--              <polygon id="frame_kasten1_offen"-->
            <!--                       class="element-glow"-->
            <!--                       v-if="$store.state.save.screen.outerViews[2].innerViews[1].visible && $store.state.save.screen.outerViews[2].innerViews[1].objects[0].visible"-->
            <!--                       points="2815.91 318.74 2859.06 3584.9 1737.26 3584.9 1297.17 3938.7 1219.51 46.92 1668.22 314.43 2815.91 318.74"/>-->
            <!--            </g>-->

            <g @click="open">
              <polygon id="frame_kasten1"
                       class="element-glow"
                       v-if="$store.state.save.screen.outerViews[2].innerViews[0].visible && $store.state.save.screen.outerViews[2].innerViews[0].objects[0].visible"
                       points="1797.66 314.43 1840.81 3576.27 4256.99 3554.7 4256.99 314.43 1797.66 314.43"/>
            </g>

            <g @click="itembarAdd">
              <path id="frameSchluessel1"
                    class="element-glow"
                    v-if="$store.state.save.screen.outerViews[1].innerViews[0].visible && $store.state.save.screen.outerViews[1].innerViews[0].objects[0].visible"
                    d="M3706,3496l50-12s10-4,9-23-4-25-4-25l-6-7s-15.93,10.43-19.46-6.79-12.54-28.21-17.54-35.21l-12-13.33,317-77.67s40,48,102,44,66.65-44,66.65-44c0,0,4.35-49-50.65-86s-107-25-107-25c0,0-51,15-27,67l-426,107s-26,48,18,61c31-12,43-14,43-14,0,0,53,93,64,90Z"/>
            </g>

            <!--            <g @click="test">-->
            <!--              <path id="frame_schraubenzieher"-->
            <!--                    d="M3201.65,1301.87s-14.83,42.25-55.73,16.18c-29.66-11.69-39.55-16.63-44.94-25.17-15.28,16.83-28.76,42.7-67.42,28.76-38.65-13.93-147.87-68.76-238.2-75.51-66.52-8.09-400.9-17.08-399.1-181.57,11.69-70.11,68.76-81.8,115.06-80.9,52.13,3.6,188.31,42.25,330.79,103.37,47.64,22.47,134.38,54.83,195.96,49.44,53.93,4.49,62.02,18.61,62.02,18.61l12.58,13.75s7.19,.9,.9,19.78l17.08,.9,4.94-6.44,78.95,22.32s7.79,8.69,3.6,28.16c11.99,5.99,38.35,4.19,38.35,4.19l934.83,265.47,442.25,145.62s31.01,24.27-16.18,26.97c-70.11-13.48-444.49-85.84-660.67-141.12-216.18-55.28-719.1-197.75-719.1-197.75,0,0-12.13-13.93-14.38-26.07l-21.57-8.99Z"/>-->
            <!--            </g>-->

            <!--            <g @click="test">-->
            <!--              <path id="frame_zettel2"-->
            <!--                    d="M610.07,3388.04l339.78-45.3s207.1-34.79,226.52-95.46,61.48-281.53,61.48-281.53c0,0-65.53-42.07-21.03-59.87,29.12-37.21,21.03-56.63,21.03-56.63l-139.15-43.69s-20.22-53.39,50.16-87.37,90.02,8.09,90.02,8.09c0,0,41.84,6.66,16.77-21.35s-42.88-28.81-32.36-66.03c-103.55,11.33-172.31,14.56-389.93-33.98-101.93-16.18-197.39-24.27-197.39-24.27,0,0-29.12,70.38-98.7,376.99-12.94,74.43-25.89,207.1-25.89,207.1l16.18,19.42s169.08-16.99,194.16,69.57c21.03,61.48-90.61,84.13-90.61,84.13l-21.03,50.16Z"/>-->
            <!--            </g>-->

            <!--            <g @click="test">-->
            <!--              <path id="frame_ziffer2"-->
            <!--                    d="M3519.85,1891.54s42.25-45.84,104.27-39.55,66.07,4.94,122.25,39.55c35.06,48.54-8.09,79.1-8.09,79.1,0,0-14.38,33.26-110.56,24.27-96.18-8.99-112.36-52.13-112.36-52.13,0,0-3.6-25.17,4.49-51.24Z"/>-->
            <!--            </g>-->

            <!--            <g @click="test">-->
            <!--              <path id="frame_ziffer3"-->
            <!--                    d="M1820.31,1252.31s-145.62-105.17-33.98-255.64c72.81-77.66,187.69-50.97,232.99,0,105.17,90.61,29.12,237.84,29.12,237.84,0,0-42.07,79.28-173.12,40.45l-55.01-22.65Z"/>-->
            <!--            </g>-->

            <!--            <g @click="test">-->
            <!--              <path id="frame_ziffer4"-->
            <!--                    d="M2423.28,2079.1s4.31,99.24,92.76,135.91c99.24,25.89,174.74,17.26,174.74,17.26,0,0,83.06-21.27,127.28-75.89,30.2-53.54,34.52-79.43-10.79-141.99-79.82-38.83-194.16-72.27-254.56-51.78-90.61,25.89-125.12,60.4-129.44,116.49Z"/>-->
            <!--            </g>-->
          </svg>
        </div>
      </div>
    </div>


    <div :class="($store.state.overlay.blurred ? 'blurred' : 'not-blurred')" class="absolute bottom-0 mb-5">
      <div class="text-white w-full text-center text-2xl absolute flex gap-5 justify-center" style="top: -40px">
        <p v-for="pathOption in $store.getters.currentView.pathOptions" class="text-glow cursor-pointer"
           @click="$store.dispatch('changeView', {screenName: pathOption.goal})"
           v-if="$store.getters.outerViewVisible">{{ pathOption.name }}</p>

        <p v-else class="text-glow cursor-pointer"
           @click="innerToOuterView">Zurück</p>
      </div>

      <itembar-component class="mx-auto"/>
    </div>

    <transition name="short-fade">
      <div v-if="$store.state.overlay.letter.visible">
        <div class="absolute h-full w-full top-0 left-0 flex flex-col justify-center"
             @click="closeLetter">
          <div>
            <img :src="$store.state.overlay.letter.img" :alt="letter" class="w-3/5 mx-auto letter">
          </div>
        </div>
      </div>
    </transition>

    <transition name="short-fade">
      <pause-overlay v-if="$store.state.overlay.paused"/>
    </transition>

    <transition name="short-fade">
      <settings-overlay v-if="$store.state.overlay.settings"/>
    </transition>
  </div>
</template>

<script>
import PauseOverlay from '@/components/PauseOverlay.vue'
import SettingsOverlay from '@/components/SettingsOverlay.vue'
import ItembarComponent from '@/components/ItembarComponent.vue'
import ArrowBackComponent from '@/components/ArrowBackComponent.vue'
import ArrowForwardComponent from '@/components/ArrowForwardComponent.vue'
import ArrowUpComponent from '@/components/ArrowUpComponent.vue'

export default {
  name: 'GameScreen',

  components: {
    ItembarComponent,
    ArrowUpComponent,
    ArrowForwardComponent,
    ArrowBackComponent,
    PauseOverlay,
    SettingsOverlay,
  },

  props: {
    loadFromStorage: String,
  },

  methods: {
    incrementTimer() {
      if (this.$store.state.overlay.paused === false) {
        this.$store.state.save.elapsedTime += 1
        setTimeout(this.incrementTimer, 1000)
      }
    },

    closeLetter() {
      this.$store.state.overlay.blurred = false
      this.$store.state.overlay.letter.visible = false
    },

    itembarAdd(evt) {
      this.$store.state.save.screen.outerViews.forEach(ov => ov.innerViews.forEach(iv => iv.objects.forEach(ob => {
        if (ob.frame === evt.target.id) {
          ob.visible = false
          this.$store.state.save.itembar.push(ob)
        }
      })))
    },

    open(evt) {
      this.$store.state.save.screen.outerViews.forEach(ov => ov.innerViews.forEach(iv => iv.objects.forEach(ob => {
        if (ob.frame === evt.target.id) {
          const index = this.$store.state.save.itembar.findIndex(item => item.name === ob.needs)
          if (index > -1) {
            this.$store.state.save.itembar.splice(index, 1)
            this.$store.dispatch('changeView', {screenName: ob.opens})
          }
        }
      })))
    },

    innerToOuterView() {
      this.$store.commit('setOuterView', this.$store.getters.outerViewOfInnerView({innerView: this.$store.getters.currentView}).pos - 1)
    }
  },

  mounted() {
    if (this.loadFromStorage === 'no') {
      this.$store.commit('saveGame')
    } else {
      this.$store.commit('loadGame')
    }

    this.incrementTimer()

    document.onkeyup = (evt) => {
      if (evt.key === 'Escape') {
        if (this.$store.state.overlay.letter.visible) {
          this.$store.state.overlay.blurred = false
          this.$store.state.overlay.letter.visible = false
        } else if (this.$store.state.overlay.settings) {
          this.$store.state.overlay.paused = true
          this.$store.state.overlay.settings = false
        } else if (this.$store.state.overlay.paused) {
          this.$store.state.overlay.blurred = false
          this.$store.state.overlay.paused = false
          this.incrementTimer()
        } else {
          this.$store.state.overlay.blurred = true
          this.$store.state.overlay.paused = true
          this.$store.state.overlay.letter.visible = false
        }
      } else if ((evt.key === 'ArrowLeft' || evt.key === 'a') && this.$store.getters.outerViewVisible) {
        this.$store.dispatch('switchOuterView', {increment: false})
      } else if ((evt.key === 'ArrowRight' || evt.key === 'd') && this.$store.getters.outerViewVisible) {
        this.$store.dispatch('switchOuterView', {increment: true})
      } else if (evt.key === 'ArrowUp' && !this.$store.getters.outerViewVisible) {
        this.innerToOuterView()
      }
    }
  }
}
</script>

<style scoped>
.game-img {
  width: auto;
  max-width: 100vw;
  max-height: 100vh;
}

.letter {
  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 5px #000) drop-shadow(0 0 15px #000);
}
</style>