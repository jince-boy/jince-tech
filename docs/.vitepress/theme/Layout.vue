<script setup lang="ts">

import DefaultTheme from "vitepress/theme";
import {useData} from "vitepress";

const {Layout} = DefaultTheme

const {frontmatter} = useData();
</script>

<template>

  <Layout>
    <template #home-hero-info>
      <div id="description">
        <h2>Hi there , I'm JinCe👏</h2>
        <p v-for="item in frontmatter.hero.introduce">{{ item.text }}</p>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="less">
#description {
  color: inherit;

  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    font-weight: bold;
  }

  p {
    line-height: 3.6rem;
  }
}
</style>