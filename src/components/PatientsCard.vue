<template>
  <section class="modal__container" v-if="open" @click.self="closeModalWindow">
    <div class="modal" ref="pdf">
      <div class="modal__header">
        <h2 class="newPatient__title">Ficha Paciente</h2>
        <div class="icon__container">
          <BaseButton
            :outline="true"
            :icon="['far', 'window-close']"
            @click="closeModalWindow"
            title="cierra la ventana"
          />
        </div>
      </div>
      <article class="patient__info">
        <p class="patient__image">
          <font-awesome-icon :icon="['fas', 'user']" />
        </p>
        <div class="patient__data">
          <h3 class="patient__clinic">{{ patient.ficha_dental.clinica }}</h3>
          <h2 class="patient__name">
            {{ patient.datos_paciente.nombre }}
            {{ patient.datos_paciente.apellidos }}
          </h2>
          <h2 class="patient__name"></h2>
          <p class="patient__gender">{{ patient.datos_paciente.sexo }}</p>
          <p>{{ patient.datos_paciente.fecha_nacimiento }}</p>
        </div>
      </article>
      <article class="patient__treatment">
        <div class="teeth__state">
          <h3>Dientes no mover</h3>
          <div class="mouth">
            <div class="treatment__image--container">
              <img
                :src="mouthImg"
                alt="dientes no mover"
                class="treatment__image"
              />
            </div>
            <ul class="teeth__list teeth__list--1">
              <li
                v-for="tooth in teeth[0]"
                :key="tooth"
                class="teeth__single"
                :class="{
                  'teeth__single--dontMove': patient.ficha_dental.dientes_no_mover.includes(
                    tooth
                  ),
                }"
              >
                {{ tooth }}
              </li>
            </ul>
            <ul class="teeth__list teeth__list--2">
              <li
                v-for="tooth in teeth[1]"
                :key="tooth"
                class="teeth__single"
                :class="{
                  'teeth__single--dontMove': patient.ficha_dental.dientes_no_mover.includes(
                    tooth
                  ),
                }"
              >
                {{ tooth }}
              </li>
            </ul>
            <ul class="teeth__list teeth__list--3">
              <li
                v-for="tooth in teeth[2]"
                :key="tooth"
                class="teeth__single"
                :class="{
                  'teeth__single--dontMove': patient.ficha_dental.dientes_no_mover.includes(
                    tooth
                  ),
                }"
              >
                {{ tooth }}
              </li>
            </ul>
            <ul class="teeth__list teeth__list--4">
              <li
                v-for="tooth in teeth[3]"
                :key="tooth"
                class="teeth__single"
                :class="{
                  'teeth__single--dontMove': patient.ficha_dental.dientes_no_mover.includes(
                    tooth
                  ),
                }"
              >
                {{ tooth }}
              </li>
            </ul>
          </div>
        </div>
        <div class="treatment__data">
          <div class="treatment__option">
            <p class="option__title">Estado</p>
            <p class="option__option">
              {{ patient.ficha_dental.estado }}
            </p>
          </div>
          <div class="treatment__option">
            <p class="option__title">Objetivo tratamiento</p>
            <p class="option__option">
              {{ patient.ficha_dental.objetivo_tratamiento }}
            </p>
          </div>
          <div class="treatment__option">
            <p class="option__title">Recorte de alineadores</p>
            <p class="option__option">
              {{ patient.ficha_dental.otros_datos.recorte_alineadores }}
            </p>
          </div>
          <div class="treatment__option">
            <p class="option__title">¿Desea alineadores pasivos?</p>
            <p class="option__option">
              {{
                patient.ficha_dental.otros_datos.alineadores_pasivos
                  ? 'Si'
                  : 'No'
              }}
            </p>
          </div>
          <div class="treatment__option">
            <p class="option__title">¿Desea SecretRetainer al finalizar?</p>
            <p class="option__option">
              {{
                patient.ficha_dental.otros_datos.secretretainer ? 'Si' : 'No'
              }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import maxilar from '@/assets/images/maxilar.jpg'
import BaseButton from '@/components/BaseButton.vue'
export default {
  name: 'PatientsCard',
  components: {
    BaseButton,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    patient: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mouthImg: maxilar,
      teeth: [
        [11, 12, 13, 14, 15, 16, 17, 18],
        [21, 22, 23, 24, 25, 26, 27, 28],
        [31, 32, 33, 34, 35, 36, 37, 38],
        [41, 42, 43, 44, 45, 46, 47, 48],
      ],
    }
  },
  methods: {
    closeModalWindow() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
$colorTextMain: #444444;
.modal {
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  &__container {
    width: 100vw;
    min-height: 100vh;
    padding: 24px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(68, 68, 68, 0.7);
    display: flex;
    justify-content: center;
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 0 12px;
  }
}

.icon {
  &__container {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
}

.patient {
  &__info {
    border: 1px solid $colorTextMain;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 12px 0;
    margin-bottom: 12px;
  }
  &__image {
    width: 25%;
    font-size: 48px;
  }
  &__data {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
  &__clinic {
    width: 100%;
  }
  &__name {
    width: 100%;
  }
  &__gender {
    width: 20%;
  }
  &__treatment {
    border: 1px solid $colorTextMain;
    border-radius: 12px;
    display: flex;
    gap: 24px;
    padding: 12px;
    margin-bottom: 12px;
  }
}

.treatment {
  &__image {
    display: block;
    width: 100%;
    &--container {
      max-width: 400px;
    }
  }
  &__option {
    margin: 24px 12px;
    text-align: left;
  }
}

.option {
  &__title {
    font-weight: 600;
  }
}

.mouth {
  position: relative;
}
.teeth {
  &__list {
    list-style-type: none;
    display: flex;
    &--1 {
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
    &--2 {
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 100;
    }
    &--3 {
      flex-direction: column-reverse;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 100;
    }
    &--4 {
      flex-direction: column-reverse;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 100;
    }
  }
  &__single {
    padding: 2px;
    &--dontMove {
      background-color: crimson;
      color: white;
      border-radius: 50%;
    }
  }
}

.buttons {
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
