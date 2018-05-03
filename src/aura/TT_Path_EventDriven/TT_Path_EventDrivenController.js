({
	setAttributes : function(component, event, helper) {
		component.set("v.selectedItem",  event.getParam("activeItem"));
		component.set("v.data",  event.getParam("items"));
	}
})