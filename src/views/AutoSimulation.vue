<template>
  <section>
  
    <v-row align="center" justify="center" class="fill-height"  >
      <v-col>
        <v-img dark src="@/assets/img/autoassurence.svg" width="700" class="mr-auto ml-auto">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey "></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col class="px-10">
        <div class="container">
          <h3 class="font-weight-bold mb-4">MAMDA & MCMA</h3>
          <p class="font-weight-light">
           Pour choisir la formule la plus adaptée à vos besoins, effectuer la simulation Automobile de Mamda Mcma Assurance !
          </p>

          <v-form ref="form" class light>
            <v-row>
              <v-col lg="6" sm="12" cols="12">
                <v-select label="combustion" 
                 :items="combustion"
                 item-text="LibCombustion"
                 item-value="CodeCombustion"
                 v-model="form.combustion"
                 required></v-select>
              </v-col>
                   <v-col lg="6" sm="12" cols="12">
                <v-select label="Mise Encirculation" 
                 :items="MiseEncirculation"
                 item-text="Text"
                 item-value="IsLess5Y"
                 v-model="form.isLessFiveYears"
                
                required></v-select>
              </v-col>

            

            </v-row>

            <v-row>
              <v-col lg="2" sm="4" cols="4">
                <v-subheader class="pl-0">Puissance</v-subheader>
              </v-col>
              <v-col lg="10" sm="8" cols="8">
     
                <v-slider thumb-label="always"   v-model="form.puissance" color="black" ></v-slider>
              </v-col>
            </v-row>

            <!--  <v-checkbox label="Do you agree?" required></v-checkbox> -->
            <v-row>
              <v-col md="6" offset-md="3" class="d-flex justify-center">
                <v-btn rounded outlined large :loading="loadingbutton" @click="valider" class="mt-5">
                  Valider
                  <v-icon class="ml-2">mdi-arrow-up</v-icon>
                </v-btn>
               
              </v-col>
            </v-row>
          </v-form>

          <!--   <button id="toggle" v-if="steps!='step1'" class="btn btn-lg btn-outline-light position-absolute top-50 start-50 translate-middle" @click="steps='step1'">GO</button> -->
        </div>
      </v-col>
    </v-row>

    <v-dialog  v-if="showplans" v-model="showplans" fullscreen hide-overlay mode="out-in" >
      <v-btn @click="closePlans" class="ma-2 btncloseplans"  small fab light>
        <v-icon color="dark">mdi-close</v-icon>
      </v-btn>
      <plans :plansData="plansData"></plans>
      
      <!-- <div style="flex: 1 1 auto;"></div> -->
    </v-dialog>
  </section>
</template>
<script>
import plans from "../components/autoComponent/plans";
import AutoSimulationService from "../services/AutoSimulationService";
export default {
  components: {
    plans
  },
  data() {
    return {

      showplans: false,
      loadingbutton: false,
      modal: false,
     combustion:[
       {"CodeCombustion":"D","LibCombustion":"DIESEL"},
       {"CodeCombustion":"E","LibCombustion":"ESSENCE"},
       {"CodeCombustion":"H","LibCombustion":"HYBRIDE"},
       {"CodeCombustion":"L","LibCombustion":"ÉLECTRIQUE"}
     ],
  
     MiseEncirculation:[
       {"IsLess5Y":"O","Text":"Moins de 5 ans"},
       {"IsLess5Y":"N","Text":"Plus de 5 ans"},
     
     ],
     
     form:{puissance:"",isLessFiveYears:'', combustion:''},


     plansData:[]

    };
  },

  methods: {
    closePlans() {
      this.showplans = false
    },
    valider() {
      this.loadingbutton = true





         AutoSimulationService
        .validerTarification(this.form)
        
        .then(
          (res) => {
            console.log("validate succès");
            console.log("responsesssssssssssssssssssss ",res);
            this.plansData=res.data
            this.loadingbutton = false
            this.showplans = true
            this.$vuetify.goTo(0);
          
          },

         
          
        ).catch((error)=>{
          
            console.log("Erreur validation");
            console.log(error.response);
             this.loadingbutton = false
            /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        
        });


    },
  
  }

};
</script>
<style scoped lang="scss">

section{
      height: 100vh;
       
    width: 100vw;
    background: #e5e5e5;
}
@media (max-width:480px)  { 
  section{
    height: 100%;
  
}
 }
::v-deep .theme--light.v-input {
  /*   display: inline-block; */

  margin: 0;
}

::v-deep .v-application .primary--text {
  color: #b08d57 !important;
}

::v-deep .theme--light.v-label {
  color: black !important;
}





::v-deep .theme--light.v-label {
  color: black !important;
}

::v-deep
  .theme--light.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  border-color: black !important;
}
::v-deep .theme--light.v-icon {
  color: black !important;
}
::v-deep .v-application .primary--text {
  color: black !important;
  caret-color: black !important;
}

::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  color: black !important;
}

::v-deep .theme--light.v-subheader {
  color: black;
}


.btncloseplans {
  position: sticky;
  top: 0px;
  left: 0;
  z-index: 3;
}
::v-deep .v-dialog {
  backdrop-filter: blur(3px);
  justify-content: center;
}


</style>
