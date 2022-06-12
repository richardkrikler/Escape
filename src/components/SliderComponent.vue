<template>
  <div>
    <div class="text-4xl text-white text-title mb-2">
      {{ settingName }}
    </div>
    <div class="slider-component">
      <div class="slidecontainer">
        <input
            ref="input"
            v-model="currentValue"
            type="range"
            :min="min"
            :max="max"
            class="slider"
            @input="onInput"
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SliderComponent',

  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    settingName: {
      type: String,
      required: true
    },
    store: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  },

  methods: {
    onInput() {
      this.$store.commit('setSetting', {name: this.store, value: parseInt(this.currentValue)})
    }
  }
}
</script>

<style scoped>
.slider-component .slidecontainer {
  width: 100%;
}

.slider-component .slidecontainer .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 75%;
  height: 2px;
  border-radius: 2px;
  background: white;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider-component .slidecontainer .slider:hover {
  opacity: 1;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: white solid 2px;
  cursor: pointer;
  border-radius: 50%;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb:active {
  background: white;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb:hover {
  background: white;
}

.slider-component .slidecontainer .slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border: white solid 2px;
  cursor: pointer;
  border-radius: 50%;
}

.slider-component .slidecontainer .slider::-moz-range-thumb:active {
  background: white;
}

.slider-component .slidecontainer .slider::-moz-range-thumb:hover {
  background: white;
}
</style>