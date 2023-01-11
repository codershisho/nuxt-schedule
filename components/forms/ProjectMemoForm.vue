<template>
  <div class="pa-5">
    <div>
      <v-textarea
        label="メモ"
        rows="10"
        outlined
        auto-grow
      >
      </v-textarea>
    </div>
    <div>
      <base-button color="green darken-1" dark icon="fa-solid fa-circle-plus" text="登録" @onClick="onStore" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>