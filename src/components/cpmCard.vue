<template>
<div>
  <h2 v-if=" cardData != '' " class="mt-12 ml-8 p20">Alguns eventos em tempo real</h2>

  <div class="container-dash-cards">
    <div class="ac mt-4" v-for="(item, i) in cardData" :key="i">

    <v-card
      v-if="
        i == 1 ||
        i == 2 ||
        i == 3 "
      class="rounded-xl ac container-card"
    >
      <v-app-bar color="white" class="d-flex align-center" dense>

        <v-avatar size="36" color="orange" class="mr-3">
          <v-icon v-if="!item.user.avatar" dark>mdi-account-circle</v-icon>
          <img v-else :src="item.user.avatar" alt="avatar" />
        </v-avatar>

        <v-divider vertical></v-divider>

        <div class="ml-5">{{ item.user.name }}</div>

        <!-- <div class="ml-5">{{ item.eventDate }}</div> -->

      </v-app-bar>

      <v-img
        contain
        class="container-card-image"
        :src="item.img"
      ></v-img>

      <v-card-title>
        <div class="d-block">
          <h2>{{ item.title }}</h2>
        </div>

      </v-card-title>
        <div class="p15 d-block">
          <h3 class="clr-red">Data: {{ item.eventDate }}</h3>
        </div>


      <v-divider></v-divider>

      <v-card-text class="d-flex justify-space-between">
        <p>
          <!-- <v-chip outlined>{{ cardData.comments || 0 }}</v-chip> -->
        </p>
      </v-card-text>


    </v-card>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "EventCard",
 
  data: () => ({
    cardData: ''
  }),

  created() {
    this.getPublicEvents()
  },

  computed: {},

  methods: {
    getPublicEvents(){
        this.$http.get(process.env.VUE_APP_BASE_URL + '/event/privated/true')
        .then(resp => {
          console.log(resp)
          // context.commit('setFeedEventsData',resp.data)
          this.cardData = resp.data
        })
    }
  },
};
</script>

<style lang="scss">
  .container-dash-cards{
    display: flex !important;
    flex-wrap: wrap;

    div{
      @media screen and(max-width: 700px){
        max-width: 100%;
        width: 100%;
      }
    }
  }

  .container-card{
    display: block !important;
    max-width: 100% !important;
    width: 400px;
  }

  .container-card-image{
      max-width: 100% !important;
      width: 100%;
  }
</style>