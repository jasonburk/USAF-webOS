function StageAssistant() {
}

StageAssistant.prototype.setup = function() {
	//this.controller.pushScene({name: "main", disableSceneScroller: true});
	
	// Get Cookie
myCookie = new Mojo.Model.Cookie('MyCookie');
cookieData = myCookie.get() || '';
 
if (cookieData == '') {
  this.controller.pushScene("firstLaunch");
  myCookie.put({ firstuse: true });
} else {
  this.controller.pushScene("main");
}
	this.controller.setWindowOrientation("up");
};

