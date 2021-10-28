// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */


     var elems= null;

    elems = document.querySelector('#modal1');
    var instances = M.Modal.init(elems);
    var instance = M.Modal.getInstance(elems);
    var videoAnchor=document.getElementById("videoAnchor");      
         console.log(elems);
    //videoDesign.html?video=' + encodeURIComponent(b)+'&heading='+encodeURIComponent(c)+'&title='+encodeURIComponent(d)    
   
 //
// Classifier Variable
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/sKxs69PgB/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
       
  }
function setup() {
var w = 700;
var h = 900;
var cnv = createCanvas(w,h);
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
cnv.position(x, y);
video = createCapture({
audio: false,
video: {
facingMode: {
exact: "environment"
}
}
});
//But hide the live video to the user
video.hide();
//Set the size of the video (and image)
video.size(w, h);
flippedVideo = ml5.flipImage(video);
// Start classifying
classifyVideo();
}



  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  
 if(label === "Snake Plant") {
  //window.location.href ="video.html";
       //alert("Hello");
     /*modalTitle = "Snake Plant Tips";
     modalContent = "Click the video above to get tips on how to grow your Snake plant, straight from an expert.";
     videoLink = "https://www.youtube.com/embed/GGX82HDPhNg";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);*/
      
     instance.open();
     //here your change everything
     //videoDesign.html?video=' + encodeURIComponent(b)+'&heading='+encodeURIComponent(c)+'&title='+encodeURIComponent(d)  
     
     b="https://www.youtube.com/embed/GGX82HDPhNg"; 
     c="Snake Plant Tips";
     d="Snake plant .........."
     videoAnchor.href="videoDesign.html?video=' + encodeURIComponent(b)+'&heading='+encodeURIComponent(c)+'&title='+encodeURIComponent(d)"; 
 //
}
       
else if(label === "Basil") {
  water = "789ml";
  modalTitle = "Basil Tips";
  modalContent = "Click the video above to get tips on how to grow your Basil/Tulsi plant, straight from an expert.";
  videoLink = "https://www.youtube.com/embed/Y5pbobOoaMQ";
  document.getElementById("modalt").innerHTML = modalTitle;
  document.getElementById("modalc").innerHTML = modalContent;
  document.getElementById("videoplayer").setAttribute("src", videoLink);
  instance.open();
}

else if(label === "Aloe Vera") {
  //window.location.href ="video.html";
       //alert("Hello");
     alert("Aloe Vera");
     modalTitle = "Aloe Vera Tips";
     modalContent = "Click the video above to get tips on how to grow your Aloe Vera plant, straight from an expert.";
     videoLink = "https://youtube.com/embed/Q8FZnWXLyLs";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
 //
} 
       
else if(label === "Lemongrass") {
  //window.location.href ="video.html";
       //alert("Hello");
     modalTitle = "Lemongrass Tips";
     modalContent = "Click the video above to get tips on how to grow your Lemongrass plant, straight from an expert.";
     videoLink = "https://youtube/embed/xSkIluC6K38";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
 //
}  
           
else if(label === "Tomato") {
  water = "123ml";
  modalTitle = "Tomato Tips";
  modalContent = "Click the video above to get tips on how to grow your Tomato plant, straight from an expert.";
  videoLink = "https://youtube/embed/NUuT--KDejU";
  document.getElementById("modalt").innerHTML = modalTitle;
  document.getElementById("modalc").innerHTML = modalContent;
  document.getElementById("videoplayer").setAttribute("src", videoLink);
  instance.open();
}
else if (label === "Fenugreek") {
     water = "456ml";
     modalTitle = "Fenugreek Tips";
     modalContent = "Click the video above to get tips on how to grow your Fenugreek plant, straight from an expert.";
     videoLink = "https://youtube.com/embed/_HFqtz0hIjA";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
}

else if(label === "Money Plant") {
  //window.location.href ="video.html";
       //alert("Hello");
     modalTitle = "Money Plant Tips";
     modalContent = "Click the video above to get tips on how to grow your Money plant, straight from an expert.";
     videoLink = "https://youtube.com/embed/5ySb2AD0rMs";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
 //
}   
       
else if(label === "Orchid") {
  //window.location.href ="video.html";
       //alert("Hello");
     modalTitle = "Orchid Tips";
     modalContent = "Click the video above to get tips on how to grow your Orchid plant, straight from an expert.";
     videoLink = "https://youtube.com/embed/me8XXE6J6LQ";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
 //
}   
       
else if(label === "Coriander") {
  //window.location.href ="video.html";
       //alert("Hello");
     modalTitle = "Coriander Tips";
     modalContent = "Click the video above to get tips on how to grow your Coriander/Dhania plant, straight from an expert.";
     videoLink = "https://youtube.com/embed/a8keJNYC8Wo";
     document.getElementById("modalt").innerHTML = modalTitle;
     document.getElementById("modalc").innerHTML = modalContent;
     document.getElementById("videoplayer").setAttribute("src", videoLink);
     instance.open();
 //
}     


else if(label === "Human") {
  water = "This is not a plant.";
}

}

