<template>
  <v-app>
    <v-content>
      <app-bar :menu-items="menuItems" />
      <v-container>
        <v-card outlined tile>
          <v-card-title class="font-weight-light">Test App Bar</v-card-title>
          <v-card-text>
            <v-checkbox
              v-model="menuItems"
              label="Home"
              :value="{title: 'Home',icon: 'mdi-home',to: '/'}"
            ></v-checkbox>
            <v-checkbox
              v-model="menuItems"
              label="Fake"
              :value="{title: 'Fake',icon: 'mdi-bug',to: '/fake-url'}"
            ></v-checkbox>
          </v-card-text>
        </v-card>
        <json-tree v-if="menuItems" :data="menuItems"></json-tree>
      </v-container>
      <login-form @login="getLoginData" />
      <v-container>
      <json-tree v-if="jsonEmitted" :data="jsonEmitted"></json-tree>
      </v-container>
      <v-container>
        <v-card outlined tile>
          <v-card-title class="font-weight-light">Test App Message Snackbar</v-card-title>
          <v-card-actions>
            <v-text-field v-model="textMessage" class="mt-3 pa-6" outlined></v-text-field>
            <v-btn text @click="$appMessage.show(textMessage)">Popup Message</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
    <app-snackbar />
    <card-container title="Title of a fillable card">
      <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
    </card-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    jsonEmitted: '',
    menuItems: [],
    textMessage: 'Hello World!'
  }),
  methods: {
    getLoginData (values) {
      this.jsonEmitted = values
    }
  }
}
</script>
