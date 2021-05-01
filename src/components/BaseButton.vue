<template>
  <!-- button - icon left side -->
  <button v-on="$listeners" v-bind="$attrs" class="btn">
    <font-awesome-icon :icon="icon" class="icon" />
    <slot />
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
  },
}
</script>

<style lang="scss" scoped>
$colorPrimary: #1a9cf2;
.btn {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: 1px solid $colorPrimary;
  border-radius: 6px;
  padding: 8px;
  text-transform: capitalize;
  outline: none;
  color: $colorPrimary;
  background-color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

// .btn:disabled {
//   background-color: #d8d8d8;
//   cursor: default;
// }
</style>
