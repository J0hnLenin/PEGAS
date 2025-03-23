<template>
  <PHeader></PHeader>
  <slot></slot>
  <PFooter></PFooter>
</template>

<script lang="ts">
import PHeader from './PHeader/PHeader.vue'
import PFooter from './PFooter/PFooter.vue'

export default {
  name: 'PLayout',
  components: {
    PHeader,
    PFooter,
  },
}
</script>
