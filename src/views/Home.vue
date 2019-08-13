<template>
  <v-container>
    <v-layout align-center justify-space-around column fill-height wrap class="my-5 text-center">
      <h1
        class="display-3 my-3 font-weight-thin white--text my-5"
      >Discover Movies and Shows with VueTV</h1>

      <v-img contain width="50vw" height="50vh" src="../assets/undraw_horror_movie.svg"></v-img>

      <v-btn color="primary" min-width="200" class="my-5" router to="/movies-playing-now">Explore</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    }
  };
</script>

<style>
</style>
