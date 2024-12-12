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
    getCurrentPoints();
}

function getCurrentPlant(){
    document.getElementById('currentPlant').innerHTML = localStorage.getItem('currentPlant');
}

function setCurrentPlant(plant){
    localStorage.setItem('currentPlant', plant);
    getCurrentPlant();
}

function getCurrentSubject(){
    document.getElementById('currentSubject').innerHTML = localStorage.getItem('currentSubject');
}

function setCurrentSubject(subject){
    localStorage.setItem('currentSubject', subject);
    getCurrentSubject();
}

function getPlantProgress(){
    document.getElementById('plantProgress').value = localStorage.getItem('plantProgress');
}

function setPlantProgress(progress){
    localStorage.setItem('plantProgress', progress);
    getPlantProgress();
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
    getPlantImage();
}

function getGrid1(){
    if (localStorage.getItem('grid1') === null){
        localStorage.setItem('grid1', '../Images/Plants/Krukke.png');
    }
    else{
        document.getElementById('grid1').src = localStorage.getItem('grid1');
    }
}

function setGrid1(grid){
    localStorage.setItem('grid1', grid);
    getGrid1();
}

function getGrid2(){
    if (localStorage.getItem('grid2') === null){
        localStorage.setItem('grid2', '../Images/Plants/Krukke.png');
    }
    else {
        document.getElementById('grid2').src = localStorage.getItem('grid2');
    }
}

function setGrid2(grid){
    localStorage.setItem('grid2', grid);
    getGrid2();
}

function getGrid3(){
    if (localStorage.getItem('grid3') === null){
        localStorage.setItem('grid3', '../Images/Plants/Krukke.png');
    }
    else {
        document.getElementById('grid3').src = localStorage.getItem('grid3');
    }
}

function setGrid3(grid){
    localStorage.setItem('grid3', grid);
    getGrid3();
}

function getGrid4(){
    if (localStorage.getItem('grid4') === null){
        localStorage.setItem('grid4', '../Images/Plants/Krukke.png');
    }
    else {
        document.getElementById('grid4').src = localStorage.getItem('grid4');
    }
}

function setGrid4(grid){
    localStorage.setItem('grid4', grid);
    getGrid4();
}

function getGrid5(){
    if (localStorage.getItem('grid5') === null){
        localStorage.setItem('grid5', '../Images/Plants/Krukke.png');
    }
    else {
        document.getElementById('grid5').src = localStorage.getItem('grid5');
    }
}

function setGrid5(grid){
    localStorage.setItem('grid5', grid);
    getGrid5()
}

function getGrid6(){
    if (localStorage.getItem('grid6') === null){
        localStorage.setItem('grid6', '../Images/Plants/Krukke.png');
    }
    else {
        document.getElementById('grid6').src = localStorage.getItem('grid6');
    }
}

function setGrid6(grid){
    localStorage.setItem('grid6', grid);
    getGrid6();
}

function loadGrid() {
    getGrid1();
    getGrid2();
    getGrid3();
    getGrid4();
    getGrid5();
    getGrid6();
}

function resetPlant() {
    setCurrentPlant("");
    setCurrentSubject("");
    setCurrentPoints(0);
    try {
        setPlantProgress(0);    
    }
    catch (error) {
        console.log(error);
    }
    try {
        setPlantImage("../Images/Plants/Krukke.png");
    }
    catch (error) {
        console.log(error);
    }
}