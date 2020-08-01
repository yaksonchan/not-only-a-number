<template>
  <div class="game">
      <h1 class="title">Not Only a Number</h1>
      <Start v-if="!started" />
      <Level v-if="started" />
  </div>
</template>

<script>
import Level from './Level';
import Start from './Start';

export default {
  name: 'Game',
  components: {
    Level,
    Start
  },
  data(){
    return {
      started: false
    }
  }
}
</script>

<style scoped>

.title {
  color: white;
}

</style>
