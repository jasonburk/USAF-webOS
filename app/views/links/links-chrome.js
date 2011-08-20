opus.Gizmo({
	name: "links",
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
			label: "Air Force Related Links",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0
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
					content: "<style type=\"text/css\">\nul {\n  margin-top: 4px;\n  margin-bottom: 20px;\n  color: lightgray;\n  list-style-type: none;\n}\nli {\n  margin-top: 10px;\n}\na:link {\n  font-size: 25px;\n  color: lightgray;\n}\na:visited {\n  font-size: 25px;\n  color: lightgray;\n}\n\n</style>\n\n  <ul>\n    <li><a href=\"http://airforce.com\">AirForce.com</a></li>\n        <li><a href=\"http://www.af.mil\">AF.mil - Home</a></li>\n        <li><a href=\"http://www.airforcetimes.com/\">Air Force Times</a></li>\n        <li><a href=\"http://www.usafa.af.mil/\">Air Force Academy</a></li>\n        <li><a href=\"http://www.youtube.com/AFBlueTube\">Air Force Blue Tube</a></li>\n        <li><a href=\"http://www.usafband.af.mil/\">Air Force Band</a></li>\n        <li><a href=\"http://www.afrotc.com/\">Air Force ROTC</a></li>\n        <li><a href=\"http://thunderbirds.airforce.com/\">Thunderbirds</a></li>\n    </ul>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});