const QandA = new Map();
/*{
    "What is the name for a true/false datatype" : {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]},
    "Which language supports multiple inherintance (inherit from mulitple classes)" : {correct: "C++", incorrect: ["C#", "Java", "Swift"]}
};*/

QandA.set("What is the name for a true/false datatype", {correct: "boolean", incorrect: ["arithmic", "logical", "checker"]});
QandA.set("Which language supports multiple inherintance (inherit from mulitple classes)", {correct: "C++", incorrect: ["C#", "Java", "Swift"]});

let Qs = Array.from(QandA.keys());

let currentQIndex = Math.floor(Math.random() * QandA.size); //I don't know if this pics a new rando mat any point so this might have to be reworked later.
let currentQ = Qs[currentQIndex];


let questionDisplay = document.getElementById("question").innerHTML = currentQ;

function shuffler() {
    
}