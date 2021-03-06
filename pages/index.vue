<template>
  <div class="app">
    <div class="container">
      <h1>Weather App</h1>
      <div class="enter-city">
        <input 
          type="text" 
          placeholder="Enter a city" 
          v-model="city"
          @keyup.enter="getWeather"
        />
      </div>
      <div class="weather">
        <h2>{{ location }}</h2>
        <h1>{{ deg }}&deg;</h1>
        <h2>{{ status }}</h2>
        <h3>{{ description }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: 'taipei',
      deg: '',
      status: '',
      description: '',
      location: '',
      apiKey: '4d6518a119bdca2651f98d1ca0e63f84',
      apiUrl: 'http://localhost:3000/api/',
      // apiUrl: 'https://weatherapp-nuxtjs-ssr.glitch.me/api/',
    }
  },
  methods: {
    getWeather() {
      fetch(`${this.apiUrl}?units=metric&q=${this.city}`)
      .then(res => { 
        console.log(res)
        return res.json()
      })
      .then(data => { 
        this.deg = data.main.temp
        this.status = data.weather[0].main
        this.description = data.weather[0].description
        this.location = data.name

        // console.log(data.msg)
        // alert(data.msg)
      })

      this.city = ''
    }
  },
  mounted() {
    this.getWeather()
  }
};
</script>

<style scoped>
.app {
  max-width: 768px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  height: 100vh;
  text-align: center;
}
.container h1 {
  margin-bottom: 1rem;
}
.enter-city input {
  font-size: 40px;
}
.weather {
  margin-top: 10px;
}
.weather h1 {
  font-size: 80px;
}
.weather h1,
h2,
h3 {
  margin: 0;
}
</style>
