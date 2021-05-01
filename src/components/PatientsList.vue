<template>
  <table class="registry__patientsList">
    <thead>
      <tr>
        <th>Nombre y apellidos icon</th>
        <th>Clinica icon</th>
        <th>Objetivo tratamiento icon</th>
        <th>Estado icon</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- v-for with patients -->
      <tr v-for="(patient, id) in patients" :key="id">
        <td><BaseCard /></td>
        <td>{{ patient.ficha_dental.clinica }}</td>
        <td>{{ patient.ficha_dental.objetivo_tratamiento }}</td>
        <td>{{ patient.ficha_dental.estado }}</td>
        <td>Acciones drop-down</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import pacientes from '@/pacientes.json'
export default {
  name: 'PatientsList',
  components: {
    BaseCard,
  },
  computed: {
    patients() {
      return pacientes
    },
  },
}
</script>

<style lang="scss" scoped></style>
