<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  user: Object
})
</script>

<template>
  <div class="header-headimg" v-if="isUserLoggedIn">
    <img class="header-headimg-img" :src="props.user.avatar" alt="">
    <div class="self-dropdown">
      <div class="self-dropdown-header" style="height: 55px; width: 100%; display: flex; margin-bottom: 8px;">
        <div class="self-dropdown-header-img-container" style="height:55px; width: 55px;  padding: 0 5px 0 5px;">
          <div class="self-dropdown-header-img-warpper" style="height: 100%; width: 100%; border-radius: 50%;">
            <img class="self-dropdown-header-img" style="height: 100%; width: 100%;"
                 :src="props.user.avatar" alt="">
          </div>
        </div>
        <div class="self-dropdown-header-info" style="height: 100%; width: calc(100% - 80px);">
          <div class="self-dropdown-header-info-name" style="height: 50%; width: 100%; align-content: center;">
            {{ props.user.username }}
          </div>
          <div class="self-dropdown-header-info-statistics"
               style="height: 50%; width: 100%; align-content: center; ">
            123123
          </div>
        </div>
      </div>
      <div class="self-dropdown-item self-dropdown-likes"></div>
      <div class="self-dropdown-item self-dropdown-collections"></div>
      <div class="self-dropdown-item self-dropdown-histories"></div>
      <div class="self-dropdown-item self-dropdown-watchsoon"></div>
      <div class="self-dropdown-item self-dropdown-posts"></div>
      <div class="self-dropdown-orders"></div>
      <div class="self-dropdown-logout" @click="logout()">退出登录</div>
    </div>
  </div>
</template>

<style scoped>

</style>