<template>
  <div class="mb-16">
    <app-bar></app-bar>
    <center>
      <h2>ເລືອກແຂວງ:</h2>
    </center>
    <v-container>
      <v-divider class="my-2"></v-divider>
      <v-row>
        <v-col v-for="(i, idx) in provinces" :key="idx" cols="6">
          <v-card @click="goTo('/content/province?index='+idx+'&&category=all&&type=recommends')">
            <v-img
              :src="i.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title
                ><h6>{{ i.text }}</h6></v-card-title
              >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      value: 1,
      category: this.$route.query.category,
      provinces: [
        {
          text: 'ນະຄອນຫຼວງວຽງຈັນ',
          img: 'https://s.isanook.com/la/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2xhLzAvdWQvNi8zMzY0OC8zMzY0OC5qcGc=.jpg',
        },
        {
          text: 'ຫຼວງພະບາງ',
          img: 'https://2.bp.blogspot.com/--cEc0-rem60/W5PTSuJOH2I/AAAAAAAAAB4/2MQ7uZskLBUz0d6QXGFb36iFZfHLJi1IACLcBGAs/s1600/1.jpg',
        },
        {
          text: 'ໄຊຍະບູລີ',
          img: 'https://2.bp.blogspot.com/-rhFZgmyT_qA/W82f0Al4S7I/AAAAAAAAS5w/l0fglI6wUYoRBb4xALVfn-GX2r72nJgogCLcBGAs/s1600/1.jpg',
        },
        {
          text: 'ຫຼວງນ້ຳທາ',
          img: 'https://tapchilaoviet.com/wp-content/uploads/2020/02/2607_anh11.jpg',
        },
        {
          text: 'ສະຫວັນນະເຂດ',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rdpt-dino-Svnk2011.jpg/220px-Rdpt-dino-Svnk2011.jpg',
        },
        {
          text: 'ຄຳມ່ວນ',
          img: 'https://discoverlaos.today/img/post/3ef70252254fcf2daabb917130d31731.jpg?p=original',
        },
      ],
    }
  },
  methods: {
    getData() {
      this.$axios
        .get(
          'https://raw.githubusercontent.com/Monaliza14xx/flutter_web/main/mockup_data.json'
        )
        .then((res) => {
          console.log('🚀 ~ file: index.vue:87 ~ .then ~ res:', res)
          this.recommends = res.data.recommends
          this.recommends_hill = res.data.recommends_hill
          this.recommends_temple = res.data.recommends_temple
          this.recommends_hotel = res.data.recommends_hotel
          this.recommends_restaurants = res.data.recommends_restaurants
        })
    },
    goTo(to) {
      this.$router.push(to)
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