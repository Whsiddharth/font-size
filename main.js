noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
wristDifference=0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(500, 300);
video.position(20,150)
  canvas = createCanvas(500, 300);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results){
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;

    wristDifference=Math.floor(leftWrist-rightWrist);

    console.log("left ="+leftWrist+", right="+rightWrist+", difference="+wristDifference);
  }
}

function draw() {
background('black');
stroke('aliceblue');
fill('white');
text('hello',noseX,noseY);
textSize(wristDifference);
document.getElementById("square_side").innerHTML="the width/height of the text is "+wristDifference;
}