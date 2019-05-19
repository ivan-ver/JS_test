let m = [[1,1],[1,-1],[-1,1],[-1,-1]];

let letters =['A','B','C','D','E','F','G','H'];

ok_button.onclick = function () {
    let position = document.getElementById("position").value;

    let x = getLetterPosition(position.split('')[0]);
    let y = Number(position.split('')[1]);


    if (position.length !== 2 || isNaN(x) || typeof position.split('')[1] !== 'string'){
        alert('Неверный формат ввода!!!');
        return;
    }
    if (x > 8 || y > 8) {
        alert('Вы вышли за пределы шахматной доски!!!');
        return;
    }

    let coordinates = [];

    for (let i = 0; i < 4; i++){
        let rx = x + 2*m[i][0]-1;
        let ry = y + m[i][1];
        if ( rx > 0 && ry > 0 && rx <= 8 && ry <= 8) {
            coordinates.push([letters[rx], ry]);
        }

        rx = x + m[i][0]-1;
        ry = y + 2*m[i][1];
        if (rx > 0 && ry > 0 && rx <= 8 && ry <= 8) {
            coordinates.push([letters[rx], ry]);
        }
    }

    let resultString = '';

    for (let i = 0; i < coordinates.length; i++) {
        resultString += coordinates[i][0] + coordinates[i][1] +' ';
    }

    alert('Возможные варианты хода:'+ '\n' + resultString);
};


function getLetterPosition(letter) {
    let start = 'a'.toLowerCase().charCodeAt(0);
    let finish = letter.toLowerCase().charCodeAt(0);
    return finish - start + 1;
}