<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
        <v-card hover class="text-center ma-3" min-height="350" max-height="450">
          <v-layout column align-center>
            <v-img :src="imageURL + movie.backdrop_path"></v-img>

            <v-card-title class="font-weight-light">{{movie.title}}</v-card-title>

            <v-flex>
              <v-card-text>
                <v-progress-circular
                  size="70"
                  color="white"
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
</template>

<script>
  export default {
    props: ["movies", "imageURL"],
    data() {
      return {};
    }
  };
</script>

<style>
  .v-card:hover {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
