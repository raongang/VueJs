<!--FruitsPrice.vue-->
<template>
  <div id="fruits-price">
    <h1>Fruits Price</h1>
    <ul>
      <li v-for="fruit in fruits" v-bind:key="fruit.id">
        {{ fruit.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 // props : ['fruits']
  computed : {
    
    fruits() {        
      return this.$store.state.fruits
    }
  }    

}
</script>

<style></style>