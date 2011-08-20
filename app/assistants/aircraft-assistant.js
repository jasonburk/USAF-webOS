function AircraftAssistant(argFromPusher) {
}

AircraftAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		this.controller.setupWidget('web-view', {url:this.link});
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	button1Tap: function(inSender, event) {
		this.controller.stageController.pushScene("thunderbirdsSchedule");
	}
};