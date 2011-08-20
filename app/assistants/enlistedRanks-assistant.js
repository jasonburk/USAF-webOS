function EnlistedRanksAssistant(argFromPusher) {
}

EnlistedRanksAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};