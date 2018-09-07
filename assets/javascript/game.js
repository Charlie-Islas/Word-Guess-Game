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
            'pic': "assets/images/margay.jpg"

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

    document.onkeyup=function(event){

        writeBlanks();
    
    }
    
    function writeBlanks(){

        var displayArray=[];


            currentCat=[];
            displayedCat="";
            wordDisplay=[];

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

     
        keepPlaying();


    }

    function keepPlaying(){

        var opportunities=7;
        $("#oppsLeft").html(opportunities);

        var usedLetters=[];

        var wordDisplay=[];
        for(var i=0;i<currentCat.length;i++){

            wordDisplay[i]='_';

        }

        displayedCat=wordDisplay.join(" ");
        
        $("#guessedWord").html(displayedCat+" ");
       
        var lettersLeft=currentCat.length;

        document.onkeyup=function(event){
     
            var mistake=true;
            var currentCat=[];
            var displayedCat=[];
            var guess=event.key.toLowerCase();  
           

            currentCat=felines[catNumber].species;


            for(var i=0;i<wordDisplay.length;i++){

                var arrayIndex=usedLetters.indexOf(guess);
                
                if(arrayIndex===-1){

                    if(currentCat[i]===guess){
                        
                        for(var i=0;i<currentCat.length;i++){
                        
                            if(currentCat[i]===guess){
                                wordDisplay[i]=guess;
                                displayedCat=wordDisplay.join(" ");
                                $("#guessedWord").html(displayedCat+" ");
                                lettersLeft--;
                            }}

                        console.log("letters left: "+lettersLeft);

                        if(lettersLeft===0){

                            wins++;
                            $("#victs").html(wins);
                            catNumber++;
                            $("#startOrGuess").html("Well done!");
                            $("#guessOrType").html("Press F to guess another species!");

                            document.onkeyup=function(event){

                                var another=event.key.toLowerCase();
                                if(another==='f'){

                                    writeBlanks();
                                }
                            }

                        }
                        
                        arrayIndex=usedLetters.indexOf(guess);
                        console.log(usedLetters);
                        console.log("index after adding:"+arrayIndex);

                        if(arrayIndex===-1){
                        usedLetters.push(guess);
                        console.log("used letters: "+usedLetters);
                        $("#used").html(usedLetters);}

                    }

                    
                    else if(arrayIndex===-1){

                        usedLetters.push(guess);
                        opportunities--;
                        $("#oppsLeft").html(opportunities);
                        console.log("Opportunities:"+opportunities);
                    }

                    
            }
                
            }

        }



    }



}