<template>
 

  <div style="background-color: rgb(52 162 227)">
  
    
    
      <home />
      <about />
      

     
     
 </div>
</template>

<script>
import home from "../components/HomeSection";
import about from "../components/AboutSection";

/* import pricing from "../components/PricingSection"; */


  export default {
    name: 'Home',
data: () => ({
  
    }),
    components: {
     about,
     home,
   
  /*   pricing, */
   
    },
  }
</script>

<style scoped>

</style>
