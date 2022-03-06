<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      
     
    >
      <v-list >
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">X company</v-list-item-title>
            <v-list-item-subtitle>Simulateur</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense   >
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="navigate(link)"
        
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1" >{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
    
      class="px-15 expand"
   
    >

      <v-toolbar-title >
      <!--   <v-img src="@/assets/img/logo.png" max-width="50px" /> -->
      <v-btn text :color="coloritem"  >X company</v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
        :color="coloritem"
      />
      <div v-else>
       
        <v-btn :color="coloritem" rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contactez-nous</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 64px !important;
  
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "Home"],
      ["mdi-car", "Auto Simulation", "AutoSimulation"],
     
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
    coloritem:String
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    navigate: function (val) {
     
        
       this.$router.push({ name: val }).catch(()=>{})
     
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
