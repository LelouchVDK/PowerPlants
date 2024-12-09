const Kroppen = new Map();
/*{
    "What is the name for a true/false datatype" : {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]},
    "Which language supports multiple inherintance (inherit from mulitple classes)" : {correct: "C++", incorrect: ["C#", "Java", "Swift"]}
};*/

Kroppen.set("Hvilket af disse stoffer bliver transporteret rundt i vores krop i vores blodkredsløb?", {correct: ["O2 (ilt)"], incorrect: ["Zink", "H2O", "Salt"]});
Kroppen.set("Hvad består blodkredsløbet af?", {correct: ["Hjerte, blod og blodårer"], incorrect: ["Blod, lunger og nerver", "Hjerne, hjerte og nerver", "Blod, lunger og muskler"]});
Kroppen.set("Hvilke to typer blodårer består vores blodkredsløb af?", {correct: ['Pulsårer og vener'], incorrect: ['Røde og blå blodårer', 'Blodårer og luftårer.', 'Nerver og vener']});

const rummet = new Map();
rummet.set('Hvor mange planeter er der i vores solsystem?', {correct: [8], incorrect: [7, 9, 10]});

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

    let questionDisplay = document.getElementById("question").innerHTML = currentQ;

}

questionTopic(Kroppen);

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
        document.getElementById('question').innerHTML = 'Wrong. You get nothing';
        // currentQIndex = Math.floor(Math.random() * QandA.size);
        // currentQ = Qs[currentQIndex];
    }
}