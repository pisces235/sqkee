<template>
  <div class="layout3">
    <div class="big-label">
      <div class="corner-border"></div>
      <p>So, what's the big deal?</p>
    </div>

    <div class="list-bigdeal">
      <div class="list-item" v-for="(item, i) in list_bigdeal" :key="i">
        <h1 class="title">{{ item.title }}</h1>
        <hr />
        <div class="desc" v-if="item.title == 'Credible'">
          We work with your favorite F&B brands. Use Kee credits at
          <b>30 Subway outlets</b> today!
        </div>
        <div class="desc" v-else>{{ item.desc }}</div>
        <a :href="item.link" class="bigdeal-link">Learn more</a>
      </div>
    </div>

    <div class="contain-bigdeal-img">
      <div class="bigdeal-img"></div>
    </div>
  </div>
</template>

<script setup>
const list_bigdeal = [
  {
    title: "Flexible",
    desc: "No hidden costs, no expiry. Buy and use Kee credits anytime.",
    link: "",
  },
  {
    title: "Credible",
    desc: "",
    link: "",
  },
  {
    title: "Convenient",
    desc: "get cash for games without having to wait, right to your account.",
    link: "",
  },
  {
    title: "Seamless",
    desc: "Kee is working towards a future where daily life and game are seamlessly integrated.",
    link: "",
  },
];
</script>

<style lang="scss" scoped>
@import '../../assets/style/style.scss';

.layout3 {
  width: 100%;
  margin: 235px 0 50px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 0;
  .big-label {
    width: 375px;
    height: fit-content;
    background: linear-gradient(90deg, #1b6272 -9.87%, #26949e 119.6%);
    
    clip-path: inset(0 0 0 round 0 0 100px 0);
    position: relative;
    p {
      @include title-text;
      margin: 58px 30px 58px 115px;
    }
    .corner-border {
      filter: drop-shadow(0 0 3px $like-yellow);
      position: absolute;
      border: 2px solid $like-yellow;
      border-left: none;
      border-bottom: none;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
    }
  }
  .list-bigdeal {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: calc(100% - 405px - 370px);
    align-content: space-evenly;
    .list-item {
      max-width: 35%;
      font-size: 16px;
      line-height: 24px;
      hr {
        @include hr;
        margin: 10px 0 10px 0;
      }
      a {
        color: #39c7d4;
      }
    }
  }
  .contain-bigdeal-img {
    position: relative;
    top: -100px;
    .bigdeal-img {
      background: url("../../assets/images/img-layout3.png") no-repeat left;
      width: 405px;
      height: 600px;
    }
  }
}
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) { 
  .layout3 {
    margin-top: 85px;
    margin-bottom: 0;
    flex-flow: column wrap;
    justify-content: flex-start;
    .big-label {
      width: 82.25vw;
      p {
        font-size: 30px;
        margin: 56px 20px 56px 20px;
      }
    }
    .list-bigdeal {
      width: 87.5vw;
      margin: 20px calc(12.5vw / 2);
      .list-item {
      max-width: calc(100% - 20px * 2);;
      text-align: center;
      padding: 15px 20px;
      hr {
        margin: 15px auto 18px auto;
      }
    }
    }
    .contain-bigdeal-img {
    .bigdeal-img {
      background: url("../../assets/images/img-layout3.png") no-repeat ;
      background-size: fit-content;
      width: 90%;
      margin-left: 10%;
    }
  }
  }   
}
</style>
