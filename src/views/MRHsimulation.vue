<template>
  <section>
    <v-row align="center" justify="center" class="fill-height"  >
      <v-col>
        <v-img dark src="@/assets/img/home.svg" width="500" class="mr-auto ml-auto">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey "></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col class="px-10">
        <div class="container">
          <h3 class="font-weight-bold mb-4">X Company</h3>
          <p class="font-weight-light">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores porro voluptatibus
            delectus nam optio harum!
          </p>

          <v-form ref="form" class light  v-model="valid">
            <v-row>
              <v-col lg="6" sm="12" cols="12">
                <v-select label="valeur Batiment" 
                 :items="Data.listeBatiment"
               
                 item-text="valeurBatiment"
                 item-value="idValeurBatiment"
                 v-model="Data.idValeurBatimentChoisi"
                    :rules="valeurBatimentRules"
                 required></v-select>
              </v-col>
                   <v-col lg="6" sm="12" cols="12">
                  <v-text-field
                    class=""
                    label="Valeur Contenue"
                  
                    required
                     :rules="ValeurContenuRules"
                     v-model="selectedValeurContenue"
                      disabled
                     
                  ></v-text-field>
              </v-col>

            

            </v-row>





               <v-row>
              <v-col lg="6" sm="12" cols="12">
                <v-select label="Categorie" 
                 :items="Data.listeCategorie"
                 item-text="valeurCategorie"
                 item-value="idCategorie"
                 v-model="Data.idValeurCategorieChoisie"
                   :rules="CategorieRules"
                 required></v-select>
              </v-col>
                   <v-col lg="6" sm="12" cols="12">
                   <v-select label="Type Contenu" 
                 :items="Data.listePropriete"
                 item-text="typePropriete"
                 item-value="idTypePropriete"
                 v-model="Data.idValeurTypePropieteChoisi"
                    :rules="TypeContenuRules"
                 required></v-select>
              </v-col>

            

            </v-row>



           <v-row>
              <v-col lg="6" sm="12" cols="12">
              <v-checkbox 
                true-value="O"
                false-value="N"
                v-model="Data.atBonneAcquise"
                label="AT Bonne"
                
                   >
                   </v-checkbox>
              </v-col>
                   <v-col lg="6" sm="12" cols="12">
                  <v-text-field
                    class="p-0"
                    label="Nombre"
                     v-if="Data.atBonneAcquise=='O'"
                    required
                    
                     v-model="Data.nombreBonne"
                    :rules="NombreRules"
                     
                  ></v-text-field>
              </v-col>

            

            </v-row>

 <v-row>
              <v-col md="6" offset-md="3" class="d-flex justify-center">
                <v-btn    :disabled="!valid" rounded outlined large :loading="loadingbutton" @click="valider" class="mt-5">
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

import plans from "../components/plansMRHcomponent/plans.vue";
import MRHsimulationService from "../services/MRHsimulationService";
export default {
  components: {
    plans
  },
  data() {
    return {
  valid:true,
      showplans: false,
      loadingbutton: false,
      modal: false,
      Data:{},
     plansData:{},

valeurBatimentRules:[
 v => !!v || 'valeur Batiment required',
 

      ],
   CategorieRules:[
 v => !!v || 'Categorie required',
 

      ],
      TypeContenuRules:[
 v => !!v || 'Type Contenu required',
 

      ],
            ValeurContenuRules:[
 v => !!v || ' Valeur Contenu required',
 

      ],
      NombreRules:[
 v => !!v || ' Nombre required',
   v => (/^\d+$/.test(v)) || 'invalid number',

      ],
    };
  },

  methods: {
    closePlans() {
      this.showplans = false
    },
    valider() {
      this.loadingbutton = true





 MRHsimulationService
        .getCotisationMRH(this.Data)
        
        .then(
          (res) => {
            console.log("validate succès");
            console.log("response ",res);
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
    
getTarification(){
MRHsimulationService
        .getTarification()
        
        .then(
          (res) => {
            console.log("get succès");
            console.log("response ",res);
           this.Data=res.data
          
          },

         
          
        ).catch((error)=>{
          
            console.log("Erreur validation");
            console.log(error.response);
      
            /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        
        });



}
  
  },

computed: {
  selectedValeurContenue () {
      if(this.Data.listeBatiment){
      var obj=this.Data.listeBatiment.find(item => item.idValeurBatiment === this.Data.idValeurBatimentChoisi)
 
      return obj ?  obj.valeurContenu:'' 
   
  }
  
    return ""
  }

},
created(){
this.getTarification()
 

}


  
};
</script>
<style scoped lang="scss">
::v-deep .theme--light.v-input {
  /*   display: inline-block; */
  margin: 0;
}

::v-deep .v-application .primary--text {
  color: #b08d57 !important;
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
