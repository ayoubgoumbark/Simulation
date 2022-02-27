import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import AutoSimulation from "../views/AutoSimulation.vue";
import MRHsimulationVue from "../views/MRHsimulation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{

      lightNav:{
        color: "white",
        coloritem:"black",
     },    
     PrimaryNav:{
        color: "rgb(52 162 227)",
        coloritem:"white",
     },
    


    }
  },
  {
    path: "/AutoSimulation",
    name: "AutoSimulation",
    component: AutoSimulation,
    meta:{

      lightNav:{
        color: "#e5e5e5",
        coloritem:"black",
     },    
     PrimaryNav:{
      color: "#e5e5e5",
      coloritem:"black",
     }


    }
  },
  {
    path: "/MRHsimulation",
    name: "MRHsimulation",
    component: MRHsimulationVue,
    meta:{

      lightNav:{
        color: "#e5d7ca",
        coloritem:"black",
     },    
     PrimaryNav:{
      color: "#e5d7ca",
      coloritem:"black",
     },
    


    }
  },
 
 
 
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});


export default router;
