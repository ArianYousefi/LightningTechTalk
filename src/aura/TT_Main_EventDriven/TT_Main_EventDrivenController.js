({
    
    loadOptions: function (component, event, helper) {
        let itms = 
        [
			{id:'open',name:'Open', sequence : '1'},
			{id:'closed',name:'Closed', sequence : '2'},
			{id:'closedwon',name:'Closed Won', sequence : '3'}
		];
        
        var pEvent = $A.get("e.c:TT_StatusInitApplicationEvent");
        pEvent.setParams({
            "activeItem"    :    itms[0],
            "items"         :    itms
            
        });
        pEvent.fire();

        var pEvent2 = $A.get("e.c:TT_StatusChangeApplicationEvent");
        pEvent2.setParams({
            "activeItem"    :    itms[0],
            "items"         :    itms
            
        });
        pEvent2.fire();

    }
})