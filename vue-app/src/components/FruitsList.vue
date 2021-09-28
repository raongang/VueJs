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
  // ES5에서는 fruits : function(){} 인데 ES2015에서 function을 빼고도 사용가능
}
</script>

<style></style>