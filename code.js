
//coffees
let coffeeScores = {
//blonde
    christmasBlonde: 0,
    blonde: 0,
//medium
    colombia: 0,
    ethiopia: 0,
    guatemalaAntigua: 0,
    houseBlend: 0,
    kenya: 0,
    pikePlace: 0,
//dark
    verona: 0,
    espresso: 0,
    sumatra: 0
};

const coffeeNames = {
    christmasBlonde: "Blonde Christmas Blend",
    blonde: "Blonde Roast",
    colombia: "Colombia Narino",
    ethiopia: "Ethiopia",
    guatemalaAntigua: "Guatemala Antigua",
    houseBlend: "House Blend",
    kenya: "Kenya",
    pikePlace: "Pike Place Roast",
    verona: "Caffe Verona",
    espresso: "Espresso Roast",
    sumatra: "Sumatra"
};

const coffeeDescriptions = {
    christmasBlonde: "Blonde Christmas Blend",
    blonde: "Blonde Roast",
    colombia: "Colombia Narino",
    ethiopia: "Ethiopia",
    guatemalaAntigua: "Guatemala Antigua",
    houseBlend: "House Blend",
    kenya: "Kenya",
    pikePlace: "Pike Place Roast",
    verona: "Caffe Verona",
    espresso: "Espresso Roast",
    sumatra: "Sumatra"
};
/* const dropdown = document.getElementById("roastDropdown");

dropdown.addEventListener("change", function() {
    const choice = dropdown.value;

    if (choice === "blonde") {
        christmasBlonde + 1;
        blonde + 1;
    }
    else if (choice === "medium") {
        colombia + 1;
        ethiopia + 1;
        guatemalaAntigua + 1;
        houseBlend + 1;
        kenya + 1;
        pikePlace + 1;
    }
    else if (choice === "dark") {
        verona + 1;
        espresso + 1;
        sumatra + 1;
    }
}); */

const q1buttons = document.querySelectorAll(".q1");

q1buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        q1buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");

        const choice = btn.dataset.value;

        if (choice === "blonde") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.blonde += 1;
        }
        else if (choice === "medium") {
            coffeeScores.colombia += 1;
            coffeeScores.ethiopia += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.kenya += 1;
            coffeeScores.pikePlace += 1;
        }
        else if (choice === "dark") {
            coffeeScores.verona += 1;
            coffeeScores.espresso += 1;
            coffeeScores.sumatra += 1;        
        }
    });
});

const q2buttons = document.querySelectorAll(".q2");

q2buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q2buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "latinAmerica") {
            coffeeScores.blonde += 1;
            coffeeScores.colombia += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.pikePlace += 1;
            coffeeScores.espresso += 1;
            coffeeScores.verona += 1;
        }
        else if (choice === "africa") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.ethiopia += 1;
            coffeeScores.kenya += 1;
        }
        else if (choice === "asiaPacific") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.espresso += 1;
            coffeeScores.verona += 1;
            coffeeScores.sumatra += 1;        
        }
    });
});

const q3buttons = document.querySelectorAll(".q3");

q3buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q3buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "low") {
            coffeeScores.verona += 1;
            coffeeScores.sumatra += 1;        
        }
        else if (choice === "high") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.kenya += 1;
            coffeeScores.ethiopia += 1;
        }
        else if (choice === "medium") {
            coffeeScores.pikePlace += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.blonde += 1;
            coffeeScores.espresso += 1;
            coffeeScores.colombia += 1;
        }
    });
});

const q4buttons = document.querySelectorAll(".q4");

q4buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q4buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "light") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.blonde += 1;
        }
        else if (choice === "full") {
            coffeeScores.espresso += 1;
            coffeeScores.verona += 1;
            coffeeScores.sumatra += 1; 
        }
        else if (choice === "mediumBody") {
            coffeeScores.pikePlace += 1;
            coffeeScores.ethiopia += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.colombia += 1;
            coffeeScores.kenya += 1;       
        }
    });
});

const q5buttons = document.querySelectorAll(".q5");

q5buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q5buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "washed") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.blonde += 1;
            coffeeScores.espresso += 1;
            coffeeScores.pikePlace += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.colombia += 1;
            coffeeScores.verona += 1;
            coffeeScores.kenya += 1;    
            coffeeScores.ethiopia += 1;   
        }
        else if (choice === "semiWashed") {
            coffeeScores.verona += 1;
            coffeeScores.sumatra += 1; 
            coffeeScores.espresso += 1;
        }
        else if (choice === "natural") {

        }
    });
});

const q6buttons = document.querySelectorAll(".q6");

q6buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q6buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "singleOrigin") {
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.colombia += 1;
            coffeeScores.verona += 1;
            coffeeScores.kenya += 1;    
            coffeeScores.sumatra += 1;   
            coffeeScores.ethiopia += 1; 
        }
        else if (choice === "preRoastblend") {
            coffeeScores.espresso += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.pikePlace += 1;
            coffeeScores.blonde += 1;
        }
        else if (choice === "postRoastblend") {
            coffeeScores.verona += 1;
            coffeeScores.christmasBlonde += 1;
        }
    });
});

const q7buttons = document.querySelectorAll(".q7");

q7buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q7buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "caramel") {
            coffeeScores.blonde += 1;
            coffeeScores.verona += 1;
            coffeeScores.espresso += 1;
        }
        else if (choice === "chocolate") {
            coffeeScores.espresso += 1;
            coffeeScores.houseBlend += 1;
            coffeeScores.pikePlace += 1;
            coffeeScores.verona += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.ethiopia += 1; 
        }
        else if (choice === "citrus") {
            coffeeScores.blonde += 1;
            coffeeScores.christmasBlonde += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.kenya += 1;
            coffeeScores.ethiopia += 1;
        }
        else if (choice === "nuts") {
            coffeeScores.houseBlend += 1;
            coffeeScores.colombia += 1;
            coffeeScores.pikePlace += 1;
        }
        else if (choice === "herbal") {
            coffeeScores.christmasBlonde += 1;
            coffeeScores.colombia += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.sumatra += 1;   
        }
        else if (choice === "berries") {
            coffeeScores.kenya += 1;    
        }
    });
});

const q8buttons = document.querySelectorAll(".q8");

q8buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        // Remove 'selected' from all buttons in this question
        q8buttons.forEach(b => b.classList.remove("selected"));

        // Add 'selected' to the clicked button
        btn.classList.add("selected");
        
        const choice = btn.dataset.value;

        if (choice === "espresso") {
            coffeeScores.blonde += 1;
            coffeeScores.espresso += 1;
        }
        else if (choice === "frenchPress") {
            coffeeScores.houseBlend += 1;
            coffeeScores.pikePlace += 1;
            coffeeScores.blonde += 1;
            coffeeScores.verona += 1;
            coffeeScores.christmasBlonde += 1;
            coffeeScores.guatemalaAntigua += 1;
            coffeeScores.colombia += 1;
            coffeeScores.verona += 1;
            coffeeScores.kenya += 1;    
            coffeeScores.sumatra += 1;   
            coffeeScores.ethiopia += 1; 
        }
        else if (choice === "overIce") {
            coffeeScores.blonde += 1;
            coffeeScores.kenya += 1;
        }
    });
});

/* const finalResult = document.getElementById("finalResult");

let highScoreCoffee = Object.keys(coffeeScores).reduce((a, b) =>
    coffeeScores[a] > coffeeScores[b] ? a : b
);



if (highScoreCoffee === "christmasBlonde") {
    finalResult.textContent = "Your result: Blonde Christmas Blend";
}
else if (highScoreCoffee === "blonde") {
    finalResult.textContent = "Your result: Blonde Roast";
}
else if (highScoreCoffee === "colombia") {
    finalResult.textContent = "Your result: Colombia Narino";
} */

const finishButton = document.getElementById("finish");
const finalResult = document.getElementById("finalResult");

finishButton.addEventListener("click", function() {

    // Find highest score(s)
    let highestScore = Math.max(...Object.values(coffeeScores));
    let winners = Object.keys(coffeeScores).filter(key => coffeeScores[key] === highestScore);
    let resultText = winners.map(key => coffeeNames[key]).join(", ");
    finalResult.textContent = `Recommended Coffee: ${resultText}`;

    // Show result
    /*if (winners.length === 1) {
        finalResult.textContent = `Your result: ${winners[0]}`;
    } else {
        finalResult.textContent = `It's a tie between: ${winners.join(" • ")}`;
    }*/

});