opus.Gizmo({
	name: "militaryTime",
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
			label: "Military Time",
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
					content: "<style type=\"text/css\">\n#table {\n    text-align: center;\n    font-size: 16px;\n    color: lightgray;\n}\n</style>\n\n\n<table id=\"table\" align=\"center\">\n  <tr>\n    <th>Civilian Time</th>\n    <th><--></th>\n    <th>Military Time</th>\n  </tr>\n  <tr>\n    <td>12:00am<hr></td>\n    <td></td>\n    <td>0000<hr></td>\n  </tr>\n  <tr>\n    <td>01:00am<hr></td>\n    <td></td>\n    <td>0100<hr></td>\n  </tr>\n  <tr>\n    <td>02:00am<hr></td>\n    <td></td>\n    <td>0200<hr></td>\n  </tr>\n  <tr>\n    <td>03:00am<hr></td>\n    <td></td>\n    <td>0300<hr></td>\n  </tr>\n  <tr>\n    <td>04:00am<hr></td>\n    <td></td>\n    <td>0400<hr></td>\n  </tr>\n  <tr>\n    <td>05:00am<hr></td>\n    <td></td>\n    <td>0500<hr></td>\n  </tr>\n  <tr>\n    <td>06:00am<hr></td>\n    <td></td>\n    <td>0600<hr></td>\n  </tr>\n  <tr>\n    <td>07:00am<hr></td>\n    <td></td>\n    <td>0700<hr></td>\n  </tr>\n  <tr>\n    <td>08:00am<hr></td>\n    <td></td>\n    <td>0800<hr></td>\n  </tr>\n  <tr>\n    <td>09:00am<hr></td>\n    <td></td>\n    <td>0900<hr></td>\n  </tr>\n  <tr>\n    <td>10:00am<hr></td>\n    <td></td>\n    <td>1000<hr></td>\n  </tr>\n  <tr>\n    <td>11:00am<hr></td>\n    <td></td>\n    <td>1100<hr></td>\n  </tr>\n  <tr>\n    <td>12:00pm<hr></td>\n    <td></td>\n    <td>1200<hr></td>\n  </tr>\n  <tr>\n    <td>01:00pm<hr></td>\n    <td></td>\n    <td>1300<hr></td>\n  </tr>\n  <tr>\n    <td>02:00pm<hr></td>\n    <td></td>\n    <td>1400<hr></td>\n  </tr>\n  <tr>\n    <td>03:00pm<hr></td>\n    <td></td>\n    <td>1500<hr></td>\n  </tr>\n  <tr>\n    <td>04:00pm<hr></td>\n    <td></td>\n    <td>1600<hr></td>\n  </tr>\n  <tr>\n    <td>05:00pm<hr></td>\n    <td></td>\n    <td>1700<hr></td>\n  </tr>\n  <tr>\n    <td>06:00pm<hr></td>\n    <td></td>\n    <td>1800<hr></td>\n  </tr>\n  <tr>\n    <td>07:00pm<hr></td>\n    <td></td>\n    <td>1900<hr></td>\n  </tr>\n  <tr>\n    <td>08:00pm<hr></td>\n    <td></td>\n    <td>2000<hr></td>\n  </tr>\n  <tr>\n    <td>09:00pm<hr></td>\n    <td></td>\n    <td>2100<hr></td>\n  </tr>\n  <tr>\n    <td>10:00pm<hr></td>\n    <td></td>\n    <td>2200<hr></td>\n  </tr>\n  <tr>\n    <td>11:00pm</td>\n    <td></td>\n    <td>2300</td>\n  </tr>\n</table>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});