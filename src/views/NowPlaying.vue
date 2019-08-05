<template>
  <div>
    <v-container class="my-5">
      <h1 class="display-1">Now Playing</h1>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
          <v-card class="text-center ma-3" min-height="350" max-height="450">
            <v-img :src="imageURL + movie.backdrop_path"></v-img>
            <v-card-title>{{movie.title}}</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-progress-circular
                size="70"
                color="cyan lighten-3"
                rotate="-90"
                width="12"
                :value="movie.vote_average * 10"
              >{{movie.vote_average * 10}}</v-progress-circular>
            </v-card-text>
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
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style>
</style>
