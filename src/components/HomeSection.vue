<template>
  <section id="hero">

    <v-container  fluid class=" cover">
        <v-img src="@/assets/img/clouds.svg" id="clouds"    ></v-img>
        <v-img id="plan" src="@/assets/img/svgplan.svg"     ></v-img>




        <div class="birds">
<div class="bird-container bird-container--one" >
			<div class="bird bird--one"></div>
		</div>

		<div class="bird-container bird-container--two">
			<div class="bird bird--two"></div>
		</div>

		<div class="bird-container bird-container--three">
			<div class="bird bird--three"></div>
		</div>

		<div class="bird-container bird-container--four">
			<div class="bird bird--four"></div>
		</div>
        </div>



      <v-row  align="center" justify="center">
       
        <v-col cols="12" md="6" xl="6">
          <!--  class="hidden-sm-and-down" -->
          <v-img src="@/assets/img/mainhome.svg"></v-img>

        </v-col>


        <v-col cols="12" md="6" xl="6">
          <h1 class="display-2 font-weight-bold mb-4">Simulateur </h1>
          <h1 class="font-weight-light title" >
            Demandez Votre Assurance de chez vous a n'importe quel moment.
          </h1>
          <v-btn
           
             text
            large
            dark
          
            class="mt-5"
          >
            Découvrez nos offres
            <v-icon class="ml-2">mdi-arrow-down</v-icon>
          </v-btn>
          <!--          <div class="video d-flex align-center py-4">
                <a @click.stop="dialog = true" class="playBut">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="60px"
                    height="60px"
                    viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      id="XMLID_18_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      class="circle"
                      id="XMLID_17_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                </a>
                <p class="subheading ml-2 mb-0">Assista o vídeo</p>
              </div> -->
        </v-col>
      </v-row>
   
    </v-container>
   

<div id="underclouds"  >
 <v-img id="cloudsbanner"  src="@/assets/img/underclouds.svg"     ></v-img>

   <v-container   fluid id="features">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
            <v-col
              cols="12"
              sm="4"
              class="text-center colfeature"
              v-for="(feature, i) in features"
              :key="i"
              @click="navigate(feature.link)"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="152px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h3 class="font-weight-regular">{{ feature.title }}</h3>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</div>
 
  
  </section>
</template>

<script>
export default {
  data() {
    return {
 
      produit: "",
      features: [
        {
          img: require("@/assets/img/auto.png"),
          title: "AUTO",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          link: "AUTO",
        },
        {
          img: require("@/assets/img/moto.png"),
          title: "Moto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          link: "Moto",
        },
        {
          img: require("@/assets/img/MRH.png"),
          title: "MRH",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          link: "MRH",
        },
      ],
    };
  },
  watch: {
  
  },
  methods: {
    navigate: function (val) {
      this.produit = val;

   if( this.produit!="AUTO")return;

      if (this.produit == "AUTO") {
        this.$router.push("/AutoSimulation");
      }
      if (this.produit == "MRH") {
        this.$router.push("/MRHSimulation");
      }
    },
  

  
  },

};
</script>

<style lang="scss">

.cover {
  color: white;
  height: 100vh;
}
#underclouds{
position: relative;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   transition: all 0.2s ease;
 
 
}
#underclouds #cloudsbanner{
  position: absolute;
   
    width: 100%;
    z-index: 2;
    height: 100vh;
}
#features{
   
    position: absolute;
  z-index: 2;
    width: 100%;
   
}

    
#hero{
  animation :animate 2s ease forwards ;

}
@keyframes animate {
  from{
opacity: 0;
  }
  to{

opacity: 1;
  }
}

</style>

<style>
.colfeature {
  cursor: pointer;
}



#hero {
  z-index: 0;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
 
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.2);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}


 @media only screen and (min-width: 768px) {
  .cover{
  
  display: flex;
  }

      

} 



@media only screen and (max-width:  768px) {

.birds{
position: absolute;
 z-index: 3;


}
#hero{
  
  height: 220vh;
}

}



	.bird{
		background-image: url(../assets/img/bird-cells-new.svg);
		background-size: auto 100%;
		width: 88px;
		height: 125px;
		will-change: background-position;
		-webkit-animation-name: fly-cycle;
			animation-name: fly-cycle;
		-webkit-animation-timing-function: steps(10);
			animation-timing-function: steps(10);
		-webkit-animation-iteration-count:infinite;
			animation-iteration-count:infinite;
	}

	.bird--one{
		-webkit-animation-duration: 1s;
			animation-duration: 1s;
		-webkit-animation-delay: -0.5s;
			animation-delay: -0.5s;
	}

	.bird--two{
		-webkit-animation-duration: 0.9s;
			animation-duration: 0.9s;
		-webkit-animation-delay: -0.75s;
			animation-delay: -0.75s;
	}

	.bird--three{
		-webkit-animation-duration: 1.25s;
			animation-duration: 1.25s;
		-webkit-animation-delay: -0.25s;
			animation-delay: -0.25s;
	}

	.bird--four{
		-webkit-animation-duration: 1.1s;
			animation-duration: 1.1s;
		-webkit-animation-delay: -0.5s;
			animation-delay: -0.5s;
	}

	.bird-container{
		position: absolute;
		top: 20%;
		left: -10%;
		transform: scale(0) translateX(-10vw);
		will-change: transform;
		-webkit-animation-name: fly-right-one;
			animation-name: fly-right-one;
		-webkit-animation-timing-function: linear;
			animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
			animation-iteration-count: infinite;
	}

	.bird-container--one{
		-webkit-animation-duration: 15s;
			animation-duration: 15s;
		-webkit-animation-delay: 0;
			animation-delay: 0;
	}

	.bird-container--two{
		-webkit-animation-duration: 16s;
			animation-duration: 16s;
		-webkit-animation-delay: 1s;
			animation-delay: 1s;
	}

	.bird-container--three{
		-webkit-animation-duration: 14.6s;
			animation-duration: 14.6s;
		-webkit-animation-delay: 9.5s;
			animation-delay: 9.5s;
	}

	.bird-container--four{
		-webkit-animation-duration: 16s;
			animation-duration: 16s;
		-webkit-animation-delay: 10.25s;
			animation-delay: 10.25s;
	}

	@-webkit-keyframes fly-cycle{
		100%{
			background-position: -900px 0;
		}
	}

	@keyframes fly-cycle{
		100%{
			background-position: -900px 0;
		}
	}



	@keyframes fly-right-one{
		0%{
			transform: scale(0.3) translateX(-10vw);
		}
		10%{
			transform: translateY(2vh) translateX(10vw) scale(0.4);
		}
		20%{
			transform: translateY(0vh) translateX(30vw) scale(0.5);
		}
		30%{
			transform: translateY(4vh) translateX(50vw) scale(0.6);
		}
		40%{
			transform: translateY(2vh) translateX(70vw) scale(0.6);
		}
		50%{
			transform: translateY(0vh) translateX(90vw) scale(0.6);
		}
		60%{
			transform: translateY(0vh) translateX(110vw) scale(0.6);
		}
		100%{
			transform: translateY(0vh) translateX(110vw) scale(0.6);
		}
	}


	
section {
  position: relative;
}

#clouds{

  z-index:-1;
  position:absolute;
   left: 0;
   top: 130px;
   width: 100vw;
}

#plan {


z-index:1;
position:absolute; 
right:0;
top: 80px;
width: 100vw;
height:100vh;

}

</style>


