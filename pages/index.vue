<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<script setup>
definePageMeta({
  layout: 'default',
})

const cards = [
  {
    id: 0,
    cardRemark: `custom web apps`,
    cardTitle: `Senior Analyst @ Accenture Singapore`,
    cardDoc: null,
    cardLink: `<a target="_blank" href="https://www.linkedin.com/in/vptcoder/">LinkedIn</a>`,
    cardDefault:
      `Just your average dev trying to make a living in a corporate role.<br>` +
      `I do cloud architecting on Azure these days,<br>` +
      `and trying to keep my hands busy with Nuxt on my days off.`,
  },
]
</script>

<template>
  <div>
    <h1 class="page-title text-center font-title text-4xl">van phuong thanh</h1>
    <div>
      <div class="img-banner">
        <div class="overlay-img">
          <a target="_blank" href="https://goo.gl/maps/R4XviPS1bSoZC9gu5"
            >&#128205; Bukchon Hanok 북촌한옥마을, Seoul, Korea</a
          ><br /><i> I like this photo</i>
        </div>
      </div>
      <div
        class="container flex flex-wrap flex-col items-center justify-center mx-auto my-2"
      >
        <TCardH
          v-for="(card, index) in cards"
          :key="card.id"
          :card="card"
          :index="index"
        >
          <!-- eslint-disable vue/no-v-html -->
          <template #remark>
            <div v-html="card.cardRemark"></div>
          </template>
          <template #title>
            <div v-html="card.cardTitle"></div>
          </template>
          <template #default>
            <ContentDoc
              v-if="card.cardDoc"
              class="nuxt-content"
              :head="false"
              :path="card.cardDoc"
            />
            <div v-else v-html="card.cardDefault"></div>
          </template>
          <template v-if="card.cardLink" #link>
            <div v-html="card.cardLink"></div>
          </template>
          <!-- eslint-enable -->
        </TCardH>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
dd {
  list-style-type: circle;
}

chevron {
  position: relative;
  display: block;
  height: 50px;
  /*height should be double border*/
}

.chevron::before,
.chevron::after {
  position: absolute;
  display: block;
  content: '';
  border: 25px solid transparent;
  /*adjust size*/
}

/* Replace all text `top` below with left/right/bottom to rotate the chevron */

.chevron::before {
  top: 0;
  border-top-color: #b00;
  /*Chevron Color*/
}

.chevron::after {
  top: -10px;
  /*adjust thickness*/
  border-top-color: #fff;
  /*Match background colour*/
}

@media only screen and (max-width: 400px) {
  .container-grid {
    display: grid;
    grid-template-columns: 0.5fr 9fr 0.5fr;
    grid-auto-rows: auto;
    column-gap: 5px;
    row-gap: 0px;
    padding: 2px;
  }

  .grid-item {
    padding: 10px;
    min-height: 5em;
  }

  .grid-item-header {
    padding: 10px;
    min-height: 0em;
    height: 1em;
  }

  .img-banner {
    min-height: 270px;
    max-height: 500px;
    max-width: 1000px;
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
    font-size: 1.1rem;

    position: absolute;
    bottom: 0.5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 401px) {
  .container-grid {
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
    grid-auto-rows: auto;
    column-gap: 20px;
    row-gap: 0px;
    padding: 10px;
  }

  .grid-item {
    padding: 20px;
    min-height: 5em;
  }

  .grid-item-header {
    padding: 20px;
    min-height: 0em;
    height: 1em;
  }

  .img-banner {
    min-height: 270px;
    max-height: 500px;
    max-width: 1000px;
    height: 30vw;
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
    font-size: 1.1rem;

    position: absolute;
    bottom: 0.5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

.text-header-1 {
  font-weight: bolder;
  font-size: x-large;
  font-family: 'Rockwell';
}

.colored-cosmic-latte {
  background-color: #fff8e7;
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

nav a:hover,
nav a.router-link-active,
nav a.router-link-exact-active {
  cursor: pointer;
  background-color: #fff8e7;
}
</style>
