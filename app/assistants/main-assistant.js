function MainAssistant(argFromPusher) {
}

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this); 
	},

	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	


	
	//Push "Enlisted Ranks" Scene
	button2Tap: function(inSender, event) {
		this.controller.stageController.pushScene("enlistedRanks");
	},
	//Push "Officer Ranks" Scene
	button3Tap: function(inSender, event) {
		this.controller.stageController.pushScene("officerRanks");
	},
	//Push "Major Commands Scene
	button4Tap: function(inSender, event) {
		this.controller.stageController.pushScene("majorCommands");
	},
	//Push "Aircraft" Scene
	button5Tap: function(inSender, event) {
		this.controller.stageController.pushScene("aircraft");
	},
	//Push "Air Force Song" Scene
	button1Tap: function(inSender, event) {
		this.controller.stageController.pushScene("airForceSong");
	},
	//Push "Links" Scene
	button6Tap: function(inSender, event) {
		this.controller.stageController.pushScene("links");
	},
	//Push "Decorations" Scene
	button7Tap: function(inSender, event) {
		this.controller.stageController.pushScene("decorations");
	},
	//Push "Acronyms" Scene
	button8Tap: function(inSender, event) {
		this.controller.stageController.pushScene("acronyms");
	},
	//Push "Military Time" Scene
	button9Tap: function(inSender, event) {
		this.controller.stageController.pushScene("militaryTime");
	},
	//Push "AF RSS" Scene
	button10Tap: function(inSender, event) {
		this.controller.stageController.pushScene("afRSS");
	}

};