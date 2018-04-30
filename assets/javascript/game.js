
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
    var enmyPokeObjDisp = {}; //set a player stats and opponent stats to empty objs of their own.
    // then fill objects of given stats from object library
    // for(var m in mario) playerStats[m]=mario[m];
    var userPokeObjDisp = {};
    // var enmyName = "";
    // var enmyHp = 0;
    // var enmyAtk = 0;
    // var userName = "";
    // var userHp = 0;
    // var userAtk = 0;
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
            atk: 3,
        },
        poke3: {
            name: "Wartortle",
            hp: 40,
            atk: 6,
        },
        poke4: {
            name: "Fearow",
            hp: 60,
            atk: 12,
        },
        poke5: {
            name: "Gyarados",
            hp: 80,
            atk: 24,
        },
        poke6: {
            name: "Mew",
            hp: 120,
            atk: 48,
        }
    };

    var pokeUserObj = {
        poke1: {
            name: "Pikachu",
            hp: 150,
            atk: 2,
        },
        poke2: {
            name: "Raichu",
            hp: 200,
            atk: 5,
        }
    };

    var defaultPokeEnmyObj = pokeEnmyObj;
    var defaultPokeUserObj = pokeUserObj;

    // pokeUserObj.poke1.name = 'Mewto';

    // console.log(pokeUserObj.poke1.name)

    // for(var key in pokeUserObj){
    //   pokeUserObj[key]['name'] = 'Mewto';
    //   console.log(pokeUserObj[key])
    //   console.log(key)
    // }

    // console.log(pokeUserObj.poke1.name);
    // console.log(pokeUserObj.poke2.name);


    // how to loop through objects?
    // how to obtain their attribute names?
    // create a variable set to an object and then add an attribute


    //========= Initialization Part 2 ====================================================//
    gameReset();
    outputDisplay();

    //========== Clicking Event ===================================================//


    $("body").on("click", ".pokeEnmyBag", function () {
        var objEmpty = checkIfEmpty(enmyPokeObjDisp);

        if (objEmpty === true || enmyPokeObjDisp.hp === 0) {
            if (this.id === "pokeEnmy1") {
                enmyPokeObjDisp = pokeEnmyObj.poke1;
            } else if (this.id === "pokeEnmy2") {
                enmyPokeObjDisp = pokeEnmyObj.poke2;
            } else if (this.id === "pokeEnmy3") {
                enmyPokeObjDisp = pokeEnmyObj.poke3;
            } else if (this.id === "pokeEnmy4") {
                enmyPokeObjDisp = pokeEnmyObj.poke4;
            } else if (this.id === "pokeEnmy5") {
                enmyPokeObjDisp = pokeEnmyObj.poke5;
            } else if (this.id === "pokeEnmy6") {
                enmyPokeObjDisp = pokeEnmyObj.poke6;
            }
        }
        outputDisplay();
    });

    $("body").on("click", ".pokeUserBag", function () {
        var objEmpty = checkIfEmpty(userPokeObjDisp);

        if (objEmpty === true || userPokeObjDisp.hp === 0) {
            if (this.id === "pokeUser1") {
                userPokeObjDisp = pokeUserObj.poke1;
            } else if (this.id === "pokeUser2") {
                userPokeObjDisp = pokeUserObj.poke2;
            } else if (this.id === "pokeUser3") {
                userPokeObjDisp = pokeUserObj.poke3;
            } else if (this.id === "pokeUser4") {
                userPokeObjDisp = pokeUserObj.poke4;
            } else if (this.id === "pokeUser5") {
                userPokeObjDisp = pokeUserObj.poke5;
            } else if (this.id === "pokeUser6") {
                userPokeObjDisp = pokeUserObj.poke6;
            }
        }
        outputDisplay();
    });


    $("body").on("click", "#atkBtn", function () {
        var objEmptyEnmy = checkIfEmpty(enmyPokeObjDisp);
        var objEmptyUser = checkIfEmpty(userPokeObjDisp);

        if (objEmptyEnmy === false && objEmptyUser === false) {
            attack();
            outputDisplay();
        } else {
            console.log("Please choose your pokemon and the wild pokemon you wish to fight.")
        }


    });



    function gameReset() {
        pokeEnmyObj = defaultPokeEnmyObj;

        pokeUserObj = defaultPokeUserObj;
    };

    function attack() {
        if (userPokeObjDisp.hp > 0) { //Check if user did not feint
            if (enmyPokeObjDisp.hp > 0) { //Checks if enemy did not feint.
                enmyPokeObjDisp.hp = enmyPokeObjDisp.hp - userPokeObjDisp.atk;
                userPokeObjDisp.atk = Math.ceil(userPokeObjDisp.atk + 5);
                $("#userHitEnmy").text(userPokeObjDisp.name + " hit " + enmyPokeObjDisp.name + " for " + userPokeObjDisp.atk + " damage.");
                $("#enmyHitUser").text("");

                if (enmyPokeObjDisp.hp <= 0) { //If enemy falls below 0 hp, then set to 0 and state feint message instead.
                    enmyPokeObjDisp.hp = 0;
                    $("#userHitEnmy").text(enmyPokeObjDisp.name + " feints, " + userPokeObjDisp.name + " hit " + enmyPokeObjDisp.name + " for " + userPokeObjDisp.atk + " damage.");
                }

                if (enmyPokeObjDisp.hp > 0) {
                    userPokeObjDisp.hp = userPokeObjDisp.hp - enmyPokeObjDisp.atk;
                    $("#enmyHitUser").text(enmyPokeObjDisp.name + " hit " + userPokeObjDisp.name + " for " + enmyPokeObjDisp.atk + " damage.");

                    if (userPokeObjDisp.hp <= 0) { //If user falls below 0 hp, then set to 0 and state feint message instead.
                        userPokeObjDisp.hp = 0;
                        $("#enmyHitUser").text(userPokeObjDisp.name + " feints, " + enmyPokeObjDisp.name + " hit " + userPokeObjDisp.name + " for " + enmyPokeObjDisp.atk + " damage.");
                    }
                }
            } else {
                $("#userHitEnmy").text("Please choose another opponent.");
            }
        } else {
            $("#userHitEnmy").text("Please choose another pokemon.");
            $("#enmyHitUser").text("");
        }
    }


    function outputDisplay() {
        // $("#pokeEnmyImg").attr('src', pokeEnmyImg);
        // $("#pokeEnmyImg").attr('alt', pokeEnmyImgAlt);
        $("#pokeEnmyName").text(enmyPokeObjDisp.name);
        $("#HpEnmy").text("HP: " + enmyPokeObjDisp.hp);
        $("#AtkEnmy").text("Atk: " + enmyPokeObjDisp.atk);

        $("#pokeUserName").text(userPokeObjDisp.name);
        $("#HpUser").text("HP: " + userPokeObjDisp.hp);
        $("#AtkUser").text("Atk: " + userPokeObjDisp.atk);
        // $("#pokeUserImg").attr('src', pokeUserImg);
        // $("#pokeUserImg").attr('alt', pokeUserImgAlt);

        if (checkIfEmpty(enmyPokeObjDisp)) {
            // $("#pokeEnmyImg").attr('src', pokeEnmyImg);
            // $("#pokeEnmyImg").attr('alt', pokeEnmyImgAlt);
            $("#pokeEnmyName").text("Select an opponent below.");
            $("#HpEnmy").text("HP: " + 0);
            $("#AtkEnmy").text("Atk: " + 0);
        }


        if (checkIfEmpty(userPokeObjDisp)) {
            $("#pokeUserName").text("Select your pokemon below.");
            $("#HpUser").text("HP: " + 0);
            $("#AtkUser").text("Atk: " + 0);
            // $("#pokeUserImg").attr('src', pokeUserImg);
            // $("#pokeUserImg").attr('alt', pokeUserImgAlt);
        }

    };

    function checkIfEmpty(object) {
        var objIsEmpty = true;
        for (var key in object) {
            // console.log(enmyPokeObjDisp[key]);
            objIsEmpty = false;
        }
        return objIsEmpty;
    }
});