<template>
  <div class="information">
    <div class="info-text">
      <b class="info-title"
        >Spend on your <span>favourite food & games</span></b
      >
      <hr />
      <div class="info-desc">
        Kee in currently in <b>beta</b>, with Subway Singarpore being our first
        exclusive F&B partner where Kee credits can be redeemed at. Get your Kee
        credits & be rewarded with cash to purchase your favourite game
        currently! <br /><br />
        Stay tuned for more exciting Kee updates in the coming mounths.
      </div>
      <button class="info-btn">TRY KEE ON TELEGRAM NOW</button>
    </div>
    <div class="some-animation">
      <img src="../../assets/images/UI-Illustration-Section1.png" alt="" />
    </div>

    <div class="another-animation"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.information {
  width: 100vw;
  text-align: center;
  .info-text {
    .info-title {
      @include title-text;
      span {
        color: $other-color;
      }
    }
    hr {
      @include hr;
      margin: 10px auto 18px auto;
    }
    .info-desc {
      max-width: 570px;
      margin: 0 auto;
      @include little-text;
    }
    .info-btn {
      @include btn;
    }
  }
  .some-animation {
    width: calc(100% - 55px * 2);
    margin: 25px 55px 0 55px;
    img {
      width: 100%;
    }
  }
  .another-animation {
    background: url("../../assets/images/stacks.png") no-repeat center;
    background-size: fit-content;
    width: 533px;
    height: 295px;
    margin: 35px auto 0 auto;
  }
}
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .information {
    margin-top: 115px;
    .info-text {
      width: 87.5vw;
      max-width: unset;
      margin: 0 calc(12.5vw / 2);
    }
    .some-animation {
      width: 100vw;
      height: 41px;
      background: url("../../assets/images/UI-Illustration-Section1.png")
        no-repeat center;
      background-size: cover;
      margin: 25px 0;
      img {
        display: none;
      }
    }
    .another-animation {
      background-size: cover;
      width: 100vw;
      height: 205px;
      margin: 35px 0;
    }
  }
}
</style>
