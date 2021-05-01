<template>
  <!-- button - icon left side -->
  <button
    v-if="iconSide === 'left'"
    v-on="$listeners"
    v-bind="$attrs"
    class="btn"
    :class="classModifier"
  >
    <font-awesome-icon :icon="icon" class="icon" />
    <slot />
  </button>
  <!-- button - icon right side -->
  <button
    v-else-if="iconSide === 'right'"
    v-on="$listeners"
    v-bind="$attrs"
    class="btn"
    :class="classModifier"
  >
    <slot /><font-awesome-icon :icon="icon" class="icon" />
  </button>
</template>

<script setup>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    icon: {
      type: [String, Array],
    },
    iconSide: {
      type: String,
      default: 'left',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classModifier() {
      return {
        'btn--dropdown': this.dropdown,
        'btn--outline': this.outline,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$colorPrimary: #1a9cf2;
$colorTextMain: #444444;
$colorLigthGrey: #eeeeee;
.btn {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  text-transform: capitalize;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &--outline {
    color: $colorPrimary;
    background-color: white;
    border: 1px solid $colorPrimary;
  }
  &--dropdown {
    color: $colorTextMain;
    background-color: white;
    border: 1px solid $colorLigthGrey;
    font-weight: 400;
  }
}
</style>
