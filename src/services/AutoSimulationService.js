import api from "./api";


export default {

 

  validerTarification(data){
    return  api.get("/TarificationAutoDto",data);
  }, 

  calculer(data){
    return  api.get ("/TarificationAutoStandard",data);
  }, 
 

  calculerPremium(data){
    return  api.get ("/TarificationAutoPremium",data);
  },
 
};
