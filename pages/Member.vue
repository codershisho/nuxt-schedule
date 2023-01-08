<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
    </v-data-table>
  </div>
</template>
<script>
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
      ]
    }
  },

  methods: {
    editItem(item) {

    }
  }
}
</script>