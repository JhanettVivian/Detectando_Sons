function start() {
  //Vamos acessar o microfone
  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  //vamos carregar o modelo treinado
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/ZEYfPcWhE/model.json",
    { probabilityThreshold: 0.7 },
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

var img = document.getElementById("animalImg");
var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
var noises = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);

    var result = results[0].label;

    if (result == "Cachorro") {
      img.src =
        "https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg";
      dog += 1;
      document.getElementById("dog").innerHTML =
        "Cachorro detectado: " + dog + ", ";
    }
    if (result == "Gato") {
      img.src =
        "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top";
      cat += 1;
      document.getElementById("cat").innerHTML =
        "Gato detectado: " + cat + ", ";
    }
    if (result == "Leão") {
      img.src =
        "https://i0.wp.com/talkinghumanities.blogs.sas.ac.uk/files/2019/07/Lion2.jpg?resize=1080%2C675&ssl=1";
      lion += 1;
      document.getElementById("lion").innerHTML =
        "Leão detectado: " + lion + ", ";
    }
    if (result == "Vaca") {
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1200px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg";
      cow += 1;
      document.getElementById("cow").innerHTML =
        "Vaca detectado: " + cow + ", ";
    }
    if (result == "Ruído de fundo") {
      img.src =
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Animal_kingdom_nzwbda.jpg";
      noises += 1;
      document.getElementById("noises").innerHTML =
        "Ruído detectado: " + noises + ", ";
    }
  }
}
