<template>
  <v-app>
    <v-content>
      <app-bar />
      <login-form @login="getLoginData" />
      <v-container>
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-card class="ma-3 pa-6" outlined tile>
            <tree-view :data="jsonEmitted"></tree-view>
          </v-card>
        </v-row>
      </v-container>
      <v-container>
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-card class="ma-3 pa-6" outlined tile>
            <v-card-title>Test App Message Snackbar</v-card-title>
            <v-btn @click="$appMessage.show('Hello Friends')">Popup Message</v-btn>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
    <app-snackbar />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    jsonEmitted: ''
  }),
  methods: {
    getLoginData (values) {
      console.log(values)
      this.jsonEmitted = values
    }
  }
}
</script>
