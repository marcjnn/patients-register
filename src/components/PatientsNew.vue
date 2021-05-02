<template>
  <section class="modal__container" v-if="open" @click.self="closeModalWindow">
    <div class="modal">
      <div class="modal__header">
        <h2 class="newPatient__title">Nuevo Paciente</h2>
        <div class="icon__container">
          <BaseButton
            :outline="true"
            :icon="['far', 'window-close']"
            @click="closeModalWindow"
            title="cierra la ventana"
          />
        </div>
      </div>
      <form action="" method="" class="form" v-on:submit.prevent>
        <fieldset class="fieldset fieldset--first">
          <BaseInput
            label="Nombre:"
            placeholder="Nombre del paciente..."
            v-model="patient.name"
          />
          <BaseInput
            label="Apellidos:"
            placeholder="Apellidos del paciente..."
            v-model="patient.lastname"
          />
          <BaseInput
            type="date"
            label="Fecha de nacimiento"
            v-model="patient.dob"
          />
          <BaseInput
            label="Clinica:"
            placeholder="Cinica ..."
            v-model="patient.clinic"
          />
        </fieldset>
        <fieldset class="fieldset">
          <BaseSelect
            label="Sexo"
            :options="genderOptions"
            v-model="patient.gender"
          />
          <BaseSelect
            label="Objetivo del tratamiento"
            :options="treatmentGoalOptions"
            v-model="patient.treatmentGoal"
          />
        </fieldset>
        <fieldset class="fieldset">
          <div class="options--column">
            <h3 class="options__title">Recorte Alineadores</h3>
            <BaseRadio
              name="RecorteAlineadores"
              value="dejando 1-3 mm de encía"
              label="Recortar dejando 1-3 mm de encía"
              @change="changeAligners"
            />
            <BaseRadio
              name="RecorteAlineadores"
              value="a nivel de los cuellos"
              label="Recortar a nivel de los cuellos"
              @change="changeAligners"
            />
          </div>
          <div class="options--row">
            <h3 class="options__title">¿Aligneadores Pasivos?</h3>
            <BaseRadio
              name="AlineadoresPasivos"
              value="Si"
              label="Si"
              @change="changeCutout"
            />
            <BaseRadio
              name="AlineadoresPasivos"
              value="No"
              label="No"
              @change="changeCutout"
            />
          </div>
          <div class="options--row">
            <h3 class="options__title">¿SecretAligner?</h3>
            <BaseRadio
              name="SecretRetrainer"
              value="Si"
              label="Si"
              @change="changeRetrainer"
            />
            <BaseRadio
              name="SecretRetrainer"
              value="No"
              label="No"
              @change="changeRetrainer"
            />
          </div>
        </fieldset>
      </form>
      <div class="buttons">
        <BaseButton
          :outline="true"
          :icon="['far', 'save']"
          @click="savePatientData"
          title="guarda paciente en base de datos"
          >Guardar</BaseButton
        >
        <BaseButton
          :outline="true"
          :icon="['far', 'window-close']"
          @click="closeModalWindow"
          title="cierra la ventana"
          >Cancelar</BaseButton
        >
        <BaseButton
          :outline="true"
          :icon="['far', 'trash-alt']"
          @click="resetForm"
          title="borra todos los datos del formulario"
          >Limpiar</BaseButton
        >
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseSelect from '@/components/BaseSelect.vue'
export default {
  name: 'PatientsNew',
  components: {
    BaseButton,
    BaseInput,
    BaseRadio,
    BaseSelect,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      patient: {
        name: '',
        lastname: '',
        dob: '',
        gender: '',
        clinic: '',
        treatmentGoal: '',
        cutout: '',
        aligners: '',
        retrainer: '',
      },
      genderOptions: ['Masculino', 'Femenino'],
      treatmentGoalOptions: ['Estética', 'Oclusión', 'Estética y Oclusión'],
    }
  },
  methods: {
    changeCutout(newValue) {
      this.patient.cutout = newValue
    },
    changeAligners(newValue) {
      this.patient.aligners = newValue
    },
    changeRetrainer(newValue) {
      this.patient.retrainer = newValue
    },
    savePatientData() {
      console.log(this.patient)
    },
    closeModalWindow() {
      this.$emit('close')
    },
    resetForm() {
      this.patient = {
        ...this.patient,
        name: '',
        lastname: '',
        dob: '',
        gender: '',
        clinic: '',
        treatmentGoal: '',
        cutout: '',
        aligners: '',
        retrainer: '',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$colorTextMain: #444444;
$colorLigthGrey: #eeeeee;

.modal {
  background-color: white;
  border-radius: 12px;
  &__container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(68, 68, 68, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 12px 0 6px;
  }
}

.newPatient {
  &__title {
    margin: 12px 0;
  }
}
.form {
  border-top: 1px solid $colorLigthGrey;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  align-items: start;
  justify-items: start;
}

.fieldset {
  padding: 6px 0;
  border: none;
  &--first {
    grid-row: span 2;
  }
}

.options {
  &--column {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    column-gap: 12px;
    padding: 6px 12px;
  }
  &--row {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    padding: 6px 12px;
  }

  &__title {
    text-align: left;
    font-size: 14px;
    width: 100%;
  }
}

.buttons {
  margin: 12px;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.icon {
  &__container {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
