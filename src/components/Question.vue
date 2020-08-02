<template>
  <div class="question">
    <div>
      <b-card
      :title="'Fase Atual ' + question.sequence"
      :img-src="require('@/assets/' + question.img)"
      img-alt="Image"
      img-top
      img-height="200"
      tag="article"
      class="mb-2 questionContent"
    >
      <b-card-text>
        <p>
        {{question.question}}
        </p>
        <div class="container">
          <b-row class="d-flex justify-content-md-center">
            <b-col cols="12" md="auto">
              <b-form-group>
                <b-row v-for="o in question.options" :key="o.id">
                  <b-button class="option" :variant="o.style" @click="select(o)" :disabled="answered">{{o.text}}</b-button>
                </b-row>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-card-text>
    <div v-if="answered">
      <div v-if="message">{{message}}</div>
      <b-button class="option" variant="dark" @click="nextStep()">Próximo passo</b-button>
    </div>
    
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question'],
  data(){
    return {
      selected: null,
      answered: false,
      message: null
    }
  },
  created(){
    this.setDefaultStyle();
  },
  methods: {
    select(oSelected){

      this.selected = oSelected.value;

      this.answered = true;

      if(this.selected == this.question.answer) this.$parent.addPoints(10);
      else this.message = oSelected.whyNot;

      for(var option of this.question.options){
        if(option.value == this.question.answer) option.style = 'success';
        else if(option.value == this.selected) option.style = 'danger';
      }
    },
    setDefaultStyle(){
      this.question.options = this.question.options.map(o => ({...o, style: 'outline-dark'}));
    },
    nextStep(){
      this.$parent.nextQuestion();
    },
    redefineAttributes(){
      this.selected = null;
      this.answered = false;
      this.message = null;
      this.setDefaultStyle();
    }
  },
  watch: {
    'question.sequence': function () {
      
      this.redefineAttributes();
    }
  }
}
</script>

<style scoped>

img {
  border-radius: 16px 16px 0 0;
}

.questionContent {
  max-width: 30rem;
  background-color: rgba(177, 171, 171, 0.9);
  border-radius: 16px;
}

.container {
  align-content: center;
}

.option {
  width: 250px;
  margin-top: 5px;
  border-radius: 16px;
}

</style>
