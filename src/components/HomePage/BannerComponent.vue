<template>
  <div class="banner">
    <div class="banner--left">
      <h2>
        <p class="banner-dif-color"><q></q></p>
        get cash for games.
        <div class="border-corner"></div>
      </h2>
      <p class="banner-desc">
        Who says you can't eat good food and level up
        in your favorite games at the same time? <br />
        Introducing <strong>Kee</strong>, your loyal lobang who knows
        just the best deal for you. <br /><br />
        Be the first exclusivefew to meet Kee now.
      </p>
      <button class="banner-btn">MEET KEE NOW</button>
    </div>
    <div class="banner--right">
      <img src="../../assets/images/banner-img.png" class="banner-img" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.banner {
  width: calc(100% - 115px * 2);
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  &--left,
  &--right {
    width: 50%;
  }
  // left banner
  &--left {
    margin-top: 135px;
    // banner title
    h2 {
      color: white;
      font-size: 50px;
      line-height: 58px;
      padding: 20px;
      text-align: left;
      position: relative;
      .banner-dif-color {
        color: $other-color;
        q::before {
          content: '"Buy food and"';
        }
      }
      .border-corner {
        filter: drop-shadow(0 0 3px $like-yellow);
        position: absolute;
        border: 2px solid $like-yellow;
        border-right: none;
        border-bottom: none;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
      }
    }

    .banner-desc,
    button {
      margin: 10px 0 0 20px;
    }
    .banner-desc {
      @include little-text;
      max-width: 345px;
    }
    .banner-btn {
      @include btn;
    }
  }
  // right banner
  &--right {
    width: 600px;
    margin-top: 85px;
    .banner-img {
      width: 100%;
    }
  }
}
// mobile devices
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .banner {
    width: 100vw;
    margin: 0;
    flex-flow: column wrap;
    justify-content: flex-start;
    clip-path: circle(90% at 50% 50%);
    // left banner
    &--left {
      margin-top: 45px;
      width: calc(100% - 45px);
      padding: 0 20px 0 20px;
      h2 {
        @include title-text;
        q::before {
          content: "Buy food and" !important;
        }
      }
    }
    // right banner
    &--right {
      width: 100%;
      margin-top: 45px;
    }
  }
}

</style>
