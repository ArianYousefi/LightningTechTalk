({
    
    loadOptions: function (component, event, helper) {
        let itms = 
        [
			{id:'open',name:'Open', sequence : '1'},
			{id:'closed',name:'Closed', sequence : '2'},
			{id:'closedwon',name:'Closed Won', sequence : '3'}
		];

        component.set("v.items", itms);
        component.set("v.activeItem", itms[0]);
    },

    handleChange: function (cmp, event, helper) {
        let activeItem = event.getParam('value');
        let items = cmp.get("v.items");

		let data = items.filter(function(itm) {
		    return itm.name === activeItem;
		})[0];

		cmp.set("v.activeItem", data);
    }
})