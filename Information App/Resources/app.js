var margin = 5;
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#c81b1b",
	title: "Movie App"
});

var logo = Ti.UI.createImageView({
	image: "Pictures/Logo.jpg",
	top: 0
});

var welBut = Ti.UI.createView({
	backgroundColor: "#ffcc00",
	top: 240,
	height: 50,
	left: 35,
	right: 35		
});
var welLabel = Ti.UI.createLabel({
	top: 5,
	text: "Movie List",
	font: {fontSize: 35, fontFamily: "Perpetua", fontAlignment: "center"}
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

navWindow.open();
welBut.add(welLabel);
mainWindow.add(logo, welBut);
var loadFile = require("data");

