var arrayFilmesImg = [];
var arrayFilmesNomes = [];

function removerFilme() {
  const mensagemRemover = document.getElementById("mensagem");
  const sectionFilmsContainer = document.querySelector(".films-container");
  const filmeDigitado = document.getElementById("filme").value;

  var status = arrayFilmesImg.findIndex(checaFilme);

  if (status == 0) {
    var indice = arrayFilmesImg.findIndex(obtemIndice);
  }

  arrayFilmesImg.splice(indice, 1);
  arrayFilmesNomes.splice(indice, 1);
  filmesContainer.innerText = "";
 
  for (var i = 0; i < arrayFilmesImg.length; i++) {
    //sectionFilmsContainer.innerHTML += "<img src=" + arrayFilmesImg[i] + ">";
    sectionFilmsContainer.innerHTML += "<div class=one-film>";
    const divOneFilm = document.querySelectorAll(".one-film")[i];
    divOneFilm.innerHTML += "<label>" + arrayFilmesNomes[i] + "</label>";
    divOneFilm.innerHTML += "<img src=" + arrayFilmesImg[i] + ">";
  }

  function checaFilme() {
    return arrayFilmesImg.includes(filmeDigitado);
  }

  function obtemIndice(valor) {
    return valor == filmeDigitado;
  }
}

function adicionarFilme() {
  const mensagem = document.getElementById("mensagem");
  const sectionFilmsContainer = document.querySelector(".films-container");
  const filmeDigitado = document.getElementById("filme").value;
  const nomeFilmeDigitado = document.getElementById("nomefilme").value;

  if (arrayFilmesImg.length == 0) {
    arrayFilmesImg = [filmeDigitado];
    arrayFilmesNomes = [nomeFilmeDigitado];
  } else if (arrayFilmesImg.includes(filmeDigitado)) {
    mensagem.innerHTML = "Livro já  incluído";
    return;
  } else {
    mensagem.innerHTML = " ";
    arrayFilmesImg.push(filmeDigitado);
    arrayFilmesNomes.push(nomeFilmeDigitado);
  }

  const indice = arrayFilmesImg.length - 1;

  sectionFilmsContainer.innerHTML += "<div class=one-film>";
  const divOneFilm = document.querySelectorAll(".one-film")[indice];
  divOneFilm.innerHTML += "<label>" + arrayFilmesNomes[indice] + "</label>";
  divOneFilm.innerHTML += "<img src=" + arrayFilmesImg[indice] + ">";
}

// https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg
// https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg
// https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg
