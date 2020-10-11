<template>
  <div class="withdraw">
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
</template>

<script>

import PageTitle from '@/components/template/PageTitle'

import FormDebit from './deposit/FormDebit'

export default {
  name: 'Debit',
  components: { PageTitle, FormDebit }
}
</script>