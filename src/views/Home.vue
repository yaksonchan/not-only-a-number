<template>
  <div class="home">
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '../components/Game';
export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
}
</style>
