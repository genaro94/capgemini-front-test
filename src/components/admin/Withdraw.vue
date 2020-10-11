<template>
  <div class="withdraw">
    <PageTitle icon="fa fa-handshake-o" main="Saque" sub="Painel do Banco" />

     <div class="admin-page-debit">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1" active>
            <b-card-text>Tab contents 1</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>


  </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'

export default {
  name: 'Withdraw',
  components: { PageTitle }
}
</script>