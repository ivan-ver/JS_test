let m = [[1,1],[1,-1],[-1,1], [-1,-1]];
let letters =['a','b','c','d','e','f','g','h'];

$('td[class != symbols]').click(function () {
    $('.black').css('background-color', 'black');
    $('.white').css('background-color', 'white');

    $(this).css('background-color', 'blue');

    let horseCoord = getPositions(this.id);

    for (let i = 0; i < horseCoord.length; i++) {
        let t = horseCoord[i][0]+horseCoord[i][1];
        $('#'+t).css('background-color', 'green');
    }

});

function getPositions (position) {

    let x = getLetterPosition(position.split('')[0]);
    let y = Number(position.split('')[1]);

    let coordinates = [];

    for (let i = 0; i < 4; i++){
        let rx = x + 2*m[i][0]-1;
        let ry = y + m[i][1];
        if ( rx >= 0 && ry >= 0 && rx <= 8 && ry <= 8) {
            coordinates.push([letters[rx], ry]);
        }

        rx = x + m[i][0]-1;
        ry = y + 2*m[i][1];
        if (rx >= 0 && ry >= 0 && rx <= 8 && ry <= 8) {
            coordinates.push([letters[rx], ry]);
        }
    }

    return coordinates;
}

function getLetterPosition(letter) {
    let start = 'a'.toLowerCase().charCodeAt(0);
    let finish = letter.toLowerCase().charCodeAt(0);
    return finish - start + 1;
}