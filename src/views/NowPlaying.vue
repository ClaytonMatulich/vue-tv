<template>
  <div>
    <v-container class="my-5">
      <v-layout justify-end row class="mt-3 mr-4">
        <v-flex class="ml-3">
          <h1 class="display-1 font-weight-light">Now Playing</h1>
        </v-flex>
        <v-spacer></v-spacer>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              outlined
              color="cyan lighten-3"
              class="mr-3"
              @click="sortBy('popularity')"
            >
              <v-icon left>mdi-account-heart</v-icon>
              <span class="caption text-lowercase">By popularity</span>
            </v-btn>
          </template>
          <span>Sort movies by popularity</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" small outlined color="cyan lighten-3" @click="sortBy('vote_average')">
              <v-icon left>mdi-star</v-icon>
              <span class="caption text-lowercase">By rating</span>
            </v-btn>
          </template>
          <span>Sort movies by rating</span>
        </v-tooltip>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
          <v-card class="text-center ma-3" min-height="350" max-height="450">
            <v-img :src="imageURL + movie.backdrop_path"></v-img>

            <v-card-title class="font-weight-light">{{movie.title}}</v-card-title>

            <v-divider class="mx-4"></v-divider>

            <v-layout row>
              <v-flex>
                <v-card-text>
                  <v-progress-circular
                    size="70"
                    color="cyan lighten-3"
                    rotate="-90"
                    width="8"
                    :value="movie.vote_average * 10"
                    class="font-weight-heavy"
                  >{{movie.vote_average * 10}}</v-progress-circular>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        movies: [],
        imageURL: "https://image.tmdb.org/t/p/w1280"
      };
    },
    methods: {
      init() {
        const key = process.env.VUE_APP_KEY;
        axios
          .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
              key +
              "&language=en-US&page=1"
          )
          .then(response => {
            // handle success
            //console.log(response);
            console.log(response.data.results);
            this.movies = response.data.results;
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(() => {
            // always executed
          });
      },
      sortBy(prop) {
        this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style>
</style>
