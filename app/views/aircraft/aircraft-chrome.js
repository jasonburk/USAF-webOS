opus.Gizmo({
	name: "aircraft",
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
			label: "Aircraft",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0,
			h: "50",
			styles: {
				bgColor: ""
			}
		},
		{
			name: "button1",
			ontap: "button1Tap",
			disabled: undefined,
			label: "Thunderbirds Schedule",
			type: "Palm.Mojo.Button",
			l: 0,
			w: 242,
			t: 49,
			h: "60",
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
			t: 0,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "html1",
					content: "<style type=\"text/css\">\n#aircraft {\n  word-wrap: normal;\n  font-size: 15px;\n  color: lightgray;\n}\n.title {\n  font-weight: bold;\n  font-size: 18px;\n}\n.sub {\n  font-size: 16px;\n  \n}\nul {\n  margin-top: 2px;\n  margin-bottom: 20px;\n}\n\na   {\n  text-decoration: ;\n  color: lightgray;\n}\n\n\n</style>\n\n<div id=\"aircraft\">\n\n     <div class=\"title\">A - Ground Attack</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II\">A-10A/C Thunderbolt II</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/AC-130\">AC-130H/U Spectre/Spooky II</a></li>\n          </ul>\n    \n    <div class=\"title\">B - Bombers</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/B-1_Lancer\">B-1B Lancer</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/B-2A\">B-2A Spirit</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/B-52H\">B-52H Stratofortress</a></li>\n          </ul>\n    \n    <div class=\"title\">C - Cargo Transport</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-5A\">C-5A/B/C/M Galaxy</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Beechcraft_C-12_Huron\">C-12C/D/F Huron</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Boeing_C-17_Globemaster_III\">C-17A Globemaster III</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Gulfstream_III\">C-20A/B/C Gulfstream III</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Gulfstream_IV\">C-20G/H Gulfstream IV</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-21A\">C-21A Learjet</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-27J\">C-27J Spartan</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-37A\">C-37A/B Gulfstream V</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Gulfstream_G100\">C-38A Courier</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Boeing_C-40_Clipper\">C-40B Clipper</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/CASA_C.212_Aviocar\">C-41A Aviocar</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-47\">C-47T Skytrain</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-130_Hercules\">C-130E/H Hercules</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-130J_Hercules\">C-130J Super Hercules</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/V-22_Osprey\">CV-22B Osprey</a></li>\n          </ul>\n    \n    <div class=\"title\">E - Special Electronic Missions</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/E-3B\">E-3B/C Sentry</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/E-4B\">E-4B</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/E-8_Joint_STARS\">E-8C JSTARS</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/E-9A\">E-9A</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/EC-130\">EC-130H/J Compass Call/Commando Solo</a></li>\n          </ul>\n          \n   <div class=\"title\">F - Fighters</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/F-15C\">F-15C/D Eagle</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/F-15E\">F-15E Strike Eagle</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/F-16C\">F-16C/D Fighting Falcon</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/F-22A\">F-22A Raptor</a></li>\n          </ul>\n          \n  <div class=\"title\">H - Search and Rescue</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/HC-130P\">HC-130P/N Hercules</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/HH-60G\">HH-60G/MH-60G Pave Hawk</a></li>\n          </ul>\n          \n  <div class=\"title\">K - Tanker</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/KC-10A\">KC-10A Extender</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/KC-135E\">KC-135E/R/T Stratotanker</a></li>\n          </ul>\n          \n<div class=\"title\">L - Laser-equiped</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/YAL-1\">YAL-1</a></li>\n          </ul>\n      \n<div class=\"title\">M - Multi-mission</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/MC-130E\">MC-130E/H/P/W Combat Talon I/Combat Talon II/Combat Shadow/Combat Spear</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/MQ-1\">MQ-1 Predator (UAV)</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/MQ-9\">MQ-9 Reaper (UAV</a></li>\n          </ul>\n          \n<div class=\"title\">O - Observation</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/OC-135B\">OC-135B Open Skies</a></li>\n          </ul>\n          \n<div class=\"title\">R - Reconnaissance</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-26_Metroliner\">RC-26B</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Boeing_RC-135\">RC-135S/U/V/W Combat Ball/Combat Sent/Combat Sent/Rivet Joint</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/RQ-4_Global_Hawk\">RQ-4A Global Hawk</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/RQ-11_Raven\">RQ-11 Raven</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/RQ-170_Sentinel\">RQ-170 Sentinel</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Lockheed_U-2\">U-2R/S Dragon Lady</a></li>\n          </ul>\n          \n<div class=\"title\">T - Trainer</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/T-1_Jayhawk\">T-1A Jayhawk</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/T-6_Texan_II\">T-6A Texan II</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/T-38_Talon\">(A)T-38A/B/C Talon</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/T-43_Bobcat\">T-43A</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Blanik_TG-10\">TG-10B/C/D</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Schempp-Hirth_Duo_Discus\">TG-15A</a></li>\n      <li><a href=\"http://en.wikipedia.org/wiki/Schempp-Hirth_Discus-2\">TG-15B</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Diamond_T-52A\">Diamond T-52A</a></li>\n          </ul>\n          \n<div class=\"title\">U - Utility</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/Pilatus_PC-12\">U-28A</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/UH-1N_Twin_Huey\">UH-1N Iroquois</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/De_Havilland_Canada_DHC-6_Twin_Otter\">UV-18A/B Twin Otter</a></li>\n          </ul>\n\n<div class=\"title\">V - VIP Staff Transport</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/McDonnell_Douglas_C-9\">VC-9C</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Boeing_VC-25\">VC-25A</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Boeing_C-32\">C-32A/B</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/C-40_Clipper\">C-40B/C</a></li>\n          </ul>\n\n<div class=\"title\">W - Weather Reconnaissance</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/Lockheed_WC-130\">WC-130J Super Hercules</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/WC-135_Constant_Phoenix\">WC-135C/W Constant Phoenix</a></li>\n          </ul>\n\n<div class=\"title\">Undesignated Foreign Aircraft Used By Special Operations Squadrons</div>\n          <ul>\n              <li><a href=\"http://en.wikipedia.org/wiki/Antonov_An-26\">An-26 Curl (6th Special Operations Squadron)</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/CASA_CN-235\">CN-235-100 (427th Special Operations Squadron)</a></li>\n              <li><a href=\"http://en.wikipedia.org/wiki/Mil_Mi-8\">Mi-8 (6th Special Operations Squadron)</a></li>\n          </ul>\n\n    \n</div>\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});