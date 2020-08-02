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
        <typical
          class="vt-subTitle"
          :steps="['Agora é só aplicar as respostas que acertou na vida real!!!!', 500]"
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
  width: 500px;
}

</style>
