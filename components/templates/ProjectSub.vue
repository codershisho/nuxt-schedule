<template>
  <div class="white pa-4">
    <v-tabs v-model="tab" vertical active-class="tab-active" hide-slider>
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
      <v-tab>
        <div class="tab-name">
          <v-icon small left>fa-solid fa-rectangle-list</v-icon>
          メモ履歴
        </div>
      </v-tab>
      <v-tab-item class="pa-0 ma-0" transition="slide-y-reverse-transition">
        <ProjectForm />
      </v-tab-item>
      <v-tab-item class="pa-0 ma-0" transition="slide-y-reverse-transition">
        <project-memo-form />
      </v-tab-item>
      <v-tab-item class="pa-0 ma-0" transition="slide-y-reverse-transition">
        <project-memo-histories />
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import ProjectMemoForm from '../forms/ProjectMemoForm.vue';
import ProjectMemoHistories from './ProjectMemoHistories.vue';
export default {
  components: { ProjectMemoForm, ProjectMemoHistories },
  data() {
    return {
      tab: '',
    };
  },
};
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
