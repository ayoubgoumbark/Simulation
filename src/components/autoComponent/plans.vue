<template>




<div  class="plans container">
      
   
      <div class="row">



    <template  v-for="plan in plansData"  >
    
      <div v-if="plan.pack=='Basic'" class=" colBasicPlan col-md-4  " :key="plan.pack">
          <PlanBasic  :plan="plan" />
        </div>


       <div v-if="plan.pack=='Standard'" class="  colProPlan col-md-4  "  :key="plan.pack">
           <PlanStandard  :plan="plan" />
        </div> 
         
        <div  v-if="plan.pack=='Premium'" class="colEnterprisePlan col-md-4 "  :key="plan.pack">
         <PlanPremium  :plan="plan" />
        </div> 
    
    </template>




      </div>



</div>





  

</template>
<script>
import PlanBasic from "./packs/planBasic.vue";
import PlanStandard from "./packs/planStandard.vue";
import PlanPremium from "./packs/planPremium.vue";
/*   import plan from "./plan.vue"; */
export default {
    /*   components:{plan}, */
    data() {
        return {
          
        };
    },
    props: {
        plansData: Array
    },
    methods: {
  
    },
    components: { PlanBasic, PlanStandard, PlanPremium }
};
</script>
<style scoped lang="scss">






.col-md-4 {
  display: flex;
  justify-content: center;
}





@keyframes animateplans {
    from{
         transform: translateY(-100%);
    }

    to{
transform: translateY(0%);
 

    }
}



@media (max-width: 711px) {
  
  .row{
    transform: translateY(-100%);
  animation: 1s ease-in-out 0.5s animateplans forwards;
}
} 
 @media (min-width: 711px) {
  .colBasicPlan{
    transform: translateY(-100%);
   animation: 1s ease-in-out 0.5s animateplans forwards;
} 
  .colProPlan{
    transform: translateY(-100%);
   animation: 1s ease-in-out 0.7s animateplans forwards;
} 
 .colEnterprisePlan{
   transform: translateY(-100%);
   animation: 1s ease-in-out 0.9s animateplans forwards;
}
} 
.plans{
  position: absolute;
  top: 0;
  transform: translatex(-50%);
    left: 50%;
}






</style>
