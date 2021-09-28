<template>
  <div id="app">
    <h1 id="app-title">Fruits List</h1>
    <div id="fruits-table">
      <!--  vuex 로 전환 
      <fruits-list v-bind:fruits="fruits"></fruits-list>
      <fruits-price :fruits="fruits"></fruits-price>
      -->

      <fruits-list></fruits-list>
      <fruits-price></fruits-price>

    </div>
  </div>
</template>

<script>
 import FruitsList from './components/FruitsList.vue'
 import FruitsPrice from './components/FruitsPrice.vue'

export default {
  /*
  data () {
    return {
      fruits: [
        { id: 1, name: 'Apple', price: 30 },
        { id: 2, name: 'Banana', price: 40 },
        { id: 3, name: 'Mango', price: 50 },
        { id: 4, name: 'Orange', price: 60 },
        { id: 5, name: 'Tomato', price: 70 },
        { id: 6, name: 'Pineapple', price: 80 }
      ]
    }
  }, */
  name: 'app',

  components: {
    'fruits-list': FruitsList,
    'fruits-price': FruitsPrice
  }
}

</script>

<style>
@import url("css/app.css")
</style>
