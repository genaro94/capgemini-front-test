<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard"
        sub="Painel do Banco" />

    <div class="cards">
      <Card class="cards-details" title="Saldo" :value="account.balance" icon="fa fa-folder" color="#d54d50" />
      <Card class="cards-details" title="Saque" :value="0" icon="fa fa-file" color="#3bc480" />
      <Card class="cards-details" title="Deposito" :value="0" icon="fa fa-folder" color="#3282cd" />
    </div>
  </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'
import Card from './Card'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
  name: 'Home',
  components: { PageTitle, Card },
  data: function() {
    return {
      account: {}
    }
  },
  methods: {
    getBalance() {
      axios.get(`${baseApiUrl}/balances`).then(res => this.account = res.data)
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
</style>