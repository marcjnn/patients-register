<template>
  <section class="modal__container" v-if="open">
    <div class="modal">
      <h2 class="newPatient__title">Nuevo Paciente</h2>
      <form action="" method="" class="form" v-on:submit.prevent>
        <fieldset class="fieldset fieldset--first">
          <BaseInput label="Nombre:" placeholder="Nombre del paciente..." />
          <BaseInput
            label="Apellidos:"
            placeholder="Apellidos del paciente..."
          />
          <BaseInput label="Clinica:" placeholder="Cinica ..." />
        </fieldset>
        <fieldset class="fieldset">
          <BaseSelect label="Sexo" :options="genderOptions" v-model="gender" />
          <BaseSelect
            label="Objetivo del tratamiento"
            :options="treatmentGoalOptions"
            v-model="treatmentGoal"
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
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseSelect from '@/components/BaseSelect.vue'
export default {
  name: 'NewPatient',
  components: {
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
      gender: '',
      genderOptions: ['Masculino', 'Femenino'],
      treatmentGoalOptions: ['Estética', 'Oclusión', 'Estética y Oclusión'],
      treatmentGoal: '',
      cutout: '',
      aligners: '',
      retrainer: '',
    }
  },
  methods: {
    changeCutout(newValue) {
      this.cutout = newValue
    },
    changeAligners(newValue) {
      this.aligners = newValue
    },
    changeRetrainer(newValue) {
      this.retrainer = newValue
    },
  },
}
</script>

<style lang="scss" scoped>
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
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 12px 0 6px;
  }
}
</style>
