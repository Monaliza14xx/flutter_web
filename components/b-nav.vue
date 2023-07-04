<template>
  <v-bottom-navigation
    v-model="state"
    :background-color="color"
    dark
    shift
    fixed
  >
    <v-btn>
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Places</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <span>Bookmark</span>

      <v-icon>mdi-image-album</v-icon>
    </v-btn>

    <v-btn>
      <span>Profile</span>

      <v-icon>mdi-account-box</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    }
  },
  computed: {
    color() {
    //   this.value = this.state
      switch (this.state) {
        case 0:
          this.$router.push('/home')
          return 'blue'
        case 1:
          this.$router.push('/content?category=all')
          return 'vibrant'
        case 2:
          this.$router.push('/bookmark')
          return 'red'
        case 3:
          this.$router.push('/profile')
          return 'grey'
        default:
          this.$router.push('/home')
          return 'blue'
      }
    },
    state: {
      get() {
        return this.$store.state._state
      },
      set(value) {
        this.$store.commit('SET_STATE', value)
      },
    },
  },
}
</script>

<style>
</style>