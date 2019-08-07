<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon id="drawerIcon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">vue</span>
        <span>TV</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-action>
          <v-icon class="white--text">{{link.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text font-weight-light">{{link.text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data: function() {
      return {
        drawer: false,
        links: [
          { icon: "mdi-home", text: "Home", route: "/" },
          {
            icon: "mdi-filmstrip",
            text: "Movies Playing Now",
            route: "/movies-playing-now"
          },
          {
            icon: "mdi-trophy",
            text: "Top Rated Movies",
            route: "/top-rated-movies"
          },
          {
            icon: "mdi-television-classic",
            text: "Popular Shows",
            route: "/popular-shows"
          },
          {
            icon: "mdi-medal",
            text: "Top Rated Shows",
            route: "/top-rated-shows"
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .v-navigation-drawer {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
  #drawerIcon:hover {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
