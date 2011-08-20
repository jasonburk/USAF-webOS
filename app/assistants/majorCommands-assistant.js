function MajorCommandsAssistant(argFromPusher) {
}

MajorCommandsAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};