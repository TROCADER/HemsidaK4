const button = document.querySelector("#button");
button.addEventListener("click", finish);

const page = document.querySelector("#page");


function vinstschenario()
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

    if (square1 !== "")
    {
        console.log("It works");
    }

    //Vinstschenario vågrätt 1
    if (square1.innerHTML !== "" && square1.innerHTML === square2.innerHTML && square1.innerHTML === square3.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario vågrätt 2
    else if (square4.innerHTML !== "" && square4.innerHTML === square5.innerHTML && square4.innerHTML === square6.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario vågrätt 2
    else if (square7.innerHTML !== "" && square7.innerHTML === square8.innerHTML && square4.innerHTML === square9.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario lodrätt 1
    else if (square1.innerHTML !== "" && square1.innerHTML === square4.innerHTML && square1.innerHTML === square7.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario lodrätt 2
    else if (square2.innerHTML !== "" && square2.innerHTML === square5.innerHTML && square2.innerHTML === square8.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario lodrätt 3
    else if (square3.innerHTML !== "" && square3.innerHTML === square6.innerHTML && square3.innerHTML === square9.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario diagonalt 1
    else if (square1.innerHTML !== "" && square1.innerHTML === square5.innerHTML && square1.innerHTML === square9.innerHTML)
    {
        console.log("Test");
    }
    //Vinstschenario diagonalt 2
    else if (square3.innerHTML !== "" && square3.innerHTML === square5.innerHTML && square3.innerHTML === square7.innerHTML)
    {
        console.log("Test");
    }
}

function finish()
{
    /*
    //För att testa om knappen fungerar
    page.style.display = "none"
    

    let playerTurn = 1;

    while (playerTurn > 0)
    {
        if (playerTurn === 1)
        {
            x1.style.display = "none"
            
        }
    }
    */
}