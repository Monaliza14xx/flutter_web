<template>
  <v-container>
    <AppBar />
    <center>
      <h2>ລາຍການທີ່ຖືກໃຈ:</h2>
    </center>
    <v-divider class="my-2"></v-divider>
    <card :items="recommends" type="recommends"></card>
  </v-container>
</template>

<script>
import card from '~/components/card.vue'
export default {
  components: { card },
  data() {
    return {
      recommends: [
        {
          image:
            'https://discoverlaos.today/img/thing_to_do/5a35724a79737facac0807dfd5d78839.jpg?p=image1920x1080',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5024.973006931995!2d102.63606842954329!3d17.976780046018803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312467c5990ad2d1%3A0x47442b3d67b20290!2z4Lqe4Lqj4Lqw4oCLIOC6l-C6suC6lOC6q-C6vOC6p-C6hw!5e0!3m2!1slo!2sla!4v1688537704646!5m2!1slo!2sla',
          title: 'Pha That Luang',
          sub_title: 'Buddhist temple and national symbol of Laos',
          details:
            'Pha That Luang is a grand Buddhist stupa located in Vientiane. It is considered a national symbol of Laos and an important religious and cultural monument. The golden monument is a stunning sight and holds great significance for the Lao people.',
        },
        {
          image:
            'https://img.freepik.com/fotos-premium/patuxai-significa-literalmente-victory-gate-em-vientiane-laos_1627-4865.jpg',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12729.459022103081!2d102.63473981103225!3d17.974511483028525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687ed455e1df%3A0x24af4d39ae4445b0!2z4Lqb4Lqw4LqV4Lq54LuE4LqK!5e0!3m2!1slo!2sla!4v1688538019436!5m2!1slo!2sla',
          title: 'Patuxai Monument',
          sub_title: 'Victory Gate resembling the Arc de Triomphe',
          details:
            'The Patuxai Monument is a prominent landmark in Vientiane, known as the Victory Gate. Resembling the Arc de Triomphe in Paris, it was built to commemorate the Laotian independence from France. Visitors can climb to the top for panoramic views of the city.',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/36/Wat_Si_Saket_in_its_paved_courtyard_Vientiane_Laos.jpg',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3337071020683!2d102.60875347572279!3d17.963204885960923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31246887c8f655a7%3A0x90ebc63e63ee911d!2z4Lqn4Lqx4LqU4Lqq4Lq14Lqq4Lqw4LuA4LqB4LqU!5e0!3m2!1slo!2sla!4v1688538106692!5m2!1slo!2sla',
          title: 'Wat Si Saket',
          sub_title: 'Buddhist temple with thousands of Buddha statues',
          details:
            'Wat Si Saket is a beautiful Buddhist temple in Vientiane, famous for its thousands of Buddha statues. It is one of the oldest temples in the city and features a unique architectural style. The temple complex offers a serene and peaceful atmosphere.',
        },
        {
          image:
            'https://img.atlasobscura.com/NtGBlShtXICISoIdhS3Cbs8adzJYqMHgNVtnMWnq56Q/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy90NHFx/MnplenlhZGYwOGFh/ZDk1OGY2YmYyNDdm/NV9JTUdfNzk4MS5K/UEc.jpg',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.4507298736567!2d102.6177970757228!3d17.95775508612275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124688214e22391%3A0x88467ca843596cd9!2sCOPE%20Visitor%20Centre!5e0!3m2!1slo!2sla!4v1688538166325!5m2!1slo!2sla',
          title: 'COPE Visitor Centre',
          sub_title: 'Museum showcasing the impact of UXO in Laos',
          details:
            'The COPE Visitor Centre is a museum in Vientiane that highlights the impact of unexploded ordnance (UXO) in Laos. It provides educational exhibits, videos, and personal stories to raise awareness about the ongoing issues caused by UXO and supports rehabilitation efforts.',
        },
        {
          image:
            'https://a.cdn-hotels.com/gdcs/production125/d1953/6501a5ab-a0a1-43cd-b367-4b0913751a22.jpg',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.420686208686!2d102.76220257572201!3d17.912522087463895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31246186d2e52a2d%3A0xe3fe2c89b49a77ed!2sBuddha%20Park%20(Wat%20Xieng%20Khouane%20Luang)!5e0!3m2!1slo!2sla!4v1688538211322!5m2!1slo!2sla',
          title: 'Buddha Park',
          sub_title:
            'Sculpture park with hundreds of Buddhist and Hindu statues',
          details:
            'Buddha Park, also known as Xieng Khuan, is a unique sculpture park located on the outskirts of Vientiane. It features a collection of over 200 Buddhist and Hindu statues, including a giant reclining Buddha and various mythological creatures. The park offers a fascinating blend of religious art and spiritual atmosphere.',
        },
        {
          image:
            'https://www.golaos.tours/wp-content/uploads/2016/11/That-Dam-has-some-mythical-belief-of-its-cosmic-power-in-protecting-Vientiane-from-any-aggression.jpg',
          bookmarked: true,
          liked: true,
          map_url:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.274654452122!2d102.6084929757229!3d17.965954385879293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687d50b199df%3A0x51e6e90ab02d36e2!2z4Lqq4Lqn4LqZ4LqX4Lqy4LqU4LqU4Lqz!5e0!3m2!1slo!2sla!4v1688538243396!5m2!1slo!2sla',
          title: 'That Dam',
          sub_title: 'Black stupa with a dark and mysterious legend',
          details:
            'That Dam, also known as the Black Stupa, is a historic landmark in Vientiane. Legend has it that the stupa was once covered in gold but was cursed, turning it black. It is surrounded by various stories and is considered an important spiritual site.',
        },
      ],
    }
  },
  mounted() {
    //  this.$store.commit('SET_STATE', 2)
  },
}
</script>

<style>
</style>