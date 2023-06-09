
let numbers = [];
for (let i = 1; i <= 16; i++) {
    numbers.push(i);
}


let table = document.getElementById("gameTable");
for (let i = 0; i < 4; i++) {
    var row = table.insertRow(i);
    for (let j = 0; j < 4; j++) {
        let cell = row.insertCell(j);
        cell.addEventListener("click", checkCell);
    }
}


shuffleArray(numbers);


let index = 0;
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].textContent = numbers[index];
        index++;
    }
}


let currentNumber = 1;
let gameOver = false;


function checkCell() {
    if (gameOver) return;

    let clickedNumber = parseInt(this.textContent);
    if (clickedNumber === currentNumber) {
        this.style.backgroundColor = "green";
        currentNumber++;

        if (currentNumber === 17) {
            gameOver = true;
            alert("ardicillig duzgundur");
        }
    } else {
        this.style.backgroundColor = "red";
        gameOver = true;
        alert("ardicilig duzgun deyil!!!");
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
