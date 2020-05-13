<template>
  <div class="person-container">
    <h1>{{ msg }}</h1>
    
    <img v-bind:src="currentPerson.picture.large">

    <h3>Email</h3>    
    <p>{{ currentPerson.email }}</p>
    <h3>Name</h3>
    <p>{{ currentPerson.name.title + " " + currentPerson.name.first + " " + currentPerson.name.last }}</p>
    <h3>Location</h3>
    <p>{{ currentPerson.location.city + ", " + currentPerson.location.country }}</p>

    <input @click="fetchPerson" type="button" value="Get New Person!">
  </div>
</template>

<script>
export default {
  created() {
    this.fetchPerson()
  },
  data() {
    return {
      currentPerson: null,
    }
  },
  name: 'Person',
  props: {
    msg: String
  },
  methods: {
    fetchPerson() {
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(result => {
            this.currentPerson = result.results[0]
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-container {
  margin-bottom: 50px;
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
  color: #42b983;
}
</style>
