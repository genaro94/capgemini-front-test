<template>
  <header class="header">
    <button v-if="hasBackButton" @click="goBack" class="icon">
      <i class="fa fa-lg fa-angle-left"></i>
    </button>  
    <div class="title">
      <router-link to="/home" >{{title}}</router-link>
    </div>
    <UserDropdwon :logout="logout" />
  </header>
</template>

<script>

import UserDropdwon from './UserDropdown'

export default {
  name:'Header',
  components: { UserDropdwon },
  props: {
    title: String,
    hasBackButton: { type: Boolean, default: false, required: false }
  },
  methods: {
    logout() {
        localStorage.removeItem('__knowledge_user')
        this.$router.push({name: 'auth'})       
    },
    goBack() {
      this.$router.back();
    }
  },
}
</script>

<style >
  .header {
    background:linear-gradient(to right, #1e469a, #49a7c1);
    height: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 20px;
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

  .icon {
    padding: 5px;
    color: #fff;
    border: none;
    background-color: transparent;
    margin-left: 10px;
  }

  .icon:focus {
    border: none;
  }

  .icon:hover {
    color: #fff;
    text-decoration: none;
  }
</style>