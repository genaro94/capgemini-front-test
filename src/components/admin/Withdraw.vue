<template>
  <div class="withdraw">
    <PageTitle icon="fa fa-handshake-o" main="Saque" sub="Painel do Banco" />

     <div class="admin-page-debit">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Sacar" active>
            <FormWithdraw />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>


  </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle'

import FormWithdraw from './withdraw/FormWithdraw'

export default {
  name: 'Withdraw',
  components: { PageTitle, FormWithdraw }
}
</script>