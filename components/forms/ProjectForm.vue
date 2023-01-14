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
        <v-select v-model="model.status" :items="statusList" item-text="status_name" item-value="status" label="ステータス" outlined></v-select>
      </div>
    </div>
    <div class="d-flex">
      <div class="form-row-item--first">
        <date-picker label="開始日" v-model="model.start_date" />
      </div>
      <div class="form-row-item--second">
        <date-picker label="終了日" v-model="model.end_date" />
      </div>
    </div>
    <div class="d-flex">
      <div class="form-row-item--first">
        <v-text-field v-model="model.plan_cost" label="見積工数" outlined type="Number"></v-text-field>
      </div>
      <div class="form-row-item--second">
        <v-text-field v-model="model.fix_cost" label="最終工数" outlined type="Number"></v-text-field>
      </div>
    </div>
    <div>
      <v-autocomplete
        v-model="model.members"
        :items="members"
        outlined
        chips
        label="メンバー"
        item-text="name"
        item-value="id"
        multiple
      >
        <template v-slot:selection="data">
          <v-chip v-bind="data.attrs" :input-value="data.selected" @click="data.select">
            <v-avatar left>
              <v-img :src="toSvg(data.item.image)"></v-img>
            </v-avatar>
            {{ data.item.name }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <v-list-item-avatar>
            <v-img :src="toSvg(data.item.image)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ data.item.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>
    </div>
    <div>
      <base-button color="green darken-1" dark icon="fa-solid fa-circle-plus" :text="buttonText" @onClick="onStore" />
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" top color="yellow darken-3">
      <strong>{{ apiMessage }}</strong>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Images from '@/util/images.js';
export default {
  data() {
    return {
      model: {},

      statusList: [
        { status: 1, status_name: '新規' },
        { status: 2, status_name: '着手中' },
        { status: 3, status_name: 'ステイ中' },
        { status: 4, status_name: '完了' },
      ],

      members: [],

      mode: 'new',
      snackbar: false,
      timeout: 2000,
      apiMessage: '',
    };
  },

  mounted() {
    this.mode = !Object.keys(this.getProjectModel).length ? 1 : 2;
    this.model = { ...this.getProjectModel };
    this.searchMemner();
    if(this.mode === 2) {
      this.model.members = this.model.fix_members;
    }
  },

  computed: {
    ...mapGetters('project', ['getProjectModel']),

    buttonText() {
      return this.mode === 1 ? '登録' : '更新';
    },
  },

  methods: {
    searchMemner: async function () {
      const res = await this.$axios.get('/nuxt-schedule/members');
      this.members = res.data;
    },

    onStore() {
      if (this.mode === 1) {
        // new
        this.create();
        return;
      }

      // update
      this.update();
    },

    create: async function () {
      const res = await this.$axios.post('/nuxt-schedule/projects', this.model);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    update: async function () {
      const res = await this.$axios.put('/nuxt-schedule/projects/' + this.model.id, this.model);
      if (res.data.message) this.setApiMessage(res.data.message);
    },

    setApiMessage(msg) {
      this.apiMessage = msg;
      this.snackbar = true;
    },

    toSvg(image) {
      return Images.toSvg(image);
    },

    // TODO 削除
    // TODO メモの登録
    // TODO メモのDB
    // TODO メモの履歴取得
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
