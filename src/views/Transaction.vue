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
          <TransactionTableComponent />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import TransactionSearchComponent from "@/components/TransactionSearchComponent.vue";
import TransactionFilterComponent from "@/components/TransactionFilterComponent.vue";
import TransactionTableComponent from "@/components/TransactionTableComponent.vue";
import SideBarNavComponent from "@/components/SideBarNavComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "Transaction",
  data() {
    return {
      isAuthenticated: true
    };
  },
  components: {
    NavBarComponent,
    SideBarNavComponent,
    TransactionTableComponent,
    TransactionFilterComponent,
    TransactionSearchComponent,
  }
};
</script>


<style>
</style>
