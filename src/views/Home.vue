<template>
  <div>
    <v-container>
      <v-layout column align-center justify-space-between>
        <div class="text-center">
          <h1
            id="intro"
            class="display-3 my-2 font-weight-thin"
          >Discover Movies and Shows with VueTV</h1>
        </div>

        <v-img
          contain
          width="60vw"
          height="60vh"
          src="../assets/undraw_horror_movie.svg"
          class="my-2"
        ></v-img>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {}
  };
</script>

<style scoped>
  .h1 {
    background-color: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
