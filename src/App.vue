<template>
  <div id='app' :class="{'hide-menu' : !showToggle}">
    <Header title="Banco Capgemini" 
            :showToggle="showToggle"
            :toggleMenu="toggleMenu"
            :showButton="showButton"
            :logout="logout"
    />
    <Menu :showMenu="showToggle" />
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/template/Header'
import Menu from '@/components/template/Menu'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'
import api from '@/utils/api'

export default {
  name: 'App',
  components: {Header, Menu, Content, Footer},
  data: function() {
      return {
        user: {},
        showToggle: false,
        showButton: false
      }
  },
  methods: {
    async getUser() {
      if(localStorage.getItem('__knowledge_user')) {
        try{        
          const userDetail = await api.get('users/details')
          this.user  = userDetail.data
          this.showButton = true;
        }catch(error){
            this.$toasted.error(error.response.data.message)
        }
      }
    },
    logout() {
      this.showButton = false;
      localStorage.removeItem('__knowledge_user')
      this.$router.push({name: 'auth'})      
    },
    toggleMenu() {
      this.showToggle = !this.showToggle
    }    
  },
  created() {
    this.getUser()
  }

}
</script>

<style>
  * {
    font-family: "Lato", "sans-serif";
  }
  body{
    margin: 0;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smooting: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
        "header header"
        "menu content"
        "menu footer"
  }

  #app.hide-menu {
        grid-template-areas:
        "header header"
        "content content"
        "footer footer"
  }
</style>
