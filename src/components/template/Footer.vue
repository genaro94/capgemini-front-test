<template>
  <footer class="footer">
    <span>Copyrght Capgemini © 2020</span>
  </footer>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style >
  .footer {
    grid-area: footer;
    background-color: #DDD;
    color:#333;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>