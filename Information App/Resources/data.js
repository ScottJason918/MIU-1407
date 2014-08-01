var data = {
	"movies": [
		{
			"name": "Tombstone",
			"rating": "R (Blood, Violence, Partial Nudity)",
			"average": "6.2/10",
			"genre" : "Western",
			"like": "Wyatt Earp, Gunfight at the O.K. Corral, 3:10 to Yuma",
			"starring": "Kurt Russel, Val Kilmer, Bill Paxton, Powers Boothe, Michael Biehn",
			"director": "George P. Cosmatos",
			"studio": "Buena Vista",
			"format": "Widescreen",
			"image": "Pictures/Tombstone.jpg",
			"synopsis": "In the lawless town of Tombstone, AZ a legend was born, and that legend was named Wyatt Earp.  Traveling to Tombstone with his brothers to start a new life Earp runs into his old friend, Doc Holiday, and some new enemies known as the cowboys.  The Earp brothers are soon locked in a life or death battle against one of the most notorious gangs of the wild west."
		},
		{
			"name": "Evolution",
			"rating": "PG-13(Language, Partial Nudity)",
			"average": "4.9/10",
			"genre": "Comedy",
			"like": "Eight-Legged Freaks, Signs, Mars Attacks",
			"starring": "David Duchovny, Orlando Jones, Seann William Scott, Julianne Moore, Ted Levine, Ethan Suplee",
			"director": "David Weissman, David Diamond",
			"studio": "Dreamworks Pictures",
			"format": "Widescreen",
			"image": "Pictures/Evolution.jpg",
			"synopsis": "A meteor crashes down in the middle of the New Mexico desert carrying alien organisms.  The aliens evolve and multiply at a greatly accelerated rate and will soon take over the world.  Two community college professors, a fireman recruit and a government scientist attempt to quell the alien invasion."
		},
		{
			"name": "Galaxy Quest",
			"rating": "PG(Some Adult Humor)",
			"average": "7.2/10",
			"genre": "Sci-Fi Comedy",
			"like": "Hitchhiker's Guide to the Galaxy, Men in Black, Paul",
			"starring": "Tim Allen, Sigourney Weaver, Alan Rickman, Tony Shalhoub, Sam Rockwell",
			"director": "Robert Gordon, David Howard",
			"studio": "Dreamworks SKG",
			"format": "Widescreen",
			"image": "Pictures/Galaxy.jpg",
			"synopsis": "A quirky group of TV show has-beens find themselves wrapped up in a real life version of the TV show they used to be actors in.  At first it/’s fun and games but reality soon sinks in and they have to rely on each other and the knowledge of what they once knew to save themselves and the alien species that has befriended them."
		},
		{
			"name": "V for Vendetta",
			"rating": "R (Blood and Gore, Violence, Firearms, Partial Nudity)",
			"average": "6.8/10",
			"genre":"Drama/Thriller",
			"like": "Matrix, Fight Club, Children of Men, Leon the Professional",
			"starring":"Natalie Portman, Hugo Weaving, Stephen Fry, John Hurt, Stephen Rea",
			"director":"Andy Wachowski, Larry Wachowski",
			"studio":"Warner Bros. Pictures",
			"format":"Widescreen",
			"image": "Pictures/V.jpg",
			"synopsis": "In an alternative version of today’s Britain a corrupt government rules and with complete power.  A young woman finds herself accidentally involved in a vigilante’s scheme to over throw the government.  He is cunning, he is dangerous, and he is wickedly intelligent, but he is also never seen without a mask."
		},
		{
			"name": "Count of Monte Cristo",
			"rating": "PG-13(Violence, Adult Themes, Partial Nudity)",
			"average": "6.7/10",
			"genre": "Drama/Thriller",
			"like": "The Three Musketeers, Robin Hood: Prince of Thieves, Braveheart",
			"starring": "Jim Caviezel, Guy Pearce, Dagmara Dominczyk, Richard Harris, Luis Guzman, James Frain",
			"director": "Jay Wolpert",
			"studio": "Touchstone Pictures",
			"format": "Widescreen",
			"image": "Pictures/Count.jpg",
			"synopsis": "An honest and trusting sailor, Edmond Dantes, has the love of a beautiful woman, a promise of a great promotion, and a best friend.  Things change when his so-called best friend covets everything he has, including his beautiful wife to be.  Betrayed and sent to a prison that no one dare wish to visit, Dantes is seemingly dead and gone until a wise old prisoner teaches him to read, to write, and to fight."
		},
		{
			"name": "Moon",
			"rating": "R(Adult Themes)",
			"average": "7.4/10",
			"genre": "Sci-Fi/Thriller",
			"like": "Gravity, Alien, District 9, A.I.Aritficial Intelligence",
			"starring": "Sam Rockwell",
			"director": "Mark Bowden",
			"studio": "Sony Pictures Classics",
			"format": "Widescreen",
			"image": "Pictures/Moon.jpg",
			"synopsis": "An astronaut miner extracting gas from the moon is nearing the end of his three year contract when he makes a shocking discovery that will shake him to his very core in this psychological sci-fi thriller."
		},
	]
};

var welcome = function(){
	navWindow.openWindow(secondWindow);
};
var secondWindow = Ti.UI.createWindow({
	backgroundColor: "#c81b1b",
	title: "Movies!!!"
});

var logo2 = Ti.UI.createImageView({
	image: "Pictures/Logo.jpg",
	top: 0
});

var tableView = Ti.UI.createTableView({
	height: "60%",
	top: 240,
	backgroundColor: "#c81b1b"
});
var tableSection = Ti.UI.createTableViewSection({
});


/////Movie Poster Screen
var movieScreen = function(){
	var movPoster = Ti.UI.createImageView({
		image: this.image,
		top: 5,
		height: 240
	});
	var movieWindow = Ti.UI.createWindow({
		title: this.title,
		backgroundColor: "#c81b1b",
	});
	var infoView = Ti.UI.createView({
		top: 5,
		left: 25
	});
	var info = Ti.UI.createLabel({
		text: this.rating + " " +  this.average + " " +  this.studio + " " + this.format,
		font: {fontSize: 8, fontFamily: "Perpetua", fontAlignment: "left"}
	});
	var castView = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		top: 300,
		left: 30,
		height: 30,
		width: 50
	});
	var genreView = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		top: 300,
		left: 140,
		height: 30,
		width: 50
	});
	var synopView = Ti.UI.createView({
		backgroundColor: "#ffcc00",
		top: 300,
		left: 245,
		height: 30,
		width: 50
	});
	
	var synopLabel = Ti.UI.createLabel({
		text: "Synopsis",
		font: {fontSize: 9, fontFamily: "Perpetua", fontAlignment: "center"}
	});
	var castLabel = Ti.UI.createLabel({
		text: "Cast",
		font: {fontSize: 9, fontFamily: "Perpetua", fontAlignment: "center"}
	});
	var genreLabel = Ti.UI.createLabel({
		text: "Genre",
		font: {fontSize: 9, fontFamily: "Perpetua", fontAlignment: "center"}
	});	
	var cast = function(){
		var castScreen = Ti.UI.createWindow({
			backgroundColor: "#c81b1b",
			title: inf.title	
		});
		var movPoster = Ti.UI.createImageView({
			image: inf.image,
			top: 5,
			height: 240
		});
		var cView = Ti.UI.createView({
			top: 100,
			left: 25,
			right: 25
		});
		var cLabel = Ti.UI.createLabel({
			text: "Starring: " + inf.cast + " and Directors by: " + " " + inf.direct,
			font: {fontSize: 12, fontFamily: "Perpetua", fontAlignment: "left"}
		});
		castScreen.add(movPoster, cView);
		cView.add(cLabel);
		navWindow.openWindow(castScreen);
		console.log(inf.title);
	};
	var genre = function(){
		var genreScreen = Ti.UI.createWindow({
			backgroundColor: "#c81b1b",
			title: inf.title	
		});
		var movPoster = Ti.UI.createImageView({
			image: inf.image,
			top: 5,
			height: 240
		});
		var cView = Ti.UI.createView({
			top: 70,
			left: 25,
			right: 25
		});
		var cLabel = Ti.UI.createLabel({
			text: "This film is a " + inf.genre + " " + " movie.  There are other movies like it such as " + " " + inf.like,
			font: {fontSize: 12, fontFamily: "Perpetua", fontAlignment: "left"}
		});
		genreScreen.add(movPoster, cView);
		cView.add(cLabel);
		navWindow.openWindow(genreScreen);
	};
	var synop = function(){
		var synopScreen = Ti.UI.createWindow({
			backgroundColor: "#c81b1b",
			title: inf.title	
		});
		var movPoster = Ti.UI.createImageView({
			image: inf.image,
			top: 5,
			height: 240
		});
		var cView = Ti.UI.createView({
			top: 125,
			left: 25,
			right: 25
		});
		var cLabel = Ti.UI.createLabel({
			text: inf.synop,
			font: {fontSize: 12, fontFamily: "Perpetua", fontAlignment: "center"}
		});
		synopScreen.add(movPoster, cView);
		cView.add(cLabel);
		navWindow.openWindow(synopScreen);
	};
	var inf = this;
	genreView.addEventListener("click", genre);
	synopView.addEventListener("click", synop);
	castView.addEventListener("click", cast);
	synopView.add(synopLabel);
	castView.add(castLabel);
	genreView.add(genreLabel);
	infoView.add(info);
	movieWindow.add(infoView, movPoster, castView, genreView, synopView);
	navWindow.openWindow(movieWindow);
};


//Making Table +++
for(var i = 0; i < data.movies.length; i++){
	var aRow = Ti.UI.createTableViewRow({
		title: data.movies[i].name,
		image: data.movies[i].image,
		rating: data.movies[i].rating,
		average: data.movies[i].average,
		genre: data.movies[i].genre,
		studio: data.movies[i].studio,
		format: data.movies[i].format,
		cast: data.movies[i].starring,
		direct: data.movies[i].director,
		synop: data.movies[i].synopsis,
		like: data.movies[i].like,
		hasChild: true,
	});
	tableSection.add(aRow);
	aRow.addEventListener("click", movieScreen);
};

var tableSections = [tableSection];
secondWindow.add(logo2, tableView);
tableView.setData(tableSections);
///////

//Testing
// for(var i = 0; i < data.movies.length; i++){
	// console.log(data.movies[i].name);
// };
// console.log(this.image);
// console.log(this.synopsis);
// console.log(this.title);


welBut.addEventListener("click", welcome);
mainWindow.add(logo);
