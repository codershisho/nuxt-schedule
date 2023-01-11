<template>
  <div class="white pa-5">
    <div>
      <v-text-field label="氏名" outlined v-model="model.name"></v-text-field>
    </div>
    <div>
      <base-button color="green darken-1" dark icon="fa-solid fa-circle-plus" text="登録" @onClick="onStore" />
    </div>
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
    };
  },

  mounted() {
    this.model = this.getMemberModel;
  },

  computed: {
    ...mapGetters('member', ['getMemberModel']),
  },

  methods: {
    close() {
      this.$emit('close');
    },

    onStore: async function () {
      const res = await this.$axios.post('/nuxt-schedule/members', this.model);
      console.log(res);
    },

    // TODO 更新をやる
  },
};
</script>
