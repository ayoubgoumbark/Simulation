<template>
  <section class="pb-8" :style="{backgroundColor:selectedstyle.color,color:selectedstyle.coloritem }" >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Contactez-nous</h1>
              <h3 class="font-weight-light mt-3">
               Découvrez les offres et simulation des tarifs des assurances : auto, moto, habitation, santé, entreprise chez AssurenceAssurance.
              </h3>
             
              <h3 class="font-weight-light mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">
                Email: ayoub.goumbark@email.com
              </h3>
            </v-col>
            <v-col  class="cloudformcontainer" cols="12" sm="7">




 <v-img id="cloudform" src="@/assets/img/cloudform.svg"     >
  
 </v-img>
 <v-form  ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nome"
                    required
                  outlined
                   dense
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    outlined
                    dense
                   
                ></v-text-field>

                <v-textarea
                auto-grow
                outlined
                rows="1"
                row-height="15"
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Mensage"
                    required
                   
                   dense
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                    small
                    
                >
                  Enviar
                </v-btn>
              </v-form>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>
<script>
// import {db} from '@/main'

export default {
  data: () => ({
       selectedstyle:{},
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/
    }
  },
  
  watch: {
'$route':{
handler(){
     
   this.selectedstyle=this.$route.meta.PrimaryNav 
         
},
 immediate: true, deep: true

},
  }
};
</script>
<style scoped>


.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}






.cloudformcontainer{

display: flex;
justify-content: center;
position:relative;
align-items: center;

}



#cloudform{
position:relative;

}


.cloudformcontainer form {
position:absolute;


}




@media only screen and (max-width: 600px) {
  .v-responsive{
  max-width: 184% !important;
}
}


</style>