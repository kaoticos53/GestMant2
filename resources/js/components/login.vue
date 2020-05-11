<template>
    <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-5 blue darken-4">
                <v-toolbar-title class="white--text ma-auto"><h3>Entrada al sistema</h3></v-toolbar-title>
                </v-toolbar-items>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Email"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          v-model="password"
                          min="8"
                          :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="crearUsuario({email:email, pass:password})" :disabled="!valid" :class=" { 'blue darken-4 text--white' : valid }">Login</v-btn>
                            <a href="">Forgot Password</a>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <p>{{ usuario }}</p>
       </v-container>
</template>

<script>
  import { mapActions, mapState } from "vuex"

  export default {
    data () {
          return {
            valid: false,
            e1: false,
            password: '',
            passwordRules: [
              (v) => !!v || 'Password is required',
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
          }
        },
        computed: {
          ...mapState(['usuario'])
        },
        methods: {
          clear () {
            this.$refs.form.reset()
          },
          ...mapActions(['crearUsuario']),
        },
  }
</script>
