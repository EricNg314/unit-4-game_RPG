
//========== Initialization Part 1 ===================================================//

//Declare guesses and values to be stored.
//Values are "pokeEnmy", "pokeYou"


//========= Initialization Part 2 ====================================================//

//gameReset()
////Get initialize variables to default
////Display pokeEnmy
////Display pokeYou


//========== Clicking Event ===================================================//

//Display hungry cat, for new round as image.
//Check for user clicking.
//Check if user selected a class button choice, then pull initiated value.
//Add initiated value to current kibbles.


//========== Clicking Event (Check if win/loss)===================================================//

//Check if current kibbles = goal kibbles.
//==TRUE==//
//scoreWin + 1
//Sound of happy kitty.
//Output a you win message.
////gameReset()

//==ELSE IF current > desired==//
//scoreLoss + 1
//Sound of hissing kitty.
//Output an angry kitty.
//gameReset()

//==ELSE==//
//Sound of annoying/hungry kitty.


//=============================================================//

$(document).ready(function () {
    //========== Initialization Part 1 ===================================================//
    var enmyName = "";
    var enmyHp = 0;
    var enmyAtk = 0;
    var userName = "";
    var userHp = 0;
    var userAtk = 0;
    var pokeEnmyImg = "";
    var pokeEnmyImgAlt = "";
    var pokeUserImg = "";
    var pokeUserImgAlt = "";

    var pokeEnmyObj = {
        poke1: {
            name: "Pidgey",
            hp: 10,
            atk: 2,
        },
        poke2: {
            name: "Rattata",
            hp: 20,
            atk: 6,
        },
        poke3: {
            name: "Wartortle",
            hp: 40,
            atk: 12,
        },
        poke4: {
            name: "Fearow",
            hp: 80,
            atk: 24,
        },
        poke5: {
            name: "Gyarados",
            hp: 160,
            atk: 48,
        },
        poke6: {
            name: "Mew",
            hp: 320,
            atk: 96,
        }
    };

    var pokeUserObj = {
        poke1: {
            name: "Pikachu",
            hp: 200,
            atk: 2,
        },
        poke2: {
            name: "Raichu",
            hp: 300,
            atk: 4,
        }
    };

    // console.log(pokeEnmy.poke1.atk);

    // how to loop through objects?
    // how to obtain their attribute names?
    // create a variable set to an object and then add an attribute


    //========= Initialization Part 2 ====================================================//
    gameReset();
    outputDisplay();

    //========== Clicking Event ===================================================//


    $("body").on("click", ".pokeEnmyBag", function () {
        if(enmyName === ""){
            // var enmyObj = pokeEnmyObj;
            console.log(enmyObj);
            if(this.id = "pokeEnmy1"){
                // var enmySelected = enmyObj.poke1;
                enmyName = pokeEnmyObj.poke1.name;
                enmyHp = 0;
                enmyAtk = 0;
            }
        }

        console.log(enmyName);
    });

    $("body").on("click", ".pokeUserBag", function () {



    });


    $("body").on("click", "#atkBtn", function () {
        if (userName != "") {









        }


    });





    function gameReset() {
        pokeEnmyObj = {
            poke1: {
                name: "Pidgey",
                hp: 10,
                atk: 2,
            },
            poke2: {
                name: "Rattata",
                hp: 20,
                atk: 6,
            },
            poke3: {
                name: "Wartortle",
                hp: 40,
                atk: 12,
            },
            poke4: {
                name: "Fearow",
                hp: 80,
                atk: 24,
            },
            poke5: {
                name: "Gyarados",
                hp: 160,
                atk: 48,
            },
            poke6: {
                name: "Mew",
                hp: 320,
                atk: 96,
            }
        };

        pokeUserObj = {
            poke1: {
                name: "Pikachu",
                hp: 200,
                atk: 2,
            },
            poke2: {
                name: "Raichu",
                hp: 300,
                atk: 4,
            }
        };

    };


    function outputDisplay() {
        // $("#pokeEnmyImg").attr('src', pokeEnmyImg);
        // $("#pokeEnmyImg").attr('alt', pokeEnmyImgAlt);
        $("#HpEnmy").text("HP: " + enmyHp);
        $("#AtkEnmy").text("Atk: " + enmyAtk);

        $("#HpUser").text("HP: " + userHp);
        $("#AtkUser").text("Atk: " + userAtk);
        // $("#pokeUserImg").attr('src', pokeUserImg);
        // $("#pokeUserImg").attr('alt', pokeUserImgAlt);

        $("#userHitEnmy").text("PokeUser hits " + "PokeEnmy " + " for " + userAtk);
        $("#enmyHitUser").text("PokeEnmy hits " + "PokeUser " + " for " + enmyAtk);
    };
});