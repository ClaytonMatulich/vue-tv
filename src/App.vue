<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      appNavbar: Navbar,
      appFooter: Footer
    },
    data: () => ({
      //
    })
  };
</script>
