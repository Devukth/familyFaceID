Webcam.set ({
    width: 410,
    height: 300,
    image_format: "png",
    png_quality: 90
});
webcam = document.getElementById("webcam");
Webcam.attach(webcam);

console.log("ml5 version: " + ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ac3J-5GX-/model.json", modelLoaded);

function modelLoaded() {
    console.log('Loaded model');
}

function identifyImage() {
    img = document.getElementById('photo');
    classifier.classify(img, getResult);
}

function getResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('familyName').innerHTML = results[0].label;
        document.getElementById('accuracy').innerHTML = Number(results[0].confidence.toFixed(2)) * 100;
    }
}

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = "<img id='photo' src='" + data_uri + "'/>";
    });
}
