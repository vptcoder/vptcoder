<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="hello">
    <div v-show="!isHidden">
      <h1>vptcoder</h1>
      <div class="img-banner">
        <div class="overlay-img">
          <i
            >the weird, the strange, the
            <a href="https://www.google.com/search?q=whimsical" target="_blank"
              >whimsical</a
            >
            like a cup of
            <a href="https://www.google.com/search?q=cosmic+latte" target="_blank"
              >cosmic latte</a
            >.</i
          >
          <br />
          <b>person</b>
          <br />singapore <br />
        </div>
      </div>
      <div class="container-grid">
        <!-- Set 3 -->
        <div class="grid-item-header"></div>
        <div class="grid-item-header text-left text-header-1 colored-cosmic-latte">
          To do
        </div>
        <div class="grid-item-header"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-left">
          <dl>
            <dt><i>2022 - ?</i> ➡️ <b>E-commerce Hosting</b>?</dt>
            <dd>- ?</dd>
            <dd>- ?</dd>
            <dd>- ?</dd>
            <dd>- ?</dd>
          </dl>
        </div>
        <div class="grid-item"></div>

        <!-- Set 1 -->
        <div class="grid-item-header"></div>
        <div class="grid-item-header text-left text-header-1 colored-cosmic-latte">
          Doing
        </div>
        <div class="grid-item-header"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-left">
          <dl>
            <dt><i>Now</i> ➡️ <b>Serverless: AWS</b></dt>
            <dd>- MongoDB</dd>
            <dd>- APIs → AWS Lambda, Node.js</dd>
            <dd>- Vue</dd>
          </dl>
        </div>
        <div class="grid-item"></div>

        <!-- Set 2 -->
        <div class="grid-item-header text-left"></div>
        <div class="grid-item-header text-left text-header-1 colored-cosmic-latte">
          Done
        </div>
        <div class="grid-item-header"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-left">
          <dl>
            <dt><i>2020 - 2021</i> ➡️ <b>School: Big Data</b></dt>
            <dd>- Machine Learnings & Data Mining → Naive Bayes, SVM, ANNs...</dd>
            <dd>- BPMN</dd>
            <dd>- DB Tuning</dd>
            <dd>- MongoDB, Oracle SQL, Hadoop</dd>
            <br />
            <dt><i>2017 - 2019</i> ➡️ <b>Migration: On-prem → Private Cloud</b></dt>
            <dd>- HA/DR</dd>
            <dd>- Windows</dd>
            <dd>- SFTP</dd>
            <dd>- Hardening</dd>
            <br />
            <dt><i>2016 - 2017</i> ➡️ <b>Web Portals</b></dt>
            <dd>- WebForm</dd>
            <dd>- SharePoint</dd>
            <dd>- WCF</dd>
            <dd>- SQL</dd>
            <br />
            <dt><i>2015 - 2016</i> ➡️ <b>Models: Regression, Projection</b></dt>
            <dd>- Excel, VBA</dd>
            <dd>- WinForm</dd>
            <br />
            <dt>
              <i>2014 - 2015</i> ➡️ <b>IoT, collects mosquito data</b> →
              <a
                href="https://imaginecup.microsoft.com/en-us/Team/6cdfbaee-c550-48d0-a555-16ae2948f1db"
                >Mozter</a
              >, and
              <a href="https://imaginecup.microsoft.com/en-us/winners/2015WorldFinalists"
                >people liked it</a
              >.
            </dt>
            <dd>- Python</dd>
            <dd>- Raspberry Pi</dd>
            <dd>- Azure Storage</dd>
            <dd>- FFT</dd>
            <br />
            <dt><i>199? - 2014</i> ➡️ <b>Huh? It's a blur</b></dt>
            <dd>- Learning?</dd>
            <dd>- Sleeping?</dd>
          </dl>
        </div>
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
      publicPath: process.env.BASE_URL,
    };
  },
  images: {
    banner: "banner.jpg",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
dd {
  list-style-type: circle;
}
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

.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-header-1 {
  font-weight: bolder;
  font-size: x-large;
  font-family: "Rockwell";
}

.img-banner {
  min-height: 270px;
  max-height: 600px;
  max-width: 60%;
  height: 35vw;
  text-align: center;
  margin: auto;
  background-image: url("../assets/banner.jpg");
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
