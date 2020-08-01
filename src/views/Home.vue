<template>
  <div class="home">
    <section id="game">
      <b-row class="justify-content-md-center">
        <b-col md="auto">
          <Game />
        </b-col>
      </b-row>  
    </section>
    <section id="statistics" class="bg-primary">
        <div class="container">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h2 class="section-heading text-light">Estatísticas</h2>
                    <hr class="my-4">
                </b-col>
            </b-row>
        </div>
        <div class="container">
            <b-row>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Hospitalizados</h3>
                        <h4>359.125 seres humanos</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Recuperados</h3>
                        <h4>855.175 pessoas</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Contaminados</h3>
                        <h4>82.358 vidas</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Mortos</h3>
                        <h4>58.455 amores</h4>
                    </div>
                </b-col>
            </b-row>
        </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Game from '../components/Game';
export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>

<style>
section {
  padding: 8rem 0;
}
</style>
