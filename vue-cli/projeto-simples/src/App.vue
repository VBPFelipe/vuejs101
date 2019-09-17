<template>
  <!-- <div>Olá Vue!</div> -->
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'" >Alterar</button>
  </div>
</template>

<script>
//exporta um objeto, que corresponde a um vue instance
  export default {
    /*
      watch
      computed
      data
      methods
    */
    data : function() {
      return{
        titulo: 'teste data usando VueJS'
      }
    }
  }

</script>

<style>
  #app {
    background-color: chocolate;
    color: #fff;
  }
</style>


<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
// </script>

// <style>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>
-->

