<template>
  <div>
    <v-toolbar elevation="0" color="cyan lighten-5">
      <v-btn v-if="!detailFlag" color="primary" depressed @click="onNew">新規作成</v-btn>
      <v-btn v-else color="primary" depressed @click="detailFlag = false">戻る</v-btn>
    </v-toolbar>
    <template v-if="!detailFlag">
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-0"
        :loading="loading"
        @click:row="onClickRow"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" depressed text @click="onEdit(item)"
            >編集</v-btn
          >
        </template>
      </v-data-table>
    </template>
    <template v-else>
      <v-card>
        aaa
      </v-card>
    </template>
    <DialogBase :dialog="dialog" form="ProjectForm" @close="dialog = false" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'end' },
        { text: 'Name', value: 'name' },
        { text: 'バージョン', value: 'version' },
        { text: 'ステータス', value: 'status' },
        { text: '開始日', value: 'start_date' },
        { text: '終了日', value: 'end_date' },
        { text: '見積り工数', value: 'plan_cost', align: 'end' },
        { text: '最終工数', value: 'fix_cost', align: 'end' },
        { text: 'Actions', value: 'actions', align: 'center' },
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
    }
  },

  created() {
    this.init()
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
      this.dialog = true
    },

    onEdit(item) {
      this.setProject(item)
      this.dialog = true
    },

    onClickRow(row) {
      this.detailFlag = true
    },

    // TODO 登録更新削除
  },
}
</script>
