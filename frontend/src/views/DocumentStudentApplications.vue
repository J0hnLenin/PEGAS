<template>
  <PLayout>
    <main class="main">
      <div class="wrapper">
        <div class="buttons__wrapper">
          <button class="new-application">Подать заявление</button>
        </div>
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
                    <span class="content__member-competition title">Конкурс</span>
                    <span class="content__member-achievements title">Достижения</span>
                    <span class="content__member-date title">Дата подачи</span>
                    <span class="content__member-status title">Статус заявления</span>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2025 - 01.03.2025</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">15.02.2025</span>
                    <div  class="content__member-status">
                      <Status status="new"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2024 - 01.10.2024</span>
                    <span class="content__member-achievements">12</span>
                    <span class="content__member-date">11.09.2024</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2024 - 01.03.2024</span>
                    <span class="content__member-achievements">5</span>
                    <span class="content__member-date">12.02.2024</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2023 - 01.10.2023</span>
                    <span class="content__member-achievements">3</span>
                    <span class="content__member-date">14.09.2023</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2023 - 01.03.2023</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">10.02.2023</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.09.2022 - 01.10.2022</span>
                    <span class="content__member-achievements">14</span>
                    <span class="content__member-date">10.09.2022</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-competition">ПГАС 01.01.2022 - 01.03.2022</span>
                    <span class="content__member-achievements">7</span>
                    <span class="content__member-date">16.02.2022</span>
                    <div  class="content__member-status">
                      <Status status="done"/>
                    </div>
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
import Status from '../components/StatusItem.vue'
</script>

<style lang="sass">
@use "../styles/colors.sass"
@use "../styles/breakpoints.sass"

.buttons__wrapper
  display: flex
  justify-content: center
  
  button.new-application
    width: 300px
    padding: 20px
    color: #ffffff
    background-color: #009951
    border-radius: 10px
    border: 1px solid colors.$border
    font-size: 16px
    transition: .2s linear

  button.new-application:hover
      box-shadow: 0 0 0 3px #009951

.content
  flex: 1

  &__search
    margin-bottom: 1rem
    width: 327px
    overflow: hidden
    border: 1px solid colors.$border
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
          border: 1px solid colors.$border
          border-radius: 10px
          padding: 16px
          margin: auto
          justify-content: center

          .title
            margin: auto
            background-color: #ffffff
            justify-content: center

          &-achievements
            justify-content: center
            width: 75px
            font-weight: 50
            display: flex
            justify-content: center
            background-color: colors.$light-gray
            padding: 8px 7px
            border-radius: 8px
            margin: auto

          &-competition
            justify-content: center
            width: 250px
            display: flex
            margin: auto

          &-date
            justify-content: center
            width: 100px
            display: flex
            margin: auto

          &-status
            justify-content: center
            width: 200px
            display: flex
            margin: auto


          
          @include breakpoints.respond-to(md)
            &-achievements
              display: none 

            &-competition
              width: 200px
            
            &-status
              width: 150px
          
          @include breakpoints.respond-to(sm)
            &-competition
              width: 100px

            &-date
              width: 100px

            &-status
              width: 120px
          
</style>
