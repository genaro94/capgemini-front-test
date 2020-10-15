<template>
  <div>
    <Header title="Banco Capgemini" :hasBackButton="true" />
    <div class="transaction">      
      <PageTitle icon="fa fa-bar-chart" main="Depósito" sub="Painel do Banco" />

      <div class="admin-page-debit">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Depositar" active>
              <FormDebit />
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/template/Header'
import PageTitle from '@/components/template/PageTitle'

import FormDebit from './deposit/FormDebit'

export default {
  name: 'Debit',
  components: { PageTitle, FormDebit, Header }
}
</script>

<style>
.transaction {
  padding: 30px;
}
</style>