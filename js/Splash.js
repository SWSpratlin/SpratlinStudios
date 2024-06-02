$(window).on("load", function(){
    logoIn();
    textIn();
    footerIn();
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
    }, 500)
    $('#subText').delay(2000).animate({
        opacity: '1'
    }, 500)
}

function footerIn(){
    $('#footer').delay(2500).animate({
        opacity: '1'
    }, 500)
}