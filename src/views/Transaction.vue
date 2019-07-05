<template>
  <div class="transaction">
    <NavBarComponent :isAuthenticated="isAuthenticated"/>
    <div class="section">
      <div class="columns">
        <SideBarNavComponent />
        <div class="column">
          <div class="level">
            <TransactionSearchComponent />
            <TransactionFilterComponent />
          </div>
          <TransactionTableComponent v-for="(transaction, index) in transactions" :transaction="transaction" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TransactionSearchComponent from '@/components/TransactionSearchComponent.vue';
import TransactionFilterComponent from '@/components/TransactionFilterComponent.vue';
import TransactionTableComponent from '@/components/TransactionTableComponent.vue';
import SideBarNavComponent from '@/components/SideBarNavComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Transaction',
  data() {
    return {
      isAuthenticated: true,
    };
  },
  created(){
    this.$store.dispatch('getTransactions');
  },
  components: {
    NavBarComponent,
    SideBarNavComponent,
    TransactionTableComponent,
    TransactionFilterComponent,
    TransactionSearchComponent,
  },
  computed: {
    ...mapGetters(['transactions']),
  }
};
</script>


<style>
</style>
