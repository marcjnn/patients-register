<template>
  <div v-if="open" class="modal">hello</div>
</template>

<script>
export default {
  name: 'PatientsCard',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw, height 100vh;
  background-color: red;
}
</style>
