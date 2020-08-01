<template>
  <div class="start">
    <div>
      <b-card
      title="Como jogar:"
      tag="article"
      class="mb-2 card"
    >
      <b-card-text>
        <typical
          class="vt-subTitle"
          :steps="['Noan, é um adolescente que está vivendo numa época de pandemia. A sua missão é ajudar ele a sobreviver!', 1000]"
          :wrapper="'p'"
        ></typical>
      </b-card-text>

      <b-button href="#" variant="primary" @click="play()">Jogar</b-button>
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
    }
  }
}
</script>

<style scoped>

.card {
  width: 500px;
}

</style>
