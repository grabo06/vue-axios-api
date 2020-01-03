const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get(`https://picsum.photos/v2/list`)
    .then(response => {
      this.results = response.data;
      console.log(response.data);
    })
  }
});
