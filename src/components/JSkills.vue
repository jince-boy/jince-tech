<script setup lang="ts">

</script>

<template>
  <div id="skills">
    <h2>技能</h2>
    <ul>
      <li><img src="../assets/java.svg" alt="Java"><span>Java</span></li>
      <li><img src="../assets/python.svg" alt="Python"><span>Python</span></li>
      <li><img src="../assets/javascript.svg" alt="JavaScript"><span>JavaScript</span></li>
      <li><img src="../assets/php.svg" alt="PHP"><span>PHP</span></li>
      <li><img src="../assets/vuejs.svg" alt="Vue.js"><span>Vue.js</span></li>
      <li><img src="../assets/node.svg" alt="Node.js"><span>Node.js</span></li>
      <li><img src="../assets/go.svg" alt="Goland"><span>Goland</span></li>
      <li><img src="../assets/typescript.svg" alt="TypeScript"><span>TypeScript</span></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
#skills {
  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    margin-bottom: 1.6rem;
  }

  ul {
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1.6rem;
      background-color: #5e6d82;
      border-radius: 0.8rem;
      font-weight: bold;
      transition: .2s;
      user-select: none;
    }

    li:hover {
      background-color: #303a4c;
    }

    img {
      width: 32px;
      height: 32px;
      margin-bottom: 0.8rem;
    }
  }
}

@media (max-width: 480px) {
  #skills ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width:480px) and (max-width: 768px) {
  #skills ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>