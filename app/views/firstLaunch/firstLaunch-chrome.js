opus.Gizmo({
	name: "firstLaunch",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: "#063C87"
	},
	chrome: [
		{
			name: "pageHeader1",
			title: "What's New?",
			icon: "images/blue_wings_logo.png",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0
		},
		{
			name: "button1",
			ontap: "button1Tap",
			disabled: undefined,
			buttonClass: "negative",
			label: "Close",
			type: "Palm.Mojo.Button",
			l: 0,
			w: 320,
			t: 51
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
					content: "<style type=\"text/css\">\n#version {\n    word-wrap: normal;\n    font-size: 15px;\n    color: lightgray;\n}\n.title {\n    font-weight: bold;\n    font-size: 18px;\n        margin-left: 3px;\n}\n\nul {\n    margin-top: 2px;\n    margin-bottom: 20px;\n        list-style: square;\n}\n</style>\n\n<div id=\"version\">\n\n<div class=\"title\">Version 1.3.5 - Janurary 17, 2011</div>\n<ul>\n    <li>Updated Thunderbirds flying schedule to new 2011 dates!</li> \n</ul>\n<div class=\"title\">Version 1.3.0 - December 26, 2010</div>\n<ul>\n    <li>Compatibility updates</li>\n    <li>Thank you everyone for your downloads and wonderful reviews!</li>\n    <li>Happy New Year!</li> \n</ul>\n\n<div class=\"title\">Version 1.2.0 - October 9, 2010</div>\n<ul>\n    <li>Updated formatting on Major Commands page</li>\n    <li>Added Wikipedia links for each of the aircraft</li>\n    <li>Updated formatting on the Thunderbirds Schedule page</li>\n    <li>Updated formatting on the Links page</li>\n    <li>Added military / civilian time conversion chart</li>\n    <li>Added News section that pulls Top Stories from AF.mil</li>\n    <li>Thank you everyone for your downloads and wonderful reviews!</li> \n</ul>\n\n<div class=\"title\">Version 1.1.5 - July 13, 2010</div>\n<ul>\n    <li>Added Thunderbirds schedule</li>\n    <li>Decorations</li>\n    <li>Acronyms</li>\n    <li>Rank Updates</li>\n    <li>More links</li>\n    <li>UI tweaks</li>\n</ul>\n\n<div class=\"title\">Version 1.0.1 - July 1, 2010</div>\n<ul>\n    <li>Support for 320x400 Pixi screen added</li>\n</ul>\n\n<div class=\"title\">Version 1.0.0 - June 23, 2010</div>\n<ul>\n    <li>Initial release!</li>\n</ul>\n</div>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: 340
				}
			]
		}
	]
});