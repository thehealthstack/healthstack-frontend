<template>
  <div class="welcome">
    <NavBarComponent :isAuthenticated="isAuthenticated" />
    <SignupComponent/>
    <ServicesComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import SignupComponent from '@/components/SignupComponent.vue';
import ServicesComponent from '@/components/ServicesComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'Welcome',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  components: {
    NavBarComponent,
    SignupComponent,
    ServicesComponent,
    FooterComponent,
  },
};
</script>


<style scoped>

</style>
