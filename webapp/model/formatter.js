sap.ui.define([], () => {
	"use strict";

	return {
		getPercentage: function(oValue){
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
                percentageVal = (oValue / empSalary)*100;
            return percentageVal;
        },
    
         getState: function(oValue){
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
                percentageVal = (oValue / empSalary) * 100;
            if(percentageVal > 39)
                return "Error"
             else if(percentageVal > 29)
                return "Critical"
             else 
                return "Good"
            }
            }
});