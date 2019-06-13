<template>
    <div class="box level columns">
      <div class="file is-primary column">
        <label class="file-label">
          <input class="file-input" type="file" webkitdirectory>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose A Directory</span>
          </span>
        </label>
      </div>
      <div class="notification column is-info has-text">
        <p class="title is-1">{{ numUploaded }}</p>
        <p class="subtitle is-4">Succeeded</p>
      </div>
      <div class="notification column is-warning has-text">
        <p class="title is-1">{{ numFailedUpload }}</p>
        <p class="subtitle is-4">Failed</p>
      </div>
      <button class="button is-success">Deliver Results</button>
    </div>
</template>

<script>

export default {
  name: "UploadBarComponent",
  data(){
    return {
      numUploaded: 0,
      numFailedUpload: 0,
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

