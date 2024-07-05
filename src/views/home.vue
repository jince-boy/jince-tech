<script setup lang="ts">

import JHeader from "../components/JHeader.vue";
import JDescription from "../components/JDescription.vue";
import JSkills from "../components/JSkills.vue";
import JProject from "../components/JProject.vue";
import JHitokoto from "../components/JHitokoto.vue";
import JFooter from "../components/JFooter.vue";
</script>

<template>
  <div id="wrapper">
    <div>
      <JHeader></JHeader>
    </div>
    <div id="content">
      <JDescription></JDescription>
      <JSkills></JSkills>
      <JProject></JProject>
      <JHitokoto></JHitokoto>
    </div>
    <div>
      <JFooter></JFooter>
    </div>
  </div>
</template>

<style scoped lang="less">
#wrapper {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #020817;

  > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  #content {
    padding: 4.8rem 2.4rem;

    > div + div {
      margin: 3.6rem 0;
    }
  }
}
</style>