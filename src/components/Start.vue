<template>
  <div class="start">
    <div>
      <b-card
      title="Objetivo"
      tag="article"
      class="mb-2 card"
      >
      <hr>
      <b-card-text>
        <typical
          class="vt-subTitle decoration"
          :steps="['Noan é um adolescente que está vivendo numa época de pandemia. A sua missão é ajudar ele a sobreviver!', 1000]"
          :wrapper="'p'"
        ></typical>
      </b-card-text>

      <b-button href="#" variant="primary" class="b-button" @click="play()">Jogar</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
import typical from 'vue-typical';

export default {
  name: 'Start',
  components: {
    typical
  },
  data(){
    return {
    }
  },
  methods: {
    play(){
      this.$parent.started = true;
      this.$parent.setRandomContext();
      this.$parent.prepareFirstQuestion();
    }
  }
}
</script>

<style scoped>

.card {
  max-width: 30rem;
  background-color: rgba(235, 235, 241, 0.7);
  border-radius: 16px;
}

.card-title {
  text-align: center;
  font-weight: bolder;
  font-size: 25;
  text-decoration: underline;
}

.vt-subTitle {
  text-align: justify;
  text-decoration: none;
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-size: 20pt;
  margin-bottom: 35px;
}

.b-button {
  border-radius: 16px;
}

</style>
