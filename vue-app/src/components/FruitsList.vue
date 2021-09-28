<!--FruitsList.vue-->
<template>
  <div id="fruits-list">
    <h1>Fruits Name</h1>
    <ul>
      <li v-for="fruit in fruits" v-bind:key="fruit.id">
        {{ fruit.name }}
      </li>
    </ul>
  </div>
</template>

<script> export default { 
  // props : ['fruits']  
  computed : {
    fruits() {
      return this.$store.state.fruits
    }
  }    
}
</script>

<style></style>