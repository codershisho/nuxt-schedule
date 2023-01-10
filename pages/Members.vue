<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-0"
      :loading="loading"
    >
      <template v-slot:[`top`]>
        <v-toolbar elevation="0">
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed @click="onNew">新規作成</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]={item}>
        <v-btn color="primary" depressed text @click="onEdit(item)">編集</v-btn>
      </template>
    </v-data-table>
    <DialogBase :dialog="dialog" form="MemberForm" @close="dialog=false" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'end' },
        { text: 'Name', value: 'name' },
        { text: 'Actions', value: 'actions', align: 'center' },
      ],

      items: [
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbb' },
      ],

      loading: false,
      dialog: false
    }
  },

  created() {
    this.init()
  },

  methods: {
    ...mapActions('member', ['setMember']),

    init: async function () {
      this.loading = true
      const res = await this.$axios.get('/nuxt-schedule/members')
      this.items = res.data
      this.loading = false
    },

    onNew() {
      this.dialog = true;
    },

    onEdit(item) {
      this.setMember(item);
      this.dialog = true;
    },
  },
}
</script>
