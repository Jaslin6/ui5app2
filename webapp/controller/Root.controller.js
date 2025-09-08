sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("ui5app2.controller.Root", {
        onInit: function() {
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