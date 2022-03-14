<template>
  <div class="question">
    <b class="title">Frequently <span>asked question</span></b>
    <hr />
    <div class="contain-dropdown">
      <div class="dropdown-item" v-for="(item, i) in list_question" :key="i">
        <div class="item-title">
          <b class="left">{{ item.title }}</b>

          <div class="contain-click">
            <i
              :class="'fa-solid fa-caret-down'"
              v-show="URD[i]"
              @click="URD[i] = !URD[i]"
            ></i>
            <i
              class="fa-solid fa-caret-up"
              v-show="!URD[i]"
              @click="URD[i] = !URD[i]"
            ></i>
          </div>
        </div> 
        <div class="item-text" v-show="URD[i] == false">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const list_question = [
  {
    title: "Question",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates quos inventore perferendis, repellendus autem qui repellat sequi ullam porro molestias temporibus amet, quod asperiores dolores ex cupiditate corrupti fuga!",
  },
  {
    title: "Question",
    text: "Some text",
  },
  {
    title: "Question",
    text: "Some text",
  },
  {
    title: "Question",
    text: "Some text",
  },
];
let URD = ref([]);
list_question.forEach(() => {
  URD.value.push(true);
});
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.question {
  width: calc(100% - 403px * 2);
  margin: 50px 403px 15px 403px;

  text-align: center;
  .title {
    @include title-text;
    span {
      color: $other-color;
    }
  }
  hr {
    @include hr;
    margin: 10px auto 15px auto;
  }
  .contain-dropdown {
    .dropdown-item {
      padding: 15px 0;
      border-bottom: 2px solid grey;
      .item-title {
        display: flex;
        justify-content: space-between;
        .contain-click {
          position: relative;
          i {
            color: $like-yellow;
            top: -10px;
            right: 0;
            font-size: 35px;
            position: absolute;
          }
        }

        .btn-show {
          display: block;
        }
      }
      .item-text {
          margin: 30px 0 15px 0;
          text-align: left;
          @include little-text;
      }
    }
  }
}

@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .question {
    width: 87.5vw;
    margin: 30px calc(12.5vw / 2);
  }
}
</style>
