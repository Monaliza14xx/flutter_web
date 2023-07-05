<template>
  <v-container>
    <v-card width="80%" id="card">
      <v-card-title>
        <h3>ເຂົ້າສູ່ລະບົບ</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            rounded
            label="ອີເມວ"
            outlined
            dense
            required
          ></v-text-field>
          <v-text-field
            rounded
            label="ລະຫັດຜ່ານ"
            outlined
            dense
            required
          ></v-text-field>

          <v-btn class="mb-2" @click="goTo('/home')" rounded width="100%" dark color="blue"
            ><b> ເຂົ້າສູ່ລະບົບ </b></v-btn
          >
          <v-btn outlined color="grey" @click="goTo('/login/register')" rounded width="100%" dark
            ><b> ລົງທະບຽນ </b></v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script>
export default {
  layout: 'empty',
  methods: {
    goTo(to) {
      this.$router.push(to)
    },
  },
}
</script>
  
  <style scoped>
/* make card middle of screen */
#card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>