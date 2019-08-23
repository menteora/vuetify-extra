<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="card--flex-toolbar">
          <v-app-bar flat>
            <v-toolbar-title class="display-1 text-uppercase">
              <span class="font-weight-light">{{ loginLabel }}</span>
            </v-toolbar-title>
          </v-app-bar>
          <v-card-text>
            <v-text-field v-model="username" :label="userLabel" required></v-text-field>
            <v-text-field type="password" v-model="password" :label="passwordLabel" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block text @click="login()">{{ loginLabel }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    userLabel: {
      type: String,
      default: 'User'
    },
    passwordLabel: {
      type: String,
      default: 'Password'
    },
    loginLabel: {
      type: String,
      default: 'Login'
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let data = null
      data = {
        username: this.username,
        password: this.password
      }
      this.$emit('login', data)
    }
  }
}
</script>
