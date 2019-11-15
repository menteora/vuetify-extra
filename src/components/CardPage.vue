<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md12 lg9 xl8>
        <div v-if="title">
          <div v-if="titleOutside" class="headline pa-3 font-weight-light">{{title}}</div>
        </div>
        <div v-else>
          <slot v-if="titleOutside" name="title"></slot>
        </div>
        <v-card class="mx-auto pa-xs-auto pa-sm-5 pa-md-8" :elevation="1">
          <div v-if="title">
            <div v-if="!titleOutside">
              <v-card-title class="font-weight-light">{{ title }}</v-card-title>
              <v-divider></v-divider>
            </div>
          </div>
          <div v-else>
            <slot v-if="!titleOutside" name="title"></slot>
          </div>
          <slot></slot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    titleOutside: {
      type: Boolean
    }
  }
}
</script>
