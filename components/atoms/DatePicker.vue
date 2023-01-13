<template>
  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        outlined
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      locale="jp-ja"
      :day-format="(date) => new Date(date).getDate()"
      color="primary"
    >
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },

  props: ["value", "label"],

  computed: {
    date: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  }
};
</script>

<style>
.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(7) .v-btn__content {
  color: blue;
}

.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(1) .v-btn__content {
  color: red;
}
</style>
