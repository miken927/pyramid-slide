function DrawPyramid(val){

    document.getElementById("sliderValue").innerHTML = val;
    determineHeight();

}

function determineHeight() {

    var input = document.getElementById("height");
    heightStr = input.value;
    height = parseInt(heightStr);
    drawPyramid(height);

}

var select = document.querySelector('select');

select.addEventListener("change", DrawPyramid);

function drawPyramid(height) {

    // before drawing, clear the old content

    document.getElementById('pyramid').innerHTML = "";

    var select = document.querySelector('select');
    var brickType = select.value;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
        rowStr += ".";

        }

        for (var i = 0; i < numBricks; i++) {

            rowStr += brickType;

        }


        // create a text element with the string of characters

        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside

        rowElem = document.createElement("p");

        rowElem.appendChild(textElem);


        // insert the paragraph as a child of the container <div>

        document.getElementById("pyramid").appendChild(rowElem);

    }

}
