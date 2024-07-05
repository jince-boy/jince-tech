<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";

const text = ref('')
const from = ref('')

const fetchHitokoto = () => {
  axios.get("https://international.v1.hitokoto.cn/?c=k&encode=json").then(res => {
    text.value = res.data.hitokoto;
    from.value = res.data.from;
  });
};
fetchHitokoto();
setInterval(fetchHitokoto, 8000);


</script>

<template>
  <div id="hitokoto">
    <h2>一言</h2>
    <div>
      <p class="text" v-if="text===''">只有当不幸真的到来时，我们才会怀念和渴望那些逝去的美好时光。——人生的智慧</p>
      <p class="text" v-else>{{ text }}——{{ from }}</p>
    </div>
  </div>
</template>

<style scoped lang="less">
#hitokoto {
  margin: 5.6rem 0 !important;

  h2 {
    font-size: 3rem;
    line-height: 4.8rem;
    margin-bottom: 1.6rem;
  }

  > div {
    padding: 2.6rem;
    text-align: center;
    position: relative;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      border: 5px solid;
      border-color: transparent transparent #fff #fff;
      width: 20px;
      height: 20px;

    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      border: 5px solid;
      border-color: #fff #fff transparent transparent;
      width: 20px;
      height: 20px;
    }
  }

  .from {
    text-align: right;
  }
}
</style>