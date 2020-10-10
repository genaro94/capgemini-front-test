<template>
  <header class="header">
    <a class="toogle" @click="toggleMenu" v-if="!hideToogle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <div class="title">
      <router-link to="/home" >{{title}}</router-link>
    </div>
    <UserDropdwon v-if="!hideUserDropdwon" />
  </header>
</template>

<script>

import UserDropdwon from './UserDropdown'

export default {
  name:'Header',
  components: { UserDropdwon },
  props: {
    title: String,
    hideToogle: Boolean,
    hideUserDropdwon: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-right'
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style >
  .header {
    grid-area: header;
    background:linear-gradient(to right, #1e469a, #49a7c1);
    
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .title {
    font-size: 1.2rem;
    color:#fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
    margin: auto
  }

  .title a {
    color: #fff;
    text-decoration: none;
  }

  .title a:hover {
    color: #fff;
    text-decoration: none;
  }

  header.header > a.toogle {
    width: 60px;
    height: 100%;
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  }

  header.header > a.toogle:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
</style>