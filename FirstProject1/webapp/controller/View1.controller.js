sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("kagool.ewm.firstprojectFirstProject.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.View1
		 */
			onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel();
			},
			onButtonPress: function(oEvent){
				var tcode = this.getView().byId("idTcode").getValue();
				var variant = this.getView().byId("idVariant").getValue();
				this.oModel.setHeaders({
					"Tcode": tcode,
					"Variant": variant
				});
				debugger;
				this.oRouter.navTo("DetailPage",{
					tcode: tcode
				});
				// this.oModel.read("/inputdataSet", {
				// 	urlParameters: {"$expand": "MDATA"},
				// 	success: function(Data) {
				// 	console.log(Data);
				// 	},
				// 	error: function(error){
				// 		console.log(error);
				// 	}
					
				// });
				
			}
/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});