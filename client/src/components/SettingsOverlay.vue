<template>
  <div class="absolute flex min-h-screen min-w-full top-0 left-0 bg-black bg-opacity-30">
    <div class="min-w-full mt-16">
      <div class="text-center text-8xl text-white">
        Einstellungen
      </div>
      <div class="relative flex mt-10">
        <div class="flex-1 grid ">
          <div class="ml-20">
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="$store.state.settings.music" setting-name="MUSIK"
                               store="music"/>
            </div>
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="$store.state.settings.voice" setting-name="STIMME"
                               store="voice"/>
            </div>
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="$store.state.settings.sfx" setting-name="SFX" store="sfx"/>
            </div>
            <div class="mb-10">
              <checkbox-component setting-name="UNTERTITEL" :value="$store.state.settings.subtitles" store="subtitles"/>
            </div>
            <div class="mb-10">
              <checkbox-component setting-name="HINWEISE" :value="$store.state.settings.hints" store="hints"/>
            </div>
          </div>

        </div>
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderComponent from '@/components/SliderComponent'
import CheckboxComponent from '@/components/CheckboxComponent'

export default {
  name: 'SettingsOverlay',

  components: {
    CheckboxComponent,
    SliderComponent
  }
}
</script>

<style scoped>

</style>