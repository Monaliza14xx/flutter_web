<template>
  <v-container>
    <app-bar></app-bar>
    <div class="mb-4 mx-4">
      <div style="text-align: center">
        <div class="mb-4">
          <v-row>
            <v-col align-self="center">
              <v-icon color="blue"> mdi-map-marker </v-icon>
              Vientiane, LAOS
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-col cols="8">
            <v-text-field
              placeholder="Search"
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
              <h2>Let’s Discover Around</h2>
              <p>Find the best place to visit</p>
              <v-btn
                width="140"
                height="40"
                color="white"
                class="blue--text mt-4"
                >Start Now</v-btn
              >
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <div class="my-4">
        <h3>Category:</h3>
        <v-row class="my-2">
          <v-col align="center" v-for="(i, idx) in items" :key="idx">
            <v-card
              height="120"
              class="elevation-0 d-flex flex-column align-center justify-center"
              @click="goTo(i.to)"
            >
              <div>
                <v-sheet
                  height="45"
                  width="45"
                  class="rounded-xl d-flex flex-column align-center justify-center"
                  :color="i.color"
                >
                  <v-icon color="white">{{ i.icon }}</v-icon>
                </v-sheet>
                <br />
                <h5 class="mt-6x">{{ i.text }}</h5>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="my-4">
        <h3>Recommended:</h3>
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
export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          text: 'All',
          color: 'blue',
          to: '/content?category=all',
        },
        {
          icon: 'mdi-image-filter-hdr',
          text: 'Hill',
          color: 'success',
          to: '/content?category=hill',
        },
        {
          icon: 'mdi-home-variant',
          text: 'Temple',
          color: 'orange',
          to: '/content?category=temple',
        },
        {
          icon: 'mdi-home-city',
          text: 'Hotel',
          color: 'red',
          to: '/content?category=hotel',
        },
      ],
      recommends: [
        {
          image:
            'https://discoverlaos.today/img/thing_to_do/5a35724a79737facac0807dfd5d78839.jpg?p=image1920x1080',
          bookmarked: false,
          liked: false,
          title: 'Pha That Luang',
          sub_title: 'Buddhist temple and national symbol of Laos',
          details:
            'Pha That Luang is a grand Buddhist stupa located in Vientiane. It is considered a national symbol of Laos and an important religious and cultural monument. The golden monument is a stunning sight and holds great significance for the Lao people.',
        },
        {
          image:
            'https://img.freepik.com/fotos-premium/patuxai-significa-literalmente-victory-gate-em-vientiane-laos_1627-4865.jpg',
          bookmarked: false,
          liked: false,
          title: 'Patuxai Monument',
          sub_title: 'Victory Gate resembling the Arc de Triomphe',
          details:
            'The Patuxai Monument is a prominent landmark in Vientiane, known as the Victory Gate. Resembling the Arc de Triomphe in Paris, it was built to commemorate the Laotian independence from France. Visitors can climb to the top for panoramic views of the city.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/36/Wat_Si_Saket_in_its_paved_courtyard_Vientiane_Laos.jpg',
          bookmarked: false,
          liked: false,
          title: 'Wat Si Saket',
          sub_title: 'Buddhist temple with thousands of Buddha statues',
          details:
            'Wat Si Saket is a beautiful Buddhist temple in Vientiane, famous for its thousands of Buddha statues. It is one of the oldest temples in the city and features a unique architectural style. The temple complex offers a serene and peaceful atmosphere.',
        },
        {
          image:
            'https://img.atlasobscura.com/NtGBlShtXICISoIdhS3Cbs8adzJYqMHgNVtnMWnq56Q/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy90NHFx/MnplenlhZGYwOGFh/ZDk1OGY2YmYyNDdm/NV9JTUdfNzk4MS5K/UEc.jpg',
          bookmarked: false,
          liked: false,
          title: 'COPE Visitor Centre',
          sub_title: 'Museum showcasing the impact of UXO in Laos',
          details:
            'The COPE Visitor Centre is a museum in Vientiane that highlights the impact of unexploded ordnance (UXO) in Laos. It provides educational exhibits, videos, and personal stories to raise awareness about the ongoing issues caused by UXO and supports rehabilitation efforts.',
        },
        {
          image:
            'https://a.cdn-hotels.com/gdcs/production125/d1953/6501a5ab-a0a1-43cd-b367-4b0913751a22.jpg',
          bookmarked: false,
          liked: false,
          title: 'Buddha Park',
          sub_title:
            'Sculpture park with hundreds of Buddhist and Hindu statues',
          details:
            'Buddha Park, also known as Xieng Khuan, is a unique sculpture park located on the outskirts of Vientiane. It features a collection of over 200 Buddhist and Hindu statues, including a giant reclining Buddha and various mythological creatures. The park offers a fascinating blend of religious art and spiritual atmosphere.',
        },
        {
          image:
            'https://www.golaos.tours/wp-content/uploads/2016/11/That-Dam-has-some-mythical-belief-of-its-cosmic-power-in-protecting-Vientiane-from-any-aggression.jpg',
          bookmarked: false,
          liked: false,
          title: 'That Dam',
          sub_title: 'Black stupa with a dark and mysterious legend',
          details:
            'That Dam, also known as the Black Stupa, is a historic landmark in Vientiane. Legend has it that the stupa was once covered in gold but was cursed, turning it black. It is surrounded by various stories and is considered an important spiritual site.',
        },
      ],
    }
  },
  methods: {
    goTo(to) {
      this.$router.push(to)
    },
    toggle_like(item) {
      item.liked = !item.liked
    },
    toggle_check(item) {
      item.bookmarked = !item.bookmarked
    },
  },
  mounted() {
    this.$store.commit('SET_STATE', 0)
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