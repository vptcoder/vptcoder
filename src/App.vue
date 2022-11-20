<template>
  <nav>
    <a @click="goBack"><i class="fa fa-chevron-left"></i> <i><u>Back</u></i></a> <span />
    <span /> | <router-link to="/">Code</router-link>
    <span /> | <router-link to="/shoot">Shoot</router-link>
    <span /> | <router-link to="/think">Think</router-link>
    <router-view />
  </nav>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
