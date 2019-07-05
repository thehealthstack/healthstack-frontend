<template>
  <nav class="level navbar is-light is-marginless">
    <div class="level-left">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/logo.png">
        </a>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="level-right">
      <div class="navbar-menu">
        <div v-if="!isAuthenticated" class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <div class="control">
                <input class="input" v-model="fields.email" type="email" placeholder="Email">
              </div>
              <div class="control">
                <input
                  class="input"
                  v-model="fields.password"
                  type="password"
                  placeholder="Password"
                >
              </div>
              <div class="control">
                <button class="button is-link" @click="login">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">Toto Pasteur</div>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <span class="icon is-small">
                  <i class="fas fa-user"></i>
                </span> Profile
              </a>
              <a class="navbar-item">
                <span class="icon is-small">
                  <i class="fas fa-sign-out-alt"></i>
                </span> Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  props: ['isAuthenticated'],
  data() {
    return {
      fields: {
        email: '',
        password: '',
      },
      fieldErrors: {
        email: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    validateForm(fields) {
      const errors = {};

      if (!fields.email && !this.isEmail(fields.email)) errors.email = 'Email address Invalid';
      if (!fields.password) errors.password = 'Password required';

      return errors;
    },
    isEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    login() {
      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;// send the user to another page with all these errors.
      this.$store.dispatch('login', this.fields);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
