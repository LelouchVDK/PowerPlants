function changeImage() {
    var selector = document.getElementById('imageSelector');
    setPlantImage(selector.value);

    if (selector.value === "../Images/Plants/cactus_1.png") {
        setCurrentPlant("Kaktus");
        setCurrentSubject("Mennesket");
    } else {
        setCurrentPlant("Amaryllis");
        setCurrentSubject("Jorden");
    }
    currentProgress = 0;
    currentPoints = 7;  
    setPlantProgress(currentProgress);
    setCurrentPoints(currentPoints);
}


function waterPlant() {
    var image = document.getElementById('plantImage');
    var progress = document.getElementById('plantProgress');
    var points = document.getElementById('currentPoints');
    var currentPoints = parseInt(points.innerHTML);
    var currentProgress = parseInt(progress.value);
    var currentImage = image.attributes.src.value;
    if ((currentImage !== "../Images/Plants/Krukke.png") 
        && currentPoints > 0 && currentProgress < 3) {
        currentProgress++;
        if (currentProgress === 1 && currentImage === "../Images/Plants/amaryllis_1.png") {
            setPlantImage("../Images/Plants/amaryllis_2.png");
        }
        else if (currentProgress === 3 && currentImage === "../Images/Plants/amaryllis_2.png") {
            setPlantImage("../Images/Plants/amaryllis_3.png");
        }
        else if (currentProgress === 1 && currentImage === "../Images/Plants/cactus_1.png") {
            setPlantImage("../Images/Plants/cactus_2.png");
        }
        else if (currentProgress === 3 && currentImage === "../Images/Plants/cactus_2.png") {
            setPlantImage("../Images/Plants/cactus_3.png");
        }
        currentPoints--;
        setPlantProgress(currentProgress);
        setCurrentPoints(currentPoints);
    }
    else if (currentProgress === 3)
    {
        alert("Planten er fuldt vokset og kan nu plantes i drivhuset");
    }
    else {
        alert("Du har ikke nok vand eller planten er ikke plantet");
    }
}