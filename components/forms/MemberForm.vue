<template>
  <div class="white">
    <div class="primary white--text pa-5">ユーザー管理</div>
    <div class="pa-5">
      <div>
        <v-text-field label="氏名" outlined v-model="model.name"></v-text-field>
      </div>
      <div>
        <v-btn depressed color="primary" @click="onStore">登録</v-btn>
        <v-btn depressed color="grey" class="white--text" @click="close"
          >閉じる</v-btn
        >
      </div>
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

      mode: 'new'
    }
  },

  mounted() {
    this.model = this.getMemberModel;
  },

  computed: {
    ...mapGetters('member', ['getMemberModel']),
  },

  methods: {
    close() {
      this.$emit('close')
    },

    onStore:async function() {
      const res = await this.$axios.post('/nuxt-schedule/members', this.model)
      console.log(res)
    },

    // TODO 更新をやる
  },
}
</script>
