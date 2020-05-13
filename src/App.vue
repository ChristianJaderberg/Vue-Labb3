<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="150px">
    <nav>
      <ul>
      <li><router-link to="/person">Person</router-link></li>
      <li><router-link to="/activity">Activity</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <user-name></user-name>
  </div>
</template>

<script>
import UserName from './components/UserName.vue'

export default {
  name: 'App',
  components: {
    UserName
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
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
  color: #42b983;
}
</style>
