<template>
  <div>
    <v-toolbar id="project_toolbar" elevation="0" class="mb-3">
      <base-button v-if="!detailFlag" color="primary" icon="fa-solid fa-user" text="新規作成" @onClick="onNew"/>
      <base-button v-else color="primary" icon="fa-sharp fa-solid fa-arrow-left" text="戻る" @onClick="detailFlag = false"/>
    </v-toolbar>
    <template v-if="!detailFlag">
      <v-data-table :headers="headers" :items="items" class="elevation-0 pa-4" :loading="loading" @click:row="onClickRow">
        <template #[`item.name`]="{ item }">
          <div class="font-weight-bold">{{ item.name }}</div>
        </template>
        <template #[`item.status_name`]="{ item }">
          <v-chip :color="statusColor(item.status)" label class="white--text">{{item.status_name}}</v-chip>
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
        { text: 'ステータス', value: 'status_name', class: 'table-header-custom' },
        { text: '開始日', value: 'start_date', class: 'table-header-custom' },
        { text: '終了日', value: 'end_date', class: 'table-header-custom' },
        { text: '見積り工数', value: 'plan_cost', align: 'end', class: 'table-header-custom' },
        { text: '最終工数', value: 'fix_cost', align: 'end', class: 'table-header-custom' },
      ],

      items: [],

      loading: false,
      dialog: false,
      detailFlag: false,
    };
  },

  created() {
    this.init();
  },

  watch: {
    detailFlag: function(newVal, oldVal) {
      if(!newVal) {
        this.init();
      }
    }
  },

  methods: {
    ...mapActions('project', ['setProject']),

    init: async function () {
      this.loading = true
      const res = await this.$axios.get('/nuxt-schedule/projects')
      this.items = res.data
      this.loading = false
    },

    onNew() {
      this.setProject({});
      this.detailFlag = true;
    },

    onClickRow(row) {
      this.setProject(row);
      this.detailFlag = true;
    },

    statusColor(status) {
      switch (status) {
        case 1:
          return 'success';
        case 2:
          return '#4CAF50';
        case 3:
          return '#90A4AE';
        default:
          return '#757575';
      }
    }
  },
};
</script>