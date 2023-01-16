<template>
  <div class="d-flex pa-5">
    <div style="width:20%">
      <template v-for="(history, i) in histories">
        <v-card :key="i" @click="open(history)" class="pa-2 mb-2 info white--text text-center">
          {{ history.created_at }}
        </v-card>
      </template>
    </div>
    <div v-if="memo" class="memobox px-3" style="width:80%">
      <div class="memobox-title">memo</div>
        <div v-html="memo"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      histories: [
        { id: 1, created_at: '2022-01-01 10:00', memo: 'a'},
        { id: 2, created_at: '2022-01-01 11:00', memo: 'b'},
        { id: 3, created_at: '2022-01-01 12:00', memo: 'c'},
        { id: 3, created_at: '2022-01-01 12:00', memo: 'd'},
      ],

      model: {},
      memo: '',
      mode: 'new',
    }
  },

  mounted() {
    this.mode = !Object.keys(this.getProjectModel).length ? 1 : 2;
    this.model = { ...this.getProjectModel };
    this.search();
  },

  computed: {
    ...mapGetters('project', ['getProjectModel']),
  },

  methods: {
    search: async function() {
      const res = await this.$axios.get('/nuxt-schedule/projects/' + this.model.id + '/memos');
      this.histories = res.data.datas;
    },

    open(history) {
      this.memo = history.memo;
    }
  }
}
</script>
<style>
.memobox{
  margin: 1em 1em;
  background-color: #f1faff;
  padding: 1em;
}
.memobox-title{
  font-size: 18px;
  font-weight: bold;
  color: #ffc107;
}
.memobox-title:before{
  font-family: "Font Awesome 5 Free";
  content: "\f304";
  font-size: 17px;
}
</style>