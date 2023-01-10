<template>
  <div>
    <v-tabs
      v-model="tab"
      vertical
      active-class="tab-active"
      hide-slider
    >
      <v-tab>
        <div class="tab-name">
          <v-icon small left>fa-solid fa-circle-info</v-icon>
          基本情報
        </div>
      </v-tab>
      <v-tab>
        <div class="tab-name">
          <v-icon small left>fa-solid fa-comment</v-icon>
          メモ
        </div>
      </v-tab>
      <v-tab-item class="pa-0 ma-0">
        <ProjectForm />
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: '',

    }
  }
}
</script>
<style>
.tab-name {
  width: 12rem;
  text-align: justify;
  text-align-last: justify !important;
}
.tab-active {
  background-color: var(--v-primary-base);
  color: white !important;
  font-weight: bold;
  border-radius: 10px !important;
}
</style>