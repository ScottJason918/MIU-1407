
//Making Nav Window
var mainWindow = Ti.UI.createWindow({
	title: "About Me!",
	color: "#BDBDBD"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});


var button = Ti.UI.createView({
	backgroundColor: "#ffffff",
	top: 20,
	height: "50%",
	width: "80%",
	align: "center"
});

var buttonLabel = Ti.UI.createLabel({
	text: "Click Me!"
});

var loadfile = require("json");


button.add(buttonLabel);
mainWindow.add(button);
navWindow.open();


