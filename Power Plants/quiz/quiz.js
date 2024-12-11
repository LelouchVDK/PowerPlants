const { globals } = require("../globals");

const Mennesket = new Map();
/*{
    "What is the name for a true/false datatype" : {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]},
    "Which language supports multiple inherintance (inherit from mulitple classes)" : {correct: "C++", incorrect: ["C#", "Java", "Swift"]}
};*/



Mennesket.set("Hvilket af disse stoffer bliver transporteret rundt i vores krop i vores blodkredsløb?", {correct: ["O2 (ilt)"], incorrect: ["Zink", "H2O", "Salt"], explanation: 'Et af blodkredsløbets vigtigste opgaver er at transportere O2 (Ilt) fra vores lunger ud i resten af kroppen. Det transporterer også andre ting som røde og hvide blodceller og hjælper kroppen med at komme af med CO2 (Kuldioxid).'});
Mennesket.set("Hvad består blodkredsløbet af?", {correct: ["Hjerte, blod og blodårer"], incorrect: ["Blod, lunger og nerver", "Hjerne, hjerte og nerver", "Blod, lunger og muskler"], explanation: 'Blodkredsløbet består af hjertet, blodet og blodårerne. Hjertet fungerer som kredsløbets pumpe, som pumper blodet rundt i kroppen gennem blodårerne.'});
Mennesket.set("Hvilke to typer blodårer består vores blodkredsløb af?", {correct: ['Pulsårer og vener'], incorrect: ['Røde og blå blodårer', 'Blodårer og luftårer.', 'Nerver og vener'], explanation: 'Blodkredsløbets blodårer hedder pulsårer og vener. Pulsårerne fører blodet fra hjertet og rundt i kroppen og er ofte tegnet med rødt på modeller. Venerne transporterer blodet fra kroppen tilbage til hjertet og er ofte tegnet med blåt på modeller.'});

const solsystemet = new Map();
solsystemet.set('Hvor mange planeter er der i vores solsystem?', {correct: [8], incorrect: [7, 9, 10]});

let currentMap;
let currentQ;
let options;
let Qs;
let currentQIndex;

function questionTopic(questionMap) {
    currentMap = questionMap;
    Qs = Array.from(currentMap.keys());
    currentQIndex = Math.floor(Math.random() * currentMap.size);
    currentQ = Qs[currentQIndex];

    document.getElementById("question").innerHTML = currentQ;

}

questionTopic(Mennesket);

options = currentMap.get(currentQ).correct.concat(currentMap.get(currentQ).incorrect);



let correctAnswer = currentMap.get(currentQ).correct;

// Don't know why I made this a function
function shuffler() {
    let i = currentMap.size;
    while (i < 1) {
        let randomIndex = Math.floor(Math.random() * i);
        [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
        i--;
    }
}



shuffler();

//Adding the options to the HTML elements. 
for (let index = 0; index < 4; index++) {
    document.getElementById("option" + (index + 1)).innerHTML = options[index];   
}

function chosenAnswer(answer) {
    let optionNum = answer[answer.length-1];

    if (options[optionNum - 1] == correctAnswer) {
        document.getElementById('question').innerHTML = 'Correct. You get a bucket of water';
        // window.location.href = '../Well/Well.html';
    } else {
        document.getElementById('question').innerHTML = 'Forkert. Surt show';
        // currentQIndex = Math.floor(Math.random() * QandA.size);
        // currentQ = Qs[currentQIndex];
    }
    document.getElementById('quizWindow').style.display = 'none';
    // document.getElementById('quizWindow').style.visibillity = 'hidden';
    document.getElementById('explanation').innerHTML = currentMap.get(currentQ).explanation;
}