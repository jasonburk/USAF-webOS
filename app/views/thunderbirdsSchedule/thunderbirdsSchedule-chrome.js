opus.Gizmo({
	name: "thunderbirdsSchedule",
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
			label: "2011 Thunderbirds Schedule",
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
					content: "<style type=\"text/css\">\n#schedule {\n    word-wrap: normal;\n    font-size: 15px;\n    color: lightgray;\n}\nul {\n    margin-top: 4px;\n    margin-bottom: 20px;\n    color: lightgray;\n    list-style-type: square;\n}\nli {\n    margin-top: 10px;\n}\n\n</style>\n\n<div id=\"schedule\">\n\n\n    <ul>\n        <li>Mar 19, 20 - Luke AFB, AZ</li>\n        <li>Mar 26, 27 - Tyndall AFB, FL</li> \n        <li>Apr 09 - Charleston AFB, SC</li>\n        <li>Apr 16, 17 - Seymour Johnson AFB, NC</li> \n        <li>Apr 30 - Beale AFB, CA</li>\n        <li>May 1 - Beale AFB, CA</li>\n        <li>May 07, 08 - Smyrna, TN</li>\n        <li>May 14, 15 - Langley AFB, VA</li> \n        <li>May 21, 22 - Andrews AFB, MD</li> \n        <li>May 25 - USAF Academy, CO</li>\n        <li>Jul 23, 24 - Dayton, OH</li>\n        <li>Jul 30, 31 - Travis AFB, CA</li> \n        <li>Aug 6, 7 - Milwaukee, WI</li> \n        <li>Aug 13, 14 - Portsmouth, NH</li> \n        <li>Aug 17 - Atlantic City, NJ</li>\n        <li>Aug 20, 21 - Chicago, IL</li> \n        <li>Aug 27, 28 - Waterloo, IA</li> \n        <li>Sep 03, 04, 05 - Cleveland, OH</li>\n        <li>Sep 10, 11 - Niagara Falls, NY</li> \n        <li>Sep 15 - Reno, NV</li> \n        <li>Sep 17, 18 - Mountain Home AFB, ID</li>\n        <li>Sep 24, 25 - Hill AFB, UT</li>\n        <li>Oct 01, 02 - Fort Smith, AR</li> \n        <li>Oct 15, 16 - Laughlin AFB, TX</li> \n        <li>Oct 22, 23 - Fort Worth, TX</li> \n        <li>Oct 29, 30 - Lafayette, LA</li> \n        <li>Nov 05, 06 - MacDill AFB, FL</li>\n        <li>Nov 12, 13 - Nellis AFB, NV</li>\n    </ul>\n    \n</div>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});