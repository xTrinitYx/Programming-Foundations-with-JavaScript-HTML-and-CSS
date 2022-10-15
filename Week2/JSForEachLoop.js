// For-each loop to iterate through pixels in image
function printYellowSquare(){
var img = new SimpleImage(200,200);
for(var pixel of img.values()){
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}
print(img);
}
printYellowSquare();

function printMagentaSquare(){
var img = new SimpleImage(200,200);
for(var pixel of img.values()){
    pixel.setRed(255);
    pixel.setGreen(0);
    pixel.setBlue(255);
}
print(img);
}
printMagentaSquare();