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
@use "../../../styles/colors.sass"

footer
  text-align: center
  padding: 32px
  background-color: colors.$footer
  color: colors.$default
  margin-top: 40px

  p
    font-size: 1rem
</style>
