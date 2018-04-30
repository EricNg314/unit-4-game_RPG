
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
        },
    };
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
        console.log(enmyPokeObjDisp);
        var objEmpty = true;
        console.log(objEmpty)
        for (var key in enmyPokeObjDisp) {
            // console.log(enmyPokeObjDisp[key]);
            objEmpty = false;
        }

        if (objEmpty === true || enmyPokeObjDisp.hp === 0) {
            // console.log("Yep it's blank");
            if (this.id === "pokeEnmy1") {
                console.log(this.id);
                enmyPokeObjDisp = pokeEnmyObj.poke1;
                // console.log(enmyPokeObjDisp)
            } else if (this.id === "pokeEnmy2") {
                enmyPokeObjDisp = pokeEnmyObj.poke2;
                // console.log(enmyPokeObjDisp)
            } else if (this.id === "pokeEnmy3") {
                enmyPokeObjDisp = pokeEnmyObj.poke3;
                // console.log(enmyPokeObjDisp)
            } else if (this.id === "pokeEnmy4") {
                enmyPokeObjDisp = pokeEnmyObj.poke4;
                // console.log(enmyPokeObjDisp)
            } else if (this.id === "pokeEnmy5") {
                enmyPokeObjDisp = pokeEnmyObj.poke5;
                // console.log(enmyPokeObjDisp)
            } else if (this.id === "pokeEnmy6") {
                enmyPokeObjDisp = pokeEnmyObj.poke6;
                // console.log(enmyPokeObjDisp)
            }
        }
        outputDisplay();
    });

    $("body").on("click", ".pokeUserBag", function () {
        console.log(userPokeObjDisp);
        var objEmpty = true;
        console.log(objEmpty)
        for (var key in userPokeObjDisp) {
            // console.log(userPokeObjDisp[key]);
            objEmpty = false;
        }

        if (objEmpty === true) {
            // console.log("Yep it's blank");
            if (this.id === "pokeUser1") {
                userPokeObjDisp = pokeUserObj.poke1;
            } else if (this.id === "pokeUser2") {
                userPokeObjDisp = pokeUserObj.poke2;
                // console.log(userPokeObjDisp);
            } else if (this.id === "pokeUser3") {
                userPokeObjDisp = pokeUserObj.poke3;
                // console.log(userPokeObjDisp);
            } else if (this.id === "pokeUser4") {
                userPokeObjDisp = pokeUserObj.poke4;
                // console.log(userPokeObjDisp);
            } else if (this.id === "pokeUser5") {
                userPokeObjDisp = pokeUserObj.poke5;
                // console.log(userPokeObjDisp);
            } else if (this.id === "pokeUser6") {
                userPokeObjDisp = pokeUserObj.poke6;
                // console.log(userPokeObjDisp);
            }
        }
        outputDisplay();
    });


    $("body").on("click", "#atkBtn", function () {
        console.log("attack button clicked");

        var objEmptyEnmy = true;
        // console.log(objEmptyEnmy)
        for (var key in enmyPokeObjDisp) {
            // console.log(userPokeObjDisp[key]);
            objEmptyEnmy = false;
        }
        console.log(objEmptyEnmy);

        var objEmptyUser = true;
        // console.log(objEmptyUser)
        for (var key in userPokeObjDisp) {
            // console.log(userPokeObjDisp[key]);
            objEmptyUser = false;
        }
        console.log(objEmptyUser);

        if (objEmptyEnmy === false && objEmptyUser === false) {
            console.log("Kabooooom");
            attack();
            outputDisplay();
        } else {
            console.log("Please choose your pokemon and the wild pokemon you wish to fight.")
        }


    });





    function gameReset() {
        pokeuserObj = {
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

    function attack() {
        if (enmyPokeObjDisp.hp > 0) {
            enmyPokeObjDisp.hp = enmyPokeObjDisp.hp - userPokeObjDisp.atk;
            userPokeObjDisp.atk = Math.ceil(userPokeObjDisp.atk * 1.3);
            $("#userHitEnmy").text("PokeUser hits " + "PokeEnmy " + " for " + userPokeObjDisp.atk);
            $("#enmyHitUser").text("");
            if(enmyPokeObjDisp.hp <= 0 ){
                enmyPokeObjDisp.hp = 0;
                $("#userHitEnmy").text(enmyPokeObjDisp.name + " feints, " + userPokeObjDisp.name + " hits " + enmyPokeObjDisp.name + " for " + userPokeObjDisp.atk + ".");
            }
            console.log(enmyPokeObjDisp.hp)
            if (enmyPokeObjDisp.hp > 0) {
                userPokeObjDisp.hp = userPokeObjDisp.hp - enmyPokeObjDisp.atk;
                console.log(userPokeObjDisp.hp)
                $("#enmyHitUser").text("PokeEnmy hits " + "PokeUser " + " for " + enmyPokeObjDisp.atk);
            } else {
                enmyPokeObjDisp = {};
            }
        } else {
            $("#userHitEnmy").text("Please choose another enemy.");
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


    };
});