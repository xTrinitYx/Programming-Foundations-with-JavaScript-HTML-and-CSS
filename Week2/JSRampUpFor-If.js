//Ramp-Up For & If-else for RGB alterations
function maxRedImage(image){
    for(var pixel of image.values()){
        pixel.setRed(255);
    }
    return image;
}

function redlessImage(image){
    for(var pix of image.values()){
        pix.setRed(0);
    }
    return image;
}

var image = new SimpleImage("chapel.png");
//print(maxRedImage(image));
//print(redlessImage(image));

function lessRed(image){
    for(var p of image.values()){
        if(p.getRed() > 70){
            p.setRed(70)
        }
    }
    return image;
}
image = new SimpleImage("eastereggs.jpg");
//print(lessRed(image));

function blackBottomLine(image){
    for(var pixel of image.values()){
        if(pixel.getY() >= image.getHeight()-10){
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
    }
    return image;
}
image = new SimpleImage("astrachan.jpg");
//print(blackBottomLine(image));

function topLeftCorner(image){
    for(var pix of image.values()){
        if(pix.getX() < 50 && pix.getY() < 50){
            pix.setRed(0);
            pix.setGreen(255);
            pix.setBlue(0);
        }
    }    
    return image;
}
image = new SimpleImage("chapel.png");
//print(topLeftCorner(image));

function topRightCorner(width, height, image, red, green,blue){
    for(var pix of image.values()){
        if(pix.getX() > (image.getWidth() - width) && pix.getY() < height){
            pix.setRed(red);
            pix.setBlue(blue);
            pix.setGreen(green);
        }
    }
    return image;
}
image = new SimpleImage("chapel.png");
//print(topRightCorner(30,60,image,255,255,0));
image = new SimpleImage("smalllion.jpg");
//print(topRightCorner(125,20,image,255,0,0));

function changeRed(width, height){
    var image = new SimpleImage(width,height);
    var redInRow = 0;
    for(var pix of image.values()){
        if(redInRow > 255){
            redInRow = 0;
        }
        pix.setRed(redInRow);
        pix.setGreen(0);
        pix.setBlue(0);
        redInRow++;
    }
    return image;
}
//print(changeRed(256,200));

function changeRedWithBG(width, height, green, blue){
    var image = new SimpleImage(width,height);
    var redInRow = 0;
    for(var pix of image.values()){
        if(redInRow > 255){
            redInRow = 0;
        }
        pix.setRed(redInRow);
        pix.setGreen(green);
        pix.setBlue(blue);
        redInRow++;
    }
    return image;
}
print(changeRedWithBG(256,200,200,100))