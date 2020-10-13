<template>
  <aside class="menu" v-show="showMenu">
    <div class="submenu">
      <router-link to="/admin/deposits" class="mb-2 mt-2">Saque</router-link>
      <router-link to="/admin/withdraws" class="mb-2">Depósito</router-link>
    </div>
  </aside>
</template>

<script>

// import { mapState } from 'vuex'

export default {
  name:'Menu',
  props: {
    showMenu: { type: Boolean, default: false, required: true }
  }
}
</script>

<style >
  .menu {
    grid-area: menu;
    background: linear-gradient(to right, #232526, #514345);

    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .submenu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding:10px;
    text-decoration: none;
  }

  .submenu a {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;
  }

  .submenu a:hover {
    text-decoration: none;
    color: #000;
    background-color: #ccc;
  }


</style>