<template>




<div class="card pricing-card pricing-plan-basic" ref="card">
            <div class="Front" ref="front">
              <div class="card-body">
                <i class="fas fa-medal pricing-plan-icon"></i>
                <p class="pricing-plan-title">Basic</p>
                <h3 class="pricing-plan-cost ml-auto " ref="price">----- DH</h3>
                <b>Garanties</b>
                <ul class="pricing-plan-features">
                <li v-for="garantie in plan.listeGarantie" :key="garantie.idGarantie">
                <v-checkbox v-if="garantie.acquise=='N'" :label="garantie.libelleGarantie" required></v-checkbox>
                <span v-if="garantie.acquise=='O'"> <i  class="fas fa-check"></i>{{garantie.libelleGarantie}}</span>
                </li>
                </ul>

                <button  @click="validate" type="button" class="btn pricing-plan-purchase-btn">
                  Choisir
                </button>
              </div>
            </div>

         <!--    <div class="back">
              <div class="card-body">
                <h3>hello</h3>
              </div>
            </div> -->
          </div>
      
   
    
</template>
<script>
export default {
   
  data() {
    return {
      loadingbutton:false,
 
     
    
    };
  },
   props: {
    plan:Object
  },
  mounted(){
this.getprice();
  },
 
  methods: {

    validate:function()
    {
              /*  this.loading=true; */
              this.$refs.front.insertAdjacentHTML('afterbegin','<div  id="carloading"><b>Loading...</b> <svg  class="car" width="102" height="40" xmlns="http://www.w3.org/2000/svg"><g transform="translate(2 1)" stroke="black" fill="transparent" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="car__body" d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01" stroke-width="3"/><ellipse class="car__wheel--left" stroke-width="3.2" fill="white" cx="83.493" cy="30.25" rx="6.922" ry="6.808"/><ellipse class="car__wheel--right" stroke-width="3.2" fill="white" cx="46.511" cy="30.25" rx="6.922" ry="6.808"/><path class="car__line car__line--top" d="M22.5 16.5H2.475" stroke-width="3"/><path class="car__line car__line--middle" d="M20.5 23.5H.4755" stroke-width="3"/><path class="car__line car__line--bottom" d="M25.5 9.5h-19" stroke-width="3"/></g></svg></div>');
                 
                   this.$refs.front.style.backgroundColor ="#f1f1f1"; 
                 this.$refs.card.style.boxShadow ="none"; 




               /*  setTimeout(() => {
        
         
                this.$router.push('/AUTOProduction')
               }, 2500);  */
          
  
    },
     getprice(){
       const interval = 400;
       var element=this.$refs.price 
        let startValue = 0;
         let endValue = parseFloat(this.plan.cotisationTTC);
          let duration = Math.floor(interval / endValue);
          let increment=endValue/interval
       if(element)
       {
    let counter = setInterval(function () {
    startValue +=increment;
    element.textContent = startValue.toFixed(2) +'   DH';

   
    if (Math.floor(startValue)==Math.floor(endValue)) {
       
        element.textContent=endValue+'   DH';
      clearInterval(counter);
    }
  }, duration);
 
      
       }
   
   
     }
  },
};
</script>
<style scoped lang="scss">





 ::v-deep #carloading{
   
z-index: 5;
position: absolute;
height: 14%;
width: 100%;
/* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgb(147 147 147 / 70%)), url('../../public/car.gif'); */
display: flex;
justify-content: center;
align-items: center;
background-color:inherit;
animation:loadinganimate 0.5s ease-in-out forwards ;  
bottom: 0;
left: 0;
 
}
@keyframes loadinganimate {
  from {
    height: 14%;
  }
  to{
       height: 100%;
       
  }
}
 ::v-deep #carloading .car  {
 &__body {
  animation: shake 0.2s ease-in-out infinite alternate;
 }

 &__line {
  transform-origin: center right;
  stroke-dasharray: 22;
  animation: line 0.8s ease-in-out infinite;
  animation-fill-mode: both;

  &--top {
   animation-delay: 0s;
  }

  &--middle {
   animation-delay: 0.2s;
  }

  &--bottom {
   animation-delay: 0.4s;
  }
 }
}

@keyframes shake {
 0% {
  transform: translateY(-1%);
   transform: translateX(-1%);
 }
 100% {
    transform: translateX(-30%);
  transform: translateY(8%);
 }
}

@keyframes line {
 0% {
  stroke-dashoffset: 22;
 }

 25% {
  stroke-dashoffset: 22;
 }

 50% {
  stroke-dashoffset: 0;
 }

 51% {
  stroke-dashoffset: 0;
 }

 80% {
  stroke-dashoffset: -22;
 }

 100% {
  stroke-dashoffset: -22;
 }
}




.pricing-table-subtitle {
  margin-top: 68px;
  font-weight: normal;
}


.pricing-table-title {
  font-weight: bold;
  margin-bottom: 68px;
}

.pricing-plan-title {
  font-size: 20px;
  color: #000;
  margin-bottom: 11px;
  font-weight: normal;
}

.pricing-plan-cost {
  color: #000;
  font-weight: bold;
  margin-bottom: 14px;
}

.pricing-plan-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 8px;
}
.pricing-plan-basic .pricing-plan-icon {
  color: rgb(192, 192, 192);
}



.pricing-plan-features {
  list-style: none;
  padding-left: 0;
  font-size: 90%;
  line-height: 3;
white-space: nowrap;
  color: #303132;
      text-align: start;
    
}

.pricing-plan-purchase-btn {
  color: #000;
  font-size: 16px;
  font-weight: bold;
  width: 145px;
  height: 45px;
  border-radius: 22.5px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;

}
.pricing-plan-basic .pricing-plan-purchase-btn {
  background-color: #919191;
  color: #fff;
}
.pricing-plan-basic .pricing-plan-purchase-btn:hover {
  box-shadow: 0 3px 0 0 rgb(192, 192, 192);
}
.pricing-plan-basic .pricing-plan-purchase-btn:active {
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
  box-shadow: none;
}







.card {
  border-radius: 10px;
  
  text-align: center;
   /* height: 100% ; */
   
  width: 80%;
 transition: all 1s ease-in-out;
 
  transform: perspective(800px);
  transform-style: preserve-3d;
}


@media (max-width: 711px) {
  .card{
margin-bottom: 9%;
}}
.cardrotate {
  
  transform: rotatey(180deg);
 
  
}

.Front {
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
 
  /*  background: linear-gradient(45deg, #6b2912, transparent); */
}

.back {
  height: 100% !important;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  text-align: center;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;

  z-index: 1;

  transform: rotatey(180deg);
  display: none;
}

.pricing-card .card-body {
 width: 100%;
  height: 100%;
}

.pricing-plan-basic {
  box-shadow: 0 2px 40px 0 silver;
}

.pricing-plan-basic .back {
  background-color: #f1f1f1;
}



.fa-check {
  margin-right: 2%;
}














</style>
