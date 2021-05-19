Webcam.set ({
    width: 410,
    height: 300,
    image_format: "png",
    png_quality: 90
});
webcam = document.getElementById("webcam");
Webcam.attach(webcam);


function modelLoaded() {
    console.log('Loaded model');
}

function identifyimage() {
    img = document.getElementById('photo');
    classifier.classify(img, getResult);
}

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = "<img id='photo' src='" + data_uri + "'/>";
    });
}
