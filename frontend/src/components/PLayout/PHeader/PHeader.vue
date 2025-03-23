<template>
  <header>
    <div>
      <div class="logo">
        <img :src="'logo.png'" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Заявления</a></li>
          <li><a href="#">Достижения</a></li>
          <li><a href="#">Протокол</a></li>
          <li><a href="#">Алитика</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <div class="user">
        <a href="#">Иванова Елена Петровна</a>
        <icon iconName="icon-avatar" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import icon from '../../IconItem.vue'
export default {
  name: 'PHeader',
  components: {
    icon,
  },
}
</script>

<style lang="sass">
$color-default: #ffffff
$color-text: #333333

header
  background-color: $color-default
  padding: 15px 30px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 32px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

  div
    display: flex

    .logo
      margin: 0 10px 0 10px
      height: 38px

    nav
      margin: auto 10px auto 10px

      ul
        list-style: none
        display: flex
        gap: 20px

        li a
          text-decoration: none
          font-weight: 500
          color: $color-text
          transition: color 0.3s

    .user
      display: flex
      align-items: center

      svg
        width: 40px
        height: 40px
        color: black

      a
        margin: 0 10px 0 10px
        font-weight: 500
        color: $color-text
</style>
