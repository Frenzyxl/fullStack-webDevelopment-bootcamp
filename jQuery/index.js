// $(document).keypress(function (e) { 
//     var value = e.key
//     $('h1').text(value);
// });

// $('h1').on('mouseover', function () {
//     $('h1').css('color', 'blue');
// });
$('button').on('click', function () {
    $('h1').animate({opacity: 0.5});
});