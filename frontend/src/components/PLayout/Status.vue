<template>
  <PHeader></PHeader>
  <slot></slot>
  <PFooter></PFooter>
</template>

<script lang="ts">


export default {
  name: 'Status',
  components: {
  },
}
</script>

<style lang="sass">
$color-status-new: #FF9500
$color-status-checking: #32ADE6
$color-status-fix: #A2845E
$color-status-done: #009951

.status
  display: flex
  justify-content: space-between
  align-items: center
  width: 185px
  height: 32px
  padding: 8px
  color: $color-header-bg
  font-size: 16px
  border-radius: 8px
  text-align: end
  z-index: 1

  &--new
    background-color: $color-status-new

  &--checking
    background-color: $color-status-checking

  &--fix
    background-color: $color-status-fix

  &--done
    background-color: $color-status-done

  svg
    width: 16px
    height: 16px

  span
    display: flex
    align-items: center
</style>
