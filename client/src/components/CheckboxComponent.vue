<template>
  <div>
    <div class="text-4xl text-white text-title mb-2">
      {{ settingName }}
    </div>
    <div class="squaredOne">
      <input type="checkbox" :id="settingName" name="check" v-model="settingBool" @input="onInput"/>
      <label :for="settingName"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxComponent',

  props: {
    settingName: {
      type: String,
      required: true
    },
    store: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },

  },

  data() {
    return {
      settingBool: this.value,
    }
  },

  methods: {
    onInput() {
      this.$store.commit('setSetting', {name: this.store, value: !this.settingBool})
    }
  }
}
</script>

<style scoped>
input[type=checkbox] {
  visibility: hidden;
}

.squaredOne {
  width: 52px;
  height: 52px;
  background: #777777;
  position: relative;
}

.squaredOne label {
  cursor: pointer;
  position: absolute;
  left: 2px;
  top: 2px;
}

.squaredOne label:after {
  filter: alpha(opacity=0);
  opacity: 0;
  content: '';
  position: absolute;
  width: 44px;
  height: 44px;
  background: #ffffff;


  top: 2px;
  left: 2px;
}

.squaredOne label:hover::after {
  filter: alpha(opacity=30);
  opacity: 0.3;
}

.squaredOne input[type=checkbox]:checked + label:after {
  filter: alpha(opacity=100);
  opacity: 1;
}
</style>