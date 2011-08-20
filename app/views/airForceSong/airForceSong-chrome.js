opus.Gizmo({
	name: "airForceSong",
	layoutKind: "absolute",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: "#063C87"
	},
	components: [
		{
			name: "audio1",
			url: "audio/AirForceSong.mp3",
			onPlay: "",
			onEnded: "",
			type: "Palm.Mojo.Audio"
		}
	],
	chrome: [
		{
			name: "button1",
			ontap: "button1Tap",
			disabled: undefined,
			label: "Play Song",
			type: "Palm.Mojo.Button",
			l: 90,
			w: 140,
			t: "310",
			hAlign: "center"
		},
		{
			name: "scroller1",
			scrollPosition: {
				left: 0,
				top: 0
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 50,
			h: "270",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "html1",
					content: "<style type=\"text/css\">\n#song {\n    word-wrap: normal;\n    font-size: 13px;\n    color: lightgray;\n}\np {\n    margin: 0 0 4px 0;\n\n}\n\n</style>\n<div id=\"song\">\n<p>\nOff we go into the wild blue yonder,<br />\nClimbing high into the sun;<br />\nHere they come zooming to meet our thunder,<br />\nAt 'em boys, Give 'er the gun!<br />\nDown we dive, spouting our flame from under,<br />\nOff with one helluva roar!<br />\nWe live in fame or go down in flame. Hey!<br />\nNothing'll stop the U.S. Air Force!\n</p>\n</div>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: 270
				}
			]
		},
		{
			name: "header1",
			label: "Air Force Song",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0
		}
	]
});