<template>
  <table v-if="viewMode === 'list'" class="registry__patientsList table">
    <thead>
      <tr>
        <th>Nombre y apellidos</th>
        <th>Clinica</th>
        <th>Objetivo tratamiento</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- v-for with patients -->
      <tr v-for="patient in patients" :key="patient.id" class="table__row">
        <td class="table__cell">
          <BaseCard :initials="true">
            <template v-slot:image>
              <div>
                {{
                  patient.datos_paciente.nombre
                    .split('')
                    .splice(0, 1)
                    .join('')
                    .toUpperCase()
                }}{{
                  patient.datos_paciente.apellidos
                    .split('')
                    .splice(0, 1)
                    .join('')
                    .toUpperCase()
                }}
              </div>
            </template>
            <template v-slot:title>
              {{ patient.datos_paciente.nombre }}
              {{ patient.datos_paciente.apellidos }}
            </template>
            <template v-slot:paragraph>
              <font-awesome-icon :icon="['far', 'calendar-alt']" />
              {{ patient.datos_paciente.fecha_nacimiento }}
            </template>
          </BaseCard>
        </td>
        <td class="table__cell">{{ patient.ficha_dental.clinica }}</td>
        <td class="table__cell">
          {{ patient.ficha_dental.objetivo_tratamiento }}
        </td>
        <td class="table__cell">
          <span
            class="state"
            :class="`state--${(classModifier = patient.ficha_dental.estado.toLowerCase())}`"
          >
            {{ patient.ficha_dental.estado }}</span
          >
        </td>
        <td class="table__cell"><DropDown /></td>
      </tr>
    </tbody>
  </table>
  <ul
    v-else-if="viewMode === 'cards'"
    class="registry__patientsList table--cards"
  >
    <li v-for="patient in patients" :key="patient.id" class="patientCard">
      <div class="patientCard--container">
        <p class="basecard__container">
          <BaseCard :initials="true">
            <template v-slot:image>
              <div>
                {{
                  createInitials(
                    patient.datos_paciente.nombre,
                    patient.datos_paciente.apellidos
                  )
                }}
              </div>
            </template>
            <template v-slot:title>
              {{ patient.datos_paciente.nombre }}
              {{ patient.datos_paciente.apellidos }}
            </template>
            <template v-slot:paragraph>
              <font-awesome-icon :icon="['far', 'calendar-alt']" />
              {{ patient.datos_paciente.fecha_nacimiento }}
            </template>
          </BaseCard>
        </p>
        <p class="patientCard__clinic">
          {{ patient.ficha_dental.clinica }}
        </p>
        <p class="patientCard__goal">
          {{ patient.ficha_dental.objetivo_tratamiento }}
        </p>
        <p
          class="patientCard__state"
          :class="`patientCard__state--${(classModifier = patient.ficha_dental.estado.toLowerCase())}`"
        >
          {{ patient.ficha_dental.estado }}
        </p>
        <p></p>
      </div>
    </li>
  </ul>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import DropDown from '@/components/DropDown.vue'
export default {
  name: 'PatientsList',
  components: {
    BaseCard,
    DropDown,
  },
  props: {
    patients: {
      type: Array,
      required: true,
    },
    viewMode: {
      type: String,
      required: true,
    },
  },
  methods: {
    createInitials(name, surname) {
      return `${name
        .split('')
        .splice(0, 1)
        .join('')
        .toUpperCase()}${surname.split('').splice(0, 1).join('').toUpperCase()}`
    },
  },
}
</script>

<style lang="scss" scoped>
$colorLigthGrey: #eeeeee;
$colorTextMain: #444444;
$colorPrimary: #1a9cf2;

.table {
  margin: 0px 24px;
  border-collapse: collapse;
  &--cards {
    margin: 0px 24px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    .state {
      background-color: white;
      font-weight: 600;
      text-transform: uppercase;
      &--facturado {
        color: #fc625f;
      }
      &--planificando {
        color: #b8d8be;
      }
      &--enviado {
        color: #f9d799;
      }
      &--solicitado {
        color: #a8d8f0;
      }
      &--fabricando {
        color: #d7c8ff;
      }
      &--aceptado {
        color: #ff9670;
      }
    }
  }
  &__row {
    border: 1px solid $colorLigthGrey;
  }
  &__cell {
    font-size: 14px;
    &--clinic {
      text-align: left;
    }
    &--goal {
      text-align: left;
    }
  }
}
.patientCard {
  padding: 12px;
  border: 1px solid $colorPrimary;
  border-radius: 12px;
  font-size: 14px;
  &--container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__clinic {
    text-align: left;
  }
  &--goal {
    text-align: left;
  }
  &__state {
    background-color: white;
    font-weight: 600;
    text-transform: uppercase;
    &--facturado {
      color: #fc625f;
    }
    &--planificando {
      color: #b8d8be;
    }
    &--enviado {
      color: #f9d799;
    }
    &--solicitado {
      color: #a8d8f0;
    }
    &--fabricando {
      color: #d7c8ff;
    }
    &--aceptado {
      color: #ff9670;
    }
  }
}
.state {
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
  width: 90%;
  &--facturado {
    background-color: #fc625f;
  }
  &--planificando {
    background-color: #b8d8be;
  }
  &--enviado {
    background-color: #f9d799;
  }
  &--solicitado {
    background-color: #a8d8f0;
  }
  &--fabricando {
    background-color: #d7c8ff;
  }
  &--aceptado {
    background-color: #ff9670;
  }
}
.basecard {
  &__container {
    flex-grow: 1;
  }
}
</style>
