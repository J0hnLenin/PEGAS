<template>
  <div :class="['status', statusClass]">
    <Icon :iconName="statusIcon" />
    <span>{{ statusText }}</span>
  </div>
</template>

<script lang="ts">
import Icon from './IconItem.vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'StatusItem',
  props: {
    status: {
      type: String as () => 'new' | 'checking' | 'fix' | 'done',
      required: true,
    },
  },
  components: {
    Icon,
  },
  setup(props) {
    const statusTexts: Record<string, string> = {
      new: 'Новое',
      checking: 'На проверке',
      fix: 'На исправлении',
      done: 'Обработано',
    }

    const statusClass = computed(() => `status--${props.status}`)
    const statusIcon = computed(() => `icon-status-${props.status}`)
    const statusText = computed(() => statusTexts[props.status])

    return {
      statusClass,
      statusIcon,
      statusText,
    }
  },
})
</script>

<style lang="sass">
$color-status-new: #FF9500
$color-status-checking: #32ADE6
$color-status-fix: #A2845E
$color-status-done: #009951

.status
  display: flex
  justify-content: space-between
  align-items: center
  width: 185px
  height: 32px
  padding: 8px
  color: #ffffff
  font-size: 16px
  border-radius: 8px
  text-align: end
  z-index: 1

  &--new
    background-color: $color-status-new

  &--checking
    background-color: $color-status-checking

  &--fix
    background-color: $color-status-fix

  &--done
    background-color: $color-status-done

  svg
    width: 16px
    height: 16px

  span
    display: flex
    align-items: center

  input
    display: none
</style>
