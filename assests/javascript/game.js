

var animes = [
    {
        title: "Naruto",
        picture: "img",
        themeSong: "song"
    },
    {
        title: "onePiece",
        picture: "img",
        themeSong: "song"
    },



    {
        title: "fairy tail",
        picture: "img",
        themeSong: "song"
    },



    {
        title: "hunterXhunter",
        picture: "img",
        themeSong: "song"
    },



    {
        title: "bleach",
        picture: "img",
        themeSong: "song"
    }
]
function show() {
    var a = document.getElementById("win");
    var b = document.getElementById("score");
    var c = document.getElementById("anShow");
    var d = document.getElementById("remain");
    var e = document.getElementById("guessRemaining");
    var f = document.getElementById("guessed");
    var g = document.getElementById("letGuessed");
  
    a.innerHTML = "WINS";
    b.innerHTML = "0";
    c.innerHTML = "Anime Show";
    d.innerHTML = "Number of Guesses Remaining";
    e.innerHTML = "0";
    f.innerHTML = "Letters Already Guessed";
    g.innerHTML = "???";
   



}

var anime = {
    animeShow: "",
  gameStarted:false,
    numGuesses: 0,
    alGuessed: "",
    underScore:[],

    guessesRemaining: 0,
    wins: 0,
}

document.addEventListener("keypress", function(event){
    var keyCode = event.key.toUpperCase();
    if(anime.gameStarted === false) {
        startGame();
    } else {
        handleGuess(keyCode);
    }
});

function startGame() {
   setGame();
   document.getElementById("press").textContent="";
}

function setGame () {
    var title = animes[anime.numGuesses].title;
    anime.gameStarted = true;
    anime.animeShow = getDisplay(title);
    anime.guessesRemaining = getAllowed(title);
    anime.alGuessed = "";

    gameState();

}





    // generateWord: function(){

    // 	var random_num = Math.random() * 12;
    // 	random_num = Math.floor(random_num);

    // 	this.randomWord = this.animeList[random_num];
    // 	this.animeLetters = this.randomWord.split("");


    // 	console.log(this.randomWord + " " + this.animeLetters);


    // 	this.numGuesses = [];
    // 	this.alGuessed = [];
    // 	this.underScore = [];
    // 	this.wins = [];
    // 	this.guessesRemaining = 12;
    // },



//     revealAnime: function () {

//         if (this.numGuesses.length == 0) {
//             for (var i = 0; i < this.animeLetters.length; i++) {
//                 this.underScore[i] = "_";
//             }
//         }
//         else {

//             for (var i = 0; i < this.animeLetters.length; i++) {

//                 if (this.underScore[i] != this.animeLetters[i]) {

//                     for (var j = 0; j < this.alGuessed.length; j++) {

//                         if (this.alGuessed[j] == this.animeLetters[i]) {
//                             this.underScore[i] = this.animeLetters[i];
//                         }

//                         else {
//                             this.underScore[i] = "_";
//                         }
//                     }
//                 }
//             }
//         }
//     }  
// }



// document.onkeydown = function (q) {

//     anime.animeShow = String.fromCharCode(q.keyCode).toLocaleLowerCase();


//     anime.numGuesses.push(anime.animeShow);

//  console.log("Current Letter: " + anime.animeShow + "Anime Letters: " + anime.animeShow + "\n" + "All Guesses: " + anime.numGuesses);
   

// }
