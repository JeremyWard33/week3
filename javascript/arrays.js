
//global scope variables

//create an array
//use square brackets
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow","Pink"];

var imageList = new Array();

//imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
//imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
//imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
//imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
//imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
//imageList[5] = "images/drawing/thumbs/artwork_6.jpg";

for (var a = 1; a < 26; a++)
{
    imageList[a] = "images/drawing/thumbs/artwork_" + a + ".jpg";
}

var imageListOil = new Array();

for (var b = 1; b < 9; b++)
{
    imageListOil[b] = "images/oil/thumbs/artwork_" + b + ".jpg";
}

function buildThumbnails(){
    //hook on to the thumbs div
    var thumbsDiv = document.getElementById("thumbs");

    //create an ouput variable
    var output = "";
    //first part:  counter (we set up 0 to start counting the loop)
    //second part:  condition, (the loop will keep looping as long as the condition is true)
    //third part:  incremetor - adds 1 to the counter for each after the code in the loop is executed.
    for (var i = 1; i < imageList.length; i++)
    {
        output += '<img src="' + imageList[i] + '" />';
        //thumbsDiv.innerHTML = i;

    };
    thumbsDiv.innerHTML = output;
    //thumbsDiv.innerHTML =
    //'<img src="' + imageList[0] + '" />' +
    //'<img src="' + imageList[1] + '" />' +
    //'<img src="' + imageList[2] + '" />' +
    //'<img src="' + imageList[3] + '" />'
    //;
    var oilPics = document.getElementById("otherPics");
    var outputOil = "";
    for (var j = 1; j < imageListOil.length; j++)
    {
        outputOil += '<img src="' + imageListOil[j] + '" />';
    }
    oilPics.innerHTML = outputOil;
}

window.onload = function () {
    buildThumbnails();  //use, "fire off", or "invoke" the function.
};

