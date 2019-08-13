<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
      <v-card hover class="ma-3" min-height="500">
        <v-layout column align-center fill-height class="text-center">
          <v-img :src="imageURL + movie.backdrop_path"></v-img>

          <v-card-title class="font-weight-light">{{movie.title || movie.name}}</v-card-title>
          <v-spacer></v-spacer>

          <v-card-text>
            <v-expansion-panels focusable>
              <v-expansion-panel id="synopsis">
                <v-expansion-panel-header>Synopsis</v-expansion-panel-header>
                <v-expansion-panel-content>{{movie.overview}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <!-- <v-card-text>{{movie.overview}}</v-card-text> -->
          <v-progress-circular
            size="90"
            color="white"
            rotate="-90"
            width="8"
            :value="movie.vote_average * 10"
            class="font-weight-heavy my-5"
          >{{movie.vote_average * 10}}</v-progress-circular>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ["movies", "imageURL"],
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .v-card:hover {
    background: #536dfe;
  }
  .v-card:hover #synopsis {
    /* background: #303030; */
    background: #303030;
  }
  #synopsis {
    background: #536dfe;
  }
</style>
