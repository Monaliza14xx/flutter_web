<template>
  <v-container>
    <v-card width="80%" id="card">
      <v-card-title>
        <h3>ລົງທະບຽນ</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            rounded
            label="ຊື່"
            outlined
            dense
            required
          ></v-text-field>
          <v-text-field
            rounded
            label="ນາມສະກຸນ"
            outlined
            dense
            required
          ></v-text-field>
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
          <v-text-field
            rounded
            label="ຢືນຢັນລະຫັດຜ່ານ"
            outlined
            dense
            required
          ></v-text-field>
          <v-btn @click="goTo('/login')" rounded width="100%" dark color="blue"
            ><b> ລົງທະບຽນ </b></v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
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