function getCurrentPoints(){
    if (localStorage.getItem('currentPoints') === null){
        localStorage.setItem('currentPoints', 0);
    }
    else{
        document.getElementById('currentPoints').innerHTML = localStorage.getItem('currentPoints');
    }
 }
 
function setCurrentPoints(points){
    localStorage.setItem('currentPoints', points);
    document.getElementById('currentPoints').innerHTML = localStorage.getItem('currentPoints');
}

function getCurrentPlant(){
    document.getElementById('currentPlant').innerHTML = localStorage.getItem('currentPlant');
}

function setCurrentPlant(plant){
    localStorage.setItem('currentPlant', plant);
    document.getElementById('currentPlant').innerHTML = localStorage.getItem('currentPlant');
}

function getCurrentSubject(){
    document.getElementById('currentSubject').innerHTML = localStorage.getItem('currentSubject');
}

function setCurrentSubject(subject){
    localStorage.setItem('currentSubject', subject);
    document.getElementById('currentSubject').innerHTML = localStorage.getItem('currentSubject');
}

function getPlantProgress(){
    document.getElementById('plantProgress').value = localStorage.getItem('plantProgress');
}

function setPlantProgress(progress){
    localStorage.setItem('plantProgress', progress);
    document.getElementById('plantProgress').value = localStorage.getItem('plantProgress');
}

function getPlantImage(){
    if (localStorage.getItem('plantImage') === null){
        localStorage.setItem('plantImage', '../Images/Plants/Krukke.png');
    }
    else{
        document.getElementById('plantImage').src = localStorage.getItem('plantImage');
    }
}

function setPlantImage(image){
    localStorage.setItem('plantImage', image);
    document.getElementById('plantImage').src = localStorage.getItem('plantImage');
}