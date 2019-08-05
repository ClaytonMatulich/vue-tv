<template>
  <v-container class="my-5">
    <v-layout justify-end row class="mt-3 mr-4">
      <v-flex class="ml-5">
        <h1 class="display-1 font-weight-light">Now Playing</h1>
        <h5 class="font-weight-light">{{sortCriteria}}</h5>
      </v-flex>
      <v-spacer></v-spacer>
      <v-tooltip top>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" small color="cyan lighten-3" class="mr-3" @click="sortBy('popularity')">
            <v-icon left>mdi-account-heart</v-icon>
            <span class="caption text-lowercase">By popularity</span>
          </v-btn>
        </template>
        <span>Sort movies by popularity</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" small color="cyan lighten-3" @click="sortBy('vote_average')">
            <v-icon left>mdi-star</v-icon>
            <span class="caption text-lowercase">By rating</span>
          </v-btn>
        </template>
        <span>Sort movies by rating</span>
      </v-tooltip>
    </v-layout>

    <movie-grid :movies="movies" :imageURL="imageURL"></movie-grid>
  </v-container>
</template>

<script>
  import axios from "axios";
  import MovieGrid from "../components/MovieGrid.vue";

  export default {
    components: {
      movieGrid: MovieGrid
    },
    data: function() {
      return {
        movies: [],
        imageURL: "https://image.tmdb.org/t/p/w1280",
        sortCriteria: "Most Popular"
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
        if (prop === "popularity") {
          this.sortCriteria = "Most Popular";
        } else if (prop === "vote_average") {
          this.sortCriteria = "Highest Rated";
        }

        this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style>
  .v-btn {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
