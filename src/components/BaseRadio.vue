<template>
  <label class="radio__label">
    <input
      type="radio"
      :value="value"
      :name="name"
      @change="updateValue"
      v-bind="$attrs"
      class="radio__button"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.radio {
  &__label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
}
</style>
