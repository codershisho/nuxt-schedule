<template>
  <div>
    <v-toolbar id="project_toolbar" elevation="0" class="mb-3">
      <base-button v-if="!detailFlag" color="primary" icon="fa-solid fa-user" text="新規作成" @onClick="onNew"/>
      <base-button v-else color="primary" icon="fa-sharp fa-solid fa-arrow-left" text="戻る" @onClick="detailFlag = false"/>
    </v-toolbar>
    <template v-if="!detailFlag">
      <v-data-table :headers="headers" :items="items" class="elevation-0 pa-4" :loading="loading" @click:row="onEdit">
          <template #[`item.name`]="{ item }">
            <div class="font-weight-bold">{{ item.name }}</div>
          </template>
      </v-data-table>
    </template>
    <template v-else>
      <MemberForm />
    </template>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id', class: 'table-header-custom' },
        { text: 'Name', value: 'name', class: 'table-header-custom' },
      ],

      items: [
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbb' },
      ],

      loading: false,
      detailFlag: false,
    };
  },

  created() {
    this.init();
  },

  methods: {
    ...mapActions('member', ['setMember']),

    init() {
      this.loading = true;
      // const res = await this.$axios.get('/nuxt-schedule/members')
      // this.items = res.data
      this.loading = false;
    },

    onNew() {
      this.setMember({});
      this.detailFlag = true;
    },

    onEdit(item) {
      this.setMember(item);
      this.detailFlag = true;
    },
  },
};
</script>
