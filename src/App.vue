<template>
  <div id="app">
    <header class="header">
      <font-awesome-icon :icon="['fas', 'user-md']" /><span
        class="header__doctor"
        >Dr. Pablo Kehyaian</span
      ><font-awesome-icon :icon="['fas', 'chevron-down']" />
    </header>
    <main class="main">
      <section class="main__sidebar"></section>
      <section class="main__registry">
        <h2 class="registry__header">Listado de Pacientes</h2>
        <div class="registry__information">
          <BaseCard
            ><template v-slot:image
              ><font-awesome-icon :icon="['far', 'address-card']"
            /></template>
            <template v-slot:title>Listado de Pacientes</template>
            <template v-slot:paragraph>Visualizacion de pacientes</template>
          </BaseCard>
          <div class="buttons__container">
            <BaseButton :icon="['fas', 'plus']" :outline="true"
              >Nuevo paciente</BaseButton
            >
            <BaseButton
              :icon="['fas', 'file-download']"
              :outline="true"
              @click="exportToCSV('patients_registry', patients)"
              >Descargar CSV</BaseButton
            >
          </div>
          <ul class="visualOptions">
            <li
              v-for="mode in viewModeOptions"
              :key="mode"
              @click="updateViewMode(mode)"
              class="visualOptions__item"
              :title="`modo ${mode === 'list' ? 'lista' : 'tarjetas'}`"
            >
              <font-awesome-icon
                :icon="mode === 'list' ? ['fas', 'bars'] : ['fas', 'table']"
              />
            </li>
            <li
              v-for="n in pageSizeOptions"
              :key="n"
              @click="updatePageSize(n)"
              class="visualOptions__item"
              :title="`ver ${n} resultados por página`"
            >
              {{ n }}
            </li>
          </ul>
        </div>
        <div class="registry__search">
          <BaseInput
            :icon="['fas', 'search']"
            v-model="search"
            placeholder="Buscar ..."
          />
        </div>
        <PatientsList :patients="patientsToDisplay" :viewMode="viewMode" />
        <nav class="registry__pagination">
          <ul class="pagination">
            <li class="pagination__page" @click="prevPage">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </li>
            <li
              v-for="n in pagesToDisplay"
              :key="n"
              class="pagination__page"
              :class="{ 'pagination__page--current': currentPage === n }"
              @click="setAsCurrentPage(n)"
            >
              {{ n }}
            </li>
            <li class="pagination__page" @click="nextPage">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </li>
          </ul>
        </nav>
      </section>
    </main>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton'
import BaseCard from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput'
import PatientsList from '@/components/PatientsList.vue'
import pacientes from '@/pacientes.json'
export default {
  name: 'App',
  components: {
    BaseButton,
    BaseCard,
    BaseInput,
    PatientsList,
  },
  data() {
    return {
      patients: [],
      viewMode: 'list',
      viewModeOptions: ['list', 'cards'],
      pageSize: 5,
      pageSizeOptions: [5, 10, 15],
      currentPage: 1,
      search: '',
    }
  },
  created() {
    this.createPatientsArray()
  },
  computed: {
    filteredPatients() {
      const filteredPatients = this.patients.filter((patient) => {
        const fullName = this.patientsFullName(
          patient.datos_paciente.nombre,
          patient.datos_paciente.apellidos
        )
        return fullName.toLowerCase().includes(this.search.toLowerCase())
      })
      return filteredPatients
    },
    patientsToDisplay() {
      const indexStart = (this.currentPage - 1) * this.pageSize
      const indexEnd = this.currentPage * this.pageSize

      return this.filteredPatients.slice(indexStart, indexEnd)
    },
    pagesToDisplay() {
      return Math.ceil(this.filteredPatients.length / this.pageSize)
    },
  },
  methods: {
    createPatientsArray() {
      for (let id in pacientes) {
        this.patients.push({
          ...pacientes[id],
          id: id,
        })
      }
    },
    patientsFullName(name, surname) {
      return `${name} ${surname}`
    },
    updateViewMode(mode) {
      this.viewMode = mode
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.patients.length)
        this.currentPage++
    },
    setAsCurrentPage(n) {
      this.currentPage = n
    },
    updatePageSize(value) {
      this.pageSize = value
    },
    exportToCSV(filename, array) {
      const header = [
        ['Nombre y apellidos', 'Clinica', 'Objetivo tratamiento', 'Estado'],
      ]
      const patientsData = array.map((patient) => {
        return [
          this.patientsFullName(
            patient.datos_paciente.nombre,
            patient.datos_paciente.apellidos
          ),
          patient.ficha_dental.clinica,
          patient.ficha_dental.objetivo_tratamiento,
          patient.ficha_dental.estado,
        ]
      })
      const data = [...header, ...patientsData]
      console.log(data)
      const csvData =
        'data:text/csv;charset=utf-8,' + data.map((e) => e.join(',')).join('\n')
      console.log(csvData)

      // download using <a> 'download' tag
      const encodedUri = encodeURI(csvData)
      let secretLink = document.createElement('a')
      secretLink.setAttribute('href', encodedUri)
      secretLink.setAttribute('download', `${filename}.csv`)
      document.body.appendChild(secretLink) // Required for FF

      secretLink.click()
    },
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$colorLigthGrey: #eeeeee;
$colorTextMain: #444444;
$colorTextLight: #a0a0a0;
$colorPrimary: #1a9cf2;

$fontMain: 'Nunito', Helvetica, Arial, sans-serif;

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: $fontMain;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $colorTextMain;
}

.header {
  padding: 12px 24px;
  background-color: #282828;
  color: white;
  text-align: right;
  font-size: 12px;
  &__doctor {
    margin: 0 6px;
  }
}

.main {
  flex-grow: 1;
  display: flex;
  &__sidebar {
    width: 20vw;
  }
  &__registry {
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto auto auto auto 1fr;
    grid-template-areas:
      'registry-header registry-header'
      'registry-information registry-search'
      'registry-patients registry-patients'
      'registry-pagination registry-pagination';
    align-items: start;
  }
  &__registry {
    box-shadow: 2px 0 5px 1px $colorLigthGrey inset;
  }
}

.registry {
  &__header {
    grid-area: registry-header;
    background-color: #eeeeee;
    font-size: 12px;
    font-weight: 500;
    padding: 12px 24px;
    text-align: left;
  }
  &__information {
    grid-area: registry-information;
    margin: 12px 24px;
  }
  &__search {
    grid-area: registry-search;
    margin: 12px 24px;
  }
  &__patientsList {
    grid-area: registry-patients;
  }
  &__pagination {
    grid-area: registry-pagination;
    margin: 24px 0;
  }
}

.buttons {
  &__container {
    margin: 12px 0px;
    display: flex;
    gap: 12px;
  }
}

.visualOptions {
  list-style-type: none;
  display: flex;
  gap: 12px;
  &__item {
    cursor: pointer;
  }
}

.pagination {
  display: inline-flex;
  list-style-type: none;
  border: 1px solid $colorLigthGrey;
  border-radius: 6px;
  color: $colorTextLight;
  cursor: pointer;
  &__page {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &--current {
      background-color: $colorPrimary;
      color: white;
    }
  }
}
</style>
