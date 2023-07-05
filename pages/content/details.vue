<template>
  <div>
    <v-row align="center">
      <v-col cols="2">
        <v-btn rounded color="blue" @click="$router.go(-1)">
          <v-icon large color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col align="center"
        ><h3>{{ data.title }}</h3></v-col
      >
      <v-col cols="2"></v-col>
    </v-row>

    <v-container class="my-4">
      <v-sheet>
        <img :src="data?.image" width="100%" alt="" />
      </v-sheet>
      <center class="grey--text">
        <p>{{ data?.sub_title }}</p>
      </center>
      <h3>ລາຍລະອຽດ:</h3>
      <v-divider class="my-4"></v-divider>
      <p>{{ data?.details }}</p>
      <h3>ແຜນທີ່:</h3>
      <v-divider class="my-4"></v-divider>
      <div class="mb-4">
        <v-progress-linear
          v-show="isLoad == false"
          indeterminate
          color="blue"
        ></v-progress-linear>
        <iframe
          @load="load"
          :src="data?.map_url"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      data: [],
      index: this.$route.query.index,
      type: this.$route.query.type,
      isLoad: false,
    }
  },
  methods: {
    getData(type) {
      const apiUrl =
        'https://raw.githubusercontent.com/Monaliza14xx/flutter_web/main/mockup_data.json'
      this.$axios
        .get(apiUrl)
        .then((res) => {
          switch (type) {
            case 'recommends':
              this.data = res.data.recommends[this.index]
              break
            case 'recommends_hill':
              this.data = res.data.recommends_hill[this.index]
              break
            case 'recommends_temple':
              this.data = res.data.recommends_temple[this.index]
              break
            case 'recommends_hotel':
              this.data = res.data.recommends_hotel[this.index]
              break
            case 'recommends_restaurants':
              this.data = res.data.recommends_restaurants[this.index]
              break
            default:
              break
          }
          console.log('this.data :>> ', this.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    load() {
      this.isLoad = true
    },
  },
  mounted() {
    this.getData(this.type)
  },
}
</script>

<style scoped>
/* #content {
  background-image: var(--background-image);
} */
</style>