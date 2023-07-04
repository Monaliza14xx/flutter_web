<template>
  <v-app-bar color="blue" fixed app flat>
    <v-row>
      <!-- <v-col cols="2" align-self="end">
        <v-btn v-show="path !== '/home'" @click="goBack" color="blue" rounded>
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-col> -->
      <v-col align-self="end" align="center">
        <h3 class="white--text">{{ title }}</h3>
      </v-col>
      <!-- <v-col cols="2"></v-col> -->
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Solo Traveling',
      path: this.$route.path,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
</style>