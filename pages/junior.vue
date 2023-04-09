<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<script setup>
// const { data } = await useFetch(() => `/api/hello`)
// import cSharp from '../markdowns/c-sharp.md'
useHead({
  title: 'Junior Backend',
})
const cards = [
  {
    id: 0,
    cardRemark: 'Language, Essential',
    cardTitle: 'C#',
    cardLink:
      '<a target="_blank" href="https://www.w3schools.com/cs/index.php">w3schools</a>',
    cardDoc: '/c-sharp',
  },
  {
    id: 1,
    cardRemark: 'Web',
    cardTitle: 'Http Rest</i>',
    cardDoc: '/http-rest',
    cardLink:
      '<a target="_blank" href="https://en.wikipedia.org/wiki/Representational_state_transfer">Wikipedia</>',
    cardDefault: '<dd>- palceholder</dd>' + '<dd>- palceholder</dd>',
  },
  {
    id: 2,
    cardRemark: 'API',
    cardTitle: 'Http Soap (used by Microsoft WCF)</i>',
    cardDoc: '/protocol-soap',
    cardLink:
      '<a target="_blank" href="https://en.wikipedia.org/wiki/SOAP">Wikipedia</>',
    cardDefault: '<dd>- palceholder</dd>' + '<dd>- palceholder</dd>',
  },
  {
    id: 3,
    cardRemark: 'Web',
    cardTitle: 'Client-Server communication</i>',
    cardDefault: '<dd>- palceholder</dd>' + '<dd>- palceholder</dd>',
  },
  {
    id: 4,
    cardRemark: 'Test',
    cardTitle: 'Unit Testing</i>',
    cardDefault: '<dd>- palceholder</dd>' + '<dd>- palceholder</dd>',
  },
]
</script>

<template>
  <div class="hello">
    <div>
      <h1 class="page-title text-center font-serif text-3xl">
        Learning for Backend
      </h1>
      <div
        class="container flex flex-wrap flex-col items-center justify-center mx-auto my-2"
      >
        <div class="max-w-4xl w-full my-3">
          <div
            class="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal"
          >
            <p><b>Level 1 - </b><i>Aim for 50% of this level</i></p>
          </div>
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

<script>
definePageMeta({
  layout: 'default',
})
export default {
  data() {
    return {
      isHidden: false,
      // publicPath: process.env.BASE_URL,
    }
  },
  images: {
    banner: 'banner.jpg',
  },
}
</script>

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

.text-left {
  text-align: left;
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
  list-style-type: circle;
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
