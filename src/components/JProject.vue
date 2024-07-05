<script setup lang="ts">

</script>

<template>
  <div id="project">
    <h2>项目</h2>
    <ul>
      <li>
        <div>
          <h3><a href="https://desktop.jince.tech" target="_blank">OpenDesktop</a></h3>
          <div class="project-link">
            <a href="https://desktop.jince.tech" target="_blank"><img src="../assets/web.svg" alt="github"></a>
            <a href="https://github.com/jince-boy/OpenDesktop" target="_blank"><img src="../assets/github.svg"
                                                                                    alt="github"></a>
          </div>
        </div>
        <p>OpenDesktop是一个开源项目，是使用vue3+typescript+vite开发的一套具有特定功能意义的开源窗口UI框架。</p>
      </li>
      <li>
        <div>
          <h3><a href="https://whim.jince.tech" target="_blank">Whim</a></h3>
          <div class="project-link">
            <a href="https://whim.jince.tech" target="_blank"><img src="../assets/web.svg" alt="github"></a>
            <a href="https://github.com/jince-boy/whim" target="_blank"><img src="../assets/github.svg"
                                                                             alt="github"></a>
          </div>
        </div>
        <p>Whim一款基于Spring Boot 3.3和Vue 3的前后端分离插件化系统。</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
h2 {
  font-size: 3rem;
  line-height: 4.8rem;
  margin-bottom: 1.6rem;
}

ul {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  li {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    background-color: #5e6d82;
    border-radius: 0.8rem;
    transition: .2s;
    user-select: none;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      font-size: 1.6rem;
      line-height: 3.6rem;
      font-weight: bold;
    }

    .project-link a {
      margin: 0 0.6rem;
    }

    img {
      width: 2.2rem;
      height: 2.2rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }

  li:hover {
    background-color: #303a4c;
  }
}
@media (max-width: 480px){
  #project ul{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (min-width:480px) and (max-width: 768px) {
  #project ul{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>