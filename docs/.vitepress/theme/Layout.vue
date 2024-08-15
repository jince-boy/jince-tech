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
        <h2>{{ frontmatter.hero.introduce.title }}</h2>
        <p v-for="item in frontmatter.hero.introduce.actions">{{ item.text }}</p>
      </div>
      <div id="skill">
        <h2>{{ frontmatter.hero.skill.title }}</h2>
        <ul>
          <li v-for="item in frontmatter.hero.skill.actions">
            <span class="iconfont" :class="item.icon" :style="{fontSize:item.iconSize+'px'}"></span>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <div id="project">
        <h2>{{ frontmatter.hero.project.title }}</h2>
        <ul>
          <li v-for="item in frontmatter.hero.project.actions">
            <div>
              <h3><a :href="item.url" target="_blank">{{ item.name }}</a></h3>
              <div class="project-link">
                <a :href="item.url"><span class="iconfont icon-home-page"></span></a>
                <a :href="item.gitUrl"><span class="iconfont icon-github"></span></a>
              </div>
            </div>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="less">
#description {
  margin: 3.6rem 0;
  color: inherit;

  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    margin-bottom: 1.6rem;
    font-weight: bold;
  }

  p {
    line-height: 3.6rem;
  }
}

#skill {
  margin: 3.6rem 0;
  color: inherit;

  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    margin-bottom: 1.6rem;
    font-weight: bold;
  }

  ul {
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.6rem;
    background-color: var(--vp-button-alt-bg);
    border-radius: .8rem;
    font-weight: 700;
    transition: .2s;
    -webkit-user-select: none;
    user-select: none;
  }

  li:hover {
    background-color: var(--vp-button-alt-hover-bg);
  }

  span {
    margin-bottom: .8rem;
    font-size: 32px;
  }
}

#project {
  margin: 3.6rem 0;
  color: inherit;

  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    margin-bottom: 1.6rem;
    font-weight: bold;
  }

  ul {
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.6rem;
    background-color: var(--vp-button-alt-bg);
    border-radius: .8rem;
    font-weight: 700;
    transition: .2s;
    -webkit-user-select: none;
    user-select: none;

  }

  li:hover {
    background-color: var(--vp-button-alt-hover-bg);
  }

  ul li > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 3.6rem;
    font-weight: 700;
  }

  ul li .project-link a {
    margin: 0 .6rem;
  }

  span {
    margin-bottom: .8rem;
    font-size: 1.8rem;
  }

  ul li > p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
}
</style>