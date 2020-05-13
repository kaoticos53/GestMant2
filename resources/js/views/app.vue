<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <router-link
          v-for="(menu, index) in menus"
          :key="index"
          :to="{ name: menu.route }"
        >
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ menu.icono }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gestión de Mantenimiento</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <router-link :to="{ name: 'login' }">
        <v-btn icon>
          <v-icon>{{ loginIcon }}</v-icon>
        </v-btn>
      </router-link>
      <v-menu left bottom y-offset>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    isLogueado: false,
    menus: [
      { name: "inicio", icono: "mdi-view-dashboard", route: "home" },
      { name: "Usuarios", icono: "mdi-settings", route: "users.index" },
      { name: "Acerca de", icono: "mdi-settings", route: "about" },
    ],
  }),
  computed: {
    ...mapState(["usuario", "error"]),
    ...mapState({
      loginIcon(state) {
        this.isLogueado = state.isLogin;
        return state.isLogin ? "mdi-face" : "mdi-lock";
      },
      loggedIn:{
        get(){
          return this.$store.state.currentUser.loggedIn;
        }
      },
      currentUser: {
        get() {
          return this.$store.state.currentUser.user;
        }
      }
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('currentUser/logoutUser');
    }
  },
  created() {
    this.$vuetify.theme.dark = true;

    if(localStorage.hasOwnProperty("api_token")) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("api_token");
      this.$store.dispatch('currentUser/getUser');
    } else {
      window.Location.replace("/login");
    }
  },
};
</script>
