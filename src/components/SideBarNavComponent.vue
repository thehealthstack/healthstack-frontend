<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li>
          <router-link to="/home">
            <span class="icon">
              <i class="fas fa-tachometer-alt"></i>
            </span>
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/transactions">
            <span class="icon">
              <i class="fas fa-book"></i>
            </span>
            Transactions
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>

export default {
  name: 'SideBarNavComponent',
};

</script>


<style lang="scss" scoped>
</style>
