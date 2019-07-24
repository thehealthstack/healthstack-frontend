<template>
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>
      <code>{{ transaction.medicalresult.patient.email }}</code>
    </td>
    <td>
      <code>{{ transaction.medicalresult.patient.telephone }}</code>
    </td>
    <td>
      <span class="icon">
        <i class="fas fa-check-circle"></i>
      </span>
    </td>
    <td>
      <span class="icon">
        <i class="fas fa-exclamation-circle"></i>
      </span>
    </td>
    <td>
      <span class="icon">
        <i class="fas fa-file-alt"></i>
      </span>
    </td>
    <td>
      <div class="buttons">
        <a class="button is-small">Retry SMS</a>
        <a class="button is-small">Retry Email</a>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TransactionTableComponent",
  props: ["transaction"]
};
</script>

<style lang="scss" scoped>
</style>
