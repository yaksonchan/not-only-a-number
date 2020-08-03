<template>
  <div class="about">
    <div class="container">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h2 class="section-heading">Sobre <i class="material-icons people">people</i></h2>
                    <hr class="my-4">
                </b-col>
            </b-row>
        </div>
    <p>O <span>N</span>ot <span>O</span>nly <span>a</span> <span>N</span>umber é um quiz com intuito de conscientizar o usuário. As perguntas simulam situações
     pertinentes e comuns do dia a dia, ocorrendo na pele de nosso personagem <span>Noan</span>. 
     Responda cada pergunta subsequente e aumente de nível a cada acerto. Em caso de erro, será explicado a conduta
      certa para o usuário com finalidade educativa. Na seção acima, são exibidas as estatísticas atualizadas da 
      contaminação por COVID-19, assim como os nomes de diversas pessoas que perdemos por causa da doença.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

#about { /* id em ../views/home.vue */
  background-color: #4C4C7C;
}

h2.section-heading {
  font-family: 'Josefin Sans', sans-serif;
  color: #44DB92;
}

h2 .people {
  color: white;
  font-size: 25px;
}

.about p {
  margin: 0 70px;
  padding: 30px 20px 0;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22pt;
  text-align: center;
  /* @media (max-width: 20px;) {
    padding: 0 20px 0;
  } */
}

.about p > span {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22pt;
  color: black;
  text-align: justify;
}
</style>