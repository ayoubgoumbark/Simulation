import api from "./api";


export default {

 

  getTarification(data){
    return  api.get ("/risquedivers/TarificationMRH",data);
  }, 
  
  getCotisationMRH(data){
    return  api.post ("/risquedivers/CotisationMRH",data);
  }, 

/*   calculer(data){
    return  api.post ("/TarificationAutoStandard",data);
  }, 
 

  calculerPremium(data){
    return  api.post ("/TarificationAutoPremium",data);
  }, */
 
};
