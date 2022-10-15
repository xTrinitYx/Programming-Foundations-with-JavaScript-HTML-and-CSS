

/*upload image*/
var image = null;

function upload() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}
/*upload image*/

function makeYellow() {
  //change all pixels of image to yellow
  for (var pixel of image.values()) {
    //var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
  }
  //display new image
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}