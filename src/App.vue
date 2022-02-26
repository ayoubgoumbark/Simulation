<template>
  <v-app>
    <navigation :color="selectedstyle.color" :flat="flat" :coloritem="selectedstyle.coloritem"/>
    <v-main color="red" class=" ">
     <router-view  ></router-view>

    </v-main>
     <contact id="contact" />
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="#0f7ebf"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>

 .v-application{
  overflow: hidden;
}
@media screen and (min-width: 1000px) {
   .v-main {

 min-height: 100vh !important;
  padding-top: 0 !important;
} 
}

.v-main {
 
   height: auto;
   align-items: center;
}

</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import contact from "./components/ContactSection";

export default {
  name: "App",

  components: {
    navigation,
    foote,
contact
  },

  data: () => ({
    fab: null,
 
    flat: null,
    


     selectedstyle:{},

 
    

  }),



  watch: {
'$route':{
handler(){
      const top = window.pageYOffset || 0;
    if (top <= 64) {
      
      this.flat = true;

          this.selectedstyle=this.$route.meta.PrimaryNav 
         
    }
  
},
 immediate: true, deep: true

},


    fab(value) {

      if (value) {
    
        this.flat = false;
        this.selectedstyle=this.$route.meta.lightNav;
        
      } else {
        this.flat = true;
   this.selectedstyle= this.$route.meta.PrimaryNav   
       
      }
    },
  },

  methods: {

    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 64;
    //  console.log('top',top)
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
