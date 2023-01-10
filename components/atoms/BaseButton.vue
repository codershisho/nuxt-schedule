<template>
  <v-btn v-bind="$attrs" depressed width="160" @click="onClick">
    <v-icon small class="mr-2">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
}
</script>