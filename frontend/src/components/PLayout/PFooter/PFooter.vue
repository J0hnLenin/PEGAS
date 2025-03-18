<template>
  <footer>
    <p>&copy; 2025 ТюмГУ. Все права защищены.</p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'PFooter',
}
</script>

<style lang="sass">
$color-default: #ffffff
$color-footer: #222222

footer
  text-align: center
  padding: 32px
  background-color: $color-footer
  color: $color-default
  margin-top: 40px

  p
    font-size: 1rem
</style>
