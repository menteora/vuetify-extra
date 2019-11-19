<template>
  <div>
    <slot name="outside"></slot>
    <v-card class="mx-auto pa-xs-auto pa-sm-5 pa-md-8" :elevation="1">
      <slot name="inside"></slot>
      <slot></slot>
    </v-card>
  </div>
</template>
