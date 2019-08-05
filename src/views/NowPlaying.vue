<template>
  <div>
    <v-container class="my-5">
      <h1>Now Playing</h1>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
          <v-card class="text-center ma-3">
            <v-card-text>
              <div slot="subheading">{{movie.title}}</div>
              <div class="grey--text">{{movie.vote_average}}</div>
            </v-card-text>
            <v-card-actions>action</v-card-actions>
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
        movies: []
      };
    },
    methods: {
      init() {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=6e95d1c6cf02574f6938fc26b4c30a1a&language=en-US&page=1"
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
