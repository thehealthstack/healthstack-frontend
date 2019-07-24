<template>
  <div class="transaction">
    <NavBarComponent :isAuthenticated="isAuthenticated" />
    <div class="section">
      <div class="columns">
        <SideBarNavComponent />
        <div class="column">
          <div class="level">
            <TransactionSearchComponent />
            <TransactionFilterComponent />
          </div>
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th class="is-narrow">
                </th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Email Status</th>
                <th>Sms Status</th>
                <th>Results</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <TransactionRowComponent
                v-for="(transaction, index) in transactions"
                :transaction="transaction"
                :key="index"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TransactionSearchComponent from "@/components/TransactionSearchComponent.vue";
import TransactionFilterComponent from "@/components/TransactionFilterComponent.vue";
import TransactionRowComponent from "@/components/TransactionRowComponent.vue";
import SideBarNavComponent from "@/components/SideBarNavComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "Transaction",
  data() {
    return {
      isAuthenticated: true
    };
  },
  created() {
    this.$store.dispatch("getTransactions");
  },
  components: {
    NavBarComponent,
    SideBarNavComponent,
    TransactionRowComponent,
    TransactionFilterComponent,
    TransactionSearchComponent
  },
  computed: {
    ...mapGetters(["transactions"])
  }
};
</script>


<style>
</style>
