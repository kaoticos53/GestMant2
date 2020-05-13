<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="pt-5 blue darken-4">
          <v-toolbar-title class="white--text ma-auto">
            <h3>Entrada al sistema</h3>
          </v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field label="Email" v-model="user.email" :rules="emailRules" required></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="user.password"
                  min="8"
                  :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="passwordRules"
                  counter
                  required
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn
                    @click="login"
                    :disabled="!valid"
                    :class="{ 'blue darken-4 text--white': valid }"
                  >Login</v-btn>
                  <a href>Forgot Password</a>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    user: {
      mail: "",
      password: ""
      },
    valid: false,
    e1: false,
    passwordRules: [v => !!v || "Password is required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
    ]
  }),
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    login() {
      this.$store.dispatch('currentUser/loginUser', this.user)
    }
    //...mapActions(["crearUsuario"])
  }
};
</script>
