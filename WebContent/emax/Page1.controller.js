sap.ui.controller("emax.Page1" , {
	
	gotoPage2 : function(){
	
		// this == controler
		//this.getView()  === Page1.view.xml
		
		var oApp = this.getView().getParent();
		oApp.to("idview2");
	}
})