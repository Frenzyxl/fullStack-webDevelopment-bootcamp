var numberOfButtons = document.querySelectorAll('.drum').length

for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
       console.log(this.innerHTML)
       this.style.color = 'white'
    })
}



// var audio = new Audio('sounds/tom-1.mp3')
// audio.play()