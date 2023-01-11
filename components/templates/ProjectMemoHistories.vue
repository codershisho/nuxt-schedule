<template>
  <div class="d-flex pa-5">
    <div style="width:20%">
      <template v-for="(history, i) in histories">
        <!-- <div :key="i" class="history-list" @click="open(history)">{{ history.created_at }}</div> -->
        <v-card :key="i" @click="open(history)" class="pa-2 mb-2 info white--text text-center">
          {{ history.created_at }}
        </v-card>
      </template>
    </div>
    <div class="px-3" style="width:80%">
      <v-textarea
        v-model="memo"
        outlined
        auto-grow
        rows="10"
      ></v-textarea>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      histories: [
        { id: 1, created_at: '2022-01-01 10:00', memo: 'a'},
        { id: 2, created_at: '2022-01-01 11:00', memo: 'b'},
        { id: 3, created_at: '2022-01-01 12:00', memo: 'c'},
        { id: 3, created_at: '2022-01-01 12:00', memo: 'd'},
      ],

      memo: '',
    }
  },

  methods: {
    open(history) {
      this.memo = history.memo;
    }
  }
}
</script>
<style>
.history-list:nth-child(even) {
  padding: 10px;
  border-top: grey 1px solid;
  border-bottom: grey 1px solid;
}
.history-list:nth-child(odd) {
  padding: 10px;
}
</style>