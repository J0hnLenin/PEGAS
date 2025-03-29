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
              <ul v-if="applications.length > 0">
                <li v-for="app in applications" :key="app.id">
                  <div class="content__member">
                  <span class="content__member-order">{{ app.achievementCount }}</span>
                  <span class="content__member-name"> {{ app.userName }}  </span>
                  <span class="content__member-date">{{ Format.formatDate(app.createdAt) }}</span>
                  <Status status="new" />
                  </div>
                </li>

              </ul>
              <p v-else>
                    {{ loading ? 'Загрузка...' : error || 'Нет данных' }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </PLayout>
</template>

<script setup lang="ts">
import PLayout from '../components/PLayout/PLayout.vue';
import Status from '../components/StatusItem.vue'

import { ref, onMounted } from 'vue';
import { type Applications } from '@/interfaces/InterfaceApplication';
import { ApiService } from '@/scripts/api';
import { Format } from '@/scripts/format'

const applications = ref<Applications[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const apiService = new ApiService('http://localhost:3000');

onMounted(() => {
  apiService.fetchArrayOfObjects('/applications', applications, loading, error);
});
</script>

<style lang="sass">
$color-header-bg: #ffffff
$color-main-bg: #ededf0
$color-border: #e0e0e0
$color-text: #333333
$color-text-alt: #1E1E1E
$color-light-gray: #F5F5F5

$breakpoint: 1000px

.main
  &__wrapper
    display: flex
    gap: 30px

    @media (max-width: $breakpoint)
        flex-direction: column

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
