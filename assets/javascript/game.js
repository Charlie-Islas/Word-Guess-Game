//https://github.com/clsavino/PokemonHangmanGame/blob/master/assets/javascript/game.js link to the Pokemon example game

window.onload=function(){

    //making my feline list and declaring its properties, including species names and pictures
    var felines = [

        {
            'species': 'cat',
            'pic': "assets/images/bagueerah.jpg"

        },


        {
            'species': 'caracal',
            'pic': "assets/images/caracal.jpg"

        },

        {
            'species': 'cheetah',
            'pic': "assets/images/cheetah.jpg"

        },

        {
            'species': 'jaguar',
            'pic': "assets/images/jaguar.jpg"

        },

     
        {
            'species': 'lion',
            'pic': "assets/images/lion.jpg"

        },

        {
            'species': 'lynx',
            'pic': "assets/images/lynx.jpg"

        },

        {
            'species': 'margay',
            'pic': "assets/images/margay.jpg"

        },

        {
            'species': 'ocelot',
            'pic': "assets/images/ocelot.jpg"

        },

        {
            'species': 'leopard',
            'pic': "assets/images/leopard.jpg"

        },

        {
            'species': 'panther',
            'pic': "assets/images/panther.jpg"

        },

        {
            'species': 'cougar',
            'pic': "assets/images/cougar.jpg"

        },


        {
            'species': 'serval',
            'pic': "assets/images/serval.jpg"

        },


        {
            'species': 'tiger',
            'pic': "assets/images/tiger.jpg"

        },

    ]

    //Declaring initial variables

    userGuess="";
    var wins=0;
    var defeats=0;
    var catNumber=0;
    var gameOver=false;
    var usedLetters=[];
    var wrongLetters=[];
    var opportunities=0;

    document.onkeyup=function(event){

        writeBlanks();
    
    }
    
    function writeBlanks(){

        if(catNumber<13){

        var displayArray=[];


            currentCat=[];
            displayedCat="";
            wordDisplay=[];
            usedLetters=[];
            opportunities=7;

            $("#startOrGuess").html("Guess that cat species now!");
            $("#guessOrType").html("Type the letters you guess, but be careful... too many mistakes will lead to your doom!!!");

            currentCat=felines[catNumber].species;
            console.log("currentCat: "+currentCat);
        
            for(var i=0;i<currentCat.length;i++){

                wordDisplay[i]='_';
    
            }

            displayedCat=wordDisplay.join(" ");

            $("#guessedWord").html(displayedCat);
            $("#used").html("");

            $("#catImage").attr("src",felines[catNumber].pic);

        keepPlaying();
    
        }

        else{

            $("#startOrGuess").html("Congratulations! You've reached the end of the game...");
            $("#guessOrType").html("Come back to the Serengeti any time!");


        }


    }

    function keepPlaying(){

        opportunities=7;
        $("#oppsLeft").html(opportunities);

        var wordDisplay=[];
        for(var i=0;i<currentCat.length;i++){

            wordDisplay[i]='_';

        }

        displayedCat=wordDisplay.join(" ");
        
        $("#guessedWord").html(displayedCat+" ");
       
        var lettersLeft=currentCat.length;
        var addLetter=true;
        var usedLettersStr="";

        document.onkeyup=function(event){
     
            var correct=false;
            var currentCat=[];
            var displayedCat=[];
            var guess=event.key.toLowerCase();  
            var wrongLetter=true;
            addLetter=true;

            currentCat=felines[catNumber].species;
            

            var arrayIndex=usedLetters.indexOf(guess);
            

            for(var i=0;i<currentCat.length;i++){
                
                arrayIndex=usedLetters.indexOf(guess);

                    if(currentCat[i]===guess&&arrayIndex===-1){

                        usedLetters.push(guess);
                        usedLettersStr=usedLettersStr+guess+", ";
                        $("#used").html(usedLettersStr);
                        
                        for(var j=0;j<currentCat.length;j++){

                            if(currentCat[j]===guess){
                               
                                wordDisplay[j]=guess;
                                displayedCat=wordDisplay.join(" ");
                                $("#guessedWord").html(displayedCat+" ");
                                lettersLeft--;
                            }

                        }

                        if(lettersLeft===0){

                            wins++;
                            $("#victs").html(wins);
                            catNumber++;
                            $("#startOrGuess").html("You win! Well done, you are saved from my vicious claws!");
                            $("#guessOrType").html("Press F to guess another species!");

                            document.onkeyup=function(event){

                                var another=event.key.toLowerCase();
                                if(another==='f'){

                                    writeBlanks();
                                                 }
                                                            }
                                            }


                                                            }
    
                                }
                    
            for(var i=0;i<currentCat.length;i++){

                arrayIndex=usedLetters.indexOf(guess);

                if(currentCat[i]!==guess&&arrayIndex===-1){

                    usedLetters.push(guess);
                    usedLettersStr=usedLettersStr+guess+", ";
                    $("#used").html(usedLettersStr);
                    opportunities--;
                    $("#oppsLeft").html(opportunities);

                    if(opportunities===0){
                        defeats++;
                        $("#losses").html(defeats);
                        catNumber++;
                        $("#startOrGuess").html("You lose! Be devoured by the Roman lions!");
                        $("#guessOrType").html("Press F to guess another species!");
                        $("#guessedWord").html(currentCat);
                        document.onkeyup=function(event){

                            var another=event.key.toLowerCase();
                            if(another==='f'){

                                writeBlanks();
                                             }
                                                        }

                    }

                }


            }     

                    }



                                            }



}