<template>
  <div class="media box">
    <div class="media-content">
      <ul>
        <li>
          <span class="icon">
            <i class="fas fa-phone-alt"></i>
          </span>
          {{ result.patient.user.telephone }}
        </li>
        <li>
          <span class="icon">
            <i class="fas fa-envelope-square"></i>
          </span>
          {{ result.patient.user.email }}
        </li>
        <li v-for="(file, index) in result.medicalresultfiles" :key="index">
          <span class="icon">
            <i class="far fa-file"></i>
          </span>
          {{ file.fileUrl }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  name: 'ResultMediaComponent',
  props: ['result'],

};
</script>

<style lang="scss" scoped>

</style>


<style lang="scss" scoped>
</style>
