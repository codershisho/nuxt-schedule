<template>
  <div>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab>基本情報</v-tab>
      <v-tab>memo</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div class="pa-5">
          <div>
            <v-text-field
              v-model="model.name"
              label="案件名"
              outlined
            ></v-text-field>
          </div>
          <div class="d-flex">
            <div>
              <v-text-field
                v-model="model.version"
                label="バージョン"
                outlined
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                v-model="model.status"
                label="ステータス"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <v-text-field
                v-model="model.start_date"
                label="開始日"
                outlined
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                v-model="model.end_date"
                label="終了日"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <v-text-field
                v-model="model.plan_cost"
                label="見積工数"
                outlined
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                v-model="model.fix_cost"
                label="最終工数"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div>
            <v-text-field
              v-model="model.name"
              label="メンバー"
              outlined
            ></v-text-field>
          </div>

          <div>
            <v-btn depressed color="primary" @click="onStore">登録</v-btn>
            <v-btn depressed color="grey" class="white--text" @click="close"
              >閉じる</v-btn
            >
          </div>
        </div>
      </v-tab-item>
      <v-tab-item>
        <ProjectMemoForm />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      model: {
        name: '',
        image: '',
      },

      mode: 'new',
      tab: null,
    }
  },

  mounted() {
    this.model = this.getProjectModel
  },

  computed: {
    ...mapGetters('project', ['getProjectModel']),
  },

  methods: {
    close() {
      this.$emit('close')
    },

    onStore: async function () {
      // const res = await this.$axios.post('/nuxt-schedule/members', this.model)
      // console.log(res)
    },

    // TODO 更新をやる
  },
}
</script>
