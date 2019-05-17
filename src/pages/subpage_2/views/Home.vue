<template>
  <div class="home">
    <img src="@/assets/logo.png">
    <HelloWorld msg="subpage=>home2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
//    console.log(`这个是多页面测试页的主页：${this.$store.state.myname}`)
  }
}
</script>