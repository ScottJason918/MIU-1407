//Array to store data
var e = 0;
var names = [];
var adds = [];
var emAdds= [];
var fone = [];
var disp = [];

//Second Window
var win2 = Ti.UI.createWindow({
	backgroundColor: "#007a74"
});

var secondWin = function() {
	navWin.openWindow(win2);
};
//Logos and Buttons
var logoView = Ti.UI.createImageView({
	image: "Pictures/AddLogo.jpg",
	top: 0
});

var searchBut = Ti.UI.createView({
	borderRadius: 10,
	bottom: 90,
	height: 50,
	width: 250,
	backgroundColor: "feff5c"
});

var addBut = Ti.UI.createView({
	borderRadius: 10,
	bottom: 38,
	height: 50,
	width: 250,
	backgroundColor: "feff5c"
});

var addLab = Ti.UI.createLabel({
	text: "ADD A CONTACT",
	font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "center"}
});


var searchLab = Ti.UI.createLabel({
	text: "SEARCH",
	font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "center"}
});

//Third Window
var win3 = Ti.UI.createWindow({
	backgroundColor: "#007a74"
});
//Third Window Text Fields
var name = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "Enter Name",
	height: 50,
	top: 15,
	left: 10,
	right: 10
});

var address = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "Enter Address",
	height: 50,
	top: 70,
	left: 10,
	right: 10
});

var emailAdd = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "Enter Email Address",
	height: 50,
	top: 125,
	left: 10,
	right: 10
});

var phone = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "Enter Phone Number",
	height: 50,
	top: 180,
	left: 10,
	right: 10
});

var dispName = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "Enter Display Name",
	height: 50,
	top: 235,
	left: 10,
	right: 10
});

var add = function(){
	navWin.openWindow(win3);
};
//Save Button with Function
var saveBut = Ti.UI.createView({
	borderRadius: 10,
	top: 335,
	height: 100,
	left: 10,
	right: 10,
	backgroundColor: "#FEFF5C",	
});

var saveLab = Ti.UI.createLabel ({
	text: "SAVE",
	font: {fontSize: 35, fontFamily: "Perpetua", fontAlignment: "center"}
});

saveBut.addEventListener('click', function(e){
  alert('Contact Saved!');
  //Storing Entered Values
  if (name.value === ""){
  	names.push(" ");
  }else{
  	var nam = names.push(name.value);
  };
  if (name.value === ""){
  	names.push(" ");
  }else{
  	var fon = fone.push(phone.value);
  }
  if (name.value === ""){
  	names.push(" ");
  }else{
  	var addr = adds.push(address.value);
  }
  if (name.value === ""){
  	names.push(" ");
  }else{
  	var eMai = emAdds.push(emailAdd.value);
  }
  if (name.value === ""){
  	names.push(" ");
  }else{
  	var dis = disp.push(dispName.value);
  }
  // console.log(names);
  // console.log(fone);
  // console.log(adds);
  // console.log(emAdds);
  // console.log(disp);
});

//Search Window with open function
var searchFun = function(){
	navWin.openWindow(win4);
};

var win4 = Ti.UI.createWindow({
	backgroundColor: "#007a74"
});

var namSearch = Ti.UI.createTextField({
	borderRadius: 10,
	backgroundColor: "feff5c",
	hintText: "What name are you looking for?",
	height: 50,
	top: 15,
	left: 10,
	right: 10
});

var goLab = Ti.UI.createLabel ({
	text: "GO FIND IT!",
	font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "center"}
});

var goView = Ti.UI.createView ({
	borderRadius: 10,
	top: 335,
	height: 100,
	left: 10,
	right: 10,
	backgroundColor: "#FEFF5C",	
});
//Searching through Arrays


var goFun = function(){
	for(var i = 0; i< names.length; i++){
		if (names[i] === namSearch.value) {
			//Window Displaying Information
			var win5 = Ti.UI.createWindow({
				backgroundColor: "#007a74"
			});
			var namLab = Ti.UI.createLabel({
				text: names[i],
				font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "left"}
			});
			var showName = Ti.UI.createView({
				borderRadius: 10,
				backgroundColor: "feff5c",
				height: 50,
				top: 15,
				left: 10,
				right: 10
			});
			var adLab = Ti.UI.createLabel({
				text: adds[i],
				font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "left"}
			});
			var showAdd = Ti.UI.createView({
				borderRadius: 10,
				backgroundColor: "feff5c",
				height: 50,
				top: 70,
				left: 10,
				right: 10
			});
			var addEmLab = Ti.UI.createLabel({
				text: emAdds[i],
				font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "left"}
			});
			var showEmAdd = Ti.UI.createView({
				borderRadius: 10,
				backgroundColor: "feff5c",
				height: 50,
				top: 125,
				left: 10,
				right: 10
			});
			var fonLab = Ti.UI.createLabel({
				text: fone[i],
				font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "left"}
			});
			var showPhone = Ti.UI.createView({
				borderRadius: 10,
				backgroundColor: "feff5c",
				height: 50,
				top: 180,
				left: 10,
				right: 10
			});
			var disLab = Ti.UI.createLabel({
				text: disp[i],
				font: {fontSize: 15, fontFamily: "Perpetua", fontAlignment: "left"}
			});
			var showDisp = Ti.UI.createView({
				borderRadius: 10,
				backgroundColor: "feff5c",
				height: 50,
				top: 235,
				left: 10,
				right: 10
			});
			win5.add(showDisp, showPhone, showName, showAdd, showEmAdd);
			showDisp.add(disLab);
			showPhone.add(fonLab);
			showName.add(namLab);
			showAdd.add(adLab);
			showEmAdd.add(addEmLab);
			navWin.openWindow(win5);
		}
	}
};

var log = function() {
	console.log(names[e]);
	console.log(fone[e]);
	console.log(adds[e]);
	console.log(emAdds[e]);
	console.log(disp[e]);
};
//Functions and adding
//showName.addEventListener("click", log);
goView.addEventListener("click", goFun);
searchBut.addEventListener("click", searchFun);
win4.add(goView, namSearch);
goView.add(goLab);
win2.add(logoView, searchBut, addBut);
searchBut.add(searchLab);
addBut.add(addLab);
saveBut.add(saveLab);
goBut.addEventListener("click", secondWin);
win3.add(emailAdd, phone, dispName, address, name, saveBut);
addBut.addEventListener("click", add);
// function(e){
  // alert('Contact Saved!');
// 
