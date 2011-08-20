opus.Gizmo({
	name: "majorCommands",
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
			label: "Major Commands",
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
					content: "<style type=\"text/css\">\n#commands {\n  word-wrap: normal;\n  font-size: 15px;\n  color: lightgray;\n}\n.major {\n  font-weight: bold;\n  font-size: 18px;\n}\n.sub {\n  font-size: 12px;\n  \n}\n.location {\n  font-size: 12px;\n}\nul {\n  margin-top: 2px;\n  margin-bottom: 20px;\n}\n\n\n</style>\n\n<div id=\"commands\">\n<div class=\"major\">United States Air Force<div class=\"location\">Headquartered at The Pentagon, Virginia</div></div><br>\n\n     <div class=\"major\">Air Combat Command (ACC)<div class=\"location\">Headquartered at Joint Base Langley-Eustis, Virginia</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>First Air Force - Tyndall Air Force Base, Florida</li>\n              <li>Ninth Air Force - Shaw Air Force Base, South Carolina</li>\n              <li>Twelfth Air Force - Davis-Monthan Air Force Base, Arizona</li>\n              <li>USAF Warfare Center - Nellis Air Force Base, Nevada</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Education and Training Command (AETC)<div class=\"location\">Headquartered at Randolph Air Force Base, Texas</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Second Air Force, headquartered at Keesler Air Force Base, Mississippi</li>\n              <li>Nineteenth Air Force, headquartered at Randolph Air Force Base, Texas</li>\n              <li>Air Force Recruiting Service, headquartered at Randolph Air Force Base, Texas</li>\n              <li>Air University, headquartered at Maxwell-Gunter Air Force Base, Alabama</li>\n              <li>Wilford Hall Medical Center, headquarted at Lackland Air Force Base, Texas</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Force Global Strike Command (AFGSC)<div class=\"location\">Headquartered at Barksdale Air Force Base, Louisiana</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Eighth Air Force - Barksdale Air Force Base, Louisiana</li>\n              <li>Twentieth Air Force - F. E. Warren Air Force Base, Wyoming</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Force Materiel Command (AFMC)<div class=\"location\">Headquartered at Wright-Patterson Air Force Base, Ohio</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Aeronautical Systems Center - Wright-Patterson Air Force Base, Ohio</li>\n              <li>Air Force Flight Test Center - Edwards Air Force Base, California</li>\n              <li>Air Force Global Logistics Support Center - Scott Air Force Base, Illinois</li>\n              <li>Air Force Nuclear Weapons Center - Kirtland Air Force Base, New Mexico</li>\n              <li>Air Force Research Laboratory - Wright-Patterson Air Force Base, Ohio</li>\n              <li>Air Force Security Assistance Center - Wright-Patterson Air Force Base, Ohio</li>\n              <li>Air Armament Center - Eglin Air Force Base, Florida</li>\n              <li>Arnold Engineering Development Center - Arnold Air Force Base, Tennessee</li>\n              <li>Electronic Systems Center - Hanscom Air Force Base, Massachusetts</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Force Reserve Command (AFRC)<div class=\"location\">Headquartered at Robins Air Force Base, Georgia</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Fourth Air Force - March Air Reserve Base, California</li>\n              <li>Tenth Air Force - Naval Air Station Joint Reserve Base Fort Worth, Texas</li>\n              <li>Twenty-Second Air Force - Dobbins Air Reserve Base, Georgia</li>\n              <li>Air Reserve Personnel Center - Denver, Colorado</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Force Space Command (AFSPC)<div class=\"location\">Headquartered at Peterson Air Force Base, Colorado</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Fourteenth Air Force - Vandenberg Air Force Base, California</li>\n              <li>Twenty Fourth Air Force - Lackland Air Force Base, Texas</li>\n              <li>Space and Missile Systems Center - Los Angeles Air Force Base, California</li>\n              <li>Space Innovation and Development Center - Schriever Air Force Base, Colorado</li>\n              </div>\n          </ul>\n\n    <div class=\"major\">Air Force Special Operations Command (AFSOC)<div class=\"location\">Headquartered at Hurlburt Field, Florida</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Twenty-Third Air Force - Hurlburt Field, Florida</li>\n              <li>Special Operations Training Center - Hurlburt Field, Florida</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Air Mobility Command (AMC)<div class=\"location\">Headquartered at Scott Air Force Base, Illinois</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Eighteenth Air Force - Scott Air Force Base, Illinois</li>\n              <li>United States Air Force Expeditionary Center - Fort Dix, New Jersey</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">United States Air Forces in Europe (USAFE)<div class=\"location\">Headquartered at Ramstein Air Base, Germany</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Third Air Force - Ramstein Air Base, Germany</li>\n              <li>Seventeenth Air Force - Ramstein Air Base, Germany</li>\n              </div>\n          </ul>\n    \n    <div class=\"major\">Pacific Air Forces (PACAF)<div class=\"location\">Headquartered at Hickam Air Force Base, Hawaii</div></div>\n          <ul>\n              <div class=\"sub\">\n              <li>Fifth Air Force - Yokota Air Base, Japan</li>\n              <li>Seventh Air Force - Osan Air Base, Republic of Korea</li>\n              <li>Eleventh Air Force - Elmendorf Air Force Base, Alaska</li>\n              <li>Thirteenth Air Force - Hickam Air Force Base, Hawaii</li>\n              </div>\n          </ul>\n          \n          \n</div>\n\n",
					type: "Palm.Mojo.Html",
					l: 0,
					t: 0,
					h: "100%"
				}
			]
		}
	]
});