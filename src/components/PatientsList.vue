<template>
  <table class="registry__patientsList table">
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
      <tr v-for="(patient, id) in patients" :key="id" class="table__row">
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
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import DropDown from '@/components/DropDown.vue'
import pacientes from '@/pacientes.json'
export default {
  name: 'PatientsList',
  components: {
    BaseCard,
    DropDown,
  },
  computed: {
    patients() {
      return pacientes
    },
    // classModifier() {
    // },
  },
}
</script>

<style lang="scss" scoped>
$colorLigthGrey: #eeeeee;
$colorTextMain: #444444;

.table {
  margin: 0px 24px;
  border-collapse: collapse;
  &__row {
    border: 1px solid $colorLigthGrey;
  }
  &__cell {
    font-size: 14px;
    text-transform: capitalize;
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
</style>
