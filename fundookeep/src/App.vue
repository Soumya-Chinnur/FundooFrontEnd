<template>



    <router-view />

</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: white
}
// @font-face {
//   font-family: googlefonts;
//   src: url("../../assets/GoogleSans-Regular.ttf");
// }
#nav {
  padding: 30px;

  a {
      font-family: "googlefonts", arial, sans-serif;

    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
