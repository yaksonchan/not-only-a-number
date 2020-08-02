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
    background: url("../assets/background.jpg") #84a79c;
    background-size: cover;
    background-repeat: no-repeat;
    
    background-blend-mode: multiply;
}
</style>
