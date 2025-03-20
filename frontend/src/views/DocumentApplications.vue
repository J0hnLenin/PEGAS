<template>
  <PLayout>
    <main class="main">
      <div class="wrapper">
        <div class="main__wrapper">
          <section class="filters">
            <form>
              <div class="filters__item">
                <span class="filters__item-title">Период</span>
                <div class="filters__period">
                  <input type="date" />
                </div>
              </div>
              <div class="filters__item">
                <span class="filters__item-title">Статус</span>
                <div class="filters__statuses">
                  <div class="status status--new filters__status">
                    <label>
                      <input type="checkbox" checked />
                      <span>Новое</span>
                    </label>
                  </div>
                  <div class="status status--checking filters__status">
                    <label>
                      <input type="checkbox" checked />
                      <span>На проверке</span>
                    </label>
                  </div>
                  <div class="status status--science filters__status">
                    <label>
                      <input type="checkbox" />
                      <span>Научная проверка</span>
                    </label>
                  </div>
                  <div class="status status--fix filters__status">
                    <label>
                      <input type="checkbox" />
                      <span>На исправлении</span>
                    </label>
                  </div>
                  <div class="status status--done filters__status">
                    <label>
                      <input type="checkbox" />
                      <span>Обработано</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="filters__item">
                <span class="filters__item-title">Упорядочивание</span>
                <div class="fiters__order-list">
                  <div class="filters__order-item">
                    <label>
                      <input type="radio" name="order" id="achievement" />
                      <span>Количество достижений</span>
                    </label>
                  </div>
                  <div class="filters__order-item">
                    <label>
                      <input type="radio" name="order" id="fio" />
                      <span>ФИО</span>
                    </label>
                  </div>
                  <div class="filters__order-item">
                    <label>
                      <input type="radio" name="order" id="date" />
                      <span>Дата</span>
                    </label>
                  </div>
                  <div class="filters__order-item">
                    <label>
                      <input type="radio" name="order" id="status" />
                      <span>Статус</span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </section>
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
                    <span class="content__member-order">7</span>
                    <span class="content__member-name"> Зимин Андрей Валерьевич </span>
                    <span class="content__member-date">15.02.2025</span>
                    <Status status="new" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">15</span>
                    <span class="content__member-name"> Жилин Андрей Игоревич </span>
                    <span class="content__member-date">10.02.2025</span>
                    <Status status="checking" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">10</span>
                    <span class="content__member-name"> Берюхов Никита Игоревич </span>
                    <span class="content__member-date">11.02.2025</span>
                    <Status status="checking" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">18</span>
                    <span class="content__member-name"> Лобова Татьяа Викторовна </span>
                    <span class="content__member-date">05.02.2025</span>
                    <Status status="checking" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">12</span>
                    <span class="content__member-name"> Артеев Артём Алексеевич </span>
                    <span class="content__member-date">30.01.2025</span>
                    <Status status="fix" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">9</span>
                    <span class="content__member-name"> Спицын Виталий Алексеевич </span>
                    <span class="content__member-date">25.01.2025</span>
                    <Status status="fix" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">54</span>
                    <span class="content__member-name"> Змановская Анастасия Петровна </span>
                    <span class="content__member-date">05.02.2025</span>
                    <Status status="done" />
                  </div>
                </li>
                <li>
                  <div class="content__member">
                    <span class="content__member-order">999</span>
                    <span class="content__member-name"> Зимина Илона Сергеевна </span>
                    <span class="content__member-date">04.02.2025</span>
                    <Status status="done" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="content__pagination">
              <ul>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">1</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">2</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">3</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">4</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">5</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">...</a>
                  </div>
                </li>
                <li>
                  <div class="content__pagination-item">
                    <a href="#">1000</a>
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
// -----------------------------
// Переменные
// -----------------------------
$color-header-bg: #ffffff
$color-main-bg: #f5f5f5
$color-border: #e0e0e0
$color-text: #333333
$color-text-alt: #1E1E1E
$color-light-gray: #F5F5F5

$breakpoint: 1000px

*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  font-family: Arial, sans-serif
  color: $color-text
  background-color: $color-main-bg

.wrapper
  max-width: 1440px
  margin: 0 auto
  justify-content: center

// -----------------------------
// Основная часть
// -----------------------------
.main
  &__wrapper
    display: flex
    gap: 30px

    @media (max-width: $breakpoint)
        flex-direction: column

// -----------------------------
// Фильтры (sidebar)
// -----------------------------
.filters
  width: 250px
  background-color: #ffffff
  padding: 1rem
  border: 1px solid $color-border
  border-radius: 10px
  height: fit-content

  form
    display: flex
    flex-direction: column
    gap: 1.5rem

  &__item
    display: flex
    flex-direction: column
    gap: 0.5rem

    &-title
      font-weight: 500
      font-size: 0.95rem

  &__period
    display: flex

    input[type="date"]
      width: 250px
      padding: 0.5rem
      border: 1px solid $color-border
      border-radius: 10px
      font-size: 0.9rem

  &__statuses
    display: flex
    flex-direction: column
    gap: 12px

  &__status
    display: flex
    align-items: center
    cursor: pointer
    color: $color-text
    background-color: #F5F5F5
    width: 100%
    line-height: 1
    color: #757575

    &:has(input:checked)
      color: $color-header-bg
      background-color: #2C2C2C

      &::before
        background-color: $color-header-bg

    &::before
        background-color: #757575

  .fiters__order-list
    display: flex
    flex-direction: column
    gap: 0.75rem

    .filters__order-item
      label
        display: flex
        align-items: center
        gap: 0.5rem
        cursor: pointer

        input[type="radio"]
          accent-color: $color-text
          cursor: pointer

        span
          font-size: 0.9rem

  @media (max-width: $breakpoint)
    width: 100%
    border-right: none
    border-bottom: 1px solid $color-border

// -----------------------------
// Контентная часть
// -----------------------------
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
        .content__member
          display: flex
          align-items: center
          min-width: 50vw
          gap: 1rem
          background-color: #ffffff
          border: 1px solid $color-border
          border-radius: 10px
          padding: 16px

          &-order
            width: 44px
            font-weight: 50
            display: flex
            justify-content: center
            background-color: $color-light-gray
            padding: 8px 7px
            border-radius: 8px

          &-name
            flex: 1

          &-info
            display: flex
            align-items: center
            gap: 12px
            justify-self: flex-end

            .content__member-date
              font-size: 16px
              color: $color-text-alt

            .filters__status
              display: flex
              align-items: center
              width: 185px

              &-image
                width: 20px
                height: 20px

                img
                  width: 100%
                  height: 100%
                  object-fit: contain

              span
                font-size: 0.85rem
                padding: 2px 8px
                border-radius: 4px
                color: #ffffff

  &__pagination
    display: flex
    justify-content: center
    margin-top: 1rem

    ul
      list-style: none
      display: flex
      gap: 0.5rem
      margin: 0
      padding: 0
      flex-direction: row

      li
        .content__pagination-item
          a
            width: 54px
            height: 32px
            display: flex
            justify-content: center
            align-items: center
            padding: 8px
            background-color: #ffffff
            border: 1px solid $color-border
            border-radius: 8px
            color: $color-text
            text-decoration: none
            transition: background-color 0.2s ease

            &:hover
              background-color: #eeeeee
</style>
