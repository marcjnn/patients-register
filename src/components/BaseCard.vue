<template>
  <article class="card" @click="emitClick">
    <div class="image__container" :class="[{ initials: initials }]">
      <slot name="image"></slot>
    </div>
    <h3 class="card__title"><slot name="title"></slot></h3>
    <p class="card__paragraph"><slot name="paragraph"></slot></p>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    initials: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      this.$emit('open-patiens-card')
    },
  },
}
</script>

<style lang="scss" scoped>
$colorPrimary: #1a9cf2;

.card {
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    grid-area: card-title;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
  &__paragraph {
    grid-area: card-paragraph;
    font-size: 14px;
    font-weight: 500;
    color: #a0a0a0;
  }
}

.initials {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: $colorPrimary;
  color: white;
  font-weight: 600;
}

// comoponent-based modifications
.registry__patientsList {
  .card {
    padding: 12px 0 12px 12px;
  }
  .card__title {
    font-weight: 400;
    font-size: 14px;
  }
  .card__paragraph {
    font-weight: 400;
    font-size: 12px;
  }
}

.patientCard {
  .card {
    padding: 0;
  }
}
</style>
