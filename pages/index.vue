<template>
  <div>
    <h2 class='text-lg'>商品一覧</h2>
    <nuxt-link to="/products/create">新規作成</nuxt-link>
    <NuxtLogo/>
    <BaseHeader/>

    <table>
      <tr>
        <td>1</td>
        <td>テスト</td>
        <td><nuxt-link to="/products/1/show">詳細</nuxt-link></td>
        <td><nuxt-link to="/products/1/edit">編集</nuxt-link></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

