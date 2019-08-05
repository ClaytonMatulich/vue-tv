<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="cyan--text text--lighten-3"
        style="background-color: red;"
      ></v-app-bar-nav-icon>
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
          <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
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
          { icon: "mdi-view-dashboard", text: "Home", route: "/" },
          { icon: "mdi-filmstrip", text: "Now Playing", route: "/nowplaying" }
        ]
      };
    }
  };
</script>

<style>
  .v-navigation-drawer {
    background: linear-gradient(251deg, #1f6b78, #876bdf);
  }
</style>
