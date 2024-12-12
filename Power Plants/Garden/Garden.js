

function plantPlant() {
    var selector = document.getElementById('gridSelector');
    if (localStorage.getItem('plantProgress') === "3") {
        if (selector.value === "1") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid1("../Images/Plants/cactus_3.png");
            } else {
                setGrid1("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();

        } else if (selector.value === "2") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid2("../Images/Plants/cactus_3.png");
            } else {
                setGrid2("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();
            
        } else if (selector.value === "3") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid3("../Images/Plants/cactus_3.png");
            } else {
                setGrid3("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();
            
        } else if (selector.value === "4") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid4("../Images/Plants/cactus_3.png");
            } else {
                setGrid4("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();
            
        } else if (selector.value === "5") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid5("../Images/Plants/cactus_3.png");
            } else {
                setGrid5("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();
            
        } else if (selector.value === "6") {
            if (localStorage.getItem('currentPlant') === "Kaktus") {
                setGrid6("../Images/Plants/cactus_3.png");
            } else {
                setGrid6("../Images/Plants/amaryllis_3.png");
            }
            resetPlant();
        }
    }
    else {
        alert("Du kan ikke plante planten endnu")
    }
}