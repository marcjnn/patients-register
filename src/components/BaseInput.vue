<template>
  <div class="input__container">
    <label v-if="label" class="input__label">{{ label }}</label>
    <font-awesome-icon v-if="icon" :icon="icon" class="input__icon" />
    <input
      :type="type"
      :placeholder="placeholder"
      @input="updateValue"
      v-bind="$attrs"
      class="input__input"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: Array,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
$colorLigthGrey: #eeeeee;
$colorTextMain: #444444;
$colorTextLight: #a0a0a0;
$colorPrimary: #1a9cf2;

$fontMain: 'Nunito', Helvetica, Arial, sans-serif;

.input {
  &__container {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 12px;
    background-color: $colorLigthGrey;
    border-radius: 6px;
  }
  &__input {
    border: none;
    border-radius: 6px;
    background-color: $colorLigthGrey;
    padding: 6px;
    flex-grow: 1;
    &:focus {
      outline: none;
      background-color: white;
    }
    &::placeholder {
      color: $colorTextLight;
      font-family: $fontMain;
    }
  }
}
</style>
