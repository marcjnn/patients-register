<template>
  <div class="dropdown" ref="dropdownMenu">
    <BaseButton
      @click="showOptions"
      :icon="['fas', 'chevron-down']"
      iconSide="right"
      :dropdown="true"
      >Acciones
    </BaseButton>
    <ul id="myDropdown" v-show="menuVisible" class="dropdown__content">
      <li class="dropdown__item">Editar</li>
      <li class="dropdown__item">Finalizar</li>
      <li class="dropdown__item">Borrar</li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'DropDown',
  // inheritAttrs: false,
  // props: {
  //   icon: {
  //     type: [String, Array],
  //   },
  // },
  components: {
    BaseButton,
  },
  data() {
    return {
      menuVisible: false,
    }
  },
  methods: {
    showOptions() {
      return (this.menuVisible = !this.menuVisible)
    },
    documentClick(e) {
      let el = this.$refs.dropdownMenu
      let target = e.target
      if (el !== target && !el.contains(target)) {
        this.menuVisible = false
      }
    },
  },
  created() {
    document.addEventListener('click', this.documentClick)
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick)
  },
}
</script>

<style lang="scss" scoped>
$colorLigthGrey: #eeeeee;
$colorPrimary: #1a9cf2;
.dropdown {
  // float: right;
  position: relative;
  display: inline-block;
  &__content {
    position: absolute;
    background-color: $colorLigthGrey;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    right: 0;
    z-index: 1;
  }
  &__item {
    padding: 6px;
    cursor: pointer;
    &:hover {
      background-color: $colorPrimary;
      color: white;
    }
  }
}
</style>
