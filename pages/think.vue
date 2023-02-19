<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->

<script setup>
// const { data } = await useFetch(() => `/api/hello`)
const cardOneRemark = 'advice'
const cardOneTitle = 'On Path'
const cardOneDefault =
  "Don't choose a path too hard to walk or you risk not walking far at all."
</script>

<template>
  <div class="hello">
    <div>
      <h1 class="text-center font-title text-4xl">
        <a href="https://www.linkedin.com/in/vptcoder/" target="_blank">overthink</a>
      </h1>
      <div class="img-banner">
        <div class="overlay-img">
          <i>the weird, the strange, the
            <a href="https://www.instagram.com/t.e.neutrino/" target="_blank">whimsical</a>
            like a cup of
            <a href="https://www.google.com/search?q=cosmic+latte" target="_blank">cosmic latte</a>.</i>
          <br />
          <b>person</b>
          <br />singapore<br />
        </div>
      </div>
      <div class="container flex flex-wrap flex-col items-center justify-center mx-auto my-2">
        <TCardH>
          <template #remark>{{ cardOneRemark }}</template>
          <template #title>{{ cardOneTitle }}</template>
          <template #default>{{ cardOneDefault }}</template>
        </TCardH>
        <TCardH>
          <template #remark> question </template>
          <template #title> Whether this is a good thing? </template>
          <template #default>Yes this is a good thing!</template>
        </TCardH>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 400px) {
  .img-banner {
    min-height: 270px;
    max-height: 600px;
    max-width: 96%;
    height: 35vw;
    text-align: center;
    margin: auto;
    background-image: url('../assets/banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-clip: padding-box;

    position: relative;
  }

  .overlay-img {
    background-color: #fff;
    opacity: 0.65;
    min-width: 80%;
    margin: auto;
    padding: 10px;
    border-radius: 0.5em;
    font-size: 1.4vh;

    position: absolute;
    bottom: 0.5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 401px) {
  .img-banner {
    min-height: 270px;
    max-height: 600px;
    max-width: 60%;
    height: 35vw;
    text-align: center;
    margin: auto;
    background-image: url('../assets/banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-clip: padding-box;

    position: relative;
  }

  .overlay-img {
    background-color: #fff;
    opacity: 0.65;
    margin: auto;
    padding: 10px;
    border-radius: 0.5em;
    font-size: 1.4vh;

    position: absolute;
    bottom: 0.5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
</style>
