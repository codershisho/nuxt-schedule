<template>
  <div class="white pa-5">
    <div>
      <v-text-field label="氏名" outlined v-model="model.name"></v-text-field>
    </div>
    <div>
      <v-file-input accept=".svg" label="ユーザー画像" prepend-icon="mdi-camera" v-model="model.image"></v-file-input>
    </div>
    <div>
      <v-img :src="image_pre" max-height="200" max-width="200" class="mb-5" />
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
    if(this.mode !== 1) {
      this.model = { ...this.getMemberModel };
    }
  },

  computed: {
    ...mapGetters('member', ['getMemberModel']),

    image_pre() {
      if(this.model.image === null || Object.keys(this.model).length === 0) {
        return 'bb';
      }
      const blob = new Blob([this.model.image], { type: 'image/svg+xml' });
      const url = window.URL.createObjectURL(blob);
      return url;
    }
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
      const data = new FormData();
      data.append("image", this.model.image);
      data.append("name", this.model.name);
      console.log(data);

      const config = {
        headers: {
        'content-type': 'multipart/form-data'
        }
      };

      const res = await this.$axios.post('/nuxt-schedule/members', data, config);
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
