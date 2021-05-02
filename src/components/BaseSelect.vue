<template>
  <div class="select__container">
    <label v-if="label" class="select__label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      class="select__select"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    value: [String, Number],
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

$fontMain: 'Nunito', Helvetica, Arial, sans-serif;

.select__select:focus {
  outline: none;
  border: 1px solid var(--colorFooter);
}

.select {
  &__container {
    margin-top: 12px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 6px 12px;
    border-radius: 6px;
  }
  &__label {
    font-weight: 600;
    text-align: left;
  }
  &__select {
    border: 1px solid $colorLigthGrey;
    border-radius: 6px;
    padding: 12px;
    background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
    &:focus {
      outline: none;
      border: 1px solid $colorLigthGrey;
    }
  }
}

.fieldset .select__container:first-child {
  margin-top: 0;
}
</style>
