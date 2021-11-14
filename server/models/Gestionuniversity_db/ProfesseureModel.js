import ProfesseureModelGenerated from "./generated/ProfesseureModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProfesseureModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProfesseureModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProfesseureModelGenerated,
  ...customModel
};
