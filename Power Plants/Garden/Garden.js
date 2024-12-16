

function plantPlant() {
    var selector = document.getElementById('gridSelector');
    if (localStorage.getItem('plantProgress') === "3") {
        switch (selector.value) {
            case "1":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid1("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid1("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
            case "2":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid2("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid2("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
            case "3":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid3("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid3("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
            case "4":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid4("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid4("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
            case "5":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid5("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid5("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
            case "6":
                if (localStorage.getItem('currentPlant') === "Kaktus") {
                    setGrid6("../Images/Plants/cactus_3_naked.png");
                } else {
                    setGrid6("../Images/Plants/amaryllis_3_naked.png");
                }
                resetPlant();
                break;
        }
    }
    else
        {
            alert("Du kan ikke plante planten endnu")
        }
}

function removePlant() {
    var selector = document.getElementById('gridSelector');
    switch (selector.value) {
        case "1":
            setGrid1("../Images/Plants/hole.png");
            break;
        case "2":
            setGrid2("../Images/Plants/hole.png");
            break;
        case "3":
            setGrid3("../Images/Plants/hole.png");
            break;
        case "4":
            setGrid4("../Images/Plants/hole.png");
            break;
        case "5":
            setGrid5("../Images/Plants/hole.png");
            break;
        case "6":
            setGrid6("../Images/Plants/hole.png");
            break;
    }
}