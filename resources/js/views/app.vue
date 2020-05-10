<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
      <router-link :to="{ name: 'home' }">
            <v-list-item link>
                <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Inicio</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </router-link>
        <router-link :to="{ name: 'users.index' }">
            <v-list-item link>
                <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Usuarios</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </router-link>
        <router-link :to="{ name: 'about' }">
            <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Acerca de</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gestión de Mantenimiento</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
        y-offset
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
        >
        <v-row aling center justify-center>
            <v-col class="shrink">
                <router-view></router-view>
            </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
