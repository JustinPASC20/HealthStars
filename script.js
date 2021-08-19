//button ref
/*let PreButton  = document.querySelector(".Previous");
let FavButton =document.querySelector(".Favorited");
let favoriteFoodsBtn = document.querySelector(".FavoriteFoods");*/
let gameButton = document.querySelector("#GS");
let dietButton = document.querySelector("#DI")
let otherProgrambtn = document.querySelector("#OP")
let content = document.getElementsByClassName("content")
let body = document.querySelector("body")
//let dietButton = document.querySelector("#DI");
//let IDButton = document.querySelector("#Profile");



//let G1 = document.querySelector("#GM1");
//let G2 = document.querySelector("#GM2");

//divs ref
//let dietText = document.querySelector("#DietText");
//let FavText = document.querySelector("#FavoriteFoods");
//none display

    //clicks
//     dietButton.onclick = function(event){
// event.preventDefault();
//  FavText.style.display ="none";
// dietText.style.display = "block";
//   PreButton.style.display = "none";
//   FavButton.style.display = "none";
//  favoriteFoodsBtn.style.display= "none";
// }
gameButton.onclick = function(event){
    event.preventDefault();
    content[2].style.display = "none"
    content[1].style.display = "none";
    content[0].style.display = "block";
 }

dietButton.onclick = function(event){
    event.preventDefault();
    content[0].style.display = "none";
    content[2].style.display = "none"
    content[1].style.display = "block";
 }

 otherProgrambtn.onclick = function(event){
     event.preventDefault();
     content[0].style.display = "none"
     content[1].style.display = "none"
     content[2].style.display = "block"
 }



 


// favoriteFoodsBtn.onclick = function(event){
//     event.preventDefault();
//     // FavText.style.display ="block";
//     // dietText.style.display= "none";
//     PreButton.style.display = "none";
//     FavButton.style.display = "none";
//     favoriteFoodsBtn.style.display= "none";
//     G1.style.display ="none";
//     G2.style.display ="none";
// }

