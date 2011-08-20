opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	l: 0,
	t: 0,
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: "#063C87",
		opacity: 1
	},
	chrome: [
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
					name: "panel1",
					layoutKind: "absolute",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 0,
					h: 178,
					controls: [
						{
							name: "picture1",
							plane: "",
							src: "images/blue_wings_logo.png",
							type: "Palm.Picture",
							l: 0,
							w: "320",
							t: 0,
							h: 189,
							styles: {
								opacity: 0.3
							}
						},
						{
							name: "label1",
							label: "Integrity First",
							type: "Palm.Mojo.Label",
							l: 20,
							w: "280",
							t: 28,
							h: "40",
							hAlign: "center",
							styles: {
								bold: true,
								textAlign: "center",
								fontFamily: "helvetica",
								textColor: "lightgray",
								fontSize: "22px",
								opacity: 1
							}
						},
						{
							name: "label2",
							label: "Service Before Self",
							type: "Palm.Mojo.Label",
							l: 20,
							w: "280",
							t: 68,
							h: "40",
							hAlign: "center",
							styles: {
								bold: true,
								textAlign: "center",
								fontFamily: "helvetica",
								textColor: "lightgray",
								fontSize: "22px"
							}
						},
						{
							name: "label3",
							label: "Excellence In All We Do",
							type: "Palm.Mojo.Label",
							l: 20,
							w: "280",
							t: 108,
							h: "40",
							hAlign: "center",
							styles: {
								bold: true,
								textAlign: "center",
								fontFamily: "helvetica",
								textColor: "lightgray",
								fontSize: "22px"
							}
						}
					]
				},
				{
					name: "panel2",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 237,
					h: 60,
					hAlign: "center",
					controls: [
						{
							name: "button2",
							ontap: "button2Tap",
							className: "enlisted_ranks_button",
							disabled: undefined,
							label: "Enlisted Ranks",
							type: "Palm.Mojo.Button",
							l: 0,
							w: 163,
							t: 0
						},
						{
							name: "button3",
							ontap: "button3Tap",
							className: "officer_ranks_button",
							disabled: undefined,
							label: "Officer Ranks",
							type: "Palm.Mojo.Button",
							l: 163,
							w: "157",
							t: 0
						}
					]
				},
				{
					name: "panel3",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 237,
					h: 60,
					controls: [
						{
							name: "button5",
							ontap: "button5Tap",
							className: "aircraft_button",
							disabled: undefined,
							label: "Aircraft",
							type: "Palm.Mojo.Button",
							l: 151,
							w: "116",
							t: 0,
							styles: {
								bgColor: "",
								bgImage: "",
								borderColor: "",
								borderStyle: "",
								clip: false,
								oneLine: false,
								textColor: "",
								fontSize: "40px",
								fontFamily: ""
							}
						},
						{
							name: "button4",
							ontap: "button4Tap",
							className: "major_commands_button",
							disabled: undefined,
							label: "Major Commands",
							type: "Palm.Mojo.Button",
							l: 113,
							w: "204",
							t: 0
						}
					]
				},
				{
					name: "panel5",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 297,
					h: 60,
					controls: [
						{
							name: "button6",
							ontap: "button6Tap",
							className: "links_button",
							disabled: undefined,
							label: "Website Links",
							type: "Palm.Mojo.Button",
							l: 0,
							w: "163",
							t: 0
						},
						{
							name: "button7",
							ontap: "button7Tap",
							disabled: undefined,
							label: "Decorations",
							type: "Palm.Mojo.Button",
							l: 157,
							w: "157",
							t: 0
						}
					]
				},
				{
					name: "panel6",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 357,
					h: 60,
					controls: [
						{
							name: "button8",
							ontap: "button8Tap",
							disabled: undefined,
							label: "Acronyms",
							type: "Palm.Mojo.Button",
							l: 151,
							w: "131",
							t: 0,
							styles: {
								oneLine: false
							}
						},
						{
							name: "button1",
							ontap: "button1Tap",
							className: "air_force_song_button",
							disabled: undefined,
							label: "Air Force Song",
							type: "Palm.Mojo.Button",
							l: 123,
							w: "189",
							t: 0
						}
					]
				},
				{
					name: "panel4",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 417,
					h: 60,
					controls: [
						{
							name: "button9",
							ontap: "button9Tap",
							disabled: undefined,
							label: "Military Time",
							type: "Palm.Mojo.Button",
							l: 0,
							w: 166,
							t: 0
						},
						{
							name: "button10",
							ontap: "button10Tap",
							disabled: undefined,
							label: "News",
							type: "Palm.Mojo.Button",
							l: 166,
							t: 0
						}
					]
				}
			]
		}
	]
});