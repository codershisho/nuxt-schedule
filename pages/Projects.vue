<template>
  <div>
    <v-toolbar id="project_toolbar" elevation="0" class="pa-0 mb-3">
      <base-button v-if="!detailFlag" color="primary" icon="fa-solid fa-user" text="新規作成" @onClick="onNew"/>
      <base-button v-else color="primary" icon="fa-sharp fa-solid fa-arrow-left" text="戻る" @onClick="detailFlag = false"/>
    </v-toolbar>
    <template v-if="!detailFlag">
      <v-data-table :headers="headers" :items="items" class="elevation-0" :loading="loading" @click:row="onClickRow">
        <template #[`item.name`]="{ item }">
          <div class="font-weight-bold">{{ item.name }}</div>
        </template>
        <template #[`item.status`]="{ item }">
          <v-chip color="success" outlined label>{{item.status}}</v-chip>
        </template>
      </v-data-table>
    </template>
    <template v-else>
      <ProjectSub />
    </template>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'end', class: 'table-header-custom' },
        { text: 'Name', value: 'name', class: 'table-header-custom' },
        { text: 'バージョン', value: 'version', class: 'table-header-custom' },
        { text: 'ステータス', value: 'status', class: 'table-header-custom' },
        { text: '開始日', value: 'start_date', class: 'table-header-custom' },
        { text: '終了日', value: 'end_date', class: 'table-header-custom' },
        { text: '見積り工数', value: 'plan_cost', align: 'end', class: 'table-header-custom' },
        { text: '最終工数', value: 'fix_cost', align: 'end', class: 'table-header-custom' },
      ],

      items: [
        {
          id: 1,
          name: 'aaa',
          version: '1.0.0',
          status: '新規',
          start_date: '2022-01-01',
          end_date: '2022-03-01',
          plan_cost: 100,
          fix_cost: 200,
        },
        {
          id: 2,
          name: 'bbb',
          version: '1.0.0',
          status: '着手中',
          start_date: '2022-01-01',
          end_date: '2022-03-01',
          plan_cost: 100,
          fix_cost: 200,
        },
      ],

      loading: false,
      dialog: false,
      detailFlag: false,
    };
  },

  created() {
    this.init();
  },

  methods: {
    ...mapActions('project', ['setProject']),

    init: async function () {
      // this.loading = true
      // const res = await this.$axios.get('/nuxt-schedule/members')
      // this.items = res.data
      // this.loading = false
    },

    onNew() {
      this.setProject({});
      this.detailFlag = true;
    },

    onClickRow(row) {
      this.setProject(row);
      this.detailFlag = true;
    },

    // TODO 登録更新削除
  },
};
</script>
<style>
.table-header-custom {
  background-color: #55ad5c;
  color: white !important;
}
#project_toolbar > .v-toolbar__content {
  padding: 0;
}
</style>