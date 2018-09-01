

// var Animes = [
//     {
//         title: "Naruto",
//         picture: "img",
//         themeSong: "song"
//     },
//     {
//         title: "onePiece",
//         picture: "img",
//         themeSong: "song"
//     },



//     {
//         title: "fairy tail",
//         picture: "img",
//         themeSong: "song"
//     },



//     {
//         title: "hunterXhunter",
//         picture: "img",
//         themeSong: "song"
//     },



//     {
//         title: "bleach",
//         picture: "img",
//         themeSong: "song"
//     }
// ]
function show() {
    var a = document.getElementById("win");
    var b= document.getElementById("score");
    var c= document.getElementById("anShow");
    var d= document.getElementById("remain");
    var e= document.getElementById("guessRemaining");
    var f= document.getElementById("guessed");
    var g= document.getElementById("letGuessed");
    a.innerHTML="WINS";
    b.innerHTML="0";
    c.innerHTML="Anime Show";
    d.innerHTML="Number of Guesses Remaining";
    e.innerHTML="0";
    f.innerHTML="Letters Already Guessed";
    g.innerHTML="???";
    
}

var anime = {
    animeShow:"",
    wins:[],
    numGuesses:[],
    alGuessed:[],

    animeList: ["naruto", "bleach", "onepiece","attackontitan", "fairytail", "tokyoghoul", "myheroacademia"],
    randomWord: "",
    animeLetters:[],

    isMatch: null,
    isRepeat:null,

    guessesRemaining:0,
    loseCount: 0,
    winCount:0,

    generateWord: function() {
       var random 
    }

}