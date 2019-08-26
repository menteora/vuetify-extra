<template>
  <v-app>
    <v-content>
      <app-bar :menu-items="menuItems" />
      <v-container>
        <v-card outlined tile>
          <v-card-title>Test App Bar</v-card-title>
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
        <v-card class="mt-3 pa-6" outlined tile>
          <tree-view :data="menuItems"></tree-view>
        </v-card>
      </v-container>
      <login-form @login="getLoginData" />
      <v-container>
        <v-card class="mt-3 pa-6" outlined tile>
          <tree-view :data="jsonEmitted"></tree-view>
        </v-card>
      </v-container>
      <v-container>
        <v-card outlined tile>
          <v-card-title>Test App Message Snackbar</v-card-title>
          <v-card-action>
            <v-btn text @click="$appMessage.show('Hello Friends')">Popup Message</v-btn>
          </v-card-action>
        </v-card>
      </v-container>
    </v-content>
    <app-snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    jsonEmitted: "",
    menuItems: []
  }),
  methods: {
    getLoginData(values) {
      console.log(values);
      this.jsonEmitted = values;
    }
  }
};
</script>
