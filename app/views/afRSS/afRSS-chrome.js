opus.Gizmo({
	name: "afRSS",
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
			label: "Top Stories",
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
					name: "feedList1",
					items: [
						{
							item: 0,
							label: "Zero",
							value: "0"
						},
						{
							item: 1,
							label: "One",
							value: "1"
						},
						{
							item: 2,
							label: "Two",
							value: "2"
						},
						{
							item: 3,
							label: "Three",
							value: "3"
						},
						{
							item: 4,
							label: "Four",
							value: "4"
						},
						{
							item: 5,
							label: "Five",
							value: "5"
						}
					],
					useSampleData: false,
					title: undefined,
					itemHtml: "<div class=\"palm-row\">\n  <div style=\"position: absolute; height: 100px; left: 10px; right: 12px; overflow: invisible; text-overflow: ellipsis;\">\n    <a style=\"font-size: 17px; color: #ffffff; text-decoration: none;\" href=\"#{link}\">#{-title}</a>\n    <div style=\"font-size: 14px;\">#{-description}</div>\n  </div>\n</div>",
					swipeToDelete: false,
					reorderable: false,
					feedUrl: "http://www.af.mil/rss/TopStoriesByTab.asp?tabId=111847",
					type: "Palm.Mojo.FeedList",
					l: 0,
					t: 0,
					h: "100%",
					styles: {
						oneLine: false
					}
				}
			]
		}
	]
});