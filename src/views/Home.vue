<template>
  <div>
    <v-layout column align-center justify-space-between fill-height>
      <div class="text-center">
        <h1 id="intro" class="display-3 my-3 font-weight-thin">Discover Movies and Shows with VueTV</h1>
      </div>
      <v-spacer></v-spacer>
      <v-img
        contain
        width="60vw"
        height="60vh"
        src="../assets/undraw_horror_movie.svg"
        class="mt-2"
      ></v-img>
    </v-layout>
    <v-layout align-center row class="my-5" wrap>
      <v-flex xs12 sm6 md3 class="text-center" v-for="link in links" :key="link.location">
        <v-btn min-width="200" class="mx-5 my-2" router :to="link.path">{{link.location}}</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        links: [
          {
            location: "Movies Playing Now",
            path: "/movies-playing-now"
          },
          {
            location: "Top Rated Movies",
            path: "/top-rated-movies"
          },
          {
            location: "Popular Shows",
            path: "/popular-shows"
          },
          {
            location: "Top Rated Shows",
            path: "/top-rated-shows"
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .v-btn {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
