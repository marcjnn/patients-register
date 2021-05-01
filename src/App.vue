<template>
  <div id="app">
    <header>Dr. Pablo Kehyaian</header>
    <main>
      <aside></aside>
      <section>
        <!-- Listado de pacientes as variable? -->
        <h2>Listado de pacientes</h2>
        <article>
          icon
          <p>Listado de pacientes</p>
          <small>visualizacion de pacientes</small>
        </article>
        <input type="text" />
        <button>icon Nuevo paciente</button>
        <button>Descargar CSV</button>
        <ul>
          <li>icon</li>
          <li>icon</li>
          <li>5</li>
          <li>10</li>
          <li>15</li>
        </ul>

        <table>
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
        <nav>pagination</nav>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
