<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  export default {
    name: "App",
    components: {
      appNavbar: Navbar
    },
    data: () => ({
      //
    })
  };
</script>
