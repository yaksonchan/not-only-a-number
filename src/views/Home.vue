<template>
  <div class="home">
    <section id="game">
      <div class="container">
      <b-row class="justify-content-md-center">
        <b-col md="auto">
          <Game />
        </b-col>
      </b-row>  
      </div>
    </section>
    <section id="statistics">
        <Statistics />
    </section>
    <section id="about">
      <About />
    </section>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Game from '../components/Game';
import About from '../components/About';
import Statistics from '../components/Statistics';


export default {
  name: 'Home',
  components: {
    Game,
    About,
    Statistics
  }
}
</script>

<style>
section {
  padding: 4rem 0;
}

#statistics {
  background-color: #44DB92;
}

#game{
    background: url(http://obviousmag.org/agucadas_percepcoes/assets_c/2016/03/6.0-thumb-800x500-143748.jpg) #44DB92;
    background-size: cover;
    background-blend-mode: multiply;
}
</style>
