<template>
  <div class="form">
    <div class="form-text">
      <b class="form-title">Interested to know more?</b>
      <hr />
      <div class="form-desc">
        Drop us a ping using the form below and let us help you out!
      </div>
    </div>
    <div class="form-contain">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="" id="name" placeholder="Enter your name" />
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="" id="email" placeholder="Enter email here" />
      </div>

      <div class="form-control">
        <label for="help">How can we help?</label>
      <select name="" id="help">
        <option value="" selected="selected">Please select</option>
        <option value="" v-for="(item, i) in list_help" :key="i">
          {{ item.title }}
        </option>
      </select>
      </div>

      <div class="form-control">
        <div class="btn-contain">
        <button @click="$store.commit('changeShowHomeTry')">LET'S TALK</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const list_help = [
  {
    title: "some thing here",
  },
]

</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";
@include form;
</style>
