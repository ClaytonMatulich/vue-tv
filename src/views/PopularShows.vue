<template>
  <v-container class="my-5">
    <media-nav
      :pageTitle="pageTitle"
      :sortCriteria="sortCriteria"
      @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')"
      @release_date="sortBy('release_date')"
    ></media-nav>
    <media-grid :movies="shows" :imageURL="imageURL"></media-grid>
    <div class="text-center" v-if="showPagination">
      <v-pagination color="primary" v-model="page" :length="3" :value="page"></v-pagination>
    </div>
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
        shows: [],
        pageTitle: "Popular Shows",
        imageURL: "https://image.tmdb.org/t/p/w1280",
        sortCriteria: "Most Popular",
        sortedBy: "popularity",
        page: 1,
        showPagination: false
      };
    },
    methods: {
      init() {
        const key = process.env.VUE_APP_KEY;
        axios
          .get(
            "https://api.themoviedb.org/3/tv/popular?api_key=" +
              key +
              "&language=en-US&page=" +
              this.page
          )
          .then(response => {
            // handle success
            //console.log(response);
            this.shows = response.data.results;
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(() => {
            // always executed
            this.sortBy(this.sortedBy);
            this.showPagination = true;
          });
      },
      sortBy(prop) {
        console.log(prop);
        if (prop === "popularity") {
          this.sortCriteria = "Most Popular";
        } else if (prop === "vote_average") {
          this.sortCriteria = "Highest Rated";
        } else if (prop === "release_date") {
          //release_date for shows is called first_air_date
          prop = "first_air_date";
          this.sortCriteria = "Release Date";
        }
        this.sortedBy = prop;
        this.shows.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      }
    },
    watch: {
      page: function(page) {
        this.init();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style>
</style>
