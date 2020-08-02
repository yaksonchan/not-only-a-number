<template>
  <div class="game">
      <h1 class="title">Not Only a Number</h1>
      <Start v-if="!started" />
      <Question :question="currentQuestion" v-if="started && !finished" />
      <Finish :result="result" v-if="finished"/>
  </div>
</template>

<script>
import Question from './Question';
import Start from './Start';
import Finish from './Finish'
import { contextsRef } from '../firebase';

export default {
  name: 'Game',
  components: {
    Question,
    Start,
    Finish
  },
  firebase: {
    contexts: contextsRef
  },
  data(){
    return {
      started: false,
      contexts: [],
      currentContext: null,
      currentQuestion: null,
      sequence: 1,
      finished: false,
      result: {
        points: 0
      }
    }
  },
  methods: {
    setRandomContext(){
      const idx = Math.floor(Math.random() * this.contexts.length);
      this.currentContext = this.contexts[idx];
    },
    prepareFirstQuestion(){
      this.currentQuestion = this.currentContext.questions.find(q => q.sequence == this.sequence);
    },
    nextQuestion(){
      this.sequence += 1;
      if(this.sequence > this.currentContext.questions.length-1) this.finished = true;
      this.currentQuestion = this.currentContext.questions.find(q => q.sequence == this.sequence);
    },
    addPoints(points){
      this.result.points += points;
    }
  }
}
</script>

<style scoped>

.title {
  color: white;
}

</style>
