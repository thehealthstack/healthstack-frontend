<template>
  <div class="level-right">
    <div class="field has-addons">
      <div class="control">
        <span class="select">
          <select>
            <option>Search By</option>
            <option>Email</option>
            <option>Telephone</option>
          </select>
        </span>
      </div>
      <div class="control">
        <input class="input" type="text" placeholder="Search transactions">
      </div>
      <div class="control">
        <a class="button is-info">Search</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TransactionSearchComponent.vue',
};
</script>

<style lang="scss" scoped>

</style>
