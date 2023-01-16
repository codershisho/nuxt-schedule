<template>
  <div class="pa-5">
    <div class="mb-16">
      <quill-editor v-model="memo" />
    </div>
    <div>
      <base-button color="green darken-1" dark icon="fa-solid fa-circle-plus" text="登録" @onClick="onStore" />
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" top color="yellow darken-3">
      <strong>{{ apiMessage }}</strong>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      model: {},
      memo: '',
      mode: 'new',

      snackbar: false,
      timeout: 2000,
      apiMessage: '',
    };
  },

  mounted() {
    this.mode = !Object.keys(this.getProjectModel).length ? 1 : 2;
    this.model = { ...this.getProjectModel };
  },

  computed: {
    ...mapGetters('project', ['getProjectModel']),
  },

  methods: {
    onStore: async function () {
      const param = {
        memo: this.memo,
      };
      const res = await this.$axios.post('/nuxt-schedule/projects/' + this.model.id + '/memo', param);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    setApiMessage(msg) {
      this.apiMessage = msg;
      this.snackbar = true;
    },
  },
};
</script>
