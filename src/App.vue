<template>
  <div id='app'>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'
import api from '@/utils/api'

export default {
  name: 'App',
  components: {Content, Footer},
  data: function() {
      return {
        user: {}
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
    background-color: #eeffee !important; 
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smooting: grayscale;
  }

</style>
