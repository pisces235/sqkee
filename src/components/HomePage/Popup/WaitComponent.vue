<template>
  <div class="container">
    <div
      class="cover"
      v-show="$store.state.showHomeWait"
      @click="$store.commit('changeShowHomeWait')"
    ></div>
    <div class="form">
      <div class="btn-close" @click="$store.commit('changeShowHomeWait')">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="form-text">
        <b class="form-title">Ah, you are on the waitlist.</b>
        <hr />
        <div class="form-desc">
          Fret not as you are on a temporary waitlist. Leave your contact details below <br />
          and we will be in touch soonest once you can use Kee. <br><br>
          <b>Currently on waiting list: {{$store.state.waitlistCount}}</b>
        </div>
      </div>
      <div class="form-contain">
        

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="" id="email" placeholder="Enter email here" />
      </div>
      <div class="form-control">
        <label for="contact-number">Contact number</label>
        <input type="text" name="" id="contact-number" placeholder="Enter contact number (optional)" />
      </div>

        <div class="form-control">
          <div class="btn-contain">
            <button>SUBMIT DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  }
  @include form;
  .form {
    z-index: 1;
    position: fixed;
    padding-top: 20px;
  }
}
</style>
