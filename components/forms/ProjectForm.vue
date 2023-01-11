<template>
  <div class="pa-5">
    <div>
      <v-text-field v-model="model.name" label="案件名" outlined></v-text-field>
    </div>
    <div class="d-flex">
      <div class="form-row-item--first">
        <v-text-field v-model="model.version" label="バージョン" outlined></v-text-field>
      </div>
      <div class="form-row-item--second">
        <v-text-field v-model="model.status" label="ステータス" outlined></v-text-field>
      </div>
    </div>
    <div class="d-flex">
      <div class="form-row-item--first">
        <v-text-field v-model="model.start_date" label="開始日" outlined></v-text-field>
      </div>
      <div class="form-row-item--second">
        <v-text-field v-model="model.end_date" label="終了日" outlined></v-text-field>
      </div>
    </div>
    <div class="d-flex">
      <div class="form-row-item--first">
        <v-text-field v-model="model.plan_cost" label="見積工数" outlined></v-text-field>
      </div>
      <div class="form-row-item--second">
        <v-text-field v-model="model.fix_cost" label="最終工数" outlined></v-text-field>
      </div>
    </div>
    <div>
      <v-text-field v-model="model.name" label="メンバー" outlined></v-text-field>
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
      tab: null,
    };
  },

  mounted() {
    this.model = this.getProjectModel;
  },

  computed: {
    ...mapGetters('project', ['getProjectModel']),
  },

  methods: {
    close() {
      this.$emit('close');
    },

    onStore: async function () {
      // const res = await this.$axios.post('/nuxt-schedule/members', this.model)
      // console.log(res)
    },

    // TODO 更新をやる
  },
};
</script>
<style>
.form-row-item--first {
  width: 20%;
  margin-right: 30px;
}
.form-row-item--second {
  width: 20%;
}
</style>
