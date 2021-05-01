<template>
  <div id="app">
    <header class="header">Dr. Pablo Kehyaian</header>
    <main class="main">
      <section class="main__sidebar"></section>
      <section class="main__registry">
        <!-- Listado de pacientes as variable? -->
        <h2 class="registry__header">Listado de Pacientes</h2>
        <div class="registry__information">
          <article class="registry__infonote">
            icon
            <p>Listado de Pacientes</p>
            <small>visualizacion de pacientes</small>
          </article>
          <div class="buttons__container">
            <button>icon Nuevo paciente</button>
            <button>Descargar CSV</button>
          </div>
          <ul>
            <li>icon</li>
            <li>icon</li>
            <li>5</li>
            <li>10</li>
            <li>15</li>
          </ul>
        </div>
        <div class="registry__search"><input type="text" /></div>
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
            <tr>
              <td>img + name + dob</td>
              <td>Clinica dental</td>
              <td>Estética y Oclusión</td>
              <td>Facturado</td>
              <td>Acciones drop-down</td>
            </tr>
          </tbody>
        </table>
        <nav class="registry__pagination">pagination</nav>
      </section>
    </main>
  </div>
</template>
<script>
// import '@assets/style/main.scss'
</script>
<style lang="scss">
// reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$colorLigthGrey: #eeeeee;
$colorTextMain: #444444;

// vue original
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $colorTextMain;
}

// my styles
.header {
  background-color: #282828;
  color: white;
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
    // border-left: 1px solid $colorLigthGrey;
    box-shadow: 2px 0 5px 1px $colorLigthGrey inset;
  }
}

.registry {
  &__header {
    grid-area: registry-header;
    background-color: #eeeeee;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 12px;
    text-align: left;
  }
  &__information {
    grid-area: registry-information;
  }
  &__search {
    grid-area: registry-search;
  }
  &__patientsList {
    grid-area: registry-patients;
  }
  &__pagination {
    grid-area: registry-pagination;
  }
}

.buttons {
  &__container {
  }
}
</style>
