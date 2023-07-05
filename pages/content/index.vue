<template>
  <div>
    <app-bar></app-bar>
    <div>
      <v-card flat>
        <v-sheet id="header-card" height="150px"> </v-sheet>
        <v-card-title><h2>ນະຄອນຫຼວງວຽງຈັນ, ລາວ</h2></v-card-title>
        <v-card-subtitle class="mt-1">
          ແນະນຳສະຖານທີ່ທ່ອງທ່ຽວ, ທີ່ພັກ, ແລະ ຮ້ານອາຫານ ໃນ
          ນະຄອນຫຼວງວຽງຈັນ</v-card-subtitle
        >
      </v-card>
      <v-divider class="my-2"></v-divider>
    </div>
    <v-container>
      <div v-show="category == 'all'">
        <div class="d-flex align-center mb-4">
          <v-icon class="mr-2" color="red">mdi-map-marker</v-icon>
          <b>ສະຖານທີ່ແນະນຳທັງໝົດ:</b>
        </div>
        <card :items="recommends" type="recommends"></card>
        <v-divider class="my-2"></v-divider>
      </div>
      <div v-show="category == 'hill' || category == 'all'">
        <div id="hill" class="d-flex align-center mb-4">
          <v-icon class="mr-2" color="green">mdi-image-filter-hdr</v-icon>
          <b>ສະຖານທີ່ແນະນຳ ໝວດພູ - ຜາ:</b>
        </div>
        <card :items="recommends_hill" type="recommends_hill"></card>
        <v-divider class="my-2"></v-divider>
      </div>
      <div v-show="category == 'temple' || category == 'all'">
        <div id="hill" class="d-flex align-center mb-4">
          <v-icon class="mr-2" color="orange">mdi-home-variant</v-icon>
          <b>ສະຖານທີ່ແນະນຳ ໝວດວັດ:</b>
        </div>
        <card :items="recommends_temple" type="recommends_temple"></card>
        <v-divider class="my-2"></v-divider>
      </div>
      <div v-show="category == 'hotel' || category == 'all'">
        <div id="hill" class="d-flex align-center mb-4">
          <v-icon class="mr-2" color="blue">mdi-bed</v-icon>
          <b>ສະຖານທີ່ແນະນຳ ໝວດທີ່ພັກ:</b>
        </div>
        <card :items="recommends_hotel" type="recommends_hotel"></card>
        <v-divider class="my-2"></v-divider>
      </div>
      <div v-show="category == 'restaurants' || category == 'all'">
        <div id="hill" class="d-flex align-center mb-4">
          <v-icon class="mr-2" color="orange">mdi-silverware-fork-knife</v-icon>
          <b>ສະຖານທີ່ແນະນຳ ໝວດຮ້ານອາຫານ:</b>
        </div>
        <card
          :items="recommends_restaurants"
          type="recommends_restaurants"
        ></card>
        <v-divider class="my-2"></v-divider>
      </div>
    </v-container>
  </div>
</template>

<script>
import card from '~/components/card.vue'
export default {
  components: { card },
  name: 'Content',
  data() {
    return {
      value: 1,
      title: 'Zoybad14xx',
      category: this.$route.query.category,
      recommends: [],
      recommends_hill: [],
      recommends_temple: [],
      recommends_hotel: [],
      recommends_restaurants: [],
    }
  },
  methods: {
    getData() {
      this.$axios
        .get(
          'https://raw.githubusercontent.com/Monaliza14xx/flutter_web/main/mockup_data.json'
        )
        .then((res) => {
          this.recommends = res.data.recommends
          this.recommends_hill = res.data.recommends_hill
          this.recommends_temple = res.data.recommends_temple
          this.recommends_hotel = res.data.recommends_hotel
          this.recommends_restaurants = res.data.recommends_restaurants
        })
    },
  },
  mounted() {
    this.$store.commit('SET_STATE', 1)
    this.getData()
  },
}
</script>

<style scoped>
#header-card {
  /* add background url */
  background: url('https://www.happymindtravels.com/wp-content/uploads/2020/04/patuxai-park-vientiane-laos-happymind-travels.jpg')
    center center;
  background-size: cover;
}
</style>