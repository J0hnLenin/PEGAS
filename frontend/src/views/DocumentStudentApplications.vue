<template>
  <PLayout>
    <main class="main">
      <div class="wrapper">
        <div class="main__wrapper">
          <section class="content">
            <div class="content__search">
              <form>
                <input type="text" placeholder="Поиск" />
              </form>
            </div>
            <div class="content__members">
              <ul>
                <li>
                  <div class="content__member">
                    <span class="content__member-title">Конкурс</span>
                    <span class="content__member-title">Достижения</span>
                    <span class="content__member-title">Дата подачи</span>
                    <span class="content__member-title">Статус заявления</span>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2025 - 01.03.2025</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">15.02.2025</span>
                    <Status status="new" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2024 - 01.10.2024</span>
                    <span class="content__member-achievements">12</span>
                    <span class="content__member-date">11.09.2024</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2024 - 01.03.2024</span>
                    <span class="content__member-achievements">5</span>
                    <span class="content__member-date">12.02.2024</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2023 - 01.10.2023</span>
                    <span class="content__member-achievements">3</span>
                    <span class="content__member-date">14.09.2023</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2023 - 01.03.2023</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">10.02.2023</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2022 - 01.10.2022</span>
                    <span class="content__member-achievements">14</span>
                    <span class="content__member-date">10.09.2022</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2022 - 01.03.2022</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">16.02.2022</span>
                    <Status status="done" />
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  </PLayout>
</template>

<script setup lang="ts">
import PLayout from '../components/PLayout/PLayout.vue'
// import Icon from '../components/IconItem.vue'
import Status from '../components/StatusItem.vue'
</script>

<style lang="sass">
$color-header-bg: #ffffff
$color-border: #e0e0e0
$color-text: #333333
$color-text-alt: #1E1E1E
$color-light-gray: #F5F5F5

.content
  flex: 1

  &__search
    margin-bottom: 1rem
    width: 327px
    overflow: hidden
    border: 1px solid $color-border
    border-radius: 20px
    position: relative
    height: 40px

    input
      width: 18rem
      font-size: 16px
      padding: 9px
      border: none

      &::placeholder
          position: absolute
          left: 20px
          color: #999999
          font-size: 16px

      &:active, &:focus, &:focus-visible, &:focus-within
          border: none
          outline: none

  &__members
    ul
      list-style: none
      margin: 0
      padding: 0
      display: flex
      flex-direction: column
      gap: 0.5rem

      li
        margin: auto
        
        .content__member
          display: flex
          align-items: center
          min-width: 50vw
          gap: 1rem
          background-color: #ffffff
          border: 1px solid $color-border
          border-radius: 10px
          padding: 16px
          margin: auto

          &-achievements
            width: 44px
            font-weight: 50
            display: flex
            justify-content: center
            background-color: $color-light-gray
            padding: 8px 7px
            border-radius: 8px
</style>
