<template>
  <header class="header">
    <a class="toogle" @click="toggleMenu" v-if="showButton">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <div class="title">
      <router-link to="/home" >{{title}}</router-link>
    </div>
    <UserDropdwon  v-if="showButton" :logout="logout" />
  </header>
</template>

<script>

import UserDropdwon from './UserDropdown'

export default {
  name:'Header',
  components: { UserDropdwon },
  props: {
    title: String,
    toggleMenu: Function,
    showToggle: Boolean,
    showButton: Boolean,
    logout: Function
  },
  computed: {
    icon() {
      return this.showToggle ? 'fa-angle-left' : 'fa-angle-right'
    },
    token() {
      return localStorage.getItem('__knowledge_user')
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