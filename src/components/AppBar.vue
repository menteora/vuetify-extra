<template>
  <div>
    <v-navigation-drawer app fixed temporary clipped v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" v-bind="routerProps(item.to)" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="(item, i) in menuItems" :key="i">
        <v-btn v-bind="routerProps(item.to)" text exact>
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [
        {
          title: 'Home',
          icon: 'mdi-home',
          to: '/'
        }
      ]
    }
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    routerProps (value) {
      const prop = typeof this.$route === 'undefined' ? 'href' : 'to'
      return { [prop]: value }
    }
  }
}
</script>
