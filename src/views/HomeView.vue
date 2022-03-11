<template>
  <div class="home">
    <Banner />
    <Subtract />
    <Layout3 />
    <BuildLayout />
    <Infor />
    <Question v-show="!$store.state.showHomeTry | !$store.state.showHomeSuccess & $store.state.showHomeTry == $store.state.showHomeSuccess" />
    <Form v-show="!$store.state.showHomeTry | !$store.state.showHomeSuccess & $store.state.showHomeTry == $store.state.showHomeSuccess" />
    <HomeTry v-show="$store.state.showHomeTry" />
    <HomeSuccess v-show="$store.state.showHomeSuccess & $store.state.success == true" />
    <HomeWait v-show="$store.state.showHomeWait & $store.state.success == false" />
  </div>
</template>

<script setup>
import Banner from '@/components/HomePage/BannerComponent.vue'
import Subtract from '@/components/HomePage/SubtractComponent.vue'
import Layout3 from '@/components/HomePage/Layout3Component.vue'
import BuildLayout from '@/components/HomePage/BuildLayout.vue'
import Infor from '@/components/HomePage/InfoComponent.vue'
import Question from '@/components/HomePage/QuestionComponent.vue'
import Form from '@/components/HomePage/FromComponent.vue'
import HomeTry from '@/components/HomePage/Popup/HomeTry.vue'
import HomeSuccess from '@/components/HomePage/Popup/HomeSuccess.vue'
import HomeWait from '@/components/HomePage/Popup/WaitComponent.vue'
</script>

<style lang="scss">
.home {
  background: url("../assets/images/Desktop-Home.png") no-repeat top;
  background-size: cover;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 20px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .home {
    background-size: fit-content;
  }
}
</style>
