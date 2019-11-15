<template>
  <v-app>
    <v-content>
      <app-bar :menu-items="mItems" />
      <v-container>
        <v-card outlined tile>
          <v-card-title class="font-weight-light">Test App Bar</v-card-title>
          <v-card-text>
            <v-checkbox v-model="mItems" label="Home" :value="menuItems[0]"></v-checkbox>
            <v-checkbox v-model="mItems" label="Fake" :value="menuItems[1]"></v-checkbox>
          </v-card-text>
        </v-card>
        <json-tree v-if="mItems" :data="mItems"></json-tree>
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
      <app-snackbar />
      <card-page title-outside title="Title of a card page">
        <v-card-text>Card with title outside card</v-card-text>
      </card-page>
      <card-page title="Title of a card page">
        <v-card-text>Card with title inside card</v-card-text>
      </card-page>
      <card-page title-outside>
        <v-card-text>Card without title</v-card-text>
      </card-page>
      <card-page title-outside>
        <template v-slot:title>
          <div class="headline pa-3 font-weight-light">Title with custom format outside card</div>
        </template>
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
      <card-page>
        <template v-slot:title>
          <div class="headline pa-3 font-weight-light">Title with custom format inside card</div>
        </template>
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
      <card-container title="Title of a fillable card (#Deprecated)">
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    jsonEmitted: null,
    mItems: [],
    textMessage: 'Hello World!',
    menuItems: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Fake', icon: 'mdi-bug', to: '/fake-url' }
    ]
  }),
  methods: {
    getLoginData (values) {
      this.jsonEmitted = values
    }
  }
}
</script>
