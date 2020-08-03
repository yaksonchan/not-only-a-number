<template>
  <div class="statistics">
      <div class="marqueeBg">
          <div style="position: absolute;">
            <marquee scrollamount="6">
                <div style="margin-left:-500px">
                {{names.sort(() => Math.random() - 0.5).join('    ')}}
                </div>
            </marquee>
          </div>
      </div>
    <div class="container">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h2 class="section-heading text-light">Estatísticas <i class="material-icons stats">equalizer</i></h2>
                    <p class="text-light">*Atualizadas em {{ result.updated_at | formatDate }}</p>
                    <hr class="my-4">
                </b-col>
            </b-row>
        </div>
        <div class="container container-group">
            <b-row>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <i data-aos="fade-down" data-aos-delay="50" class="material-icons icon confirmed" style="font-size:70px;">check_circle</i>
                        <h3 class="mb-3">Confirmados</h3>
                        <h4>{{result.confirmed}}</h4>
                        <h2> seres humanos</h2>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <i data-aos="fade-down" data-aos-delay="100" data-aos-anchor=".confirmed" class="material-icons icon recovered" style="font-size:70px;">healing</i>
                        <h3 class="mb-3">Recuperados</h3>
                        <h4>{{result.recovered}}</h4>
                        <h2> pessoas</h2>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <i data-aos="fade-down" data-aos-delay="150" data-aos-anchor=".recovered" class="material-icons icon actives" style="font-size:70px;">sick</i>
                        <h3 class="mb-3">Ativos</h3>
                        <h4>{{result.cases.toFixed()}}</h4>
                        <h2> vidas</h2>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <i data-aos="fade-down" data-aos-delay="200" data-aos-anchor=".actives" class="material-icons icon deaths" style="font-size:70px;">sentiment_very_dissatisfied</i>
                        <h3 class="mb-3">Mortos</h3>
                        <h4>{{result.deaths}}</h4>
                        <h2> amores</h2>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div class="marqueeBg">
          <div style="position: absolute; margin-top:50px">
            <marquee scrollamount="6">
                <div style="margin-left:-500px">
                {{names.sort(() => Math.random() - 0.5).join('    ')}}
                </div>
            </marquee>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Statistics',
  data(){
      return {
          result: null,
          names: [
              "João Carlos Fachinello", "Rosa Campagnolo Vaccaro", "Marcelo Rubens Gonçalves", 
              "Sebastião Bueno da Silva", "Maurício Borges Marques", "Gerônimo Batista Pires", 
              "Maria Marilene Rufino Lima", "Patrícia Beatriz Albuquerque", "Raul Lima Bastos", 
              "Leandro José da Silva", "Paulo Márcio Leite", "Flávio Fialho", "Orlando Tavares Pinheiro", 
              "Francisco Lau", "Edson da Silva Cavalcante", "Danilo Moura", "Danilo Moura", "Leni Peroto Pereira", 
              "Angela von Nowakonski", "Elenilson Rodrigues de Souza", "Sandra Maria da Silva", "Elisa Inês da Silva",
               "Manoel Batista Chaves Filho", "Daniele Cristina da Silva Flor", "Ivanir Clementino de Brito"
          ]
      }
  },
  created(){
      this.getInfo();
  },
  methods: {
      getInfo(){
          axios
            .get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
            .then(response => (this.result = response.data.data))
      }
  }
}
</script>

<style>
    h2.section-heading {
        font-family: 'Josefin Sans', sans-serif;
    }

    .stats {
        color: #4C4C7C;
        font-size: 25px;
    }

    .marqueeBg {
        position:relative;
        top:-50px;
        pointer-events: none;
        color: #5ce0a0;
        font-size: 45px;
        font-weight: bold;
        
    }

    .icon:hover {
        margin-top: -10px;
    }

    .container-group {
        font-family: 'Josefin Sans', sans-serif;
        color: rgb(76, 76, 124);
        text-align: center;
        margin-top: -40px;
    }
</style>