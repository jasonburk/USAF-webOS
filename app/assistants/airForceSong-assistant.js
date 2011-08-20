function AirForceSongAssistant(argFromPusher) {
}

AirForceSongAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		this.audio1.load();
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	playSound: function(event, inSender) {
		this.objAudioPlayer = new Audio();
		this.objAudioPlayer.src = Mojo.appPath + 'audio/AirForceSong.mp3';
		this.objAudioPlayer.play();
   },
	button1Tap: function(inSender, event) {
		this.playSound(this.objAudioPlayer);
	}
};