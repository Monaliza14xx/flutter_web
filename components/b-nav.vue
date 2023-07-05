<template>
  <v-bottom-navigation
    v-model="state"
    :background-color="color"
    dark
    fixed
  >
    <v-btn>
      <b>ໜ້າຫຼັກ</b>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <b>ສະຖານທີ່</b>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn>
      <b>ບັນທຶກໄວ້</b>

      <v-icon>mdi-image-album</v-icon>
    </v-btn>

    <v-btn>
      <b>ໂປຣໄຟລ໌</b>

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