<template>
<!--SECTION LOGIN-->
<section id="il-login" class="il-section il-section--login">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Área <span class="il-color--text__very-light">Administrativa!</span></h1>
        <h2 class="il-section--sub-title">Entre com as <b>credenciais</b></h2>
        <ilAccess v-show="!authenticated" />
    </div>
</section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ilAccess from "./includes/accessComponent.vue";
export default {
  name: "login",
  data() {
    return {
      authenticated: false,
      credencials: {
        username: "",
        password: ""
      },
      submitted: false,
      loading: false,
      returnUrl: ""
    };
  },
  components: {
    ilAccess
  },
  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    doLogin() {
      this.submitted = true;
      //const { username, password } = this.credencials;
      this.login(this.credencials);
      /* this.submitted = true;
      this.credencials = data;
      userService.login(data).then(
        user => router.push(this.returnUrl),
        error => {
          this.error = error;
          this.loading = false;
        }
      );
      this.$parent.authenticated = true;
      this.$parent.warning = {
        check: true,
        type: 'success',
        msg: 'Correct login. Got to secure area'
      }; */
      //console.log(data);
      //return;
    },
    doError(data) {
      this.$parent.authenticated = false;
      this.$parent.warning = data;
    }
  }
};
</script>
