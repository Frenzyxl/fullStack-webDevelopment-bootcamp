var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userClickedPattern = []

var level = 0 
var started = false


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id")
    animatePress(userChosenColour)
    playSound(userChosenColour)
    userClickedPattern.push(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
  })
  
  $(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        newSequence();
        started = true;
      }
})

function animatePress (currentColor) {
    $('#' + currentColor).addClass('pressed')
    setTimeout(function() {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

function playSound (name) {
    var sound = new Audio('sounds/' + name + '.mp3')
    sound.play()
}

function newSequence() {

    userClickedPattern = []
    
    var randomNumber = Math.floor(Math.random() * 4) 
    var randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)

    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor)
    
    level++
    $('h1').text('Level ' + level)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success')

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                newSequence()
              }, 1000)
        }

    } else {
        console.log('failed')
        playSound('wrong')
        $('body').addClass('game-over')
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 200);
        $('h1').text(`Game Over @ Level ${level}, press any key to restart`)
        
        startOver()
    }
}

function startOver () {
    level = 0
    gamePattern = []
    started = false
}

