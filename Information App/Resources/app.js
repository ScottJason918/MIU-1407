var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#ffffff",
	title: "Movie App"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

navWindow.open();

var loadFile = require("data");
