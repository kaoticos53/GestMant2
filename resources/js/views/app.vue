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
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
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
    }),
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
