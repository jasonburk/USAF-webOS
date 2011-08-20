function FirstLaunchAssistant(argFromPusher) {
}

FirstLaunchAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	button1Tap: function(inSender, event) {
		this.controller.stageController.popScene();
		this.controller.stageController.pushScene("main");
	}
};