<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="sass">
@use "../styles/colors.sass"

*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  background: colors.$background

#app
  display: flex
  flex-direction: column
  justify-content: center
  font-family: 'Arial', sans-serif
  background-color: colors.$main-bg
  color: #333
  line-height: 1.6

a
  color: colors.$black
  padding: 0

  &:hover
    background-color: rgba(0, 0, 0, 0)
    color: colors.$utmn

main
  max-width: 1200px
  margin: 30px auto  
</style>
