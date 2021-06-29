Webcam.set({
    width: 500,
    height: 380,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(document.getElementById("webcam_dis"));
console.log("ml5 version", ml5.version);

function take_pic() {
    Webcam.snap(function (snap) {
        document.getElementById("webcam_dis_s").innerHTML = "<img id='webcamera' src = " + snap + ">";
    });
}

classfiys = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ouN2Qanm/model.json', model_load);

function model_load() {
    console.log("my modal is loded");
}

function reco_pic() {
    images = document.getElementById("webcamera");
    classfiys.classify(images, reco);
    console.log("Check1");
}

function reco(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Check2");
        console.log(result);
        document.getElementById("pers_name_dis").innerHTML = result[0].label;
        document.getElementById("pers_acc_dis").innerHTML = result[0].confidence.toFixed(3);
    }
}