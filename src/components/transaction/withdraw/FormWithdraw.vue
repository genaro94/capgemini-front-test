<template>
    <div class="form-debit">
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="value">Valor a Depositar</label>
                  <money id="value" class="form-control"
                      v-model="balance"
                      v-bind="money" required ></money>
            </div>
        </div>
        <div class="actions">
            <button class="btn btn-primary" @click="approve">Aprovar</button>
            <button type="button" class="btn btn-secondary" @click="reset">Cancelar</button>
        </div>
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
        balance: 0,
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
          this.balance = 0
      },
      async approve(){
          try{
            const withdraw = await api.post('withdraws', {value: this.balance})
            this.$toasted.success(withdraw.data.message)
            this.reset()
          }catch(error){
            this.$toasted.error(error.response.data.message)
          }
      },
  },
}
</script>