<template>
  <div>
    <h1 class="headline pa-3 font-weight-light"><slot name="outside"></slot></h1>
    <v-card class="mx-auto pa-xs-auto pa-sm-5 pa-md-8" :elevation="1">
      <v-card-title class="font-weight-light"><slot name="inside"></slot></v-card-title>
      <slot></slot>
    </v-card>
  </div>
</template>
