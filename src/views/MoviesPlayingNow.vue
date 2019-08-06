<template>
  <v-container class="my-5">
    <media-nav
      :pageTitle="pageTitle"
      :sortCriteria="sortCriteria"
      @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')"
      @release_date="sortBy('release_date')"
    ></media-nav>
    <media-grid :movies="movies" :imageURL="imageURL"></media-grid>
  </v-container>
</template>

<script>
  import axios from "axios";
  import MediaGrid from "../components/MediaGrid.vue";
  import MediaNav from "../components/MediaNav.vue";

  export default {
    components: {
      mediaGrid: MediaGrid,
      mediaNav: MediaNav
    },
    data: function() {
      return {
        movies: [],
        pageTitle: "Movies Playing Now",
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
        } else if (prop === "release_date") {
          this.sortCriteria = "Release Date";
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
