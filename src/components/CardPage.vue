<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md12 lg9 xl8>
        <component v-bind:is="type">
          <template v-slot:[titlePosition]>
            <slot :name="titlePosition"></slot>
          </template>
          <slot></slot>
        </component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EmptyFormat from '@/components/CardPage/EmptyFormat'
import SimpleTitle from '@/components/CardPage/SimpleTitle'

export default {
  props: {
    titlePosition: {
      type: String,
      default: 'inside'
    },
    simpleTitle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EmptyFormat,
    SimpleTitle
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    type: function () {
      return this.simpleTitle ? 'simple-title' : 'empty-format'
    }
  }
}
</script>
