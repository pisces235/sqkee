<template>
  <div class="subtract">
    <div class="subtract-front">
      <div class="subtract-image-contain">
        <div class="subtract-img"></div>
      </div>

      <div class="subtract-title">
        <h4>Introducing <span class="dif-color">Kee</span></h4>
        <span class="subtract-label">ALPHA</span>
        <hr />
      </div>

      <div class="subtract-desc-contain">
        <div class="subtract-desc">
          Kee allows you purchase Kee credit which can be used to redeem for
          food and drink with specific F&B partners. In return, Kee gives you
          case to purchase game currently (for your favorite games). Legit
          <i class="fa fa-thumbs-up"></i>
        </div>
      </div>

      <div class="subtract-list--contain">
        <div class="list-item">
          <div class="contain-bg"></div>
          <div class="item-content">
            <div class="number"></div>
            <img src="../../assets/images/coin.png" alt="" class="coin" />
            <h4 class="title">Decide Kee credits amount</h4>
            <div class="desc">
              Decide how much you want to buy for <br />
              food (1 Kee credit=S$1) <br />
              The Kee credits have no expiry date!
            </div>
          </div>
        </div>

        <div class="list-item">
          <div class="contain-bg"></div>
          <div class="item-content">
            <div class="number"></div>
            <img
              src="../../assets/images/conversion.png"
              alt=""
              class="conversion"
            />
            <h4 class="title">Check conversion rate</h4>
            <div class="desc">
              Based on the credits amount, Kee will tell you how much cash you
              can get for your game currency.
            </div>
          </div>
        </div>

        <div class="list-item">
          <div class="contain-bg"></div>
          <div class="item-content">
            <div class="number"></div>
            <img
              src="../../assets/images/bag-money.png"
              alt=""
              class="bag-money"
            />
            <h4 class="title">Buy & be rewarded</h4>
            <div class="desc">
              Kee credits are store in your Kee wallet, and you will get the
              cash in no time in your bank account.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.subtract {
  width: 100%;
  &-front {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    color: white;
    .subtract-image-contain {
      width: 100%;
      .subtract-img {
        background: url("../../assets/images/profile.png") no-repeat center;
        margin: 0 auto 15px auto;
        background-size: cover;
        width: 120px;
        height: 120px;
      }
    }
    .subtract-title {
      width: 100%;
      text-align: center;
      font-size: 32px;
      position: relative;
      .dif-color {
        color: $other-color;
      }
      .subtract-label {
        @include little-text;
        background-color: #218189;
        clip-path: inset(2px 2px 5px round 7px 0);
        position: absolute;
        padding: 5px 10px;
        font-size: 9px;
        top: 4px;
        left: calc(50% + 240px / 2 + 10px);
      }
      hr {
        margin: 10px auto;
        @include hr;
      }
    }
    .subtract-desc-contain {
      .subtract-desc {
        @include little-text;
        max-width: 570px;
        text-align: center;
        margin: 0 auto;
        i {
          color: $like-yellow;
        }
      }
    }
    .subtract-list--contain {
      width: calc(100% - 135px * 2);
      counter-reset: number;
      display: flex;

      margin: 80px 135px;
      .list-item {
        width: calc(100% / 3);
        position: relative;
        display: block;
        padding: 30px 0;
        .contain-bg {
          clip-path: polygon(
            90% 0,
            100% 50%,
            90% 100%,
            0% 100%,
            10% 50%,
            0% 0%
          );
          background-color: #11233f;
          width: 100%;
          height: 190px;
          position: absolute;
          top: 0;
          z-index: 0;
        }
        .item-content {
          position: absolute;
          z-index: 1;
          width: 75%;
          @include auto-number;
          h4,
          div {
            width: calc(100% - 25px);
            line-height: 25px;
            margin-left: 70px;
            text-overflow: ellipsis;
          }

          .title {
            margin-top: 7px;
            margin-bottom: 7px;
          }
          .desc {
            height: 23px;
            line-height: 23px;
          }
          div {
            @include little-text;
          }
          img {
            position: absolute;
          }
          .coin {
            left: -50px;
            bottom: -130px;

            width: 86px;
            height: 86px;
          }
          .conversion {
            top: -85px;
            right: -45px;
            width: 110px;
            height: 110px;
          }
          .bag-money {
            width: 86px;
            height: 101px;
            right: -115px;
            bottom: -85px;
          }
        }
      }
      .list-item:first-child {
        .item-content {
          h4,
          div {
            margin-left: 30px;
          }
        }
        .contain-bg {
          clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0 50%, 0% 0%);
        }
      }
    }
  }
}

@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .subtract {
    width: 100vw;
    .subtract-title,
    .subtract-list--contain {
      width: 87.5vw;
      margin: 0 calc(12.5vw / 4);
    }
    .subtract-title {
      margin-top: 30px;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      .subtract-label {
        top: -37px;
        left: calc(50% - 28px / 2);
      }
    }
    .subtract-desc-contain {
      .subtract-desc {
        max-width: 87.5vw;
      }
    }
    .subtract-list--contain {
      min-width: 87.5vw;
      margin: 0 calc(12.5% / 2);
      counter-reset: number;
      display: flex;
      flex-flow: column wrap;
      .list-item {
        min-width: 100%;
        position: unset;
        display: block;
        padding: 30px 0;
        .contain-bg {
          display: none;
        }
        .item-content {
          position: unset;
          z-index: 1;
          width: 100%;
          @include auto-number;
          .number {
            width: 100%;
            margin: 35px 0 15px 0;
          }
          .number:before {
            margin: 0 auto;
          }
          h4,
          div {
            width: calc(100%);
            line-height: 25px;
            margin-left: 0;
            text-align: center;
          }

          img {
            position: unset;
          }
          .coin {
            margin-left: calc(50% - 86px / 2);
          }
          .conversion {
            margin-left: calc(50% - 110px / 2);
          }
          .bag-money {
            margin-left: calc(50% - 86px / 2);
          }
        }
      }
      .list-item:first-child {
        .item-content {
          h4,
          div {
            margin-left: 0;
          }
        }
        .contain-bg {
          display: none;
        }
      }
    }
  }
}
</style>
