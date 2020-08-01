<template>
  <div id="navbar">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">Not Only a Number </a>
        <b-button class="navbar-toggler menuButton" v-b-toggle.navbarSupportedContent>
            <i class="material-icons">menu</i>
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

.navbar {
    background-color: #03D470;
    color: white;
}

.navbar a{
    color: white;
}

.navbar a:hover{
    color: white;
    font-weight: bold;
}


.menuButton {
    color:#ffffff;
}

.menuButton:hover {
    background-color: #ffffff;
    color:#03D470;
}
</style>
