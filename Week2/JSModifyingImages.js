
// Programming Exercise: Modifying Images

var image = new SimpleImage("hilton.jpg");
var width = image.getWidth();
for(var pixel of image.values()){
    if(pixel.getX() < width/3){
        pixel.setRed(255);
    }
    else{
        if(pixel.getX() > width - width/3){
            pixel.setBlue(255);
        }
        else{
            pixel.setGreen(255);
        }
    }
}
//print(image)

function swapRedGreen(pixel){
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setRed(green);
    pixel.setGreen(red);
}
image = new SimpleImage("smallhands.png");
print(image); //original
for(var pix of image.values()){
    swapRedGreen(pix);
}
//print(image);

function swapBlueYellow(pixel){
    if(pixel.getBlue() < 255){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
image = new SimpleImage("duke_blue_devil.png");
for(var pix of image.values()){
    swapBlueYellow(pix);
}
print(image);
