<template>
  <v-dialog v-if="_dialog" v-model="_dialog" width="750">
    <component :is="form" @close="_dialog = false"></component>
  </v-dialog>
</template>
<script>
import MemberForm from '../forms/MemberForm.vue'
export default {
  components: {
    MemberForm
  },

  props: {
    dialog: {
      type: Boolean,
      default: false,
    },

    form: {
      type: String,
      default: 'MemberForm',
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {
    _dialog: {
      get() {
        return this.dialog
      },
      set(v) {
        this.$emit('close', v)
      },
    },
  },
}
</script>
