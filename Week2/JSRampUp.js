///Ramp-Up exercises
function phrase3words(val1,val2,val3){
    var ans = val1+" "+val2+" "+val3+" ";
    return ans
}
print(phrase3words("Are", "you", "ready?"));

function reformatName(last, first){
    return first+" "+last;
}
print(reformatName("University", "Duke"));

function numberPixels(nameFile){
    var imf = new SimpleImage(nameFile);
    var ans = imf.getHeight()*imf.getWidth();
    return "Number of Pixels in Image: "+nameFile+" = "+ans;
}
var imFile = "dinos.png";
print(numberPixels(imFile));

function perimeter(nameFile){
    var image = new SimpleImage(nameFile);
    var perimeter = image.getHeight()*2 + image.getWidth()*2;
    return "Perimeter of image: "+nameFile+" = "+perimeter;
}
imFile = "rodger.png";
print(perimeter(imFile));

function printPixel(nameImage, xpos, ypos){
    var imFile = new SimpleImage(nameImage);
    var pix = imFile.getPixel(xpos, ypos);
    print();
    print("Red: "+pix.getRed());
    print("Green: "+pix.getGreen());
    print("Blue: "+pix.getBlue());
    print();
}
printPixel("drewgreen.png",10,10);
printPixel("drewgreen.png",250,500);

function sumPixel(nameImage, xpos, ypos){
    var imFile = new SimpleImage(nameImage);
    var ans = imFile.getRed(xpos,ypos)+imFile.getBlue(xpos,ypos)+imFile.getGreen(xpos,ypos);
    return "Sum of Pixels in image: "+nameImage+" = "+ans;
}
print(sumPixel("drewgreen.png", 250, 500))
print(sumPixel("drewgreen.png", 10, 10))



