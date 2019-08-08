<template>
  <div>
    <v-layout column align-center>
      <v-flex class="my-5 mx-5">
        <div class="text-center">
          <h1
            id="intro"
            class="display-3 my-3 font-weight-thin white--text"
          >Discover Movies and Shows with VueTV</h1>
        </div>
      </v-flex>

      <v-flex>
        <v-img
          contain
          width="50vw"
          height="50vh"
          src="../assets/undraw_horror_movie.svg"
          class="mt-2"
        ></v-img>
      </v-flex>
      <v-flex class="my-3">
        <v-btn
          color="primary"
          min-width="200"
          class="mx-5 my-2"
          router
          to="/movies-playing-now"
        >Explore</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    }
  };
</script>

<style scoped>
</style>
