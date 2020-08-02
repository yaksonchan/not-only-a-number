<template>
  <div class="statistics">
    <div class="container">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h2 class="section-heading text-light">Estatísticas <i class="material-icons">equalizer</i></h2>
                    <hr class="my-4">
                </b-col>
            </b-row>
        </div>
        <div class="container container-group">
            <b-row>
                <b-col md="6" lg="3">
                    <div class="mx-auto service-box mt-5">
                        <h3 class="mb-3 rise-a-bit">Hospitalizados</h3>
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
  </div>
</template>

<script>
export default {
  name: 'Statistics'
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