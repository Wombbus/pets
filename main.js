var img1 = ""
var objects = []
var confidence,x,y,width,height,label

function preload(){
img = loadImage("dog_cat.jpg")
img1 = loadImage("football.jpg")


}

function setup(){
canvas = createCanvas(700,400)
canvas.center()
objectDetect = ml5.objectDetector("cocossd",modelLoaded)
}

function draw(){
image(img,0,0 , 700,400)
noFill()
stroke("magenta")
rect(40,50 , 370,320)
text("dog %98",50,60)
stroke("red")
rect(320,70 ,370,320)
text("cat %95",330,80)
for(var i = 0; i<objects.length;i++){
x = objects[i].x
y = objects[i].y
confidence = math.floor(objects[i].confidence*100)
width = objects[i].width
label = objects[i].label.toUpperCase()
height = objects[i].height
noFill()
stroke("magenta")
rect(x,y,width,height)
text(label+confidence+"%",x+15,y+15)
}
}

function modelLoaded(){
    console.log("The model has been loaded")
    objectDetect.detect(img1,gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects = results
    }
}