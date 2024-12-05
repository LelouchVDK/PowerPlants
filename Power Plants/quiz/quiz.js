const QandA = new Map();
/*{
    "What is the name for a true/false datatype" : {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]},
    "Which language supports multiple inherintance (inherit from mulitple classes)" : {correct: "C++", incorrect: ["C#", "Java", "Swift"]}
};*/

QandA.set("Hvilket af disse stoffer bliver transporteret rundt i vores krop i vores blodkredsløb?", {correct: ["O2 (ilt)"], incorrect: ["Zink", "H2O", "Salt"]});
QandA.set("Hvad består blodkredsløbet af?", {correct: ["Hjerte, blod og blodårer"], incorrect: ["Blod, lunger og nerver", "Hjerne, hjerte og nerver", "Blod, lunger og muskler"]});
QandA.set("Hvilke to typer blodårer består vores blodkredsløb af?", {correct: ['Pulsårer og vener'], incorrect: ['Røde og blå blodårer', 'Blodårer og luftårer.', 'Nerver og vener']});
QandA.set('Hvor mange planeter er der i vores solsystem?', {correct: [8], incorrect: [7, 9, 10]});

let Qs = Array.from(QandA.keys());


let currentQIndex = Math.floor(Math.random() * QandA.size); //I don't know if this pics a new rando mat any point so this might have to be reworked later.
let currentQ = Qs[currentQIndex];


let questionDisplay = document.getElementById("question").innerHTML = currentQ;

//Making sure all the answers are can be added
let options = QandA.get(currentQ).correct.concat(QandA.get(currentQ).incorrect);

console.log(options);
// Don't know why I made this a function
function shuffler() {
    let i = QandA.size;
    while (i < 1) {
        let randomIndex = Math.floor(Math.random() * i);
        [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
        i--;
    }
}

shuffler();

//Adding the options to the HTML elements. 
for (let index = 0; index < Qs.length; index++) {
    document.getElementById("option" + (index + 1)).innerHTML = options[index];   
}

function chosenAnswer(answer) {
    let correctAnswer = QandA.get(currentQ).correct;
    let optionNum = answer[answer.length-1];

    if (options[optionNum - 1] == correctAnswer) {
        document.getElementById('question').innerHTML = 'Correct. You get a bucket of water';
        window.location.href = '../Well/Well.html';
    } else {
        document.getElementById('question').innerHTML = 'Wrong. You get nothing';
        //currentQIndex = Math.floor(Math.random() * QandA.size);
        // currentQ = Qs[currentQIndex];
    }
}