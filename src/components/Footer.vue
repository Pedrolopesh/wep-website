<template>
  <v-footer
    dark
    padless
    class="mt-17"
  >
    <v-card
      flat
      tile
      color="orange"
      dark
      class="indigo lighten-1 white--text text-center footer-container"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        email para contato
        <br>
        <br>
        <h2>wepartyapp@gmail.com</h2>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="scss">
.footer-container{
    max-width: 100% !important;
    width: 100% !important;
}
</style>