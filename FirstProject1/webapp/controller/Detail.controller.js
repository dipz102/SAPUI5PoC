sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("kagool.ewm.firstprojectFirstProject.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.Detail
		 */
			onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this._routePatterMatch, this);
			},
			
			_routePatterMatch: function(oEvent){
				this.oModel = this.getView().getModel();
				debugger;
				var that = this;
				var inputdata = oEvent.getParameter("arguments").tcode;
				this.getView().byId("idTcodeText").setText(inputdata.toString());
				var sUrl = "/inputdataSet";
				this.oModel.read(sUrl, {
					urlParameters: {"$expand": "MDATA"},
					success: function(Data) {
						that.check(Data);
					console.log(Data);
					},
					error: function(error){
						console.log(error);
					}
					
				});
				// this.getView().bindElement({
				// 	path: "/" + inputdata
				// });
				// this.getView().byId
			},
			check : function(Data){
				// var data = {};
				// var data;
				// var data = JSON.stringify(Data.results[0].MDATA);
				
				var	data = Data.results[0].MDATA;
				// this.getView().byId("List").setItems(data);
				var model = new sap.ui.model.json.JSONModel(data);
				// model.setData(Data.results[0].MDATA);
				this.getView().setModel(model, "MDATA");
				debugger;
				
			}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kagool.ewm.firstprojectFirstProject.view.Detail
		 */
			// onExit: function() {
			// debugger;
			// }

	});

});