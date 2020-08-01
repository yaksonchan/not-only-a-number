<template>
  <div class="level">
    <div>
      <b-card
      :title="'Fase Atual ' + level"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <p>
        Sua missão agora é ir na padaria e trazer 5 pães para o café da manhã,
        você está prestes a sair, o que vai fazer?
        </p>
          <b-form-group>
            <b-form-radio-group
              id="btn-radios-3"
              v-model="selected"
              :options="options"
              buttons
              stacked
              name="radio-btn-stacked"
            ></b-form-radio-group>
          </b-form-group>
          Você selecionou: {{selected}}
        Parabéns, está qualificado para o próximo nível.
      </b-card-text>

      <b-button href="#" variant="primary" @click="addLevel()">Próximo level</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Level',
  data(){
    return {
      level: 1,
      options: [
        { text: 'Colocar a máscara e sair', value: '1' },
        { text: 'Só sair', value: '2' },
        { text: 'Ficar parado', value: '3'}
        ],
      selected: null
    }
  },
  methods: {
    addLevel(){
      this.level = this.level + 1;
    }
  }
}
</script>

<style scoped>

</style>
