<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />   
      <div class="auth-title">Login</div>
      <b-form>
        <input type="email" v-model="email" name="email" placeholder="E-mail" />
        <input type="password" v-model="password" name="password" placeholder="Senha" />
        <b-button variant="primary" @click="signin" :disabled="validateData">Entrar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'Auth',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
      async signin(){
          try{
            const userAuth = await api.post('account/login', {email: this.email, password: this.password})
            await localStorage.setItem('__knowledge_user', JSON.stringify(userAuth.data.token))
            this.$router.push({path: '/home'})
          }catch(error){
            this.$toasted.error(error.response.data.message)
          }
      },
  },
  computed: {
    validateData() {
      return this.email === '' || this.password === '';
    }
  }
}
</script>

<style>
  .auth-content {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth-modal {
    background-color: #fff;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .auth-title {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 15px;
  }

  .auth-modal input {
    border: 1px solid #BBB;
    width: 100%;
    border-radius: 5px;
    height: 40px;
    margin-bottom: 10px;
    padding:10px;
    outline: none;
  }
  
  .auth-modal button {
    width: 100%;
  }
</style>