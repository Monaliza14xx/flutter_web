<template>
  <v-container>
    <app-bar></app-bar>
    <div class="mb-4 mx-4">
      <div style="text-align: center">
        <div class="mb-4">
          <v-row>
            <v-col align-self="center">
              <v-icon color="blue"> mdi-map-marker </v-icon>
              ນະຄອນຫຼວງວຽງຈັນ, ລາວ
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              placeholder="ຄົ້ນຫາ"
              color="blue"
              clearable
              dense
              rounded
              outlined
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col cols="4">
            <v-btn color="blue" rounded>
              <v-icon color="white">mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col align-self="center" align="center">
          <v-sheet :height="200" color="blue" class="rounded-xl white--text">
            <div class="py-8">
              <h2>ຄົ້ນຫາພື້ນທີ່ຮອບໆກັນເທາະ</h2>
              <p>ຊອກຫາສະຖານທີ່ທີດີທີ່ສຸດເພື່ອການທ່ອງທ່ຽວ</p>
              <v-btn
                rounded
                @click="goTo('/login')"
                width="140"
                height="40"
                color="white"
                class="blue--text mt-4"
                ><b>ໄປກັນເລີຍ</b></v-btn
              >
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <div class="my-2">
        <h3>ໝວດໝູ່:</h3>
        <v-divider class="my-2"></v-divider>
        <v-row class="mt-6">
          <v-col align="center" v-for="(i, idx) in items" :key="idx">
            <v-card
              class="elevation-0 d-flex flex-column align-center justify-center"
              @click="goTo(i.to)"
            >
              <v-row>
                <v-col cols="12">
                  <v-sheet
                    height="45"
                    width="45"
                    class="rounded-xl d-flex flex-column align-center justify-center"
                    :color="i.color"
                  >
                    <v-icon color="white">{{ i.icon }}</v-icon>
                  </v-sheet>
                </v-col>
                <v-col>
                  <h5 class="">{{ i.text }}</h5>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="my-2">
        <h3>ແນະນຳ:</h3>
        <v-divider class="my-2"></v-divider>
        <div class="scroll-container">
          <div class="scroll-content">
            <v-card
              v-for="(item, index) in recommends"
              :key="index"
              id="scroll-item"
              width="200"
              height="240"
            >
              <v-img
                :src="item.image"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="180px"
              >
                <v-card-title
                  ><h5>{{ item.title }}</h5></v-card-title
                >
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="toggle_like(item)" icon>
                  <v-icon color="red" v-if="item.liked">mdi-heart</v-icon>
                  <v-icon v-else>mdi-heart-outline</v-icon>
                </v-btn>

                <v-btn @click="toggle_check(item)" icon>
                  <v-icon color="green" v-if="item.bookmarked"
                    >mdi-bookmark</v-icon
                  >
                  <v-icon v-else>mdi-bookmark-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          text: 'ທັງໝົດ',
          color: 'blue',
          to: '/content/province?index=0&&&category=all&type=recommends',
        },
        {
          icon: 'mdi-image-filter-hdr',
          text: 'ພູ - ຜາ',
          color: 'success',
          to: '/content/province?index=0&&&category=hill&type=recommends',
        },
        {
          icon: 'mdi-home-variant',
          text: 'ວັດ',
          color: 'orange',
          to: '/content/province?index=0&&&category=temple&type=recommends',
        },
        {
          icon: 'mdi-home-city',
          text: 'ທີ່ພັກ',
          color: 'red',
          to: '/content/province?index=0&&&category=hotel&type=recommends',
        },
        {
          icon: 'mdi-silverware-fork-knife',
          text: 'ຮ້ານອາຫານ',
          color: 'pink',
          to: '/content/province?index=0&&&category=restaurants&type=recommends',
        },
      ],
      recommends: [],
    }
  },
  methods: {
    goTo(value) {
      this.$router.push(value)
    },
    toggle_like(item) {
      item.liked = !item.liked
    },
    toggle_check(item) {
      item.bookmarked = !item.bookmarked
    },
    getData() {
      this.$axios
        .get(
          'https://raw.githubusercontent.com/Monaliza14xx/flutter_web/main/mockup_data.json'
        )
        .then((res) => {
          this.recommends = res.data.recommends
        })
    },
  },
  mounted() {
    // this.$store.commit('SET_STATE', 0)
    this.getData()
  },
}
</script>

<style>
#category-card {
  border: 1px solid #3968d0;
  border-radius: 50px;
}
.scroll-container {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Hide the scrollbar for modern browsers */
  -ms-overflow-style: none; /* Hide the scrollbar for Internet Explorer and Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Hide the scrollbar for WebKit browsers (Chrome, Safari, etc.) */
}

.scroll-content {
  display: inline-block;
}
#scroll-item {
  /* border: 1px solid gray; */
  border-radius: 10px;
  display: inline-block;
  margin-right: 6px; /* Adjust the spacing between items as needed */
}

.heart-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  color: red;
  font-size: 24px;
}

.title-text {
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>