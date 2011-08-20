opus.Gizmo({
	name: "enlistedRanks",
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
			label: "Enlisted Ranks",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 50,
			h: "50"
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
					content: "<style type=\"text/css\">\n#ranks {\n    word-wrap: normal;\n    font-size: 15px;\n    color: lightgray;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.short {\n    font-weight: bold;\n    font-size: 18px;\n}\n.long {\n    font-size: 16px;\n}\n.chunk {\n    margin-bottom: 40px;\n}\n\n</style>\n<center>\n<div id=\"ranks\">\n\n<div class=\"chunk\"><img src=\"images/rank_ab.png\"><div class=\"short\">AB | E-1</div><div class=\"long\">Airman Basic</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_amn.png\"><div class=\"short\">Amn | E-2</div><div class=\"long\">Airman</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_a1c.png\"><div class=\"short\">A1C | E-3</div><div class =\"long\">Airman First Class</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_sra.png\"><div class=\"short\">SrA | E-4</div><div class=\"long\">Senior Airman</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_ssgt.png\"><div class=\"short\">SSgt | E-5</div><div class=\"long\">Staff Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_tsgt.png\"><div class=\"short\">TSgt | E-6</div><div class=\"long\">Technical Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_msgt.png\"><div class=\"short\">MSgt | E-7</div><div class=\"long\">Master Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_msgt_fs.png\"><div class=\"short\">MSgt | E-7</div><div class=\"long\">Master Sergeant (First Sergeant)</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_smsgt.png\"><div class=\"short\">SMSgt | E-8</div><div class=\"long\">Senior Master Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_smsgt_fs.png\"><div class=\"short\">SMSgt | E-8</div><div class=\"long\">Senior Master Sergeant (First Sergeant)</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_cmsgt.png\"><div class=\"short\">CMSgt | E-9</div><div class=\"long\">Chief Master Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_cmsgt_fs.png\"><div class=\"short\">CMSgt | E-9</div><div class=\"long\">Chief Master Sergeant (First Sergeant)</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_ccm.png\"><div class=\"short\">CCM | E-9</div><div class=\"long\">Command Chief Master Sergeant</div></div>\n\n<div class=\"chunk\"><img src=\"images/rank_cmsaf.png\"><div class=\"short\">CMSAF | E-9</div><div class=\"long\">Chief Master Sergeant of the Air Force</div></div>\n</div>\n</center>\n\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});