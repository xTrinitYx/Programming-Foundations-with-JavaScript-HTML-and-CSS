
//Steganography Exercise

var startImage = new SimpleImage("smalluniverse.jpg");
var imageToHide = new SimpleImage("smallpanda.png");
print("Start Image:");
printWxH(startImage);
print(startImage);
print("<br>Image to Hide:");
printWxH(imageToHide);
print(imageToHide);

var crWidth = startImage.getWidth();
var crHeight = startImage.getHeight();
if (crWidth < imageToHide.getWidth()){
    crWidth = imageToHide.getWidth();
}
if(crHeight < imageToHide.getHeight()){
    crHeight = imageToHide.getHeight();
}

print("<br>Start Image cropped for Stego:");
startImage = crop(startImage,crWidth,crHeight);
print(startImage);
print("<br>Image to Hide cropped for stego:");
imageToHide = crop(imageToHide,crWidth,crHeight);
print(imageToHide);

startImage = chopSignificant(startImage);
imageToHide = chopShiftToHide(imageToHide);
var stego = combine(startImage,imageToHide);
print("<br>Stego:");
print(stego);

var hidden = extractHidden(stego);
print("<br>Hidden Image:");
print(hidden);

function printWxH(image){
    print(image.getWidth()+"x"+image.getHeight());
}

function crop(image, width, height){
    var croppedImage = new SimpleImage(width,height);
    for(var pix of image.values()){
        var x = pix.getX();
        var y = pix.getY();
        croppedImage.setPixel(x,y,image.getPixel(x,y));
    }
    print(croppedImage.getWidth()+"x"+croppedImage.getHeight());
    return croppedImage;
}

function chopSignificant(image){
    for(var pix of image.values()){
        pix.setRed(getSignificant(pix.getRed()));
        pix.setGreen(getSignificant(pix.getGreen()))
        pix.setBlue(getSignificant(pix.getBlue()));
    }
    return image;
}
function getSignificant(colorVal){
    var significant = Math.floor(colorVal/16)*16;
    return significant;
}
function chopShiftToHide(image){
    for(var pix of image.values()){
        pix.setRed(getSignificant(pix.getRed())/16);
        pix.setGreen(getSignificant(pix.getGreen())/16);
        pix.setBlue(getSignificant(pix.getBlue())/16);
    }
    return image;
}
function combine(sImage,hImage){
    for(var pix of sImage.values()){
        var x = pix.getX();
        var y = pix.getY();
        stegoAdd(pix, hImage.getPixel(x,y));
    }
    return sImage;
}
function stegoAdd(sPix, hPix){
    sPix.setRed(sPix.getRed()+hPix.getRed());
    sPix.setGreen(sPix.getGreen()+hPix.getGreen());
    sPix.setBlue(sPix.getBlue()+hPix.getBlue());
}
function extractHidden(stego){
    for(var pix of stego.values()){
        extract(pix);
    }
    return stego;
}
function extract(pix){
    pix.setRed((pix.getRed() % 16) * 16);
    pix.setGreen((pix.getGreen() % 16) * 16);
    pix.setBlue((pix.getBlue() % 16) * 16);
}

