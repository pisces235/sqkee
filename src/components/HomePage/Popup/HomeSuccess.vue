<template>
  <div class="container">
    <div
      class="cover"
      v-show="$store.state.showHomeSuccess"
      @click="$store.commit('changeShowHomeSuccess')"
    ></div>
    <div class="form">
      <div class="btn-close" @click="$store.commit('changeShowHomeSuccess')">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="form-text">
        <b class="form-title">Congrats, you're in!</b>
        <hr />
        <div class="form-desc">
          Take note of your
          <b
            >exclusive passcode below to access Kee. <br />
            Do not share it with anyone else.</b
          >
        </div>
      </div>
      <div class="form-contain">
        <div class="form-control">
          <div class="passcode">
            {{ passcode }}
          </div>
        </div>

        <div class="form-control">
          <div class="btn-contain">
            <button>ENTER KEE NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const passcode = "96800";
</script>

<style lang="scss" scoped>
@import "../../../assets/style/style.scss";

.container {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .cover {
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background: black;
    position: fixed;
  }
  @include form;
  .form {
    z-index: 1;
    position: relative;
    margin: 0;
    padding: 0;
    .form-text {
    margin: 50px 0 0 0;
    }
    &-contain {
      .form-control {
        .passcode {
          font-size: 50px;
          line-height: 58px;
          padding: calc(90px - 58px) 89px;
          background-color: #218189;
          text-align: center;
          margin: 20px 0;
        }
        label {
          .number::before {
          background-color: white;
          content: counter(number);
          font-size: 16px;
          line-height: 24px;
          border-radius: 50%;
          padding: 5px 9px
        }
        }
      }
    }
  }
}
</style>
