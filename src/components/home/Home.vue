<template>
  <div>   
    <Header title="Banco Capgemini" />    
    <Loading v-if="loading" />   
    <div class="home" v-else>    
      <PageTitle icon="fa fa-home" main="Dashboard"
          sub="Painel do Banco" />
      <div class="cards">
        <Card class="cards-details" title="Saldo" :value="account.balance" 
              icon="fa fa-money" color="#3bc480" />
        <Card class="cards-details" title="Saque" value="Realizar operação" 
              icon="fa fa-handshake-o" color="#d54d50" :goToRoute="() => goToRoute('/transaction/withdraws')" />        
        <Card class="cards-details" title="Depósito" value="Realizar operação" 
              icon="fa fa-bar-chart" color="#3282cd" :goToRoute="() => goToRoute('/transaction/deposits')" />
      </div>
    </div>    
  </div>
</template>

<script>
import Header from '@/components/template/Header'
import PageTitle from '@/components/template/PageTitle'
import Loading from '@/components/template/Loading'
import api from '@/utils/api'

import Card from './Card'
export default {
  name: 'Home',
  components: { PageTitle, Card, Loading, Header },
  data: function() {
    return {
      account: {}, 
      loading: false,     
    }
  },
  methods: {
    async getBalance() {
      this.loading = true;      
      try{        
        const balance = await api.get('balances')
        this.account  = balance.data
        this.loading = false;
      }catch(error){
          this.$toasted.error(error.response.data.message)
      }
    },
    goToRoute(route) {
      this.$router.push(route)
    }
  },
  mounted(){
    this.getBalance()
  }

}
</script>

<style>
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .cards-details  {
      background-color: #FFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  .home {
    padding: 30px;
  }
</style>