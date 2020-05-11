<template>
    <v-card class="ma-auto align-center" elevation="8" max-width="544">
        <v-toolbar
           class="mx-auto pa-2"
           color="primary"
        >
            <v-toolbar-title class="mx-auto">Login form</v-toolbar-title>
              <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account-box"
              type="text"
            ></v-text-field>
            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    props: {
      source: String,
    },
  }
</script>
