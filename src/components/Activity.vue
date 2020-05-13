<template>
  <div class="activity-container">
    <h1>{{ msg }}</h1>

    <p>{{ currentActivity.activity }}</p>
    <p><strong>Type: </strong>{{ currentActivity.type }}</p>
    <p><strong>Participants: </strong>{{ currentActivity.participants }}</p>
    <p><strong>Price Rate: </strong>{{ currentActivity.price }}</p>
    
    <input @click="fetchActivity" type="button" value="Get New Activity!">
  </div>
</template>

<script>
export default {
  created() {
    this.fetchActivity()
  },
  data() {
    return {
      currentActivity: null,
    }
  },
  name: 'Activity',
  props: {
    msg: String
  },
  methods: {
    fetchActivity() {
        fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .then(result => {
            this.currentActivity = result
          })
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
