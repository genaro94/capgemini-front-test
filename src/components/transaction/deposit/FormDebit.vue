<template>
    <div class="form-debit">
        <form @submit="approve($event)">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="agency">Agência</label>
                     <the-mask class="form-control" id="agency"
                                :mask="['###', '####-#', '####-#']"
                                 required  v-model="account.agency" />
                </div>
                <div class="form-group col-md-6">
                    <label for="number">Número da Conta</label>
                     <the-mask class="form-control" id="number"
                                :mask="['###', '##.###-#', '##.###-#']"
                                 required  v-model="account.number" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">Proprietário(a) da Conta</label>
                    <input type="text" class="form-control" v-model="account.name"
                            id="name" required >
                </div>
                <div class="form-group col-md-4">
                    <label for="cpf">CPF</label>
                     <the-mask class="form-control" id="cpf"
                                :mask="['###', '###.###.###-##', '###.###.###-##']"
                                 required  v-model="account.cpf" />
                </div>
                <div class="form-group col-md-4">
                    <label for="value">Valor a Depositar</label>
                     <money id="value" class="form-control"
                         v-model="account.value"
                         v-bind="money" required ></money>
                </div>
            </div>
            <div class="actions">
                <button class="btn btn-primary">Aprovar</button>
                <button type="button" class="btn btn-secondary" @click="reset">Cancelar</button>
            </div>
        </form>

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
      async approve(event){
          event.preventDefault()
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

<style>
    .actions button{
        margin-right: 10px;

    }
</style>