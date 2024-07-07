<script setup lang="ts">

</script>

<template>
  <header>
    <div id="logo">
      <img src="../assets/avatar.jpg" alt="avatar">
      <div>
        <h1>JinCe</h1>
        <p>一名00后全栈开发者</p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="https://blog.jince.tech" target="_blank">博客</a></li>
        <li><a href="https://github.com/jince-boy" target="_blank">GitHub</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="less">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.8rem;
  padding: 3.2rem 2.4rem;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 1.6rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }
}

nav {
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      line-height: 3.2rem;
      font-size: 1.6rem;
      margin: 0 1.6rem;
    }
  }
}

@media (max-width: 768px) {
  header {
    height: auto;
    flex-direction: column;
  }

  #logo {
    flex-direction: column;
    text-align: center;

    img {
      margin: 0;
    }
  }

  nav {
    margin-top: 1.6rem;
  }
}
</style>