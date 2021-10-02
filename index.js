

var colors = ["green","red","yellow","blue"];
var gamePattern = [];
var userPattern = [];



var click = false;
var gameCondition = false;

var count = 1;
var gameover1 = false;
var levelCount = 1;

$("h1).on("click",function(){
    
    gameover1 = false;
    count = 1;
    randomColorchooser();
    click = true;
    alert(gamePattern);
    

});


$(document).on("keypress",function(){
    
    gameover1 = false;
    count = 1;
    randomColorchooser();
    click = true;
    alert(gamePattern);
    

});

function randomColorchooser(){
    var gp =JSON.stringify(gamePattern);
    var up = JSON.stringify(userPattern);
    if (gp == up && gameover1 != true){

        var randomNumber = Math.floor(Math.random()*4);
        var randomColor = colors[randomNumber];
        gamePattern.push(randomColor);
        $("h1").text("Level "+levelCount);
        setTimeout(function(){ 
            switch (randomColor){
                case "blue":
                    var blue = new Audio("sounds/blue.mp3");
                    blue.play();
                    $("."+randomColor).addClass("pressed");
                    setTimeout(function(){$("."+randomColor).removeClass("pressed");},200)
                break;
                case "green":
                    var green = new Audio("sounds/green.mp3");
                    green.play();
                    $("."+randomColor).addClass("pressed");
                    setTimeout(function(){$("."+randomColor).removeClass("pressed");},200)
                break;
                case "red":
                    var red = new Audio("sounds/red.mp3");
                    red.play();
                    $("."+randomColor).addClass("pressed");
                    setTimeout(function(){$("."+randomColor).removeClass("pressed");},200)
                break;
                case "yellow":
                    var yellow = new Audio("sounds/yellow.mp3");
                    yellow.play();
                    $("."+randomColor).addClass("pressed");
                    setTimeout(function(){$("."+randomColor).removeClass("pressed");},200)
                break;
        
                default: console.log(randomColor);
        }},800);
        console.log(randomColor);
        gameCondition = true;
        levelCount +=1;
    }
    else{
        
    }
    
    
}


$(".btn").on("click",function(event){
    if (click == true){
        var findButton = event.currentTarget.id;
        var upl = 0;
        userPattern.push(findButton);
        sounds(findButton);
        console.log(userPattern);
        console.log(userPattern);

        


        if (count != userPattern.length){
            console.log("waiting for moreclicks!");
            if (userPattern.length == 0){
                upl = 1;
            }
            else{
                upl = userPattern.length;
            }
            if(userPattern[upl-1] != gamePattern[upl-1]){
                sounds("wrong");
            }
            else{

            }
        }
        else{
            for (var g =0;g <userPattern.length+1;g++){
                if (userPattern[g] == gamePattern[g]){
                    // console.log("go ahead");
                    
                }
                else if (userPattern[g] != gamePattern[g]){
                    sounds("wrong");
                    gameover();
                }
            }
                
            randomColorchooser();
            userPattern = [];
            count +=1;
        }

        

    }
    else {
        console.log("keypress first");
    }
    
});

function gameover(){
    $("h1").text("Game Over, Your score was "+ levelCount + " Refresh or Press Any KEY to restart.");
    gameover1 = true;
    gamePattern = [];
    userPattern = [];
    click = false;
    count = 1;
    gp ='.';
    levelCount = 1;
    up = '';
    upl = 0;
    randomNumber = '';
    randomColor = '';

}

function sounds(findButton){
    switch (findButton){
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            $("."+findButton).addClass("pressed");
            setTimeout(function(){$("."+findButton).removeClass("pressed");},100)
        break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            $("."+findButton).addClass("pressed");
            setTimeout(function(){$("."+findButton).removeClass("pressed");},100)
        break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            $("."+findButton).addClass("pressed");
            setTimeout(function(){$("."+findButton).removeClass("pressed");},100)
        break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            $("."+findButton).addClass("pressed");
            setTimeout(function(){$("."+findButton).removeClass("pressed");},100)
        break;
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            $("body").addClass("game-over");
            setTimeout(function(){$("body").removeClass("game-over");},100)
        break;

        default: console.log(findButton);
    }
}
