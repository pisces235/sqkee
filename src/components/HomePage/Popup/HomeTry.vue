<template>
  <div class="container">
    <div
      class="cover"
      v-show="$store.state.showHomeTry"
      @click="$store.commit('changeShowHomeTry')"
    ></div>
    <div class="form">
      <div class="btn-close" @click="$store.commit('changeShowHomeTry')">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="form-text">
        <b class="form-title">One last step...</b>
        <hr />
        <div class="form-desc">
          Kee wants to know more about you to see if you're a good fit for our
          Alpha. <br />
          It's chill, just answer honestly.
        </div>
      </div>
      <div class="form-contain">
        <div class="form-control">
          <label for="requency">
            <span class="number"></span>
            How often do you play mobile games?</label
          >
          <select name="" id="requency">
            <option value="" v-for="(item, i) in list_requency" :key="i">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="form-control">
          <label for="range">
            <span class="number"></span>
            How much do you spend on mobile games per XX?</label
          >
          <select name="" id="range">
            <option value="" v-for="(item, i) in list_range" :key="i">
              SGD {{ item }}
            </option>
          </select>
        </div>

        <div class="form-control">
          <label for="game-names">
            <span class="number"></span>
            What mobile games do you usually play?</label
          >
          <input
            type="game-names"
            name=""
            id="game-names"
            placeholder="Enter mobile game names (up to 3)"
          />
        </div>

        <div class="form-control">
          <label for="region">
            <span class="number"></span>
            In a typical week, which region of Singapore do you spend most of
            your time in? (excluding sleeping hours)
          </label>
          <select name="" id="region">
            <option value="" v-for="(item, i) in list_region" :key="i">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="form-control">
          <div class="btn-contain">
            <button @click="change()">REQUEST ENTRY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const list_requency = ["Every day"];
const list_range = ["1000 - 1200"];
const list_region = ["North", "South", "East", "West"];

const change = () => {
  if(store.state.success == true) {
    store.commit("changeShowHomeSuccess");
    store.commit("changeShowHomeTry");
  } else {
    store.commit("changeShowHomeWait");
  store.commit("changeShowHomeTry");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/style.scss";

.container {
  width: 100%;
  max-height:100vh;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  
    overflow-y: scroll;
  .cover {
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background: black;
    position: fixed;
  }
  @include form;
  .form{
    z-index: 1;
    position: static;
    margin: auto 0;
    .btn-close {
      top: 2%;
      margin-bottom: 25px;
    }
    &-contain {
      .form-control {
        label {
          .number::before {
            background-color: white;
            content: counter(number);
            font-size: 16px;
            line-height: 24px;
            border-radius: 50%;
            padding: 5px 9px;
          }
        }
      }
    }
  }
}
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .container {
    .form {
    width: 100vw;
    }
}
}
</style>
