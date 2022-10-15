
//Green Screen Algorithm

var fImage = new SimpleImage("drewRobert.png");
var bImage = new SimpleImage("dinos.png");
var outImage = new SimpleImage(fImage.getWidth(), fImage.getHeight());
for(var fPixel of fImage.values()){
	var x = fPixel.getX();
	var y = fPixel.getY();
    if(fPixel.getGreen() > fPixel.getRed() + fPixel.getBlue()){        
        var bPixel = bImage.getPixel(x,y)
        outImage.setPixel(x, y, bPixel);
    }
    else{
        outImage.setPixel(x, y, fPixel);
    }
}
print(outImage);

