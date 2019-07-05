<template>
  <div class="home">
    <NavBarComponent :isAuthenticated="isAuthenticated"/>
    <div class="section">
      <div class="columns">
        <SideBarNavComponent />
        <div class="column">
          <UploadBarComponent :medicalResults="medicalResults" />
          <ResultMediaComponent v-for="(result, index) in medicalResults" :result="result" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultMediaComponent from '@/components/ResultMediaComponent.vue';
import UploadBarComponent from '@/components/UploadBarComponent.vue';
import SideBarNavComponent from '@/components/SideBarNavComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      isAuthenticated: true,
      isUploading: false,
    };
  },
  created(){
    this.$store.dispatch('getMedicalResults');
  },
  computed: {
    ...mapGetters(['medicalResults']),
  },
  components: {
    NavBarComponent,
    UploadBarComponent,
    SideBarNavComponent,
    ResultMediaComponent,
  },
};
</script>
