<template>
  <v-app>
    <v-main>
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
          <v-card-text>
            <v-text-field v-model="textMessage" class="mt-3 pa-6" outlined></v-text-field>
            <v-radio-group v-model="snackbarType" :mandatory="false">
              <v-radio label="Error" value="error"></v-radio>
              <v-radio label="Info" value="info"></v-radio>
              <v-radio label="Warning" value="warning"></v-radio>
              <v-radio label="Default" value="empty"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$appMessage.show({message:textMessage, type:snackbarType})">Popup Message</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <app-snackbar />
      <card-page simple-title>
        <template v-slot:outside>Simple title outside card not working</template>
        <template v-slot:inside>Simple title inside card work</template>
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
      <card-page simple-title title-position="outside">
        <template v-slot:outside>Simple title outside card work</template>
        <template v-slot:inside>Simple title inside card not work</template>
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
      <card-page>
        <template v-slot:outside>
          <h2>Custom title outside card not working</h2>
        </template>
        <template v-slot:inside>
          <h2>Custom title inside card work</h2>
        </template>
        <v-card-text>1Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
      <card-page title-position="outside">
        <template v-slot:outside>
          <h2>Custom title outside card work</h2>
        </template>
        <template v-slot:inside>
          <h2>Custom title inside card not work</h2>
        </template>
        <v-card-text>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>
      </card-page>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    jsonEmitted: null,
    mItems: [],
    textMessage: 'Hello World!',
    snackbarType: null,
    menuItems: [
      { title: 'Home', icon: 'mdi-home', to: '/vuetify-extra/' },
      { title: 'Fake', icon: 'mdi-bug', to: '/vuetify-extra/fake-url' }
    ]
  }),
  methods: {
    getLoginData (values) {
      this.jsonEmitted = values
    }
  }
}
</script>
