// write your code here
var x = 3;
var y = 2;
y = x;
//print (x);
//print (y);

var image = new SimpleImage("dinos.png");
//print(image);
var w = image.getWidth();
print(w);
print(image.getHeight());
var p = image.getPixel(5,5);
print(p.getRed());
print(p.getGreen());
print(p.getBlue());
print(image.getPixel(5,5));

function square(x){
    return x*x;
}
//print(square(5));

function printWidthHeight(image){
print(image);    
print("Width: "+image.getWidth());    
print("Height: "+image.getHeight())
}
var imageHW = new SimpleImage("chapel.png")
printWidthHeight(imageHW);