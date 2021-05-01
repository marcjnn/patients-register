<template>
  <article class="card">
    <div class="image__container">
      <slot name="image"></slot>
      <!-- <font-awesome-icon :icon="['far', 'address-card']" /> -->
    </div>
    <!-- <h3 class="card__title">Listado de Pacientes</h3> -->
    <h3 class="card__title"><slot name="title"></slot></h3>
    <!-- <p class="card__paragraph">Visualizacion de pacientes</p> -->
    <p class="card__paragraph"><slot name="paragraph"></slot></p>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
  // inheritAttrs: false,
  // props: {
  //   icon: {
  //     type: [String, Array],
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 12px 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'card-image card-title'
    'card-image card-paragraph';
  justify-items: start;
  align-items: center;
  column-gap: 12px;
  .image__container {
    grid-area: card-image;
  }
  &__title {
    grid-area: card-title;
    font-size: 16px;
    font-weight: 700;
  }
  &__paragraph {
    grid-area: card-paragraph;
    font-size: 14px;
    font-weight: 500;
    color: #a0a0a0;
  }
}
</style>
