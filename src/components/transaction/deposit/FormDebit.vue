<template>
    <div class="form-debit">
        <b-form @submit="approve">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Agência" label-for="agency">
                        <b-form-input id="agency" type="text" 
                            v-mask="'####-#'"
                            v-model="account.agency" required />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Número da Conta" label-for="number">
                        <b-form-input id="number" type="text" 
                            v-mask="'##.###-#'"
                            v-model="account.number" required/>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Proprietário(a) da Conta" label-for="name">
                        <b-form-input id="name" type="text" v-model="account.name" required/>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="CPF" label-for="cpf">
                        <b-form-input id="cpf" v-mask="'###.###.###-##'"
                            type="text" v-model="account.cpf" required/>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Valor a Depositar" label-for="value">
                        <b-form-input id="value" type="text" v-model="account.value"
                         v-money="money" required/>
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
  name: 'FormDebit',
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
            const debit = await api.post('deposits', this.account)
            this.$toasted.success(debit.data.message)
            this.reset()
          }catch(error){
            this.$toasted.error(error.response.data.message)
          }
      },
  },
}
</script>