const Mennesket = new Map();

Mennesket.set("Hvilket af disse stoffer bliver transporteret rundt i vores krop i vores blodkredsløb?", {correct: ["O2 (ilt)"], incorrect: ["Zink", "H2O", "Salt"], explanation: 'Et af blodkredsløbets vigtigste opgaver er at transportere O2 (Ilt) fra vores lunger ud i resten af kroppen. Det transporterer også andre ting som røde og hvide blodceller og hjælper kroppen med at komme af med CO2 (Kuldioxid).'});
Mennesket.set("Hvad består blodkredsløbet af?", {correct: ["Hjerte, blod og blodårer"], incorrect: ["Blod, lunger og nerver", "Hjerne, hjerte og nerver", "Blod, lunger og muskler"], explanation: 'Blodkredsløbet består af hjertet, blodet og blodårerne. Hjertet fungerer som kredsløbets pumpe, som pumper blodet rundt i kroppen gennem blodårerne.'});
Mennesket.set("Hvilke to typer blodårer består vores blodkredsløb af?", {correct: ['Pulsårer og vener'], incorrect: ['Røde og blå blodårer', 'Blodårer og luftårer.', 'Nerver og vener'], explanation: 'Blodkredsløbets blodårer hedder pulsårer og vener. Pulsårerne fører blodet fra hjertet og rundt i kroppen og er ofte tegnet med rødt på modeller. Venerne transporterer blodet fra kroppen tilbage til hjertet og er ofte tegnet med blåt på modeller.'});
Mennesket.set("Hvordan får vi oxygen (ilt) ind i vores krop?", {correct: ['Ved at trække vejret'], incorrect: ['Ved at spise mad', 'Ved at drikke vand', 'Ved at sove'], explanation: 'Oxygen kaldes også ilt og det findes i luften omkring os. Når vi trækker vejret, får vi oxygen ned i lungerne, som derfra kan spredes rundt i resten af kroppen ved hjælp af blodkredsløbet.'});
Mennesket.set('Hvor starter og slutter fordøjelseskanalen?', {correct: ['Start ved munden og slut ved anus'], incorrect: ['Start ved maven og slut ved anus', 'Start ved munden og slut ved maven', 'Start ved maven og slut ved tarmene'], explanation: "Fordøjelseskanalen starter ved munden og slutter ved udgangen af endetarmen, som også kaldes anus. Vores mad starter i munden og skal derefter gennem maven og tarmene, før det kommer til anus"});
Mennesket.set('Hvad bruger vi spyttet i vores mund til?', {correct: ['Til at starte fordøjelsen af vores mad'], incorrect: ['Til at rense vores mund for madrester', 'Til at beskytte vores tunge mod rifter', 'Til at forhindre vores mund i at blive tør'], explanation: 'Vores spyt indeholder enzymer, som hjælper og med at starte fordøjelsen af vores mad og gøre det lettere for os at tygge maden. Vi producerer mellem 0,5 - 1,5 liter spyt om dagen.'});
Mennesket.set('Hvor lang er vores tyndtarm?', {correct: ['6 - 7 meter'], incorrect: ['4 - 5 meter', '2 - 3 meter', '8 - 9 meter'], explanation: 'Vores tyndtarm er 6 - 7 meter lang. Den ligger foldet sammen under vores mavesæk og er en del af vores fordøjelsessystem.'});
Mennesket.set('Hvad bruger kroppen kulhydrater til?', {correct: ['De giver os energi'], incorrect: ['De er byggesten til vores muskler', 'De skal bruges i knoglerne', 'De holder vores negle sunde'], explanation: 'Kroppen bruger kulhydrater til at lave energi, så vi kan bevæge os.'});
Mennesket.set('Hvad bruger kroppen proteiner til?', {correct: ['Som byggesten til vores muskler'], incorrect: ['Til at holde os vågne', 'Som byggesten til vores knogler', 'Til at fordøje vores mad'], explanation: 'Vores muskler består blandt andet af proteiner, derfor skal kroppen bruge proteiner når den bygger muskler.'});
Mennesket.set('Hvorfor er det vigtigt at spise forskellig mad?', {correct: ['Fordi vi skal bruge forskellige næringsstoffer'], incorrect: ['Fordi det er kedeligt at spise det samme', 'Fordi dine forældre siger du skal', 'For at der er plads i vores mave'], explanation: 'Kroppen har brug for mange forskellige næringsstoffer for at fungere. Mange af de næringsstoffer får vi gennem vores mad, men en slags mad indeholder ikke alle næringsstofferne. Derfor skal vi spise forskellig mad.'});

const Jorden = new Map();
Jorden.set('Hvor mange planeter er der i vores solsystem?', {correct: [8], incorrect: [7, 9, 10], explanation: 'Der er 8 planeter i vores solsystem. Jorden, Mars, Venus, Saturn, Uranus, Jupiter, Merkur og Neptun. Pluto er en speciel lille fætter og tæller ikke med, da det er en dværgplanet.'});
Jorden.set('Hvad var det første liv på jorden?', {correct: ['Bakterier'], incorrect: ['Mennesket', 'Fisk', 'Dinosaur'], explanation: 'Det første liv på jorden bestod af bittesmå bakterier, som levede i havet.'});
Jorden.set('Hvor gammel er jorden?', {correct: ['Over 4,5 milliarder år'], incorrect: ['3 millioner', '500.000 år', '2025 år'], explanation: 'Det er over 4,5 milliarder år siden at jorden blev dannet!'});
Jorden.set('Hvor opstod det første liv på jorden?', {correct: ['I havet'], incorrect: ['I bjergene', 'I grotter', 'I himlen'], explanation: 'Livet opstod først i havet, og bestod af bittesmå bakterier.'});
Jorden.set('Hvad er atmosfæren?', {correct: ['Et lag af luft omkring jorden'], incorrect: ['Et andet ord for solens lys', 'Den nederste del af havet', 'En bjergkæde'], explanation: 'Atmosfæren er det stykke af luft, som omkranser jorden. Vi lever i den nederste del af atmosfæren. Den beskytter os mod meteorer og giver os ilt, så vi kan trække vejret, hvilket vi er meget glade for at kunne, så vi ikke dør.'});
Jorden.set('Hvor tyk er jordens atmosfære?', {correct: ['120 km'], incorrect: ['10 km', '50 km', '80 km'], explanation: 'Atmosfæren er 120 km tyk! Det er det luftlag, som omkranser jorden.'});
Jorden.set('Hvad er drivhuseffekten?', {correct: 'Atmosfæren holder på varmen fra solen', incorrect: ['Planter gror bedre hvor det er varmt', 'Det bliver varmere jo mere glas et hus har', 'Planter smager bedre når de gror i drivhus'], explanation: 'Atmosfæren fungerer som glasset i et drivhus. Solens stråler kommer igennem og varmer jorden op, men atmosfæren sørger for, at varmen ikke slipper ud igen. Uden den ville jorden være -18 °C'});

const topics = new Map();
topics.set('Mennesket', Mennesket);
topics.set('Jorden', Jorden);

topics.get()

if (localStorage.getItem('currentSubject') !== 'Mennesket' && localStorage.getItem('currentSubject') !== 'Jorden') {
    document.getElementById('quizWindow').style.display = 'none';
    document.getElementById('question').innerHTML = 'Vælg venligst en plante at gro';
}

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

// Setting the topic
let getQuizTopic = localStorage.currentSubject;
let quizTopic = topics.get(getQuizTopic);
questionTopic(quizTopic);

options = currentMap.get(currentQ).correct.concat(currentMap.get(currentQ).incorrect);

let correctAnswer = currentMap.get(currentQ).correct;

// Don't know why I made this a function. 
for (let index = 3; index > 0; index--) {
    const randomElement = Math.floor(Math.random() * (index + 1));
    [options[index], options[randomElement]] = [options[randomElement], options[index]];
}


//Adding the options to the HTML elements. 
for (let index = 0; index < 4; index++) {
    document.getElementById("option" + (index + 1)).innerHTML = options[index];   
}

function chosenAnswer(answer) {
    let optionNum = answer[answer.length-1];

    if (options[optionNum - 1] == correctAnswer) {
        document.getElementById('question').innerHTML = 'Tillykke! Du får en spand vand!';
        setCurrentPoints(+localStorage.getItem('currentPoints') + 1); //First plus sign casts to int.
    } else {
        document.getElementById('question').innerHTML = 'Desværre, det var ikke rigtigt. Ellers godt forsøgt ';
    }
    document.getElementById('quizWindow').style.display = 'none';
    document.getElementById('explanation').innerHTML = currentMap.get(currentQ).explanation;
}