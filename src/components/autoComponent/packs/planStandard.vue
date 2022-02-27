<template>

   <div ref="card"
            class="card pricing-card pricing-card-highlighted pricing-data-pro"
          >
            <div ref="Front" class="Front">
          
              <div class="card-body">
                <i class="fas fa-award pricing-data-icon"></i>
                <p class="pricing-data-title">Standard</p>
                <h3 class="pricing-data-cost ml-auto" ref="price">----- DH</h3>
                <b>Garanties</b>
                <ul class="pricing-data-features">
                  <li v-for="garantie in data.listeGarantie" :key="garantie.idGarantie"   >

                 <v-checkbox 
                  v-if="garantie.acquise=='N'"  
               @change="checkgarantie(garantie.idGarantie)"
                  :disabled="disablecheckbox"
           
                  :value="garantie.idGarantie"
                
                  :label="garantie.libelleGarantie"
                
                   ></v-checkbox>

                 <template  v-if="garantie.acquise=='O'"> <i  class="fas fa-check"></i>{{garantie.libelleGarantie}}</template>
                  
                  
                  
                  </li>



                
                </ul>
                <div class="d-flex justify-content-around" v-if="action=='choisir'">
                 <button
                    class="btn btn-light "
                    @click="annuler"
                    type="button"
                  
                  >
                    Annuler
                  </button>
                    <button
                  
                    
                   @click="choisir"
                    type="button"
               class="btn pricing-data-purchase-btn"
                  >
                    Choisir
                  </button>
                  </div>



                <button
              v-if="action=='calculer'"
                  @click="calculer"
                  id="btncalculerStandart"
                  type="button"
                  class="btn pricing-data-purchase-btn"
                >
                  Calculer
                </button>
              </div>
           
            </div>






            <div ref="back" class="back">
              <div class="card-body">
                <v-form ref="form" class="form"  v-model="valid"
                 lazy-validation light>
                  <v-text-field
                  
               background-color="white"
                    class=""
                    label="valeur neuf"
                    placeholder="valeur neuf"
                     filled 
                    v-model="data.automobil.valeuraNeuf"
                      required
                       :rules="Rulesvaleurneuf"
                  ></v-text-field>


                  <v-text-field
                    class=""
                    label="valeur vénale"
                     placeholder="valeur vénale"
                        :rules="Rulesvaleurvenale"
                    required
                       background-color="white"
                     filled
                      v-model="data.automobil.valeurVenale"
                  ></v-text-field>

                      <v-text-field
                    class=""
                    label="valeur des glaces"
                    placeholder="valeur des glaces"
                    required
                       :rules="Rulesvaleurdesglaces"
                     v-model="data.automobil.valeurGlaces"
                        background-color="white"
                     filled
                  ></v-text-field>
                

                <div v-for="garantie in data.listeGarantie" :key="garantie.idGarantie" >
           
               <v-select v-if="garantie.idGarantie==6" label="Plafond collision"    
                :rules="RulesPlafondcollision"
                 :items="garantie.listeFranchise"
                 item-text="libelleFranchise"
                 item-value="idFranchise"
                v-model="data.automobil.idFranchiseChoisi"
                  background-color="white"
                  filled
                required></v-select>

                </div>


                 
              
<div class="d-flex justify-content-around">
  <button
                    class="btn btn-light "
                    @click="reset"
                    type="button"
                  
                  >
                    Annuler
                  </button>
                    <button
                    class="btn btn-light  "
                     :disabled="!valid"
                   @click="validate"
                    type="button"
                 id="btnvaliderstandart"
                  >
                    valider
                  </button>
</div>
            


                
                </v-form>
              </div>
            </div>
          </div>


   
    
</template>
<script>
 import AutoSimulationService from "../../../services/AutoSimulationService";

export default {
   
  data() {
    return {
  
      data: this.plan,
      listgaranties:this.plan.listeGarantie,
      selectedGaranties:[],
      loadingbutton:false,
      valid:true,
      action:'calculer',
      disablecheckbox:false,

      Rulesvaleurneuf:[
 v => !!v || 'valeur neuf required',
  v => (/^\d+$/.test(v)) || 'invalid number',

      ],
      Rulesvaleurvenale:[
 v => !!v || 'valeur venale required',
  v => (/^\d+$/.test(v)) || 'invalid number',
      ],
      Rulesvaleurdesglaces:[
         v => !!v || 'valeur des glaces required',
  v => (/^\d+$/.test(v)) || 'invalid number',
      ],
      RulesPlafondcollision:[
               v => !!v || 'valeur des glaces required',
      ]
  
    
    };
  },
   props: {
    plan:Object
  },
 
  methods: {
  reset () {
        this.$refs.form.reset()
         this.$refs.card.classList.remove("cardrotate");  
         document.getElementById("carloading").remove();  
        this.$refs.card.style.boxShadow =""; 
        this.$refs.back.style.display = "none";
          this.$refs.front.style.display = "block"; 
      },
      annuler(){
         this.$refs.form.reset()
        this.action="calculer"   
this.disablecheckbox=!this.disablecheckbox
this.$refs.price.innerText="----- DH"


      },
    calculer: function () {
console.log("calcul",this.data.listeGarantie)
   

     

 this.$refs.card.classList.add("cardrotate");
      this.$refs.back.style.display = "block";
      this.$refs.Front.style.display = "none"; 


  
     

     
 
               
    },
   
    checkgarantie(id){
    
    
        this.listgaranties=this.listgaranties.map(function(item) {
            if(item.idGarantie==id){


          if(item.acquise=='O') return {...item, acquise: 'N'};
             else if(item.acquise=='N') return {...item, acquise: 'O'};
              
              
            }
            
                      return item;
             }); 

 
     
    } , 
    
     getprice(){
       const interval = 400;
       var element=this.$refs.price 
        let startValue = 0;
         let endValue = parseFloat(this.data.cotisationTTC);
          let duration = Math.floor(interval / endValue);
          let increment=endValue/interval
       if(element)
       {
    let counter = setInterval(function () {
    startValue +=increment;
    element.textContent = startValue.toFixed(2) +'DH';

    
    if (Math.floor(startValue) ==   Math.floor(endValue) ) {
        element.textContent=endValue+'DH';
      clearInterval(counter);
    }
  }, duration);
 
      
       }
   
   
     },
     choisir(){},
      validate()
    {
console.log('data  validate',this.data.listeGarantie)
if( this.$refs.form.validate())
{
  console.log('valid')
  
  





  /*  this.loading=true;  */
               this.$refs.back.insertAdjacentHTML('afterbegin','<div  id="carloading"><b>Loading...</b> <svg  class="car" width="102" height="40" xmlns="http://www.w3.org/2000/svg"><g transform="translate(2 1)" stroke="black" fill="transparent" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="car__body" d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01" stroke-width="3"/><ellipse class="car__wheel--left" stroke-width="3.2" fill="white" cx="83.493" cy="30.25" rx="6.922" ry="6.808"/><ellipse class="car__wheel--right" stroke-width="3.2" fill="white" cx="46.511" cy="30.25" rx="6.922" ry="6.808"/><path class="car__line car__line--top" d="M22.5 16.5H2.475" stroke-width="3"/><path class="car__line car__line--middle" d="M20.5 23.5H.4755" stroke-width="3"/><path class="car__line car__line--bottom" d="M25.5 9.5h-19" stroke-width="3"/></g></svg></div>');
                this.$refs.card.style.boxShadow ="none"; 


      var   object={...this.data,"listeGarantie":this.listgaranties}
      
         /* this.selectedGaranties.forEach((element) => {
             var foundIndex = object.listeGarantie.findIndex(x => x.idGarantie== element);
             object.listeGarantie[foundIndex].acquise = 'O';

           }); */
      

      AutoSimulationService
        .calculer(object)
        
        .then(
          (res) => {
            console.log("calcul succès");
            console.log("response ",res);



this.data.automobil=res.data.automobil
this.data.cotisationTTC=res.data.cotisationTTC



           
         
    setTimeout(() => {
       this.$refs.card.classList.remove("cardrotate");  
            document.getElementById("carloading").remove();  
         this.$refs.card.style.boxShadow =""; 
         this.$refs.back.style.display = "none";
           this.$refs.Front.style.display = "block"; 
           this.getprice();
           this.action='choisir'
           this.disablecheckbox=!this.disablecheckbox

    }, 1000);
          
          },

         
          
        ).catch((error)=>{
          
            console.log("Erreur calcul");
            console.log(error.response);
         
     
        
        }); 



  }
         
        
              

    },
 
  },
 

} 
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

.pricing-data-title {
  font-size: 20px;
  color: #000;
  margin-bottom: 11px;
  font-weight: normal;
}

.pricing-data-cost {
  color: #000;
  font-weight: bold;
  margin-bottom: 14px;
}

.pricing-data-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 8px;
}

.pricing-data-pro .pricing-data-icon {
  color: #b08d57;
}

.pricing-data-features {
  list-style: none;
  padding-left: 0;
  font-size: 90%;
  line-height: 3;
white-space: nowrap;
  color: #303132;
      text-align: start;
    
}

.pricing-data-purchase-btn {
  color: #000;
  font-size: 16px;
  font-weight: bold;
  width: 145px;
  height: 45px;
  border-radius: 22.5px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;

}


.pricing-data-pro .pricing-data-purchase-btn {
  background-color: #7a633e;
  color: #fff;
}
.pricing-data-pro .pricing-data-purchase-btn:hover {
  box-shadow: 0 3px 0 0 #b08d57;
}
.pricing-data-pro .pricing-data-purchase-btn:active {
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


.pricing-data-pro {
  box-shadow: 0 2px 40px 0 #b08d57;
}

.pricing-data-pro .back {
  background-color: #f7e6cc;
}




.fa-check {
  margin-right: 2%;
}


/* @media (max-width: 963px) {
  .card {
    position: relative;
    top: 48px;
    width: 100%;
  }
} */







/* ::v-deep
  .theme--light.v-text-field
  > .v-input__control
  > .v-input__slot {
  margin: 0 !important;
} */





</style>
