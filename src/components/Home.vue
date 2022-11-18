<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="hello">
    <div v-show="!isHidden">
      <h1>ngộ</h1>
      <i
        >the weird, the strange, the
        <router-link tag="li" to="/listing">whimsical</router-link> like a cup of
        <router-link tag="li" to="/listing">cosmic latte</router-link>.</i
      >
      <div class="container-grid">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>

        <div class="grid-item text-left">Not a thing shall be told, for the fun is to be found, and new grounds to be trodden.</div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-center">odd ball</div>
        <div class="grid-item"></div>

        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v1Home",
  props: {
    msg: String,
  },
  data() {
    return {
      isHidden: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
chevron {
  position: relative;
  display: block;
  height: 50px; /*height should be double border*/
}

.chevron::before,
.chevron::after {
  position: absolute;
  display: block;
  content: "";
  border: 25px solid transparent; /*adjust size*/
}

/* Replace all text `top` below with left/right/bottom to rotate the chevron */

.chevron::before {
  top: 0;
  border-top-color: #b00; /*Chevron Color*/
}

.chevron::after {
  top: -10px; /*adjust thickness*/
  border-top-color: #fff; /*Match background colour*/
}
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
  padding: 10px;
}

.grid-item {
  padding: 20px;
  min-height: 5em;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}

.viewpart {
  margin-top: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  /* padding-inline-start: 5px;
  padding-inline-end: 5px; */
}

nav a:hover,
nav a.router-link-active,
nav a.router-link-exact-active {
  cursor: pointer;
  background-color: #fff8e7;
}
</style>
