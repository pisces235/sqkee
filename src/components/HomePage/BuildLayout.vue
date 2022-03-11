<template>
  <div class="build--layout">
    <div class="build--left">
      <div class="build--left__img">
        <img src="../../assets/images/build.png" alt="">
      </div>
    </div>

    <div class="build--right">
      <div class="build__title">
        <b><span>Build </span>that guild. <span>Conquer</span> the city.</b>
      </div>
      <hr />
      <div class="build__contain-logo">
        <div class="logo" v-for="(item, i) in list_logo" :key="i">
          <a :href="item.link"
            ><img
              :src="require(`../../assets/images/${item.filename}`)"
              alt=""
              :title="item.title"
          /></a>
        </div>
      </div>
      <div class="build__desc">
        <p>
          Be rewarded with cash to redeem currency gor these games & more
          whenever you spend on Kee &lt;Insert actions that can be done in these
          game e.g.build that guild, conquer the city, XXX ...&#62;
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const list_logo = [
  {
    title: "Among Us",
    filename: "logo-among-us.png",
    link: "",
  },
  {
    title: "",
    filename: "logo2.png",
    link: "",
  },
  {
    title: "Call of Duty",
    filename: "logo3.png",
    link: "",
  },
  {
    title: "Candy Crush",
    filename: "logo4.png",
    link: "",
  },
  {
    title: "",
    filename: "logo5.png",
    link: "",
  },
  {
    title: "",
    filename: "logo6.png",
    link: "",
  },
  {
    title: "",
    filename: "logo7.png",
    link: "",
  },
  {
    title: "",
    filename: "logo8.png",
    link: "",
  },
];
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.build--layout {
  width: calc(100% - (135px * 2));
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 135px;
  .build--left {
    width: fit-content;
    height: fit-content;
    &__img {
      
      width: 350px;
      height: 312px;
    }
  }
  .build--right {
    width: calc(100% - 450px);
    .build__title {
      @include title-text;
      span {
        color: $other-color;
      }
    }

    hr {
      @include hr;
      margin: 10px 0 10px 0;
    }

    .build__contain-logo {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin: 20px 0;
      .logo {
        width: fit-content;
        height: fit-content;
        a {
          width: fit-content;
          height: fit-content;
          img {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
    .build__desc {
      @include little-text;
    }
  }
}
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .build--layout {
  width: 100vw;
  margin: 0;
  display: flex;
  flex-flow: column-reverse wrap;
  justify-content: center;
  .build--left {
    width: 100%;
    margin: 20px 0;
      margin: 0;
    &__img {
      width: 100vw;
    img {
      width: 100%;
    }
    }
  }
  .build--right {
    width: 87.5vw;
    padding: 0 calc(12.5vw / 2);
    .build__title {
      @include title-text;
      span {
        color: $other-color;
      }
    }

    hr {
      @include hr;
      margin: 10px 0 10px 0;
    }

    .build__contain-logo {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 20px 0;
      .logo {
        margin-bottom: 10px;
      }
    }
  }
}
}
  

</style>
