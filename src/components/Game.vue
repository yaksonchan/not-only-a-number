<template>
  <div class="game">
      <a href="/"><h1 class="title">Not Only a Number</h1></a>
      <Start v-if="!started && !finished" />
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
        mode="out-in"
      >
        <Question :question="currentQuestion" v-if="started && !finished" :key="currentQuestion.sequence"/>
      </transition>
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
      if(this.sequence > this.currentContext.questions.length){
        this.finished = true;
        this.started = false;
      } else this.currentQuestion = this.currentContext.questions.find(q => q.sequence == this.sequence);
    },
    addPoints(points){
      this.result.points += points;
    },
    playAgain(){
      this.result.points = 0;
      this.setRandomContext();
      this.sequence = 1;
      this.prepareFirstQuestion();
      this.finished = false;
    }
  }
}
</script>

<style scoped>

a:hover {
  text-decoration: none;
}

.title {
  color: white;
  text-shadow: 1px 1px #4C4C7C;
  margin-top: -20px;
  margin-bottom: 30px;
}

.title:hover {
  text-shadow: 1px 1px 5px #44DB92;
}

h1 {
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
}

</style>
