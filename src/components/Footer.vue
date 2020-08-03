<template>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <span class="text-muted">Hackaton BNDES 2020</span>
      <p class="text-muted">Desenvolvedores - Renato, Vanessa e Yakson</p>
      <a class="github" target="_blank" href="https://github.com/yaksonchan/not-only-a-number">Github</a>
    </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    background-color: #44DB92;
    text-align: center;
  }

  p.text-muted {
    margin-bottom: 1px;
  }

  a.github:hover {
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 8px #4C4C7C;

  }
</style>
