let globals = {
    currentPoints : 0,
    currentPlant: null,
    currentSubject: null,
};

 function getCurrentPoints(){
    document.getElementById('currentPoints');
    return globals.currentPoints;
 }
 
 function setCurrentPoints(points){
    globals.currentPoints = points;
    document.getElementById('currentPoints').innerHTML = points;
 }
 
function getCurrentPlant(){
    document.getElementById('currentPlant').innerHTML = globals.currentPlant;
    return globals.currentPlant;
}

function setCurrentPlant(plant){
    globals.currentPlant = plant;
    document.getElementById('currentPlant').innerHTML = plant;
}

function getCurrentSubject(){
    document.getElementById('currentSubject');
    return globals.currentSubject;
}

function setCurrentSubject(subject){
    globals.currentSubject = subject;
    document.getElementById('currentSubject').innerHTML = subject;
}