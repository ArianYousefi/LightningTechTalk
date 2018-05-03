({
    handleMyComponentEvent : function(component, event, helper) {
        var value = event.getParam("param");
        component.set("v.capturedEvent", "Received component event with param = "+ value);
    }
})