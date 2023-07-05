<template>
  <v-container>
    <AppBar />

    <div>
      <center>
        <v-avatar color="blue" size="200">
          <v-icon size="150" color="white">mdi-account</v-icon>
        </v-avatar>
      </center>
      <h2 class="d-flex justify-center">Monaliza</h2>
      <h4 class="d-flex align-center justify-center">
        <v-icon color="blue"> mdi-map-marker </v-icon>
        Vientiane, Laos
      </h4>
    </div>
    <div class="mt-8">
      <v-sheet class="rounded-lg" color="grey lighten-3" width="100%">
        <v-row class="py-4">
          <v-col align="center">
            <v-icon color="blue">mdi-heart</v-icon>
            <p>ຖືກໃຈ</p>
            <h2>10</h2>
          </v-col>
          <v-col align="center">
            <v-icon color="blue">mdi-bookmark-box</v-icon>
            <p>ບັນທຶກໄວ້</p>
            <h2>4</h2>
          </v-col>
          <v-col align="center">
            <v-icon color="blue">mdi-share-variant</v-icon>
            <p>ແບ່ງປັນ</p>
            <h2>6</h2>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <div class="mt-6">
      <v-list color="grey lighten-3" rounded>
        <v-list-item v-for="(i, index) in data" :key="index">
          <v-list-item-content>
            <v-list-item-title class="d-flex align-center">
              <v-icon class="mr-4" color="blue">{{ i.icon }}</v-icon>
              {{ i.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { text: 'ຂໍ້ມູນສ່ວນຕົວ', icon: 'mdi-account' },
        { text: 'ຕັ້ງຄ່າ', icon: 'mdi-cog' },
      ],
    }
  },
  mounted() {
    //  this.$store.commit('SET_STATE', 3)
  },
}
</script>

<style>
</style>