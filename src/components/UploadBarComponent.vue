<template>
  <div class="box level columns">
    <div class="file is-primary column">
      <form enctype="multipart/form-data">
        <label class="file-label">
          <input class="file-input" type="file" @change="fileChange" webkitdirectory>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose A Directory</span>
          </span>
        </label>
      </form>
    </div>
    <button class="button is-success" @click="createTransactions">Deliver Results</button>
  </div>
</template>

<script>
import axios from "axios";
import constants from "@/helpers/constants";
import router from '@/router';

export default {
  name: "UploadBarComponent",
  props: [ 'medicalResults' ],
  data() {
    return {
      files: new FormData(),
    };
  },
  methods: {
    fileChange(evt) {
      const fileCounter = evt.target.files.length;
      const resultFiles = {};

      for (let i = 0; i < fileCounter; i++) {
        const key = evt.target.files[i].webkitRelativePath.split("/")[1];
        if (resultFiles[key]) {
          resultFiles[key].push(evt.target.files[i]);
        } else {
          resultFiles[key] = [evt.target.files[i]];
        }
      }

      for (const key of Object.keys(resultFiles)) {
        resultFiles[key].map(file => this.files.append(file.name, file));
        let email = key.split('+')[0];
        let telephone = '+' + key.split('+')[1];
        console.log(email, telephone, this.files);
        this.$store.dispatch("createPatientUploadFiles", {
          email,
          telephone,
          formData: this.files,
        });

        this.files = new FormData();
      }
    },
    createTransactions(){
      let reqArray = []
      console.log(this.medicalResults);
      for(let medicalResult of this.medicalResults){
        console.log(medicalResult);
        reqArray.push(axios({
          method: 'post',
          url: `${constants.BASE_URL}/transactions`,
          data: {
            resultFiles: medicalResult.medicalresultfiles.map(resultFile => resultFile.fileUrl),
            recipientPhoneNumber: medicalResult.patient.user.telephone,
            recipientEmailAddresses: [medicalResult.patient.user.email],
            patientId: medicalResult.patient.patientId,
            medicalResultId: medicalResult.medicalResultId,
          },
          withCredentials: true,
        }));
      }

      axios.all(reqArray)
      .then(values => {
        if(values.length !== 0) router.push("/transactions");
      }).catch(err => {
        console.log(err);
      });
    },
  }
};
</script>


<style lang="scss" scoped>
</style>
