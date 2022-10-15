

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

function makeStrip() {
  //change all pixels of image to yellow
  var w = image.getWidth();
  for (var pixel of image.values()) {
    x = pixel.getX();
    if(x <w/3){
		pixel.setRed(255);
	}
	if(x >= w/3 && x <2*w/3){
		pixel.setGreen(255);
	}
	if(x >= 2*w/3 && x <= w){
		pixel.setBlue(255);
	}
  }
  //display new image
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}