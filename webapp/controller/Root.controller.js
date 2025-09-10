sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("ui5app2.controller.Root", {
        onInit: function() {

            //   let oData = {
               
            //   };

            //   let oModel = new sap.ui.model.json.JSONModel();
            //       oModel.setData(oData);
            //       this.getView().setModel(oModel, "oBankDetails");

            let oProfileModel = new sap.ui.model.json.JSONModel({
                profile:sap.ui.require.toUrl("ui5app2/image/fscm_logo.jpg")
            });
             this.getView().setModel(oProfileModel);

        },

        onOpenDialog: function(){

            if(!this.moreBankDetails){
                this.moreBankDetails = this.loadFragment({
                    name:"ui5app2.view.fragments.MoreDetails"
                
                });

                this.moreBankDetails.then(function(oDialog){
                    oDialog.open();
                })
            }
        },
        onCloseDialog: function(){
            this.byId("Dialog").close();
        }     
    });
});