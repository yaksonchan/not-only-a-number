<template>
  <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <a class="navbar-brand" href="index.html">Not Only a Number </a>
        <b-button class="navbar-toggler" v-b-toggle.navbarSupportedContent>
            <span class="navbar-toggler-icon"></span>
        </b-button>
        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="/">Início</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="sobre.html">Sobre</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contato.html">Contato</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://github.com/yaksonchan/not-only-a-number/tree/development">GitHub</a>
                </li>
            </ul>
        </b-collapse>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
    width: 100%;
}

a.navbar-brand {
    width: 250px;
}

ul {
    margin-left: 70px;
}
</style>
