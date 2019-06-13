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
                <input class="input" type="email" placeholder="Email">
              </div>
              <div class="control">
                <input class="input" type="password" placeholder="Password">
              </div>
              <div class="control">
                <button class="button is-link">Login</button>
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
                </span>  Profile
              </a>
              <a class="navbar-item">
                <span class="icon is-small">
                  <i class="fas fa-sign-out-alt"></i>
                </span>  Sign Out
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
