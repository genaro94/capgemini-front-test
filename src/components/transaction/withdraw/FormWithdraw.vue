<template>
    <div class="form-debit">
        <b-form @submit="approve">
            <b-row>
                <b-col md="12" sm="12">
                    <b-form-group label="Valor a Depositar" label-for="value">
                        <b-form-input id="value" type="text" 
                            v-model="account.value" required/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" type="submit">Aprovar</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask'

import api from '@/utils/api'

export default {
  name: 'FormWithdraw',
  directives: {mask},
  data: function(){
      return {
        account: {},
        value: 0,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: false
        }
      }
  },
  methods: {
      reset() {
          this.account = {}
      },
      async approve(){
          try{
            const withdraw = await api.post('withdraws', this.account)
            this.$toasted.success(withdraw.data.message)
            this.reset()
          }catch(error){
            this.$toasted.error(error.response.data.message)
          }
      },
  },
}
</script>