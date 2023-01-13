<template>
  <div class="white pa-5">
    <div>
      <v-text-field label="氏名" outlined v-model="model.name"></v-text-field>
    </div>
    <div>
      <base-button color="green darken-1" dark icon="fa-solid fa-circle-plus" text="登録" @onClick="onStore" />
      <base-button v-if="mode != 1" color="error" dark icon="fa-solid fa-circle-minus" text="削除" @onClick="onDelete" />
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
      model: {
        name: '',
        image: '',
      },

      mode: 'new',
      snackbar: false,
      timeout: 2000,
      apiMessage: '',
    };
  },

  mounted() {
    this.mode = !Object.keys(this.getMemberModel).length ? 1 : 2;
    this.model = { ...this.getMemberModel };
  },

  computed: {
    ...mapGetters('member', ['getMemberModel']),
  },

  methods: {
    close() {
      this.$emit('close');
    },

    onStore() {
      if (this.mode === 1) {
        // new
        this.create();
        return;
      }

      // update
      this.update();
    },

    create: async function () {
      const res = await this.$axios.post('/nuxt-schedule/members', this.model);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    update: async function () {
      const res = await this.$axios.put('/nuxt-schedule/members/' + this.model.id, this.model);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    onDelete: async function () {
      const res = await this.$axios.delete('/nuxt-schedule/members/' + this.model.id);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    setApiMessage(msg) {
      this.apiMessage = msg;
      this.snackbar = true;
    },
  },
};
</script>
