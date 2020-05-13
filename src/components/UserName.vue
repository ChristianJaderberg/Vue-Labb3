<template>
  <div class="username-container">
    <h1>Your current name: {{ userName }}</h1>
    <label for="user-name">Enter your name: </label>
    <input id="user-name" v-model="userName">
  </div>
</template>

<script>
export default {
  name: 'UserName',
  computed: {
    userName: {
      get() {
        return this.$store.state.userName
      },
      set(userName) {
        this.$store.commit('setUserName', userName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
