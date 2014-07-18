var aboutMe = [
	{number: "Question 1",
	question: "What is your name?",
	answer: "Jason Scott"},
	{number : "Question 2",
	question: "What is your chat user name including host?",
	answer: "ScoobaSteev on Steam"},
	{number: "Question 3",
	question: "In which timezone do you reside?",
	answer: "Arizona Time"},
	{number: "Question 4",
	question:"Why are you in Mobile Development?",
	answer: "I really enjoy coding and building things and have many ideas that I've wanted to bring to life without the tools to do so.  I started teaching myself how to code but needed more of a push to learn"},
	{number: "Question 5",
	question: "How comfortable are you with JavaScript?",
	answer: "Only slightly comfortable"},
	{number: "Question 6",
	question: "How comfortable are you with Titanium?",
	answer: "Only slightly comfortable"},
	{number: "Question 7",
	question: "What is your favorite video (game at the moment)?",
	answer: "Counter Strike GO or League of Legends"},
	{number: "Question 8",
	question: "What is your favorite movie of all time?",
	answer: "Tombstone"},
	{number: "Question 9",
	question:"What is your favorite book?",
	answer: "Ender's Game"},
	{number: "Question 10",
	question: "Who is your favorite actor?",
	answer: "Gary Oldman"},
	{number: "Question 11",
	question: "What is your favorite band?",
	answer: "Cage the Elephant"},
	{number: "Question 12",
	question: "What is your favorite place to visit?",
	answer: "Universal Orlando, Wizarding World attractions"},
];

var mainWindow = Ti.UI.createWindow({
	title: "About Me!",
	backgroundColor: "#BDBDBD"
});
var questionTable = Ti.UI.createTableView({
	data: aboutMe,
	top: 0
});

var aboutSection = Ti.UI.createTableViewSection({
	headerTitle: "About Me Questions",
	footerTitle: "Complete with Answers!"
});

var aboutAnswers = function(){
	var answerWindow = Ti.UI.createWindow({
		title: this.question,
		backgroundColor: "BDBDBD",
	});

	
	var answerText = Ti.UI.createLabel({
		text: this.answer,
		font: {fontSize: 12, fontFamily: "Arial"},
		left: 10,
		right: 10
	});
	
	answerWindow.add(answerText);

	navWindow.openWindow(answerWindow);
};

for(var i = 0, j= aboutMe.length; i<j; i++){
	var aRow = Ti.UI.createTableViewRow({
		title: aboutMe[i].number,
		quest: aboutMe[i].question,
		hasChild: true,
		hasDetail: true
		
	});
	aboutSection.add(aRow);
	aRow.addEventListener("click", aboutAnswers);
};


questionTable.add(aboutSection);
mainWindow.add(questionTable);
navWindow.open(mainWindow);
