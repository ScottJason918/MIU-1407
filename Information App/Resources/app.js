var data = {
	"movies": {
		"Tombstone": {
			"rating": "R (Blood, Violence, Partial Nudity)",
			"average": "6.2/10",
			"genre" : "Western",
			"starring": "Kurt Russel, Val Kilmer, Bill Paxton, Powers Boothe, Michael Biehn",
			"director": "George P. Cosmatos",
			"studio": "Buena Vista",
			"format": "Widescreen",
			"synopsis": "In the lawless town of Tombstone, AZ a legend was born, and that legend was named Wyatt Earp.  Traveling to Tombstone with his brothers to start a new life Earp runs into his old friend, Doc Holiday, and some new enemies known as the cowboys.  The Earp brothers are soon locked in a life or death battle against one of the most notorious gangs of the wild west."
		},
		"Evolution": {
			"rating": "PG-13(Language, Partial Nudity)",
			"average": "4.9/10",
			"genre": "Comedy",
			"starring": "David Duchovny, Orlando Jones, Seann William Scott, Julianne Moore, Ted Levine, Ethan Suplee",
			"director": "David Weissman, David Diamond",
			"studio": "Dreamworks Pictures",
			"format": "Widescreen",
			"synopsis": "A meteor crashes down in the middle of the New Mexico desert carrying alien organisms.  The aliens evolve and multiply at a greatly accelerated rate and will soon take over the world.  Two community college professors, a fireman recruit and a government scientist attempt to quell the alien invasion."
		},
		"Galaxy Quest":{
			"rating": "PG(Some Adult Humor)",
			"average": "7.2/10",
			"genre": "Sci-Fi Comedy",
			"starring": "Tim Allen, Sigourney Weaver, Alan Rickman, Tony Shalhoub, Sam Rockwell",
			"director": "Robert Gordon, David Howard",
			"studio": "Dreamworks SKG",
			"format": "Widescreen",
			"synopsis": "A quirky group of TV show has-beens find themselves wrapped up in a real life version of the TV show they used to be actors in.  At first it/’s fun and games but reality soon sinks in and they have to rely on each other and the knowledge of what they once knew to save themselves and the alien species that has befriended them."
		},
		"V for Vendetta":{
			"rating": "R (Blood and Gore, Violnece, Firearms, Partial Nudity)",
			"average": "6.8/10",
			"genre":"Drama/Thriller",
			"starring":"Natalie Portman, Hugo Weaving, Stephen Fry, John Hurt, Stephen Rea",
			"director":"Andy Wachowski, Larry Wachowski",
			"studio":"Warner Bros. Pictures",
			"format":"Widescreen",
			"synopsis": "In an alternative version of today’s Britain a corrupt government rules and with complete power.  A young woman finds herself accidentally involved in a vigilante’s scheme to over throw the government.  He is cunning, he is dangerous, and he is wickedly intelligent, but he is also never seen without a mask."
		},
		"Count of Monte Cristo":{
			"rating": "PG-13(Violence, Adult Themes, Partial Nudity)",
			"average": "6.7/10",
			"genre": "Drama/Thriller",
			"starring": "Jim Caviezel, Guy Pearce, Dagmara Dominczyk, Richard Harris, Luis Guzman, James Frain",
			"director": "Jay Wolpert",
			"studio": "Touchstone Pictures",
			"format": "Widescreen",
			"synopsis": "An honest and trusting sailor, Edmond Dantes, has the love of a beautiful woman, a promise of a great promotion, and a best friend.  Things change when his so-called best friend covets everything he has, including his beautiful wife to be.  Betrayed and sent to a prison that no one dare wish to visit, Dantes is seemingly dead and gone until a wise old prisoner teaches him to read, to write, and to fight."
		},
		"Moon":{
			"rating": "R(Adult Themes)",
			"average": "7.4/10",
			"genre": "Sci-Fi/Thriller",
			"starring": "Sam Rockwell",
			"director": "Mark Bowden",
			"studio": "Sony Pictures Classics",
			"format": "Widescreen",
			"synopsis": "An astronaut miner extracting gas from the moon is nearing the end of his three year contract when he makes a shocking discovery that will shake him to his very core in this psychological sci-fi thriller."
		},
	}
};


console.log(data.movies.Tombstone.starring);

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#ffffff"
});

var view = Ti.UI.createView({
	height: "100%",
	width: "100%"
});

var label = Ti.UI.createLabel({
	text: data.movies.Moon.rating
});

mainWindow.add(view);
view.add(label);
mainWindow.open();
