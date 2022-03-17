//https://teachablemachine.withgoogle.com/models/b18eoMxbx/

prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result_div").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'
    });
}

console.log("ml5.version = ",ml5.version );
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b18eoMxbx/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
} 

function check() {
    var synth = window.speechSynthesis
    var speak_data_1 = "First prediction is" +prediction_1 
    var speak_data_2 = "second prediction is" +prediction_2
    var utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utter_this);
}




