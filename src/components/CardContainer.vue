<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md12 lg9 xl8>
        <v-card class="mx-auto" :elevation="1">
          <v-card-title v-if="title" class="font-weight-light">{{title}}</v-card-title>
          <v-divider></v-divider>
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
    }
  }
}
</script>
