<template>
<div>
  <h2>base/header</h2>
</div>
</template>

<script lang="ts">

export default {
  mounted() {
    (this as any).$test('this is typescript man!')
  },
}
</script>

<style>

</style>
