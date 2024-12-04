const QandA = new Map();
/*{
    "What is the name for a true/false datatype" : {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]},
    "Which language supports multiple inherintance (inherit from mulitple classes)" : {correct: "C++", incorrect: ["C#", "Java", "Swift"]}
};*/

QandA.set("What is the name for a true/false datatype", {correct: ["boolean"], incorrect: ["arithmic", "logical", "checker"]});
QandA.set("Which language supports multiple inherintance (inherit from mulitple classes)", {correct: ["C++"], incorrect: ["C#", "Java", "Swift"]});

let Qs = Array.from(QandA.keys());


let currentQIndex = Math.floor(Math.random() * QandA.size); //I don't know if this pics a new rando mat any point so this might have to be reworked later.
let currentQ = Qs[currentQIndex];


let questionDisplay = document.getElementById("question").innerHTML = currentQ;

//Making sure all the answers are can be added
let options = QandA.get(currentQ).correct.concat(QandA.get(currentQ).incorrect);

// Don't know why I made this a function
function shuffler() {
    let i = QandA.size;
    while (i != 0) {
        let randomIndex = Math.floor(Math.random() * i);
        [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
        i--;
    }
}

shuffler();

for (let index = 0; index < 4; index++) {
    document.getElementById("option" + (index + 1)).innerHTML = options[index];   
}

function wrongAnswer() {
    let correctAnswer = QandA.get(currentQ).correct;
}