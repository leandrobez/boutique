<template>
<div class="il-login--content">
    <form id="il-form-login" class="il-form il-form--login" @submit.prevent="login">
        <div class="il-form--fields">
            <input type="email" name="email" v-model="access.email" placeholder="Seu email" />
            <input type="password" name="password" v-model="access.password" placeholder="Password" />
            <button class="il-btn il-btn--submit">Login</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'access',
  data() {
    return {
      access: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      if (this.access.email == '' || this.access.password == '') {
        let res = {
          check: true,
          type: 'warning',
          msg: 'Preencha todos os campos para verificação.'
        };
        this.$parent.doError(res);
      } else {
        this.$parent.doLogin(this.access);
      }
    }
  }
};
</script>
