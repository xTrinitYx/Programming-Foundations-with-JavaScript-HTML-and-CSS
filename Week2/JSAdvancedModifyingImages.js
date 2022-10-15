//**Advanced Modifying Images

//*Green Screen Algorithm:

var fImage = new SimpleImage("drewRobert.png");
var bImage = new SimpleImage("dinos.png");
var outImage = new SimpleImage(fImage.getWidth(), fImage.getHeight());
for(var fPixel of fImage.values()){
    if(fPixel.getGreen() > fPixel.getRed() + fPixel.getBlue()){
        var x = fPixel.getX();
        var y = fPixel.getY();
        var bPixel = bImage.getPixel(x,y)
        outImage.setPixel(x, y, bPixel);
    }
    else{
        outImage.setPixel(fPixel.getX(), fPixel.getY(), fPixel);
    }
}
print(outImage);

//*Debug Code:

//Code:
var img = new SimpleImage(200,200);
for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    if (x < img.getWidth()/2){
        px.setRed(255);
    }
    if (y>img.getHeight()/2){
        px.setBlue(255);
    }
    else {
        px.setGreen(255);
    }
}
print (img);

//Debugged
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    //px.setGreen(255); //Corrected
	if(x >= img.getWidth()/2){
        px.setGreen(255);
    }
  }
}
print(img);

//Debug Alternate
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if(x >= img.getWidth()/2 && y <= img.getHeight()/2){
        px.setGreen(255);
  }
}
print(img);


//*Add Border:

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}
function addBorder(image, thickness){
    var width = image.getWidth();
    var height = image.getHeight();
    
    for(var pix of image.values()){
        var x = pix.getX();
        var y = pix.getY();
        if(x < thickness || x >= width - thickness){
            setBlack(pix);
        }
        if(y < thickness || y >= height - thickness){
            if(x >= thickness || x < width - thickness){
                setBlack(pix);
            }
        }
    }
    return image;
}
var image = new SimpleImage("smallPanda.png");
//print(addBorder(image,10));
var image = new SimpleImage("rodger.png");
print(addBorder(image,20));
