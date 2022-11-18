<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="hello">
    <div v-show="!isHidden">
      <h1>vptcoder</h1>
      <i
        >the weird, the strange, the
        <a href="https://www.google.com/search?q=whimsical" target="_blank">whimsical</a>
        like a cup of
        <a href="https://www.google.com/search?q=cosmic+latte" target="_blank"
          >cosmic latte</a
        >.</i
      >
      <div class="container-grid">
        <!-- Set 1 -->
        <div class="grid-item-header"></div>
        <div class="grid-item-header text-left text-header-1 colored-cosmic-latte">
          Things I'm doing.
        </div>
        <div class="grid-item-header"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-left">
          <dl>
            <dt><i>Now</i> ➡️ Serverless: AWS, Azure</dt>
            <dd>- MongoDB</dd>
            <dd>- APIs → AWS Lambda</dd>
            <dd>- Vue</dd>
          </dl>
        </div>
        <div class="grid-item"></div>

        <!-- Set 2 -->
        <div class="grid-item-header text-left"></div>
        <div class="grid-item-header text-left text-header-1 colored-cosmic-latte">
          Things I used to do.
        </div>
        <div class="grid-item-header"></div>

        <div class="grid-item"></div>
        <div class="grid-item text-left">
          <dl>
            <dt><i>2020 - 2021</i> ➡️ School: Big Data</dt>
            <dd>- Machine Learnings & Data Mining → Naive Bayes, SVM, ANNs...</dd>
            <dd>- BPMN</dd>
            <dd>- DB Tuning</dd>
            <dd>- MongoDB, Oracle SQL, Hadoop</dd>

            <dt><i>2017 - 2019</i> ➡️ Migration: On-prem → Private Cloud</dt>
            <dd>- HA/DR</dd>
            <dd>- Windows</dd>
            <dd>- SFTP</dd>
            <dd>- Hardening</dd>

            <dt><i>2016 - 2017</i> ➡️ Web Portals</dt>
            <dd>- WebForm</dd>
            <dd>- SharePoint</dd>
            <dd>- WCF</dd>
            <dd>- SQL</dd>

            <dt><i>2015 - 2016</i> ➡️ Models: Regression, Projection.</dt>
            <dd>- Excel</dd>
            <dd>- WinForm</dd>

            <dt>
              <i>2014 - 2015</i> ➡️ IoT, collects mosquito data:
              <a
                href="https://imaginecup.microsoft.com/en-us/Team/6cdfbaee-c550-48d0-a555-16ae2948f1db"
                >Mozter</a
              >,
              <a href="https://imaginecup.microsoft.com/en-us/winners/2015WorldFinalists"
                >and people liked it</a
              >
            </dt>
            <dd>- Python</dd>
            <dd>- Raspberry Pi</dd>
            <dd>- Azure Storage</dd>
            <dd>- FFT</dd>
          </dl>
        </div>
        <div class="grid-item"></div>

        <!-- Set 3 -->
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
.hello {
}

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
  grid-template-columns: 1fr 5fr 1fr;
  grid-auto-rows: auto;
  column-gap: 20px;
  row-gap: 5px;
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
