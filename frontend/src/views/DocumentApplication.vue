<template>
  <PLayout>
    <main>
      <section class="application-info">
        <h2>Заявление</h2>
        <div class="info">
          <div class="column">
            <div class="field-item"><strong>Подразделение:</strong> Школа компьютерных наук</div>
            <div class="field-item"><strong>Направление:</strong> Компьютерная безопасность</div>
            <div class="field-item"><strong>Оценки:</strong> 5, 5, 5, 4, 4, Зачтено</div>
            <div class="field-item"><strong>Курс:</strong> 3</div>
          </div>
          <div class="column">
            <div class="field-item"><strong>ФИО:</strong> Берёхов Никита Игоревич</div>
            <div class="field-item"><strong>Дата подачи:</strong> 11.02.2025</div>
            <div class="field-item">
              <strong>Статус:</strong>
              <div class="custom-select">
                <button
                  @click="toggleDropdown"
                  role="combobox"
                  aria-label="select button"
                  aria-haspopup="listbox"
                  :class="['status', selectedStatusClass, 'select-button']"
                  aria-controls="select-dropdown"
                >
                  <Status :status="selectedOption" />
                  <span class="arrow" :class="{ 'arrow-rotated': isDropdownOpen }"></span>
                </button>
                <ul
                  class="select-dropdown"
                  :class="{ hidden: !isDropdownOpen }"
                  role="listbox"
                  id="select-dropdown"
                  aria-labelledby="dropdown-button"
                >
                  <li
                    v-for="option in options"
                    :key="option"
                    role="option"
                    @click="selectOption(option)"
                  >
                    <Status :status="option" />
                  </li>
                </ul>
              </div>
            </div>
            <div><strong>Регистрационный номер:</strong> 123456789</div>
          </div>
        </div>
      </section>
      <nav>
        <ul>
          <li class="active"><a href="#">Учебная деятельность</a></li>
          <li><a href="#">Научно-исследовательская деятельность</a></li>
          <li><a href="#">Общественная деятельность</a></li>
          <li><a href="#">Культурно-творческая деятельность</a></li>
          <li><a href="#">Спортивная деятельность</a></li>
        </ul>
      </nav>
      <section class="achievements-info">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Описание достижения</th>
              <th class="level">Статус мероприятия</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Диплом за 1 место в мероприятии “Русский медвежонок”</td>
              <td class="level">Международный</td>
              <td>01.09.2024</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Диплом за 3 место в мероприятии “Олимпиада IT-планета: web-разработка”</td>
              <td class="level">Всероссийский</td>
              <td>01.10.2024</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Диплом за 2 место в мероприятии “Олимпиада Умнее Всех по математике”</td>
              <td class="level">Региональный</td>
              <td>21.09.2024</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Диплом за 1 место в мероприятии “Чемпионат Тюмени по программированию”</td>
              <td class="level">Муниципальный</td>
              <td>07.10.2024</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </PLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PLayout from '../components/PLayout/PLayout.vue'
import Status from '../components/StatusItem.vue'

const isDropdownOpen = ref(false)
const options = ['new', 'checking', 'fix', 'done'] as const
const selectedOption = ref<'new' | 'checking' | 'fix' | 'done'>(options[0])
const selectedStatusClass = ref('status--new')

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = (value: string) => {
  const option = options.find((option) => option === value)
  if (option !== undefined) {
    selectedOption.value = option
    selectedStatusClass.value = `status--${selectedOption.value}`
  }
  isDropdownOpen.value = false
}
</script>

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

main
  max-width: 1200px
  margin: 30px auto

  section
    margin: 30px 0 20px 0
    padding: 20px
    background-color: $color-default
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
    border-radius: 10px

    .info
      display: flex
      justify-content: space-between

      div.column
        width: 50%

  nav
    margin: 30px 0 0 0

    ul
      list-style: none
      display: flex
      gap: 25px

      li
        padding: 5px

        a
          text-decoration: none
          color: $color-inactive
          font-size: 1.1rem
          transition: color 0.3s

      li.active
        border-bottom: 3px solid $color-blue

        a
          color: $color-black

// -----------------------------
// Combo-box
// -----------------------------
.custom-select
  margin: 0 5px 0 5px
  position: relative
  display: inline-block
  width: 215px
  max-width: 100%

.select-button
  cursor: pointer
  border: 0
  width: 215px
  margin: 0
  padding: 0

.arrow
  border-left: 5px solid transparent
  border-right: 5px solid transparent
  border-top: 6px solid #000
  transition: transform ease-in-out 0.3s
  margin:8px

.select-dropdown
  position: absolute
  left: 0
  border: 1px solid #caced1
  border-radius: 0.25rem
  background-color: white
  list-style: none
  padding: 5px 10px 5px 10px
  margin: 10px 0 0 0
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2)
  overflow-y: auto

.select-dropdown::-webkit-scrollbar
  width: 7px

.select-dropdown::-webkit-scrollbar-track
  background: #f1f1f1
  border-radius: 25px

.select-dropdown::-webkit-scrollbar-thumb
  background: #ccc
  border-radius: 25px

.select-dropdown li
  padding: 0
  cursor: pointer
  display: flex
  gap: 0.5rem
  align-items: center
  margin: 5px 0 5px 0

.select-dropdown.hidden
  display: none

.select-button .arrow
  transform: rotate(90deg)
  border-top: 6px solid #ffffff

.select-button .arrow-rotated
  transform: rotate(0deg)

// -----------------------------
// Шапка заявления
// -----------------------------
.application-info h2, .achievements-info h3
  font-size: 1.8rem
  margin-bottom: 20px
  font-weight: 600

.application-info .info
  font-size: 1.1rem
  margin-bottom: 30px

  div .field-item
    margin: 5px 0 5px 0


// -----------------------------
// Таблица заявлений
// -----------------------------
table
  width: 100%
  border-collapse: collapse
  border-radius: 8px
  overflow: hidden

th, td
  padding: 12px
  text-align: left

th
  font-size: 1.1rem

td
  font-size: 1rem

tr
  &:hover
    background-color: #f1f1f1
    cursor: pointer

// -----------------------------
// Брейкпоины
// -----------------------------
@media (max-width: 768px)
  header
    flex-direction: column
    text-align: center

    div
      flex-direction: column

      nav ul
        flex-direction: column
        gap: 10px

  main section div.info
    flex-direction: column
    div.column
      width: 100%

  .application-info, .achievements-info
    padding: 10px

  table
    font-size: 0.9rem
</style>
