let allBoxes = document.querySelector('.boxes');

function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function generateRandomColor(){
    let hexCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';

    for(let i = 0 ; i < 6 ; i++){
        let randomNumber = generateRandomNumber(16);
        color += hexCharacters[randomNumber];
    }
    return color;
}

// creating 500 boxes

for(let i = 0 ; i < 500 ; i++){
    let div = document.createElement('div');
    div.classList.add('box');
    let h3 = document.createElement('h3');
    let randomNum = generateRandomNumber(500)
    h3.innerText = randomNum
    h3.classList.add('h3');

    div.append(h3)
    allBoxes.append(div)

}

let eachBox = document.querySelectorAll('.box')
let eachNum = document.querySelectorAll('.h3')

function handleBoxes(){
    eachBox.forEach((box) => box.style.background = generateRandomColor());
    eachNum.forEach((num) => num.innerHTML = generateRandomNumber(500));

}

allBoxes.addEventListener('mousemove', handleBoxes)