function getWinner()
{
    let square1 = document.querySelector("square1");
    let square2 = document.querySelector("square2");
    let square3 = document.querySelector("square3");
    let square4 = document.querySelector("square4");
    let square5 = document.querySelector("square5");
    let square6 = document.querySelector("square6");
    let square7 = document.querySelector("square7");
    let square8 = document.querySelector("square8");
    let square9 = document.querySelector("square9");

    if (square1.innerHTML !== "" && square1.innerHTML === square2.innerHTML && square1.innerHTML === square3.innerHTML)
    {
        console.log("You won");
    }
}