<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="sass">
$color-light-gray: #F5F5F5
$color-black: #000000
$color-blue: #005bff

$color-default: #ffffff
$color-background: #ededf0
$color-footer: #222222
$color-utmn: #00aeef
$color-inactive: #828f9c

$color-background: #ffffff
$color-header-bg: #ffffff
$color-main-bg: #ededf0
$color-border: #e0e0e0
$color-text: #333333
$color-text-alt: #1E1E1E

*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  background: $color-background

#app
  display: flex
  flex-direction: column
  justify-content: center
  font-family: 'Arial', sans-serif
  background-color: $color-main-bg
  color: #333
  line-height: 1.6

a
  color: $color-black
  padding: 0

  &:hover
    background-color: rgba(0, 0, 0, 0)
    color: $color-utmn

main
  max-width: 1200px
  margin: 30px auto
</style>
