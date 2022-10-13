function toggleNumber(el) {
    // check if number is already "locked"

    if (el.classList == "locked") {
        // Remove class to element
        el.classList.remove("locked");
    } else {
        const lockedElements = el.parentElement.querySelectorAll(".locked");

        if (lockedElements.length < 7) {
            // if not, lock the number byy adding class to element
            el.classList.add("locked");

            console.log("locked: ", el.id)
        }
    }
}


function generateNumber(el) {

    const lockedElements = el.parentElement.querySelectorAll(".locked");


    if (lockedElements.length < 7) {
        for (let i = lockedElements.length; i < 7;) {

            const randomNumber = Math.floor(Math.random() * 40) + 1;

            const button = document.getElementById(
                el.parentElement.id + "-" + randomNumber
            );

            if (button.classList != "locked") {
                button.classList.add("locked");
                i++;
            }
        }
    }
}



function init() {
    const leftSection = document.querySelector("#left");

    // create 12 divs that holds numbers
    for (let i = 1; i < 13; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i

        // crate 40 button inside every div
        for (let i = 1; i < 41; i++) {
            const newButton = document.createElement("button");

            // set id on button
            newButton.id = newDiv.id + "-" + i;
            // set text inside button
            newButton.innerText = i;
            // set onclick on button
            newButton.onclick = function () {
                toggleNumber(this);
            };



            // Add button inside div
            newDiv.appendChild(newButton);

        }
        const newLetter = document.createElement("p")

        if (i == 1) {
            newLetter.innerText = "A";
        } else if (i == 2) {
            newLetter.innerText = "B";
        } else if (i === 3) {
            newLetter.innerText = "C";
        } else if (i === 4) {
            newLetter.innerText = "D";
        } else if (i === 5) {
            newLetter.innerText = "E";
        } else if (i === 6) {
            newLetter.innerText = "F";
        } else if (i === 7) {
            newLetter.innerText = "G";
        } else if (i === 8) {
            newLetter.innerText = "H";
        } else if (i === 9) {
            newLetter.innerText = "I";
        } else if (i === 10) {
            newLetter.innerText = "J";
        } else if (i === 11) {
            newLetter.innerText = "K";
        } else if (i === 12) {
            newLetter.innerText = "L";
        }


        const pikaButton = document.createElement("button")
        pikaButton.innerText = "P"

        pikaButton.onclick = function () {
            generateNumber(this);
        }

        newDiv.appendChild(pikaButton)

        leftSection.appendChild(newDiv);
    }


}

init();