<template>
  <div class="finish">
    <div>
      <b-card
      title="Fim do Jogo!"
      tag="article"
      class="mb-2 card"
    >
      <b-card-text>
        <h2>Sua pontuação foi de: {{result.points}}</h2>
        <br>
        <typical
          class="vt-subTitle"
          :steps="['Agora é só aplicar as respostas que acertou na vida real e cuidar para que não cometa os erros obtidos neste jogo em seu dia a dia. Não temos um Jogar Novamente em nossa vida!', 500]"
          :wrapper="'p'"
        ></typical>
      </b-card-text>
      <b-button href="#" variant="primary" @click="playAgain()">Jogar novamente</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
import typical from 'vue-typical';

export default {
  name: 'Finish',
  components: {
    typical
  },
  props: ['result'],
  data(){
    return {
    }
  },
  methods: {
    playAgain(){
      this.$parent.playAgain();
    }
  }
}
</script>

<style scoped>

.card {
  max-width: 30rem;
  border-radius: 16px;
  background-color: rgba(177, 171, 171, 0.9);
}

.card-title {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 30pt;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 25pt;
  color: #4C4C7C;
}

.vt-subTitle {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 20pt;
}

.btn {
  border-radius: 16px;
}

</style>
