<template>
  <v-layout justify-end row class="mt-3 mr-4">
    <v-flex class="ml-5" align-self-center>
      <h1 class="display-1 font-weight-light">{{pageTitle}}</h1>
      <h5 class="font-weight-light">{{sortCriteria}}</h5>
    </v-flex>
    <v-spacer></v-spacer>

    <v-flex align-self-center class="my-3">
      <div class="text-sm-end">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="cyan lighten-3"
              class="mx-3"
              @click="sortBy('popularity')"
            >
              <v-icon left>mdi-account-heart</v-icon>
              <span class="caption text-lowercase">By popularity</span>
            </v-btn>
          </template>
          <span>Sort movies by popularity</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="cyan lighten-3"
              class="mx-3"
              @click="sortBy('vote_average')"
            >
              <v-icon left>mdi-star</v-icon>
              <span class="caption text-lowercase">By rating</span>
            </v-btn>
          </template>
          <span>Sort movies by rating</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="cyan lighten-3"
              class="mx-3"
              @click="sortBy('release_date')"
            >
              <v-icon left>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By release date</span>
            </v-btn>
          </template>
          <span>Sort movies by release date</span>
        </v-tooltip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ["pageTitle", "sortCriteria"],
    data() {
      return {};
    },
    methods: {
      sortBy(prop) {
        this.$emit(prop);
      }
    }
  };
</script>

<style>
</style>
