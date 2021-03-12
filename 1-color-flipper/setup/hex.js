const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {

    let hexColor = '#';

    for(let i=0; i<6; i++) {

        let temp = getRandomNumber()

        //Math.random * hex.length 로 hex array character random select
        hexColor += hex[temp];

    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
