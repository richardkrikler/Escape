<template>
  <div class="absolute flex min-h-screen min-w-full top-0 left-0 bg-gray-700 bg-opacity-80" style="z-index: 1;">
    <div class="min-w-full mt-16">
      <div class="text-center text-8xl text-white">
        Einstellungen
      </div>
      <div class="relative flex mt-10">
        <div class="flex-1 grid ">
          <div class="ml-20">
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="10" setting-name="MUSIK" />
            </div>
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="10" setting-name="STIMME"/>
            </div>
            <div class="mb-10">
              <SliderComponent :min="0" :max="10" :value="10" setting-name="SFX"/>
            </div>
            <div class="mb-10">
              <checkbox-component setting-name="UNTERTITEL" />
            </div>
            <div class="mb-10">
              <checkbox-component setting-name="HINWEISE" />
            </div>
          </div>

        </div>
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent";
import CheckboxComponent from "@/components/CheckboxComponent";
export default {
  name: "SettingOverlay",
  components: {CheckboxComponent, SliderComponent},
}
</script>

<style scoped>

</style>