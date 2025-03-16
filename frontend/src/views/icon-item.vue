<template>
  <svg>
    <use :xlink:href="`icons-sprite.svg#${iconName}`"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  iconName: string
}>()
</script>
