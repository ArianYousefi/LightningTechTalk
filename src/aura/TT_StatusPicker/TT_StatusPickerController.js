({
    handleChange: function (cmp, event, helper) {
        let activeItem = event.getParam('value');
        let items = cmp.get("v.items");

		let data = items.filter(function(itm) {
		    return itm.name === activeItem;
		})[0];

        var pEvent = $A.get("e.c:TT_StatusChangeApplicationEvent");
        pEvent.setParams({
            "activeItem"    :    data,
            "items"         :    items
            
        });
        pEvent.fire();
    },

	setAttributes : function(component, event, helper) 
	{
		console.log('*** event.getParam("items") ' + event.getParam("items"));
		component.set("v.items",  event.getParam("items"));
	}
})