opus.Gizmo({
	name: "officerRanks",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: "#063C87"
	},
	chrome: [
		{
			name: "header1",
			label: "Officer Ranks",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0,
			styles: {
				bgColor: ""
			}
		},
		{
			name: "scroller1",
			scrollPosition: {
				left: 0,
				top: 0
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "html1",
					content: "<style type=\"text/css\">\n#ranks {\n    word-wrap: normal;\n    font-size: 15px;\n    color: lightgray;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.short {\n    font-weight: bold;\n    font-size: 18px;\n}\n.long {\n    font-size: 16px;\n}\n.chunk {\n    margin-bottom: 40px;\n}\n\n</style>\n<center>\n<div id=\"ranks\">\n\n<div class=\"chunk\"><img src=\"images/rank_sl.png\"><div class=\"short\">2d Lt | O-1</div><div class=\"long\">Second Lieutenant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_fl.png\"><div class=\"short\">1st Lt | O-2</div><div class=\"long\">First Lieutenant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_cap.png\"><div class=\"short\">Capt | O-3</div><div class =\"long\">Captain</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_maj.png\"><div class=\"short\">Maj | O-4</div><div class=\"long\">Major</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_lcol.png\"><div class=\"short\">Lt Col | O-5</div><div class=\"long\">Lieutenant Colonel</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_col.png\"><div class=\"short\">Col | O-6</div><div class=\"long\">Colonel</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_bg.png\"><div class=\"short\">Brig Gen | O-7</div><div class=\"long\">Brigadier General</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_mg.png\"><div class=\"short\">Maj Gen | O-8</div><div class=\"long\">Major General</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_lg.png\"><div class=\"short\">Lt Gen | O-9</div><div class=\"long\">Lieutenant General</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_g.png\"><div class=\"short\">Gen | O-10</div><div class=\"long\">General</div></div>\n\n</div>\n</center>\n\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 402,
					h: "100%"
				}
			]
		}
	]
});