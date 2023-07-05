<template>
  <div>
    <v-card
      v-for="(item, i) in items"
      :key="i"
      class="mx-auto mb-4"
      max-width="400"
      shaped
      @click="goto(i, type)"
    >
      <v-img class="white--text align-end" height="200px" :src="item.image">
      </v-img>

      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-subtitle class="pb-0"> {{ item.sub_title }} </v-card-subtitle>

      <v-divider class="my-2"></v-divider>

      <v-card-text class="text--primary">
        <div>{{ item.details }}</div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
    },
  },
  methods: {
    goto(value, type) {
      this.$router.push(`/content/details?index=${value}&&type=${type}`)
    },
    toggle_like(item) {
      item.liked = !item.liked
    },
    toggle_check(item) {
      item.bookmarked = !item.bookmarked
    },
  },
}
</script>

<style>
</style>