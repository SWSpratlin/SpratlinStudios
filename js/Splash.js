$(window).on("load", function(){
    logoIn();
    textIn();
})

function logoIn() {
    $('.logo').delay(500).animate({
        opacity: '1',
        marginTop: '0'
    }, 1000, "easeOutQuint");
}

function textIn() {
   $('#LogoL').delay(0).animate({
       left: '0'
   },800, "easeOutQuint")
    $('#LogoR').delay(0).animate({
        right: '0'
    }, 800, "easeOutQuint")
    $('.buttonContainer').delay(2300).animate({
        opacity: '1'
    }, 1000)
    $('#mainText').delay(2000).animate({
        opacity: '1'
    }, 800)
    $('#subText').delay(2000).animate({
        opacity: '1'
    }, 800)
}