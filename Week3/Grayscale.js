
// Grayscale Algorithm

function makeGray(image){
    for(var pixel of image.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    return image;
}
var image = new SimpleImage("chapel.png");
print(makeGray(image));