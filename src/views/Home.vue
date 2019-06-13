<template>
  <div class="home">
    <NavBarComponent :isAuthenticated="isAuthenticated"/>
    <div class="section">
      <div class="columns">
        <SideBarNavComponent />
        <div class="column">
          <UploadBarComponent />
          <ResultMediaComponent v-for="(result, index) in results" :result="result" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultMediaComponent from "@/components/ResultMediaComponent.vue";
import UploadBarComponent from "@/components/UploadBarComponent.vue";
import SideBarNavComponent from "@/components/SideBarNavComponent.vue"
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "Home",
  data() {
    return {
      isAuthenticated: true,
      results: [
        {
          telephone: "+237690346872",
          email: "vladimirfomene@gmail.com",
          fileUrls: [
            "https://healthstack-centrepasteur-yaounde.s3-eu-west-1.amazonaws.com/MIT2_71S09_gps3.pdf"
          ]
        },
        {
          telephone: "+237690346872",
          email: "vladimirfomene@gmail.com",
          fileUrls: [
            "https://healthstack-centrepasteur-yaounde.s3-eu-west-1.amazonaws.com/MIT2_71S09_gps3.pdf"
          ]
        },
        {
          telephone: "+237690346872",
          email: "vladimirfomene@gmail.com",
          fileUrls: [
            "https://healthstack-centrepasteur-yaounde.s3-eu-west-1.amazonaws.com/MIT2_71S09_gps3.pdf"
          ]
        }
      ],
      isUploaded: false
    };
  },
  components: {
    NavBarComponent,
    UploadBarComponent,
    SideBarNavComponent,
    ResultMediaComponent,
  }
};
</script>
