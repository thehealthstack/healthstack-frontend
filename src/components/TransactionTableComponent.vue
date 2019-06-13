<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th class="is-narrow">
          <input type="checkbox">
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
      <tr>
        <td>
          <input type="checkbox">
        </td>
        <td>
          <code>+237690346872</code>
        </td>
        <td>
          <code>vladimirfomene@gmail.com</code>
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
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TransactionTableComponent"
};
</script>

<style lang="scss" scoped>
</style>
