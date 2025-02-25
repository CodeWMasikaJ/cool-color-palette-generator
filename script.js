//getRandomColor():
//Creates a random hex color code (e.g., #A2B3C4).
//Uses a loop to pick six random characters from the hex character set.

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//generatePalette():
//Clears any existing color boxes.
//Loops five times to create five color boxes.
//Calls getRandomColor() to get a color for each box.
//Sets the background color of the box.
//Stores the hex code inside of the div using the setAttribute method.
//Adds an event listener to the color box, so that when the box is clicked, the copyToClipboard function is called.
//Appends the box to the palette.

function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('data-color', color);

        colorBox.addEventListener('click', function() {
            const hexCode = this.getAttribute('data-color');
            copyToClipboard(hexCode);
        });

        palette.appendChild(colorBox);
    }
}

//copyToClipboard():
//Uses the navigator.clipboard.writeText() method to copy the color code to the clipboard.
//Displays an alert to let the user know the color was copied.
//The code adds an event listener to the generate button, so that when it is clicked, the generatePalette function is called.
//The generatePalette function is called when the page loads, so that an initial palette is shown.

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Color code copied: ' + text);
    }).catch(err => {
        console.error('Could not copy text: ', err);
        alert('Could not copy color code.');
    });
}

document.getElementById('generateBtn').addEventListener('click', generatePalette);

generatePalette();




