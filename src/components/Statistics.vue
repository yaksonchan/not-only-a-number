<template>
  <div class="statistics">
    <div class="container">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h2 class="section-heading text-light">Estatísticas <i class="material-icons">equalizer</i></h2>
                    <p class="text-light">Atualizadas em {{ result.updated_at | formatDate }}</p>
                    <hr class="my-4">
                </b-col>
            </b-row>
        </div>
        <div class="container container-group">
            <b-row>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3 rise-a-bit">Confirmados</h3>
                        <h4>{{result.confirmed}} seres humanos</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Recuperados</h3>
                        <h4>{{result.recovered}} pessoas</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Ativos</h3>
                        <h4>{{result.cases}} vidas</h4>
                    </div>
                </b-col>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3">Mortos</h3>
                        <h4>{{result.deaths}} amores</h4>
                    </div>
                </b-col>
            </b-row>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Statistics',
  data(){
      return {
          result: null
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

    .rise-a-bit {
        margin-top: -15px;
    }

    .material-icons {
        color: #4C4C7C;
        font-size: 25px;
    }

    .container-group {
        font-family: 'Josefin Sans', sans-serif;
        color: rgb(76, 76, 124);
        text-align: center;
    }
</style>